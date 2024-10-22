import clsx from "clsx";

export function Greeting() {
  return (
    <div
      className={clsx(
        "font-extrabold tracking-tight italic",
        "text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]",
        "bg-clip-text text-transparent",
        "bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]",
        "text-center md:text-left"
      )}
    >
      Hola, Amigo!
    </div>
  );
}
