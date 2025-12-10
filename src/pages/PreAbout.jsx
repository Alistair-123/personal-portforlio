// src/pages/PreAbout.jsx
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import planMp4 from "../assets/plan.mp4";
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
      return base * 2;
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
      className="relative z-30 w-full h-[1200vh] bg-white"
    >
      {/* STICKY VIEWPORT */}
      <div className="top-0 sticky h-screen flex items-center justify-center">
        <div className="top-0 sticky w-full h-full bg-white rounded-3xl flex items-center justify-center ">
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

                  {FLOW_STEPS.map((step) => {
                    const isPlan = step.id === "plan";
                    const isDesign = step.id === "design";
                    const isBackend = step.id === "backend";
                    const isFrontend = step.id === "frontend";
                    const isIntegrate = step.id === "integrate";
                    const isTest = step.id === "test";
                    const isPolish = step.id === "polish";

                    return (
                      <motion.div
                        key={step.id}
                        className="
                          pre-flow-step flex-shrink-0 
                          w-[52vw] 
                          h-[80%]
                          px-2 py-3
                          flex
                          items-center
                          justify-center
                        "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* APPLE-INSPIRED GLASSY CARD */}
                        <div
                          className="
                            relative flex h-full w-full
                            rounded-[32px]
                            bg-white
                            border border-white/60
                            shadow-sm
                            backdrop-blur-xl
                            overflow-hidden
                            px-8 md:px-10 py-8
                            gap-6
                          "
                        >
                          {/* Soft gradient / light bloom */}
                          {/* <div className="pointer-events-none absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.28),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.10),_transparent_60%)]" /> */}

                          {/* Subtle highlight line */}
                          {/* <div className="pointer-events-none absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" /> */}

                          {/* LEFT: Text content */}
                          <div className="relative z-10 flex flex-col justify-center flex-1 min-w-0">
                            {/* Subtitle first (small pill row) */}
                            {/* TITLE — now the BIG heading */}
                            {step.title && (
                              <h3 className="text-xl inline-flex items-center gap-4 md:text-3xl font-[600] text-slate-900 mb-3 leading-snug">
                                 <span className="h-7 w-7 rounded-full bg-slate-900 text-[11px] text-white flex items-center justify-center">
                                  {step.id?.[0]?.toUpperCase()}
                                </span>
                                {step.title}
                              </h3>
                            )}

                            {/* SUBTITLE — now the SMALL pill row */}
                            {step.subtitle && (
                              <div className="inline-flex items-center gap-2 mb-4">
                               
                                <span className="font-[500]  text-[14px] text-slate-500">
                                  {step.subtitle}
                                </span>
                              </div>
                            )}

                            {step.body && (
                              <p className="text-sm md:text-[15px] leading-relaxed text-slate-600 mb-4">
                                {step.body}
                              </p>
                            )}

                            {/* Step-specific content */}
                            {isPlan && (
                              <motion.div
                                className="mt-3 text-sm text-gray-700 flex items-center gap-3"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                <video
                                  src={planMp4}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="w-16 h-16 rounded-2xl   object-cover"
                                ></video>
                                <span className="text-[12px] text-slate-500">
                                  Everything starts here: clear constraints,
                                  real requirements, no code yet.
                                </span>
                              </motion.div>
                            )}

                            {isDesign && (
                              <div className="mt-3 text-[12px] text-gray-500">
                                Data flow, roles, and state transitions start
                                here. This is where the system actually becomes
                                understandable.
                              </div>
                            )}

                            {isBackend && (
                              <div className="mt-3 text-[12px] text-gray-500">
                                Models, controllers, routes – the spine of the
                                system. No magic, just predictable logic.
                              </div>
                            )}

                            {isFrontend && (
                              <div className="mt-3 text-[12px] text-gray-500">
                                Interfaces that match how people actually work,
                                not just how tables are stored.
                              </div>
                            )}

                            {isIntegrate && (
                              <div className="mt-3 text-[12px] text-gray-500">
                                Wiring auth, permissions, sessions, and the
                                exact paths users will hit every day.
                              </div>
                            )}

                            {isTest && (
                              <div className="mt-3 text-[12px] text-gray-500">
                                Edge cases, failure paths, and trying to break
                                the system before anyone else can.
                              </div>
                            )}

                            {isPolish && (
                              <div className="mt-3 text-[12px] text-gray-500">
                                Copy, performance, and deployment that can
                                survive real usage, not just a demo.
                              </div>
                            )}
                          </div>

                          {/* RIGHT: Floating icon grid – Apple-style mini system glyphs */}
                          {/* RIGHT: Floating icon grid – Apple-style ultra-blended */}
                          <div
                            className="
                              relative z-10 hidden md:flex w-[40%] 
                              items-center justify-center
                              bg-transparent
                              backdrop-blur-sm
                            "
                          >
                            {/* extremely soft icon chips */}
                            <div className="grid grid-cols-3 gap-3 opacity-80">
                              {ICON_GRID.map((icon, idx) => (
                                <div
                                  key={idx}
                                  className="
                                            h-12 w-12
                                            rounded-2xl
                                            bg-white/40
                                  border border-white/30

                                            shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                                            backdrop-blur-lg
                                            flex items-center justify-center
                                          "
                                >
                                  <span className="text-[11px] font-medium tracking-wide text-slate-700/70">
                                    {icon.label}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* ultra-soft bloom, barely visible */}
                            <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.16),_transparent_70%)]" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
