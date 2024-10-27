"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { navLinks } from "@/constant/navigation";
import Link from "next/link";
// import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { MyAvatar } from "@/components/Avatar";
import { SITE_METADATA } from "@/constant";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { DashLineText } from "../common/dashlineText";
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 py-3 z-40 bg-opacity-80 backdrop-blur w-full border-b border-zinc-900/10">
      <div className="flex justify-between items-center mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <div className="flex items-center gap-2">
          <MyAvatar />
          <Link
            href="/home"
            aria-label={SITE_METADATA.title}
            className="text-xl font-bold"
          >
            <DashLineText
              className={clsx(pathname === "/home" && "bg-[length:100%_50%]")}
            >
              {SITE_METADATA.title}
            </DashLineText>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5 gap-2">
          <div className="hidden space-x-2 sm:block">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-3 py-1 font-medium"
                >
                  <DashLineText
                    className={clsx(isActive && "bg-[length:100%_50%]")}
                  >
                    {link.title}
                  </DashLineText>
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
