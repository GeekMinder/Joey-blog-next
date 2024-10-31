"use client";
import Link from "next/link";
import { DashLineText } from "../common/dashlineText";
import { Blog } from "@/types/blog";
import { BlogPreview } from "../Blog/blog-preview";
import { useEffect, useState } from "react";
import { getLatestArticles } from "@/api/article";

export const LatestBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    try {
      getLatestArticles().then((res) => {
        if (res.code === 200) {
          setBlogs(res.data as Blog[]);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 md:mt-8 md:space-y-8">
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
      <ul className="space-y-4 divide-gray-200 pt-6 dark:divide-gray-700 md:space-y-8 md:pt-10">
        {!blogs.length && "No blogs found."}
        {blogs.map((blog) => (
          <li key={blog.ID}>
            <BlogPreview {...blog} />
          </li>
        ))}
      </ul>
    </div>
  );
};
