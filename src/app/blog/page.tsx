"use client";

import { getBlogs } from "@/api/blog";
import { getAllCategory } from "@/api/category";
import { BlogPreview } from "@/components/Blog/blog-preview";
import FixedButton from "@/components/common/fixed-button";
import { Blog } from "@/types/blog";
import { Category } from "@/types/category";
import {
  ArrowLeft,
  ArrowRight,
  CircleArrowUp,
  PawPrint,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DEFAULTPAGE_SIZE = 10;
interface PaginationProps {
  pageNum: number;
  // pageSize: number;
  total: number;
}

const AllBlog: React.FC = () => {
  // todo 添加loading
  // const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [category, setCategory] = useState<Category[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const paginationRef = useRef<PaginationProps>({
    pageNum: 1,
    // pageSize: 10,
    total: 0,
  });

  const handlePageChange = async (pageNum: number) => {
    paginationRef.current.pageNum = pageNum;
    const res = await getBlogs(DEFAULTPAGE_SIZE, pageNum);
    if (res.code === 200) {
      setBlogs(res.data as Blog[]);
      paginationRef.current = {
        ...paginationRef.current,
        total: res.total ?? 0,
        pageNum,
      };
    }
  };

  // 首次先搜第一页
  useEffect(() => {
    getBlogs(DEFAULTPAGE_SIZE, 1)
      .then((res) => {
        if (res.code === 200) {
          setBlogs(res.data as Blog[]);
          paginationRef.current = {
            ...paginationRef.current,
            total: res.total ?? 0,
          };
        }
      })
      .catch((error) => {
        console.log(error, "error");
      })
      .finally();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // 搜所有category
  useEffect(() => {
    getAllCategory().then((res) => {
      if (res.code === 200) {
        setCategory(res.data as Category[]);
      }
    });
  }, []);

  return (
    <div className="pt-4 lg:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
        <div>
          <div className="flex items-center gap-4">
            <div className="relative w-1/2">
              <div className="relative">
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder="搜索此页博客..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                />
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {/* 分类 */}
            <div className="w-1/4">
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200">
                <option value="">全部分类</option>
                {category.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* blogs */}
        <div className="mb-8">
          <div>
            total: {blogs.length} / filter:
            {blogs.filter((item) => item.title.includes(searchValue)).length}
          </div>
          <ul className="space-y-4 pt-4 dark:divide-gray-700 md:space-y-8 md:pt-10">
            {!blogs.length && "No blogs found."}
            {blogs
              .filter((item) => item.title.includes(searchValue))
              .map((blog) => (
                <li
                  key={blog.id}
                  className="py-4 relative pl-3 transition-all duration-300 hover:pl-6 group border border-gray-100/10 hover:border-gray-200/30 dark:border-gray-800 dark:hover:border-gray-600 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-r-lg bg-gray-50 dark:bg-gray-900 shadow-md md:shadow-sm hover:shadow-md"
                >
                  <Link href={`/blog/${blog.id}`}>
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
        {/* pagination */}
        <div className="my-4 flex justify-between items-center gap-4">
          <button
            onClick={() =>
              paginationRef.current.pageNum > 1 &&
              handlePageChange(paginationRef.current.pageNum - 1)
            }
            disabled={
              paginationRef.current.pageNum === 1 ||
              Math.ceil(paginationRef.current.total / DEFAULTPAGE_SIZE) === 0
            }
            className="flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={() =>
              paginationRef.current.pageNum <
                Math.ceil(paginationRef.current.total / DEFAULTPAGE_SIZE) &&
              handlePageChange(paginationRef.current.pageNum + 1)
            }
            disabled={
              paginationRef.current.pageNum ===
                Math.ceil(paginationRef.current.total / DEFAULTPAGE_SIZE) ||
              Math.ceil(paginationRef.current.total / DEFAULTPAGE_SIZE) === 0
            }
            className="flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <FixedButton
        position="bottom-8 right-10"
        icon={
          <CircleArrowUp
            className="h-8 w-8 cursor-pointer hover:text-blue-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="scroll to top"
            onClick={() => window.scrollTo({ top: 0 })}
          />
        }
        tooltipText="回到顶部"
      />
    </div>
  );
};

export default AllBlog;
