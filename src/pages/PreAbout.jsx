// src/pages/PreAbout.jsx
import { motion } from "framer-motion";

export default function PreAbout() {
  return (
    // ⬇️ NOTE: z-30 added here
    <section className="stacked-section h-screen relative z-30 w-full flex items-center justify-center bg-white">
      {/* Rounded Card */}
      <div className="w-full h-full bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="max-w-5xl px-12 py-16 text-left"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-gray-400 mb-4">
            Before the details
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[500] text-black mb-4 leading-tight">
            Beyond just writing code,
            <br />
            I design systems that actually work.
          </h2>

          <p className="text-sm md:text-base text-gray-600 max-w-xl">
            This is the bridge between who I am and what I build—how I think
            about reliability, precision, and performance before we even dive
            into the “About me” section.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
