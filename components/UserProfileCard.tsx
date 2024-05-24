"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Spinner from "./Spinner";

export default function UserProfileCard() {
  const session = useSession();
  return (
    <div className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-8 pl-6">
      <div className="flex flex-col items-center">
        {session.status === "loading" ? (
          <div className="w-50 h-50 mb-3 rounded-full shadow-lg flex items-center">
            <Spinner />
          </div>
        ) : (
          <Image
            className="w-50 h-50 mb-3 rounded-full shadow-lg"
            src="/idYIhr7BJC.jpeg"
            alt="Profile picture"
            width={50}
            height={50}
          />
        )}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {session.data?.address}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {session.status}
        </span>
      </div>
    </div>
  );
}
