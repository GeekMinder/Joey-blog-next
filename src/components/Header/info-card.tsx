"use client";

import { AUTHOR_INFO } from "@/constant";
import { GithubIcon } from "../Icon/github";
import { JuejinIcon } from "../Icon/juejin";
import { Fragment } from "react";
import { MapPin } from "lucide-react";
import lava from "@/public/lava.jpg";
import Image from "next/image";
const SOCIAL_LIST = [
  {
    platform: "github",
    icon: <GithubIcon className="w-4 h-4 dark:fill-white" />,
    href: AUTHOR_INFO.social.github,
  },
  {
    platform: "juejin",
    icon: <JuejinIcon className="w-4 h-4 dark:fill-white" />,
    href: AUTHOR_INFO.social.juejin,
  },
];

// TODO:随机获取图片 一天只请求一次 放localstorage好了？

export const InfoCard = () => {
  return (
    <div className="group h-40 w-full  relative [perspective:1000px]">
      <div className="flex flex-col justify-center w-full h-full absolute [backface-visibility:hidden] transition-transform duration-700 ease-in-out rounded-[0.4rem] shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.18)] [text-shadow:0_0.15rem_0.2rem_rgba(0,0,0,0.2)] [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px]">
        <div className="flex flex-col justify-center w-full h-full bg-white dark:bg-gray-800 rounded-[0.3rem]">
          <Image
            src={lava}
            alt="lava"
            className="w-full h-full rounded-[0.3rem] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-[0.25rem] w-full h-full absolute [backface-visibility:hidden] transition-transform duration-700 ease-in-out rounded-[0.4rem] shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.18)] [text-shadow:0_0.15rem_0.2rem_rgba(0,0,0,0.2)] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px]">
        <div className="flex flex-col justify-center w-full h-full bg-white dark:bg-gray-800 rounded-[0.3rem]">
          <div className="text-xl font-semibold text-gray-800 dark:text-white px-4">
            {AUTHOR_INFO.name}
          </div>
          <div className="py-2 text-gray-500 dark:text-gray-400 px-4">
            {AUTHOR_INFO.identity}
          </div>
          <div className="py-2 flex items-center text-gray-700 dark:text-gray-200 px-4">
            <MapPin className="w-4 h-4" />
            <span className="ml-1">{AUTHOR_INFO.address}</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200 px-4">
            {SOCIAL_LIST.map(({ platform, icon, href }, idx) => (
              <Fragment key={platform}>
                <a
                  target="_blank"
                  href={href}
                  rel="noreferrer"
                  className="flex items-center underline-offset-4 hover:underline"
                >
                  {icon}
                  <span className="ml-px text-gray-500">/</span>
                  <span className="ml-0.5">{platform}</span>
                </a>
                {idx !== SOCIAL_LIST.length - 1 && (
                  <span className="text-gray-400 dark:text-gray-500">|</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
