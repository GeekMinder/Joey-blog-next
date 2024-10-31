import { getRequest } from "../config";

// 获取最新的5篇文章
export const getLatestArticles = async () => {
  return getRequest(`/article?pageSize=5&pageNum=1`);
};
