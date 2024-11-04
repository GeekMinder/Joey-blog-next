import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-4">
      <h2 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        404
      </h2>
      <p className="text-2xl text-gray-600 dark:text-gray-400">
        Oops! 页面走丢了 (●&apos;◡&apos;●)
      </p>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-gray-500 dark:text-gray-500">
          别担心,让我们带你回到首页吧!
        </p>
        <Link
          href="/"
          className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
          hover:scale-105 transition-transform duration-200 ease-in-out
          hover:shadow-lg hover:shadow-blue-500/50"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
