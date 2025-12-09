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

  const ctx = gsap.context(() => {
    // Keep your pinned sections
    const sections = gsap.utils.toArray(".stacked-section", mainEl);

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=60%",
        pin: true,
        pinSpacing: false,
        scroller: mainEl,
      });
    });
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
