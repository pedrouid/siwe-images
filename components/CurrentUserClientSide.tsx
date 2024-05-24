"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function CurrentUserClientSide() {
  const session = useSession();

  return (
    <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 overflow-x-scroll">
      <span
        className={`flex gap-4 ${
          session.status === "loading" ? "animate-pulse" : ""
        }`}
      >
        <span className="flex-1">
          <p className="font-bold text-yellow-300">Client side session</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </span>
      </span>
    </code>
  );
}
