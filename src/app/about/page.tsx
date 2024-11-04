import GithubContribution from "@/components/common/github-contribution";

export default function About() {
  return (
    <div className="pt-4 lg:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <div className="text-xl font-bold my-6 text-gray-500">
          Contributions
        </div>
        <GithubContribution />

        {/* timeline */}
        <div className="text-xl font-bold my-6 text-gray-500">TimeLine</div>
        <ul>
          <li>~ now - 施工中 🚧</li>
          <li>2024.10.14 - 前后端同时启动</li>
          <li>2024.10.01 - 技术选型</li>
        </ul>
      </div>
    </div>
  );
}
