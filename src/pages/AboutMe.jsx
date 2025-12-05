import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const fixedTexts = [
  "Who is Alistair?",
  "Next main text here",
  "And so on...",
];

const scrollTexts = [
  "A passionate developer",
  "An Athlete",
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
        setFixedIndex((prev) => (prev + 1 < fixedTexts.length ? prev + 1 : prev));
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
      <div className="w-1/2 p-10 sticky top-0 h-screen flex items-center justify-center border-r border-white">
        <h1 className="text-9xl font-medium text-center border border-white">
          {fixedTexts[fixedIndex]}
        </h1>
      </div>

      {/* Scrollable right side */}
      <div
        ref={scrollRef}
        className="scroll-container w-1/2 overflow-y-scroll h-auto p-10 space-y-32"
      >
        {scrollTexts.map((text, i) => (
          <motion.section
            key={i}
            className="min-h-screen flex items-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl">{text}</h2>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
