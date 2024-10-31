"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { getLatestArticles } from "@/api/article";

const CherryMarkdown = dynamic(
  () => import("@/components/Blog/cherry-markdown"),
  {
    ssr: false,
  }
);

const md = `
[[toc]]
# 例子

- [basic](index.html){target=_blank}
- [H5](h5.html){target=_blank}
- [多实例](multiple.html){target=_blank}
- [无 toolbar](notoolbar.html){target=_blank}
- [纯预览模式](preview_only.html){target=_blank}
- [注入](xss.html){target=_blank}
- [API](api.html){target=_blank}
- [图片所见即所得编辑尺寸](img.html){target=_blank}
- [标题自动序号](head_num.html){target=_blank}

# { 简明手册 | jiǎn míng shǒu cè }
123

123
123
12
3
123
12
3
123
123
12
3
123
12
3
123
123
12
3
123
12
3123
123
12
3
123
12
3
`;

const BlogPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
      <h1 className="text-3xl font-bold mb-6">我的博客</h1>
      <CherryMarkdown markdownValue={md} />
    </div>
  );
};

export default BlogPage;
