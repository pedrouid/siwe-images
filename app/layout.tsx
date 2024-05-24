import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context";
import SessionProvider from "@/context/session";

import ConnectButton from "@/components/ConnectButton";
import Tabs from "@/components/Tabs";

export const metadata: Metadata = {
  title: "SIWE Images",
  description: "Private Image Upload powered by SIWE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>
          <main className="flex min-h-screen flex-col items-center gap-24 p-24">
            <ConnectButton />
            <Tabs />
            <SessionProvider>{children}</SessionProvider>
          </main>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
