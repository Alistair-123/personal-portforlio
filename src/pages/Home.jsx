import React, { useState } from "react";
import { motion } from "framer-motion";
import AvatarStack from "../components/AvatarStack";
import TypingBadge from "../components/TypingBadge";
import { RiMenu4Fill } from "react-icons/ri";

function Home() {
  const [hovered, setHovered] = useState(false);

  return (
      <section className=" h-screen relative font-sf flex items-center justify-center bg-white overflow-hidden">
      {/* Background accents (optional) */}
      {/* <div className="pointer-events-none absolute -top-40 -left-32 w-72 h-72 rounded-full bg-violet-100 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-56 right-0 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.03),_transparent)]" /> */}

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-6 "
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {/* Top badge – centered */}
        <div className="h-8 flex items-center justify-center">
          {/* <TypingBadge /> */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-[11px] uppercase tracking-[0.24em] text-gray-500 bg-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            System Developer · Precision Focused
          </span>
        </div>

        {/* Main heading */}
        <h1 className=" text-4xl md:text-6xl lg:text-7xl font-medium leading-tight w-full mx-auto ">
          Develops systems with precision and honed expertise.
        </h1>

        {/* Subtext */}
        <p className="text-md font-light text-gray-500 max-w-xl mx-auto">
          I design and build clean, dependable systems — from backend logic to
          polished user interfaces — with a focus on clarity, performance, and
          maintainability.
        </p>

        {/* Bottom row: avatar + name + button, centered */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 ">
          <div className="flex items-center gap-3">
            <AvatarStack />
          </div>

          <div className="text-xs text-gray-500 text-left ">
            <p className="text-lg text-black leading-tight">Alistair Jan</p>
            <p className={`text-xs md:text-sm transition-all font-sf`}>
              React · Node · Systems
            </p>
          </div>
          <motion.button
            type="button"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-sf text-sm md:text-base cursor-pointer transition-transform transition-shadow w-40 " // <-- fixed width
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Keep width stable, just swap content */}
            {hovered ? (
              <motion.span
                key="text"
                className="relative inline-block"
                initial={{ opacity: 0, x: 20 }} // from right
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
              >
                {/* Label */}
                <span>View Projects</span>

                {/* Underline animating left -> right */}
                <motion.span
                  className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-black"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.span>
            ) : (
              <motion.span
                key="icon"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
              >
                <RiMenu4Fill className="text-2xl" />
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
