// src/pages/PreAbout.jsx
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import planMp4 from "../assets/plan.mp4";
gsap.registerPlugin(ScrollTrigger);

const FLOW_STEPS = [
  {
    id: "empty",
    title: "",
    subtitle: " ",
    body: "",
  },
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
      const base = window.innerHeight * 25;
      // Make it slower / longer by multiplying
      return base * 2; // ⬅️ bump this up (1.5, 1.8, 2, etc.)
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
      className="relative z-30 w-full h-[5000vh] bg-white" // ⬅️ was 250vh
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
                conding.
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
                        className={`
    pre-flow-step flex-shrink-0 
    w-auto
    h-full 
    rounded-2xl px-10 py-10 
    flex flex-col justify-center
    bg-white
  `}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Small helper note only for Plan (you can change later) */}

                        {/* Step label / pill – you can animate per step later */}
                        {step.title && (
                          <div className="mb-3 font-[500] uppercase text-7xl">
                            {step.title}
                          </div>
                        )}

                        {/* Subtitle */}
                        {step.subtitle && (
                          <h3 className="text-7xl font-[500] text-black mb-3">
                            {step.subtitle} {step.body}
                          </h3>
                        )}

                        {/* Body */}
                        {/* {step.body && (
        <p className="text-sm md:text-base text-gray-600 max-w-xl">
          {step.body}
        </p>
      )} */}

                        {/* 🔻 Per-step conditional blocks – placeholders for future animations */}

                        {isPlan && (
                          <motion.div
                            className="mt-6 text-sm text-gray-700"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {/* Plan-specific stuff (later you can add icons / timeline / etc.) */}
                            <video
                              src={planMp4}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-20 h-20"
                            ></video>
                          </motion.div>
                        )}

                        {isDesign && (
                          <div className="mt-6 text-xs text-gray-500">
                            {/* Design Flow specific content / animation hook */}
                            {/* Later: maybe animated arrows or system diagram preview */}
                            <p>
                              Data flow, roles, and state transitions start
                              here.
                            </p>
                          </div>
                        )}

                        {isBackend && (
                          <div className="mt-6 text-xs text-gray-500">
                            {/* Backend specific hook */}
                            <p>
                              Models, controllers, routes – the spine of the
                              system.
                            </p>
                          </div>
                        )}

                        {isFrontend && (
                          <div className="mt-6 text-xs text-gray-500">
                            {/* Frontend specific hook */}
                            <p>
                              Interfaces that match how people actually work,
                              not just database tables.
                            </p>
                          </div>
                        )}

                        {isIntegrate && (
                          <div className="mt-6 text-xs text-gray-500">
                            {/* Integrate specific hook */}
                            <p>
                              Wiring auth, permissions, and real user paths.
                            </p>
                          </div>
                        )}

                        {isTest && (
                          <div className="mt-6 text-xs text-gray-500">
                            {/* Test specific hook */}
                            <p>
                              Edge cases, failure paths, and breaking it before
                              users do.
                            </p>
                          </div>
                        )}

                        {isPolish && (
                          <div className="mt-6 text-xs text-gray-500">
                            {/* Polish / Deploy specific hook */}
                            <p>
                              Copy, performance, and a deployment that can
                              survive real usage.
                            </p>
                          </div>
                        )}
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
