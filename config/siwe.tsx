import { getCsrfToken, signIn, signOut, getSession } from "next-auth/react";

import type {
  SIWEVerifyMessageArgs,
  SIWECreateMessageArgs,
  SIWESession,
} from "@web3modal/siwe";

import { createSIWEConfig, formatMessage } from "@web3modal/siwe";

export const siweConfig = createSIWEConfig({
  createMessage: ({ address, ...args }: SIWECreateMessageArgs) =>
    formatMessage({ ...args, iat: new Date().toISOString() }, address),
  getMessageParams: async () => ({
    domain: window.location.host,
    uri: window.location.origin,
    chains: [1],
    statement: "Please sign with your account",
  }),
  getNonce: async () => {
    const nonce = await getCsrfToken();
    if (!nonce) {
      throw new Error("Failed to get nonce!");
    }
    return nonce;
  },
  getSession: async () => {
    const session = await getSession();
    if (!session) {
      throw new Error("Failed to get session!");
    }
    const { address, chainId } = session as unknown as SIWESession;
    return { address, chainId };
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      const success = await signIn("credentials", {
        message,
        redirect: false,
        signature,
        callbackUrl: "/protected",
      });
      return Boolean(success?.ok);
    } catch (error) {
      return false;
    }
  },
  signOut: async () => {
    try {
      await signOut({
        redirect: false,
      });
      return true;
    } catch (error) {
      return false;
    }
  },
});
