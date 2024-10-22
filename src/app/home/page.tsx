import { ubuntuMono } from "@/components/fonts";
import { InfoCard } from "@/components/Header/info-card";
import { Greeting } from "@/components/HomeCpn/greeting";
import { SelfIntroduction } from "@/components/HomeCpn/self-introduction";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 xl:px-12 pt-4 lg:pt-12">
      <Greeting />
      <SelfIntroduction />
      <div className="md:pb-8 flex md:flex-row md:justify-between flex-col">
        <div
          className={`mb-6 mt-4 md:mb-8 text-slate-400 text-lg font-light ${ubuntuMono.className} md:pr-8`}
        >
          <p>I am a passionate FrontEnd developer.</p>
          <p>But my first job was Python developer.</p>
          <p>My skills include React with TS, Vue, etc.</p>
          <p>I am learning golang.</p>
          <p>I like to share my knowledge & experience with blogs.</p>
        </div>
        <div className="flex-1 ">
          <InfoCard />
        </div>
      </div>

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
