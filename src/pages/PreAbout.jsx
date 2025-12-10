// src/pages/PreAbout.jsx
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FLOW_STEPS = [
   {
    title: "",
    subtitle: " ",
    body: "",
  },
  {
    title: "Plan",
    subtitle: "Clarify the problem",
    body: "Define requirements, constraints, and what actually needs to exist in v1. No code yet, just thinking clearly.",
  },
  {
    title: "Design Flow",
    subtitle: "Map how data moves",
    body: "Design the system flow, roles, and states. Where data comes from, who touches it, and where it ends up.",
  },
  {
    title: "Backend",
    subtitle: "Models → Controllers → Routes",
    body: "Shape the database and business logic so the system is predictable, secure, and easy to extend.",
  },
  {
    title: "Frontend",
    subtitle: "Interfaces that make sense",
    body: "Build screens that match the real workflow, not just the database tables. Precise, clean, and calm UI.",
  },
  {
    title: "Integrate",
    subtitle: "Wire it all together",
    body: "Hook frontend → backend, auth, permissions, and actual usage paths your users will hit daily.",
  },
  {
    title: "Test",
    subtitle: "Break it before users do",
    body: "Run through real scenarios, edge cases, and failure states. Fix the ugly edge behavior.",
  },
  {
    title: "Polish / Deploy",
    subtitle: "Make it production-ready",
    body: "Tighten copy, refine performance, and ship in a way that’s stable and maintainable.",
  },
];

export default function PreAbout() {
  const sectionRef = useRef(null); // whole tall section
  const trackRef = useRef(null);   // the horizontal track on the right

  useLayoutEffect(() => {
  const section = sectionRef.current;
  const track = trackRef.current;

  if (!section || !track) return;

  const getDistance = () => {
    const totalWidth = track.scrollWidth || 0;
    const viewportWidth =
      track.parentElement?.offsetWidth || track.offsetWidth || 0;

    const dist = totalWidth - viewportWidth;
    return dist > 0 ? dist : 1;
  };

  const getScrollLength = () => {
    // Base scroll length (e.g. 3x viewport height)
    const base = window.innerHeight * 3;
    // Make it slower / longer by multiplying
    return base * 1.8; // ⬅️ bump this up (1.5, 1.8, 2, etc.)
  };

  gsap.set(track, { x: 0 });

  const tween = gsap.to(track, {
    x: () => -getDistance(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      scroller: "#scroll-container",
      start: "top top",
      end: () => "+=" + getScrollLength(), // ⬅️ longer vertical distance = slower slide
      scrub: 0.8,
      pin: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
    },
  });

  return () => {
    if (tween.scrollTrigger) tween.scrollTrigger.kill();
    tween.kill();
  };
}, []);



  return (
  <section
    ref={sectionRef}
    className="relative z-30 w-full h-[550vh] bg-white"  // ⬅️ was 250vh
  >
    {/* STICKY VIEWPORT */}
    <div className="top-0 sticky h-screen flex items-center justify-center">
      <div className="top-0 sticky w-full h-full bg-white rounded-3xl shadow-lg flex items-center justify-center ">
        <div
          className="
            max-w-7xl w-full 
            px-8 md:px-12 
            py-10 md:py-16 
            flex flex-col md:flex-row 
            items-start md:items-stretch 
            
            gap-10
          "
        >
          {/* LEFT: Static text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="w-full md:w-[90%] flex flex-col items-start justify-center" // ⬅️ explicit width
          >
            <p className="text-[11px] tracking-[0.24em] uppercase text-gray-400 mb-4">
              Before the details
            </p>

            <h2 className="text-6xl font-[500] text-black mb-4 leading-tight">
              Beyond just  writing codes,
              <br />
              This is how I structure.
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-xl">
              This is the bridge between who I am, how I build—how I think
              about reliability, precision, and performance before we even dive
              into the “About me” section.
            </p>
          </motion.div>

          {/* RIGHT: Horizontal scroll-driven flow steps */}
          <div className="w-[150%] flex items-center justify-center h-svh">
            {/* viewport for the cards */}
            <div className="relative w-full max-w-3xl h-svh  overflow-hidden ">
              {/* track that moves left/right */}
              <div
                ref={trackRef}
                className="absolute inset-0 flex items-stretch gap-6 w-full"
              >
                {FLOW_STEPS.map((step) => (
                  <div
                    key={step.title}
                    className="pre-flow-step flex-shrink-0 w-[140%] md:w-[160%] lg:w-[180%] h-full bg-white/80 rounded-2xl  px-8 py-6 flex flex-col items-center justify-center"
                  >
                    <div className="text-[11px] uppercase tracking-[0.24em] text-gray-400 mb-2">
                      {step.title}
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                      {step.subtitle}
                    </h3>
                    <p className="text-sm text-gray-600">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

}
