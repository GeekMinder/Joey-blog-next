import { getRequest } from "../config";

// 获取最新的5篇文章
export const getBlogs = async (pageSize: number, pageNum: number) => {
  return getRequest(`/article?pageSize=${pageSize}&pageNum=${pageNum}`);
};

export const getOneBlogById = async (id: number) => {
  return getRequest(`/article/${id}`);
};
