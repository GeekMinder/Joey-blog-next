import { createApi } from "unsplash-js";

if (!process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY) {
  throw new Error("no Unsplash access key");
}

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

// 获取随机照片
export const getRandomPhoto = async (query?: string) => {
  try {
    const result = await unsplash.photos.getRandom({
      query,
      count: 1,
    });
    if (result.type === "success") {
      return result.response;
    } else {
      throw new Error("获取随机照片失败");
    }
  } catch (error) {
    console.error("获取随机照片时出错:", error);
    throw error;
  }
};
