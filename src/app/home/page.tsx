import { Greeting } from "@/components/HomeCpn/greeting";
import { SelfIntroduction } from "@/components/HomeCpn/self-introduction";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 xl:px-12 pt-4 lg:pt-12">
      <Greeting />
      <SelfIntroduction />
      {(() => {
        const 测试字符串 = [];
        for (let i = 1; i <= 50; i++) {
          测试字符串.push(`这是第${i}行测试字符串`);
        }
        return 测试字符串.map((字符串, 索引) => <div key={索引}>{字符串}</div>);
      })()}
    </div>
  );
}
