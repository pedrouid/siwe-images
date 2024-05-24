"use client";

import { SessionProvider as Session } from "next-auth/react";
import React from "react";

// This is needed to be able to use the `useSession` hook client side
export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Session>{children}</Session>;
}
