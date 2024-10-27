"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { MOBILE_SOCIAL_LIST, navLinks } from "@/constant/navigation";
import Link from "next/link";
import { SITE_METADATA } from "@/constant";
import { MyAvatar } from "@/components/Avatar";
import { DashLineText } from "../common/dashlineText";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            aria-label="Toggle Menu"
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <SheetHeader>
            <div className="flex items-center gap-2">
              <MyAvatar />
              <SheetTitle className="text-xl font-bold">
                {SITE_METADATA.title}
              </SheetTitle>
            </div>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-7 items-start">
            <h2 className="text-xl font-bold mb-4 text-gray-500">Menu</h2>
            {navLinks.map((link) => (
              <Link
                className=""
                key={link.title}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center font-medium">
                  <div className="mr-4">{link.icon}</div>
                  <DashLineText
                    className={clsx(
                      pathname === link.href && "bg-[length:100%_50%]"
                    )}
                  >
                    {link.title}
                  </DashLineText>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex gap-4 mt-20 flex-col">
            <div className="text-xl font-bold mb-4 text-gray-500">Social</div>
            <div>
              {MOBILE_SOCIAL_LIST.map(({ platform, icon, href }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center mt-4 gap-2 font-medium"
                >
                  {icon} / {platform}
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
