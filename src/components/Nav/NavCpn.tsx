"use client";
import { ModeToggle } from "@/components/ModelToggle";
import { navLinks } from "@/route/navlinks";
// import clsx from "clsx";
import Link from "next/link";
// import { useRouter } from "next/router";
export default function NavCpn() {
  return (
    <header className="sticky top-0 py-3 bg-opacity-80 backdrop-blur-md w-full">
      <div className="flex justify-between items-center max-w-3xl px-3 mx-auto xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/home" aria-label="Joe's Blog" className="text-xl">
            Joe&apos;s Blog
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden space-x-2 sm:block">
            {navLinks.map((link) => {
              return (
                <Link key={link.title} href={link.href}>
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
