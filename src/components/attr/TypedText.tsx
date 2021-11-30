import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText({ options = {}, ...props }) {
  const el = useRef(null);
  const conf = {
    typeSpeed: 80,
    backSpeed: 0,
    loop: true,
    cursorChar: "_",
    ...options,
  };
  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, conf);
      return () => typed.destroy();
    }
  });
  return <div ref={el} {...props}></div>;
}
