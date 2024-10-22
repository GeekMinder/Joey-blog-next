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
import { navLinks } from "@/constant/navigation";
import Link from "next/link";
import { SITE_METADATA } from "@/constant";
import { MyAvatar } from "@/components/Avatar";
import { GithubIcon } from "../Icon/github";

export function MobileNav() {
  const [open, setOpen] = useState(false);
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
          <div className="flex flex-col space-y-4 mt-7">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <div className="flex gap-2 items-center w-full justify-start font-medium">
                  {link.icon}
                  {link.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <GithubIcon className="w-7 h-7" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
