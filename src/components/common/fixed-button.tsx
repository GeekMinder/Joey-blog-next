import { useEffect, useRef, useState } from "react";

interface FixedButtonProps {
  icon: React.ReactNode;
  tooltipText: string;
  position: string;
}

export default function FixedButton({
  icon,
  tooltipText,
  position,
}: FixedButtonProps) {
  const [isVisible, setIsVisible] = useState(true);

  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div
      className={`fixed ${position} flex-col gap-3 transition-opacity duration-200 group ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative">
        {icon}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          {tooltipText}
        </div>
      </div>
    </div>
  );
}
