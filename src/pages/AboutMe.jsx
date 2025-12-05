import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// put correct relative paths here
import basketImg from "../assets/basket.png";
import bikingImg from "../assets/biking.png";
import runningImg from "../assets/running.png";
import medal from "../assets/medal.png";

const fixedTexts = ["Who is Alistair?"];

const scrollTexts = [
  "A passionate developer",
  "an athlete",
  "Building clean and precise systems",
  "Focused on innovation",
  "Driven by results",
];

export default function SplitScrollText() {
  const [fixedIndex, setFixedIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function onScroll() {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        setFixedIndex((prev) =>
          prev + 1 < fixedTexts.length ? prev + 1 : prev
        );
      }
    }

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: ["easeIn", "easeOut"],
        delay: 0.2,
      },
    },
  };

  return (
    <div className="flex min-h-screen font-sf">
      {/* Fixed left side */}
      <div className="w-1/2 p-10 sticky top-0 h-screen flex items-center justify-center">
        <h1 className="text-9xl font-medium text-center">
          {fixedTexts[fixedIndex]}
        </h1>
      </div>

      {/* Scrollable right side */}
      <div
  ref={scrollRef}
  className="w-1/2 h-auto p-10 space-y-32"
>

        {scrollTexts.map((text, i) => {
          const isAthlete = text === "an athlete"; // or i === 1

          return (
            <motion.section
              key={i}
              className="min-h-screen flex items-center"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {isAthlete ? (
                // SPECIAL LAYOUT FOR "An Athlete"
                <div className="relative w-full h-svh">
                  {/* three images acting as the "background" */}
                  <div className="absolute inset-0">
                    <img
                      src={basketImg}
                      alt="Playing basketball"
                      className="absolute left-6 top-8 w-40 md:w-52   rounded-2xl"
                    />

                     
                    <img
                      src={bikingImg}
                      alt="Biking"
                      className="absolute left-30 top-80 w-40 md:w-52   rounded-2xl"
                    />

                    <img
                      src={medal}
                      alt="Awards"
                      
                      className="absolute right-3 top-1/2 w-40 md:w-52 -translate-y-1/2  rounded-2xl"
                    />
                    <img
                      src={runningImg}
                      alt="Running"
                      className="absolute left-1/2 bottom-6 w-40 md:w-52 -translate-x-1/2  rounded-2xl"
                    />
                  </div>

                  <div className="relative z-10 flex h-full items-start justify-end right-10 top-19">
                    <h2 className="text-2xl md:text-7xl  rounded-2xl p-10">
                      {text}
                    </h2>
                  </div>
                </div>
              ) : (
                // default layout for other texts (no background images yet)
                <div className="w-full h-[80vh] flex items-center">
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
