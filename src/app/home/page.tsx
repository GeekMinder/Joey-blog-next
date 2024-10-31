import { ubuntu } from "@/components/fonts";
import { InfoCard } from "@/components/Header/info-card";
import { Greeting } from "@/components/HomeCpn/greeting";
import { LatestBlogs } from "@/components/HomeCpn/latest-blog";
import { SelfIntroduction } from "@/components/HomeCpn/self-introduction";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 xl:px-12 pt-4 lg:pt-12">
      <Greeting />
      <SelfIntroduction />
      <div className="md:pb-8 flex md:flex-row md:justify-between flex-col">
        <div
          className={`mb-6 mt-4 md:mb-8 text-slate-400 text-lg font-light ${ubuntu.className} md:pr-8`}
        >
          <p>I am a passionate Front-End developer.</p>
          <p>But my first job was Python developer.</p>
          <p>My skills include React with TS, Vue, etc.</p>
          <p>I am learning golang.</p>
          <p>I like to share my knowledge & experience with blogs.</p>
        </div>
        <div className="flex-1 ">
          <InfoCard />
        </div>
      </div>

      <LatestBlogs />
    </div>
  );
}
