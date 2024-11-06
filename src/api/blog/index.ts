import { getRequest } from "../config";

// 获取博客
export const getBlogs = async (
  pageSize: number,
  pageNum: number,
  categoryId?: number
) => {
  return getRequest(
    `/article?pageSize=${pageSize}&pageNum=${pageNum}${
      categoryId ? `&categoryId=${categoryId}` : ""
    }`
  );
};

// 获取单个博客
export const getOneBlogById = async (id: number) => {
  return getRequest(`/article/${id}`);
};
