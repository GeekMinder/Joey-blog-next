"use client";
import React from "react";
import Typed from "typed.js";
import { ubuntu } from "../fonts";

export function SelfIntroduction() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I live in <span className='font-medium'>Shanghai</span>.",
        "I am a Front-End engineer since 2020.",
        "I am a fan of <span className='font-medium'>TypeScript</span> and <span className='font-medium'>React</span>.",
        "I also love <span className='font-medium'>golang</span>.",
        "Maybe full-stack dev in the future?",
        "I am not a sport guy.",
        "I love <span className='font-medium italic'>Billie Eilish</span>.",
        "God, love her voice!",
      ],
      typeSpeed: 50,
      loop: true,
      startDelay: 500,
      backSpeed: 10,
      smartBackspace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className={`text-lg ${ubuntu.className}`} />
    </div>
  );
}
