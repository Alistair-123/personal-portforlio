// src/components/preaboutComponents/FlowStepCard.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// You can keep these or replace with your own later.
// For now they're just wired into the config.
import strategy from "../../assets/strategy.mp4";
import design from "../../assets/design.mp4";
import backendVideo from "../../assets/backend.mp4";
import computer from "../../assets/computer.mp4";
import integrate from "../../assets/integrate.mp4";
import test from "../../assets/test-results.mp4";
import launch from "../../assets/launch.mp4";

const STEP_CONFIG = {
  plan: {
    titleSize: "text-5xl md:text-6xl lg:text-7xl",
    bodySize: "text-lg md:text-xl",
    microCopy: null,
    video: design,
  },
  design: {
    titleSize: "text-5xl md:text-6xl lg:text-7xl",
    bodySize: "text-lg md:text-xl",
    microCopy: null,
    video: strategy,
  },
  backend: {
    titleSize: "text-4xl md:text-5xl lg:text-6xl",
    bodySize: "text-base md:text-lg",
    microCopy: "Models, controllers, routes — predictable logic, no magic.",
    video: backendVideo,
  },
  frontend: {
    titleSize: "text-4xl md:text-5xl lg:text-6xl",
    bodySize: "text-base md:text-lg",
    video: computer, // plug your mp4 later
  },
  integrate: {
    titleSize: "text-4xl md:text-5xl lg:text-6xl",
    bodySize: "text-base md:text-lg",
    microCopy:
      "Wiring auth, roles, and the exact paths your users hit every day.",
    video: integrate,
  },
  test: {
    titleSize: "text-4xl md:text-5xl lg:text-6xl",
    bodySize: "text-base md:text-lg",
    microCopy: "Break it yourself first — edge cases matter.",
    video: test,
  },
  polish: {
    titleSize: "text-4xl md:text-5xl lg:text-6xl",
    bodySize: "text-base md:text-lg",
    microCopy:
      "Deployment, performance, and refinement that survives real usage.",
    video: launch,
  },
};

// Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const bodyVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const microCopyVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const mediaContainerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 },
  },
};

const mediaVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function FlowStepCard({ step }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const config = STEP_CONFIG[step.id] || {};
  const hasVideo = !!config.video;

  return (
    <motion.div
      ref={ref}
      className="
        pre-flow-step flex-shrink-0 
        w-[60vw] 
        h-[75%]
        px-2 py-3
        flex
        items-center
        justify-center
        
      "
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div
        className="
          relative flex h-full w-full     
          rounded-[32px]
          bg-white
          items-stretch justify-between
          backdrop-blur-xl
          overflow-hidden
          px-8 md:px-10 py-8
          gap-6
          font-sf
          shadow-md
          border border-gray-200
        "
      >
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          className="flex flex-col justify-center flex-[1.15] min-w-0 items-start space-y-4"
          variants={contentVariants}
        >
          <motion.h3
            className={`
              ${config.titleSize || "text-4xl md:text-5xl"}
              font-[500] tracking-tight text-slate-900
            `}
            variants={titleVariants}
          >
            {step.title}
          </motion.h3>

          <motion.span
            className="font-medium text-[15px] md:text-[17px] text-slate-500"
            variants={subtitleVariants}
          >
            {step.subtitle}
          </motion.span>

          <motion.p
            className={`
              ${config.bodySize || "text-base md:text-lg"}
              leading-relaxed text-slate-600 mt-4
            `}
            variants={bodyVariants}
          >
            {step.body}
          </motion.p>
        </motion.div>

        {/* RIGHT: VIDEO / MEDIA */}
        <motion.div
          className="
            relative z-10 flex 
            w-[40%] 
            h-full
            items-center justify-center 
            bg-transparent backdrop-blur-sm
              
          "
          variants={mediaContainerVariants}
        >
          {hasVideo && (
            <motion.div
              className="w-full h-3/4 "
              variants={mediaVariants}
            >
              <video
                src={config.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl object-cover"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
