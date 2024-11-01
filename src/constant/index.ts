/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const DEBOUNCE_TIME = 300;

export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
  options: { immediate?: boolean } = {}
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout | null = null;
  let result: ReturnType<T>;

  return function (this: any, ...args: Parameters<T>) {
    // 如果有定时器则清除
    if (timer) clearTimeout(timer);

    // 立即执行
    if (options.immediate) {
      const callNow = !timer;

      timer = setTimeout(() => {
        timer = null;
      }, delay);

      if (callNow) {
        result = fn.apply(this, args); // 直接使用 this
      }
    } else {
      timer = setTimeout(() => {
        result = fn.apply(this, args); // 直接使用 this
        timer = null;
      }, delay);
    }

    return result;
  };
};
