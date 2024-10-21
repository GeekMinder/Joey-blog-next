import React from "react";
import { SITE_METADATA } from "@/constant";

export default function Footer() {
  return (
    <footer className="mt-auto py-3 text-center border-t w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500">
          ShangHai {new Date().toLocaleDateString()} {SITE_METADATA.title}
        </div>
        <div className="mt-2 text-sm text-gray-400">
          Powered by Next.js and Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
