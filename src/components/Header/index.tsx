"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { navLinks } from "@/constant/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { MyAvatar } from "@/components/Avatar";
import { SITE_METADATA } from "@/constant";
export default function Header() {
  return (
    <header className="sticky top-0 py-3 z-40 bg-opacity-80 backdrop-blur w-full border-b border-zinc-900/10">
      <div className="flex justify-between items-center max-w-3xl px-3 mx-auto xl:max-w-5xl xl:px-0">
        <div className="flex items-center gap-2">
          <MyAvatar />
          <Link
            href="/home"
            aria-label={SITE_METADATA.title}
            className="text-xl font-bold"
          >
            {SITE_METADATA.title}
          </Link>
        </div>
        <div className="flex items-center text-base leading-5 gap-2">
          <div className="hidden space-x-2 sm:block">
            {navLinks.map((link) => {
              return (
                <Link key={link.title} href={link.href} className="">
                  <Button variant="ghost">{link.title}</Button>
                </Link>
              );
            })}
          </div>
          <ThemeSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
