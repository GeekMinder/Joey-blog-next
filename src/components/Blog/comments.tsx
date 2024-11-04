// 评论
import { SITE_METADATA } from "@/constant";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const Comments = ({ className }: { className?: string }) => {
  const { theme, systemTheme } = useTheme();
  if (
    !process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ||
    !process.env.NEXT_PUBLIC_GISCUS_PEPO_ID ||
    !process.env.NEXT_PUBLIC_GISCUS_REPO
  ) {
    return null;
  }

  const GiscusTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className={className}>
      <Giscus {...SITE_METADATA.comments} theme={GiscusTheme} />
    </div>
  );
};
