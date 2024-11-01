"use client";
import React, { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import type { Tokens } from "marked";
import clsx from "clsx";
import Link from "next/link";
import { getOneBlogById } from "@/api/blog";
import { Blog } from "@/types/blog";

import { formatDate } from "@/lib/utils";
import { CircleArrowUp, Heart, Undo2 } from "lucide-react";
import FixedButton from "@/components/common/fixed-button";
import { useRouter } from "next/navigation";
import { safeLocalStorage } from "@/constant";

type Props = {
  params: {
    id: string;
  };
};

// 配置 marked 的渲染器
const renderer = new marked.Renderer();

// 为标题添加 id
// 为标题添加 id
renderer.heading = function ({ text, depth }: Tokens.Heading) {
  const id = text.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, "-");
  return `<h${depth} id="${id}">
    ${text}
  </h${depth}>`;
};

// 生成 TOC 的函数
function generateTOC(content: string) {
  const headings: { level: number; text: string; id: string }[] = [];
  const tokens = marked.lexer(content);
  tokens.forEach((token) => {
    if (token.type === "heading") {
      const text = token.text;
      const id = text.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, "-");
      headings.push({
        level: token.depth,
        text: text,
        id: id,
      });
    }
  });

  return headings;
}

function useActiveTocItem(ids: string[]) {
  const [inViewIds, setInViewIds] = useState<string[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (document) {
      const headings = ids.map((id) =>
        document.getElementById(id.startsWith("#") ? id.slice(1) : id)
      );
      observer.current?.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          for (const { intersectionRatio, target } of entries) {
            if (intersectionRatio > 0) {
              setInViewIds((prev) =>
                prev.includes(target.id) ? prev : [...prev, target.id]
              );
            } else {
              setInViewIds((prev) =>
                prev.length > 1 ? prev.filter((id) => id !== target.id) : prev
              );
            }
          }
        },
        {
          // 修改 observer 配置
          rootMargin: "0px 0px -90% 0px", // 调整观察区域
          threshold: [0, 1], // 添加多个阈值
        }
      );
      for (const el of headings) {
        if (el) {
          observer.current.observe(el);
        }
      }

      return () => observer.current?.disconnect();
    }
  }, [ids]);

  return inViewIds[0];
}

export default function BlogPage({ params }: Props) {
  const { id } = params;
  const router = useRouter();
  // const mountRef = useRef(false)
  const [mounted, setMounted] = useState(false);
  const loveBlogs = safeLocalStorage.getItem("MY_LOVE_BLOG") ?? "[]";
  // 获取到已喜欢的blog列表
  const currentloveBlogsArr = JSON.parse(loveBlogs);

  const [blog, setBlog] = useState<Blog>();
  const [isLove, setIsLove] = useState(currentloveBlogsArr.includes(id));
  const [toc, setToc] = useState<{ level: number; text: string; id: string }[]>(
    []
  );

  useEffect(() => {
    // mountRef.current = true
    // return () => {mountRef.current = false}
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const [htmlContent, setHtmlContent] = useState<string | Promise<string>>("");
  // 配置 marked 使用自定义渲染器
  marked.setOptions({ renderer, async: true });
  const activeId = useActiveTocItem(toc.map((item) => item.id));
  // 添加平滑滚动效果
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // 请求博客
  useEffect(() => {
    try {
      getOneBlogById(Number(id)).then((res) => {
        if (res.code === 200) {
          setBlog(res.data as Blog);
        }
      });
    } catch (error) {
      console.log(error, "error");
    }
  }, [id]);

  // 当博客内容更新时，重新生成 TOC 和 HTML
  useEffect(() => {
    if (blog?.content) {
      const newToc = generateTOC(blog.content);
      setToc(newToc);
      // setHtmlContent(marked(blog.content));
      // 使用异步方式解析 markdown
      Promise.resolve(marked.parse(blog.content))
        .then((html: string) => {
          setHtmlContent(html);
        })
        .catch((err: Error) => {
          console.error("Markdown parsing error:", err);
        });
    }
  }, [blog?.content]);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 sm:px-6 xl:px-12 pt-4 lg:pt-12">
      {/* meta 信息 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {blog?.categories.map((c) => (
            <span
              key={c.ID}
              className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs"
            >
              # {c.name}
            </span>
          ))}
        </div>
        <div className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span>
            create at：{blog?.CreatedAt ? formatDate(blog?.CreatedAt) : ""}
          </span>
          <span>/</span>
          <span>
            update at：{blog?.UpdatedAt ? formatDate(blog?.UpdatedAt) : ""}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 pb-10 pt-8 lg:grid-cols-12 lg:pt-10">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-8 xl:col-span-9">
          {htmlContent ? (
            <div
              className="prose max-w-none dark:prose-invert lg:prose-lg lg:pb-8"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
              <p className="text-lg text-gray-600 dark:text-gray-400">
                loading...
              </p>
            </div>
          )}
        </div>
        <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
          {toc?.length > 0 && (
            <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-24">
              <nav className="space-y-4 hidden md:block pt-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  目录导航
                </h2>
                <ul className="flex flex-col space-y-3">
                  {toc.map(({ level, text, id }) => (
                    <li
                      key={id}
                      className={clsx([
                        "font-medium transition-all duration-200 ease-in-out",
                        id === activeId
                          ? "text-blue-500 dark:text-blue-400 translate-x-2 scale-105"
                          : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:translate-x-1",
                      ])}
                      style={{ paddingLeft: (level - 2) * 16 }}
                    >
                      <Link href={`#${id}`} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
      {mounted && (
        <div className="flex justify-center items-center gap-2">
          <div className={clsx(isLove ? "hidden" : "")}>like this blog?</div>
          <Heart
            fill={isLove ? "currentColor" : "none"}
            className={clsx(["w-4 h-4 cursor-pointer"], {
              "text-red-500": isLove,
            })}
            onClick={() => {
              setIsLove(!isLove);
              // 逗逗你的呀
              const loveBlogsArr = JSON.parse(loveBlogs);
              safeLocalStorage.setItem(
                "MY_LOVE_BLOG",
                JSON.stringify(Array.from(new Set([...loveBlogsArr, id])))
              );
            }}
          />
          <div className={clsx(isLove ? "" : "hidden")}>thank you !</div>
        </div>
      )}
      <FixedButton
        position="bottom-20 right-10"
        icon={
          <Undo2
            className="h-8 w-8 cursor-pointer hover:text-blue-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="back to home"
            onClick={() => router.replace("/home")}
          />
        }
        tooltipText="回到首页"
      />
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
    </article>
  );
}
