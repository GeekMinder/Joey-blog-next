import { Blog } from "@/types/blog";

export const BlogPreview: React.FC<Blog> = (props) => {
  const { desc, categories, view_count, title } = props;
  return (
    <div className="space-y-4 md:space-y-5 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="text-xl font-bold tracking-tight md:text-2xl">
        {title}
      </div>
      <div className="text-gray-500 dark:text-gray-400 line-clamp-3">
        {desc}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <span>{view_count} views</span>
        <span>{categories.map((c) => c.name).join(", ")}</span>
      </div>
    </div>
  );
};
