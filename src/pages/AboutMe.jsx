// src/pages/AboutMe.jsx (or wherever this lives)
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/myImage.png";

// athlete images
import basketImg from "../assets/basket.png";
import bikingImg from "../assets/biking.png";
import runningImg from "../assets/running.png";
import medal from "../assets/medal.png";

// system / app images
import createImg from "../assets/create.png";
import dashboardImg from "../assets/dashboard.png";
import qwImg from "../assets/qw.png";

const fixedTexts = ["Who is Alistair?", " "];

const scrollTexts = [
  "A passionate developer",
  " ",
  "an athlete",
  "Building clean and precise systems",
  "Focused on innovation",
  "Driven by results",
  " ",
];

export function SplitScrollText() {
  const [fixedIndex] = useState(0);
  const sectionRefs = useRef([]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex min-h-screen font-sf">
      {/* Fixed left side with gray image */}
      <motion.div
        className="w-1/2 p-10 sticky top-0 h-screen flex items-start justify-start bg-cover bg-center"
        style={{
          backgroundImage: `url(${myImage})`,
          filter: "grayscale(100%)",
        }}
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <h1 className="text-2xl font-medium text-center text-white/90">
          {fixedTexts[fixedIndex]}
        </h1>
      </motion.div>

      {/* Right side scrolling content */}
      <div className="w-1/2 p-10 space-y-32">
        {scrollTexts.map((text, i) => {
          const isAthlete = text === "an athlete";
          const isSystems = text === "Building clean and precise systems";

          return (
            <motion.section
              key={i}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="min-h-screen flex items-center"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {isAthlete ? (
                // Athlete grid
                <div className="relative w-full h-[100vh] overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src={basketImg}
                      alt="Playing basketball"
                      className="absolute left-6 top-8 w-40 md:w-52 rounded-2xl shadow-lg"
                    />
                    <img
                      src={bikingImg}
                      alt="Biking"
                      className="absolute left-32 top-80 w-40 md:w-52 rounded-2xl shadow-lg"
                    />
                    <img
                      src={medal}
                      alt="Awards"
                      className="absolute right-3 top-1/2 w-40 md:w-52 -translate-y-1/2 rounded-2xl shadow-lg"
                    />
                    <img
                      src={runningImg}
                      alt="Running"
                      className="absolute left-1/2 bottom-10 w-40 md:w-52 -translate-x-1/2 rounded-2xl shadow-lg"
                    />
                  </div>

                  <motion.div
                    className="relative z-10 flex h-full items-start justify-end pr-10 pt-16"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeIn",
                    }}
                  >
                    <h2 className="text-2xl md:text-7xl rounded-2xl p-10">
                      {text}
                    </h2>
                  </motion.div>
                </div>
              ) : isSystems ? (
                // Systems / app images
                <div className="relative w-full h-[100vh] overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src={createImg}
                      alt="Creating system"
                      className="absolute left-6 top-10 w-40 md:w-100 rounded-2xl shadow-lg opacity-90"
                    />
                    <img
                      src={dashboardImg}
                      alt="System dashboard"
                      className="absolute left-1/3 top-40 -translate-x-1/2 w-56 md:w-132 rounded-2xl shadow-lg opacity-95"
                    />
                    <img
                      src={qwImg}
                      alt="System detail"
                      className="absolute left-1/2 bottom-6 -translate-x-1/2 w-52 md:w-72 opacity-100"
                    />
                  </div>

                  <motion.div
                    className="relative z-10 flex h-full items-center justify-start pl-10"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeIn",
                    }}
                  >
                    <h2 className="text-xl md:text-3xl lg:text-5xl w-50 rounded-2xl mt-10 bg-white/30">
                      {text}
                    </h2>
                  </motion.div>
                </div>
              ) : (
                // Simple text sections
                <div className="w-full h-[70vh] flex items-center">
                  <h2 className="text-4xl md:text-5xl">{text}</h2>
                </div>
              )}
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}

// AboutMe page wrapper
export default function AboutMe() {
  return (
    <section className="min-h-screen bg-white">
      <SplitScrollText />
    </section>
  );
}
