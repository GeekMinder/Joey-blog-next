"use client";

export const InfoCard = () => {
  return (
    <div className="group h-48 w-full md:h-40 relative [perspective:1000px]">
      <div className="p-[0.25rem] w-full h-full absolute [backface-visibility:hidden] transition-transform duration-700 ease-in-out rounded-[0.4rem] shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.18)] [text-shadow:0_0.15rem_0.2rem_rgba(0,0,0,0.2)] [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]">
        <div></div>
      </div>
      <div className="p-[0.25rem] w-full h-full absolute [backface-visibility:hidden] transition-transform duration-700 ease-in-out rounded-[0.4rem] shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.18)] [text-shadow:0_0.15rem_0.2rem_rgba(0,0,0,0.2)] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)]">
        背面内容
      </div>
    </div>
  );
};
