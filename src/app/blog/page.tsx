import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">我的博客</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">博客文章 {item}</h2>
            <p className="text-gray-600 mb-4">
              这是一篇示例博客文章的摘要。点击阅读更多。
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              阅读更多
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
