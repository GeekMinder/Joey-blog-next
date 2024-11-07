"use client";

import { AUTHOR_INFO, safeLocalStorage } from "@/constant";
import { Fragment, useEffect, useState } from "react";
import { BicepsFlexed, House, MapPin } from "lucide-react";
// import loadingGIF from "@/public/loading.gif";
import { RemoteImage } from "../common/remoteImage";
import { getRandomPhoto } from "@/api/unsplash";
import { SOCIAL_LIST } from "@/constant/navigation";

// 随机获取图片 一天只请求一次 放localstorage好了
// 没有localstorage 或者 过期了 请求
export const InfoCard = () => {
  const [photo, setPhoto] = useState<{
    src: string;
    alt: string;
    user: string;
    camera: string;
  }>({
    src: "",
    alt: "",
    user: "",
    camera: "",
  });
  useEffect(() => {
    const localPhotoString = safeLocalStorage.getItem("UNSPLASH_PHOTO");
    const localPhotoInfo = JSON.parse(localPhotoString || "{}");
    const isExpired =
      !localPhotoString ||
      (localPhotoString &&
        new Date().getTime() > JSON.parse(localPhotoString).expire);
    if (isExpired) {
      try {
        getRandomPhoto().then((res) => {
          if (Array.isArray(res) && res.length === 1) {
            setPhoto({
              src: res[0].urls.regular,
              alt: res[0].alt_description || "",
              user: res[0].user.name || "",
              camera: res[0].exif.model || "",
            });
            safeLocalStorage.setItem(
              "UNSPLASH_PHOTO",
              JSON.stringify({
                src: res[0].urls.regular,
                alt: res[0].alt_description || "",
                user: res[0].user.name || "",
                camera: res[0].exif.model || "",
                expire: new Date().getTime() + 12 * 60 * 60 * 1000,
              })
            );
          }
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setPhoto(localPhotoInfo);
    }
  }, []);

  return (
    <div className="group h-40 w-full  relative [perspective:1000px]">
      <div className="flex flex-col justify-center w-full h-full absolute [backface-visibility:hidden] transition-transform duration-700 ease-in-out rounded-[0.4rem] shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.18)] [text-shadow:0_0.15rem_0.2rem_rgba(0,0,0,0.2)] [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px]">
        <div className="flex flex-col justify-center w-full h-full bg-white dark:bg-gray-800 rounded-[0.3rem]">
          {photo.src ? (
            <RemoteImage
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full rounded-[0.3rem] object-cover"
              width={400}
              height={160}
              loading="eager"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-10 h-10">
                <div className="w-full h-full rounded-full border-4 border-gray-200">
                  <div className="w-full h-full rounded-full border-4 border-blue-500 animate-spin border-t-transparent" />
                </div>
              </div>
            </div>
          )}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs p-1 rounded">
            <p>
              camera：{photo.camera} author：{photo.user}
            </p>
            <p>source：unsplash-random update per 12h</p>
          </div>
          <button className="absolute top-2 right-2 bg-white bg-opacity-50 text-black text-sm px-2 py-1 rounded hover:bg-opacity-75 transition-all duration-300">
            难道我的背面是？
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center p-[0.25rem] w-full h-full absolute [backface-visibility:hidden] transition-transform duration-700 ease-in-out rounded-[0.4rem] shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.18)] [text-shadow:0_0.15rem_0.2rem_rgba(0,0,0,0.2)] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="flex flex-col justify-center w-full h-full bg-white dark:bg-gray-800 rounded-[0.3rem]">
          <div className="text-xl font-semibold text-gray-800 dark:text-white px-4">
            {AUTHOR_INFO.name}
          </div>
          <div className="text-gray-700 dark:text-gray-200 px-4 flex items-center gap-2">
            <BicepsFlexed className="w-4 h-4" />
            <span className="ml-1">{AUTHOR_INFO.identity}</span>
          </div>
          <div className="py-2 flex items-center text-gray-700 dark:text-gray-200 px-4 gap-2">
            <MapPin className="w-4 h-4" />
            <span className="ml-1">{AUTHOR_INFO.address}</span>
            <span className="text-gray-700 dark:text-gray-200">|</span>
            <House className="w-4 h-4" />
            <span className="ml-1">{AUTHOR_INFO.home}</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200 px-4">
            {SOCIAL_LIST.map(({ platform, icon, href }, idx) => (
              <Fragment key={platform}>
                <a
                  target="_blank"
                  href={href}
                  rel="noreferrer"
                  className="flex items-center underline-offset-4 hover:underline gap-2"
                >
                  {icon}
                  {/* <span className="ml-px text-gray-500">/</span> */}
                  <span className="ml-1">{platform}</span>
                </a>
                {idx !== SOCIAL_LIST.length - 1 && (
                  <span className="text-gray-700 dark:text-gray-200">|</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
