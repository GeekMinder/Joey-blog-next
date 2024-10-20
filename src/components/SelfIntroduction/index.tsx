"use client";
import React from "react";
import Typed from "typed.js";

export function TypedCpn() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
      typeSpeed: 50,
      loop: true,
      startDelay: 500,
      backSpeed: 50,
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
