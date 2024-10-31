import React from "react";
import { SITE_METADATA } from "@/constant";
import { NextjsIcon } from "../Icon/nextjs";
import { TailwindIcon } from "../Icon/tailwind";

export default function Footer() {
  return (
    <footer className="mt-4 py-3 text-center border-t w-full text-gray-500 dark:text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm ">
          ShangHai {new Date().toLocaleDateString()} {SITE_METADATA.title}
        </div>
        <div className="mt-2 text-sm  flex items-center gap-1 justify-center">
          <span>Powered by</span>
          <div className="inline-flex items-center gap-1 px-2 rounded-md bg-gray-100 dark:bg-gray-800">
            <NextjsIcon className="w-4 h-4 dark:fill-white" />
            <span>Next.js</span>
          </div>
          <span>and</span>
          <div className="inline-flex items-center gap-1 px-2 rounded-md bg-gray-100 dark:bg-gray-800">
            <TailwindIcon className="w-4 h-4 dark:fill-white" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
