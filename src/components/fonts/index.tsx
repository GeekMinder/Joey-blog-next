import { Ubuntu_Mono, Ubuntu, Open_Sans, Nunito_Sans } from "next/font/google";

export const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: "700" });

export const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });

export const openSans = Open_Sans({
  subsets: ["latin"],
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 指定需要的字重
  display: "swap", // 使用 font-display: swap
  variable: "--font-nunito-sans", // CSS 变量名
});
