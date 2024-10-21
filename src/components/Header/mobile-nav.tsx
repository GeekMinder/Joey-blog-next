"use client";

import React from "react";
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

export function MobileNav() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button aria-label="Toggle Menu" variant="ghost" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <SheetHeader>
            <div className="flex items-center gap-2">
              <MyAvatar />
              <SheetTitle className="font-medium">
                {SITE_METADATA.title}
              </SheetTitle>
            </div>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <Button variant="ghost" className="w-full justify-start">
                  {link.icon}
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
