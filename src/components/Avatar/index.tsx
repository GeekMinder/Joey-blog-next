import React from "react";
import Image from "next/image";
import lava from "@/public/lava.jpg";
import Link from "next/link";
import { SITE_METADATA } from "@/constant";
import clsx from "clsx";

interface AvatarProps {
  className?: string;
}

export const MyAvatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <Link
      href="/home"
      aria-label={SITE_METADATA.description}
      className={clsx([
        "rounded-xl p-0.5",
        "ring-1 ring-zinc-900/5 dark:ring-white/10",
        "shadow-lg shadow-zinc-800/5",
        className,
      ])}
    >
      <Image
        className="h-10 w-10 rounded-xl"
        src={lava}
        alt={SITE_METADATA.author}
        width={100}
        height={100}
      />
    </Link>
  );
};
