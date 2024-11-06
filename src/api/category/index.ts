import { getRequest } from "../config";

// 获取所有category
export const getAllCategory = async () => {
  return getRequest("/category");
};
