import { formatDate } from "@/lib/utils";
import { Blog } from "@/types/blog";
import { Fragment } from "react";

export const BlogPreview: React.FC<Blog> = (props) => {
  const {
    desc,
    categories,
    view_count,
    title,
    like_count,
    UpdatedAt,
    CreatedAt,
    comment_count,
  } = props;
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 ">
        <div className="flex items-center gap-2">
          {categories.map((c) => (
            <span
              key={c.ID}
              className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs"
            >
              # {c.name}
            </span>
          ))}
          <span className="hidden md:inline-flex">/</span>
        </div>
        <div className="flex items-center gap-2">
          <span>create at：{formatDate(CreatedAt)}</span>
          <span>/</span>
          <span>update at：{formatDate(UpdatedAt)}</span>
          <span className="hidden md:inline-flex">/</span>
        </div>
        <div className="gap-2 hidden md:flex items-center">
          <span>{view_count} views</span>
          <span>/</span>
          <span>{like_count} likes</span>
          <span>/</span>
          <span>{comment_count} comments</span>
        </div>
      </div>
      <div className="text-xl font-bold tracking-tight md:text-2xl line-clamp-1 py-4">
        {title}
      </div>
      <div className="text-gray-500 dark:text-gray-400 line-clamp-1 italic">
        {desc}
      </div>
    </Fragment>
  );
};
