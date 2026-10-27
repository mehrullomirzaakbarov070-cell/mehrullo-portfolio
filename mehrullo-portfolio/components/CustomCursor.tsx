
"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = document.querySelector<HTMLElement>(".custom-cursor-dot");
    const ring = document.querySelector<HTMLElement>(".custom-cursor-ring");
    const main = document.querySelector("main");

    if (!dot || !ring || !main) return;

    const updateColors = () => {
      const isDark = main.className.includes("bg-[#080812]");

      dot.style.backgroundColor = isDark ? "#ffffff" : "#111111";
      dot.style.boxShadow = isDark
        ? "0 0 10px rgba(255,255,255,0.3)"
        : "0 0 8px rgba(0,0,0,0.2)";

      ring.style.borderColor = isDark
        ? "rgba(255,255,255,0.55)"
        : "rgba(30,30,30,0.35)";
    };

    const move = (event: MouseEvent) => {
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;

      ring.style.left = `${event.clientX}px`;
      ring.style.top = `${event.clientY}px`;
    };

    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(main, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("mousemove", move);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" aria-hidden="true" />
      <div className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
