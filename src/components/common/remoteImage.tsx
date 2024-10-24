"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import NextImage, { type ImageProps as NextImageProps } from "next/image";

const loadedImages: string[] = [];

function useImageLoadedState(src: string) {
  const pathname = usePathname();
  const uniqueImagePath = pathname + "__" + src;
  const [loaded, setLoaded] = useState(() =>
    loadedImages.includes(uniqueImagePath)
  );
  return [
    loaded,
    () => {
      if (loaded) return;
      loadedImages.push(uniqueImagePath);
      setLoaded(true);
    },
  ] as const;
}

export interface ImageProps extends Omit<NextImageProps, "src" | "priority"> {
  src: string;
}

export function RemoteImage(props: ImageProps) {
  const { alt, src, loading = "lazy", style, className, ...rest } = props;
  const [loaded, onLoad] = useImageLoadedState(src);

  return (
    <div
      className={clsx(
        "image-container relative overflow-hidden",
        !loaded && "animate-pulse [animation-duration:4s]",
        className
      )}
    >
      <NextImage
        className={clsx(
          "transition-all duration-500 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
          "h-full max-h-full w-full object-center",
          loaded ? "blur-0" : "blur-xl"
        )}
        src={src}
        alt={alt}
        style={{ objectFit: "cover", ...style }}
        loading={loading}
        priority={loading === "eager"}
        quality={100}
        onLoad={onLoad}
        {...rest}
      />
    </div>
  );
}
