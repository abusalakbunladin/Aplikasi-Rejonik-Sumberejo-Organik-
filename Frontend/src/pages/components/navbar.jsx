import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { animate } from "animejs";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;
    if (window.innerWidth < 1024) return;

    // Navbar //
    animate(navRef.current.querySelector(".nav"), {
      y: [-90, 0],
      delay: 800,
      duration: 600,
      ease: "outElastic(1,0.55)",
    });
    // Navbar //
  });

  return (
    <div className="navbar" ref={navRef}>
      <header className="nav w-full h-fit p-2 backdrop-blur-xl border-b border-white/50 shadow-lg fixed z-1000 flex justify-center items-center">
        <div className="flex justify-between">
          <div className="grayscale">
            <a href="#">
              <img src="/brand/brand-logo.png" alt="Brand" width="200" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
