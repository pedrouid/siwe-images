"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Tabs() {
  const pathname = usePathname();

  const navLinkClassNames = (isActive: boolean) =>
    `z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
      isActive ? "text-yellow-400" : "text-white-700"
    } bg-inherit`;

  return (
    <div className="w-2/3">
      <div className="relative right-0">
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
          data-tabs="tabs"
        >
          <li className="z-30 flex-auto text-center">
            <Link
              href="/"
              className={navLinkClassNames(pathname === "/")}
              data-tab-target=""
              role="tab"
              aria-selected="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"></path>
                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z"></path>
                <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z"></path>
              </svg>
              <span className="ml-1">Session</span>
            </Link>
          </li>
          <li className="z-30 flex-auto text-center">
            <Link
              href="/upload"
              className={navLinkClassNames(pathname === "/upload")}
              data-tab-target=""
              role="tab"
              aria-selected="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1">Upload</span>
            </Link>
          </li>
          <li className="z-30 flex-auto text-center">
            <Link
              href="/images"
              className={navLinkClassNames(pathname === "/images")}
              data-tab-target=""
              role="tab"
              aria-selected="false"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 5h-1.382l-.171-.342A2.985 2.985 0 0 0 14.764 3H9.236a2.984 2.984 0 0 0-2.683 1.658L6.382 5H5a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a3 3 0 0 0-3-3Zm-3.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"></path>
              </svg>
              <span className="ml-1">Images</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
