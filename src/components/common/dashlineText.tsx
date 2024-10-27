import { clsx } from "clsx";
import type { CSSProperties } from "react";

export function DashLineText({
  as: Component = "span",
  children,
  active,
  className,
  duration,
  ...rest
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  active?: boolean;
  className?: string;
  duration?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <Component
      className={clsx([
        "bg-gradient-to-r bg-left-bottom bg-no-repeat",
        "transition-[background-size] duration-[var(--duration,300ms)]",
        "from-[#43e97b] via-[#38f9d7] to-[#00f2fe]",
        "dark:from-[#4a00e0] dark:via-[#8e2de2] dark:to-[#c471ed]",
        active
          ? "bg-[length:100%_50%] hover:bg-[length:100%_100%]"
          : "bg-[length:0px_50%] hover:bg-[length:100%_50%]",
        className,
      ])}
      style={{ "--duration": `${duration || 300}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Component>
  );
}
