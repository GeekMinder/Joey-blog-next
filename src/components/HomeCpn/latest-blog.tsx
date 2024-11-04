"use client";
import Link from "next/link";
import { DashLineText } from "../common/dashlineText";
import { Blog } from "@/types/blog";
import { BlogPreview } from "../Blog/blog-preview";
import { useEffect, useState } from "react";
import { getBlogs } from "@/api/blog";
import { PawPrint } from "lucide-react";

export const LatestBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    try {
      getBlogs(5, 1).then((res) => {
        if (res.code === 200) {
          setBlogs(res.data as Blog[]);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div className="space-y-1 mt-4 divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight md:text-4xl">
          Latest blogs
        </div>
        <div className="flex items-center justify-end text-base font-medium leading-6">
          <Link href="/blog" className="" aria-label="All posts">
            <DashLineText>
              <span className="hidden md:inline-block">View all blogs</span>
              <span className="md:hidden">More</span> &rarr;
            </DashLineText>
          </Link>
        </div>
      </div>
      <ul className="space-y-4 pt-6 dark:divide-gray-700 md:space-y-8 md:pt-10">
        {!blogs.length && "No blogs found."}
        {blogs.map((blog) => (
          <li
            key={blog.ID}
            className="py-4 relative pl-3 transition-all duration-300 hover:pl-6 group border border-gray-100/10 hover:border-gray-200/30 dark:border-gray-800 dark:hover:border-gray-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-r-lg bg-gray-50 dark:bg-gray-900 shadow-md md:shadow-sm hover:shadow-md"
          >
            <Link href={`/blog/${blog.ID}`}>
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <BlogPreview {...blog} />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center gap-1">
                Reading More <PawPrint className="w-4 h-4" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
