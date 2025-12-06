// src/layouts/Layout.jsx
import React, { useLayoutEffect, useRef } from "react";
import Navbar from "../components/Navbar";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    // GSAP context to safely clean up
    const ctx = gsap.context(() => {
      // Smooth scroll for wheel events on the main scroll container
      const onWheel = (e) => {
        e.preventDefault();

        const delta = e.deltaY;
        const targetScroll = mainEl.scrollTop + delta;

        gsap.to(mainEl, {
          scrollTop: targetScroll,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      mainEl.addEventListener("wheel", onWheel, { passive: false });

      // Stacked / pinned sections like your Home hero
      const sections = gsap.utils.toArray(".stacked-section", mainEl);

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=60%",
          pin: true,
          pinSpacing: false,
          scroller: mainEl,
          anticipatePin: 1,
        });
      });

      // cleanup
      return () => {
        mainEl.removeEventListener("wheel", onWheel);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, mainEl);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex h-dvh overflow-hidden">
      <Navbar />

      <main
  id="scroll-container"
  ref={mainRef}
  className="flex-1 bg-white overflow-y-auto overflow-x-hidden min-w-0 scroll-container"
>
  {children}
</main>
    </div>
  );
};

export default Layout;
