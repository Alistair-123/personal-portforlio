// src/components/TypingBadge.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WORDS = [
  "Precision Focused",
  "Full-Stack Engineer",
  "System Designer",
  "Problem Solver",
];

const TYPING_SPEED = 80;   // ms per character
const DELETING_SPEED = 40; // ms per character
const PAUSE_MS = 1200;     // pause when word fully typed

export default function TypingBadge() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "deleting"

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        // done typing
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_MS);
      }
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, DELETING_SPEED);
      } else {
        // move to next word
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setPhase("typing");
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), PAUSE_MS / 2);
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex]);

  return (
    <motion.span
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.24em] text-gray-500 mb-6 bg-white/70 backdrop-blur font-normal"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

      <span className="flex items-baseline gap-1">
        <span>System Developer ·</span>

        {/* typewriter word */}
        <span className="relative inline-flex items-center">
          <span>{displayed}</span>
          {/* cursor */}
          <span className="ml-1 h-4 w-[1px] bg-gray-500 animate-pulse" />
        </span>
      </span>
    </motion.span>
  );
}
