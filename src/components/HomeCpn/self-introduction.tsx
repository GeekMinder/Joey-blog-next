"use client";
import React from "react";
import Typed from "typed.js";

export function SelfIntroduction() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I have been a frontend developer for 3 years.",
        "I am a fan of <span className='font-medium'>TypeScript</span> and <span className='font-medium'>React</span>.",
        "I also love <span className='font-medium'>golang</span>.",
        "Maybe thinking about full-stack?",
        "I not a sport guy",
        "but usually go <span className='font-medium'>biking</span> at weekends.",
      ],
      typeSpeed: 50,
      loop: true,
      startDelay: 500,
      backSpeed: 50,
      smartBackspace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
