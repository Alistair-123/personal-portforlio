import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full md:px-10 min-h-full font-sf bg-white "
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-8 lg:px-10 border">
        <h2 className="text-3xl md:text-5xl font-medium mb-4 max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-gray-600 md:text-lg max-w-md">
          I've been working on Aceternity for the past 2 years. Here’s a timeline of my journey.
        </p>
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto pb-20   "
        style={{ position: "relative" }}
      >
        {data.map((item, index) => (
  <motion.div
    key={index}
    className="flex justify-between items-start pt-10 md:pt-32 md:gap-12"
    initial={{ opacity: 0, y: 30 }}        // Start invisible and slightly down
    whileInView={{ opacity: 1, y: 0 }}     // Animate to visible and original position
    viewport={{ once: true, amount: 0.3 }} // Animate only once when 30% visible
    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }} // stagger by index
  >
    {/* Left timeline marker & title */}
    <div className="sticky top-40 flex items-center justify-start max-w-xs md:max-w-sm w-72 z-40 gap-5">
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md border-2 border-gray-500">
        <div className="w-4 h-4 rounded-full bg-gray-500" />
      </div>

      <h3 className="text-4xl font-semibold text-gray-700 tracking-wide">
        {item.title}
      </h3>
    </div>

    {/* Right content */}
    <div className="relative flex-grow pl-8 border h-svh">
      <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
        {item.content}
      </div>
    </div>
  </motion.div>
))}


        {/* Vertical line */}
        <div
  style={{ height: height + "px", left: "10px" }}
  className="absolute top-0 w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent rounded"
>
  <motion.div
    style={{
      height: heightTransform,
      opacity: opacityTransform,
    }}
    className="absolute inset-x-0 top-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent rounded"
  />
</div>

      </div>
    </div>
  );
};
