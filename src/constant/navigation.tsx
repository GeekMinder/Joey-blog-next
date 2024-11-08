import { GithubIcon } from "@/components/Icon/github";
import { JuejinIcon } from "@/components/Icon/juejin";
import { Sticker, PenTool, Send } from "lucide-react";
import { AUTHOR_INFO } from ".";

export const navLinks = [
  { href: "/blog", title: "Blog", icon: <PenTool className="w-7 h-7" /> },
  { href: "/about", title: "About", icon: <Sticker className="w-7 h-7" /> },
];

export const SOCIAL_LIST = [
  {
    platform: "Github",
    icon: <GithubIcon className="w-4 h-4 dark:fill-white" />,
    href: AUTHOR_INFO.social.github,
  },
  {
    platform: "Juejin",
    icon: <JuejinIcon className="w-4 h-4 dark:fill-white" />,
    href: AUTHOR_INFO.social.juejin,
  },
  {
    platform: "Email",
    icon: <Send className="w-4 h-4 dark:fill-white" />,
    href: `mailto:${AUTHOR_INFO.social.email}`,
  },
];

export const MOBILE_SOCIAL_LIST = [
  {
    platform: "github",
    icon: <GithubIcon className="w-7 h-7 dark:fill-white" />,
    href: AUTHOR_INFO.social.github,
  },
  {
    platform: "juejin",
    icon: <JuejinIcon className="w-7 h-7 dark:fill-white" />,
    href: AUTHOR_INFO.social.juejin,
  },
];
