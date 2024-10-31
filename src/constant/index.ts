export const SITE_METADATA = {
  title: "Joe's Blog",
  author: "Joe",
  description: "Joe's Blog, a blog about technology and life.",
  headerTitle: "Joe's Blog",
  language: "en-us",
  theme: "system",
  locale: "en_US",
};

export const AUTHOR_INFO = {
  name: "Joe Ni",
  avatar: "/avatar.png",
  identity: "Front-End Engineer | Learner",
  address: "Shanghai, China",
  home: "Jiangsu, China",
  social: {
    github: "https://github.com/GeekMinder",
    juejin: "https://juejin.cn/user/1108733954635741",
    csdn: "https://blog.csdn.net/weixin_42387311",
    email: "nijiahuipersonal@163.com",
  },
};

export const safeLocalStorage = {
  setItem: (key: string, value: string): void => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
  },
  getItem: (key: string): string | null => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(key);
    }
    return null;
  },
  removeItem: (key: string): void => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  },
};
