// src/pages/PreAbout.jsx
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FlowStepCard from "../components/preaboutComponents/FlowStepCard";
gsap.registerPlugin(ScrollTrigger);

const FLOW_STEPS = [
  {
    id: "plan",
    title: "Plan",
    subtitle: "Clarify the problem",
    body: "Define requirements, constraints, and what actually needs.",
  },
  {
    id: "design",
    title: "Design Flow",
    subtitle: "Map how data moves",
    body: "Design the system flow, roles, and states. Where data comes from, who touches it, and where it ends up.",
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Models → Controllers → Routes",
    body: "Shape the database and business logic so the system is predictable, secure, and easy to extend.",
  },
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Interfaces that make sense",
    body: "Build screens that match the real workflow, not just the database tables. Precise, clean, and calm UI.",
  },
  {
    id: "integrate",
    title: "Integrate",
    subtitle: "Wire it all together",
    body: "Hook frontend → backend, auth, permissions, and actual usage paths your users will hit daily.",
  },
  {
    id: "test",
    title: "Test",
    subtitle: "Break it before users do",
    body: "Run through real scenarios, edge cases, and failure states. Fix the ugly edge behavior.",
  },
  {
    id: "polish",
    title: "Polish / Deploy",
    subtitle: "Make it production-ready",
    body: "Tighten copy, refine performance, and ship in a way that’s stable and maintainable.",
  },
];

// Small Apple-style icon chips scattered inside each card
const ICON_GRID = [
  { label: "</>" }, // code brackets
  { label: "⇄" }, // flow arrows
  { label: "◇" }, // system node
  { label: "{ }" }, // config
  { label: "☁︎" }, // server / cloud
  { label: "⧉" }, // components
  { label: "⚙︎" }, // settings
  { label: "▢▢" }, // UI layout
  { label: "∞" }, // loops / pipelines
];

export default function PreAbout() {
  const sectionRef = useRef(null); // whole tall section
  const trackRef = useRef(null); // the horizontal track on the right

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
      const base = window.innerHeight * 5;
      // Make it slower / longer by multiplying
      return base * 1.2;
    };

    gsap.set(track, { x: 0 });

    const tween = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scroller: "#scroll-container",
        start: "top top",
        end: () => "+=" + getScrollLength(),
        scrub: 0.8,
        pin: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true,
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
      className="relative z-30 w-full h-[680vh] bg-white"
    >
      {/* STICKY VIEWPORT */}
      <div className="top-0 sticky h-screen flex items-center justify-center">
        <div className="top-0 sticky w-full h-full bg-white rounded-3xl flex items-center justify-center ">
          <div
            className="
            max-w-7xl w-full 
        
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
              className="w-full md:w-[120%] flex flex-col items-start justify-center"
            >
              <p className="text-[11px] tracking-[0.24em] uppercase text-gray-400 mb-4">
                Before anything else
              </p>

              <h2 className="text-6xl font-[500] text-black mb-4 leading-tight">
                Beyond just writing codes,
                <br />
                This is how I structure.
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-xl">
                This is the bridge between who I am, how I build—how I think
                about reliability, precision, and performance before I dive into
                coding.
              </p>
            </motion.div>

            {/* RIGHT: Horizontal scroll-driven flow steps */}
            <div className="w-[270%] flex items-center justify-center h-svh">
              {/* viewport for the cards */}
              <div className="relative w-full max-w-4xl h-svh overflow-hidden flex flex-col">
                {/* 
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-20" />
<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/90 to-transparent z-20" /> */}

                {/* track that moves left/right */}
                <div
                  ref={trackRef}
                  className="absolute inset-0 flex items-center gap-6 w-full z-10"
                >
                  {/* a little breathing room before first card */}
                  <div className="shrink-0 w-[200px]" />

                  {FLOW_STEPS.map((step) => (
  <FlowStepCard key={step.id} step={step} ICON_GRID={ICON_GRID} />
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
