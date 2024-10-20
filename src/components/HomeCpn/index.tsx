import { TypedCpn } from "@/components/SelfIntroduction";

export default function HomeCpn() {
  return (
    <>
      <TypedCpn />
      {(() => {
        const 测试字符串 = [];
        for (let i = 1; i <= 50; i++) {
          测试字符串.push(`这是第${i}行测试字符串`);
        }
        return 测试字符串.map((字符串, 索引) => <div key={索引}>{字符串}</div>);
      })()}
    </>
  );
}
