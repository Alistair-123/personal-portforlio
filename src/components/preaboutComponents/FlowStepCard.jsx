import React from "react";
import { motion } from "framer-motion";
import strategy from "../../assets/strategy.mp4"
import { div } from "framer-motion/client";
import { useInView } from "framer-motion";

const ref = React.useRef(null);
const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });


export default function FlowStepCard({ step, ICON_GRID }) {
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
            {/* CARD */}
            <div
                className="
          relative flex h-full w-full     
          rounded-[32px]
          bg-white
          flex items-center justify-center
          backdrop-blur-xl
          overflow-hidden
          px-8 md:px-10 py-8
          gap-6
          font-sf
          shadow-md
        "
            >
                {/* LEFT CONTENT */}
                <div className="relative z-10 flex flex-col justify-center flex-1 min-w-0 items-start ">


                    {isPlan && (
                        <motion.div
                            className=" rounded-lg p-6 flex flex-col  absolute  bg-white "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.20, ease: "easeOut" }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        >
                            {/* Title */}
                            <h3 className="text-8xl   font-[500]  inline-flex items-center gap-4">
                                {step.title}
                            </h3>

                            {/* Subtitle */}
                            <span className="font-medium  text-[20px] text-slate-500 mb-3">
                                {step.subtitle}
                            </span>

                            {/* Body */}
                            <p className="text-[30px] mt-12 leading-relaxed text-slate-600">
                                {step.body}
                            </p>
                        </motion.div>
                    )}

                    {isDesign && (
                        <div className="mt-3 text-[12px] text-gray-500">
                            Data flow, roles, and state transitions — clarity starts here.
                        </div>
                    )}

                    {isBackend && (
                        <div className="mt-3 text-[12px] text-gray-500">
                            Models, controllers, routes — predictable logic, no magic.
                        </div>
                    )}

                    {isFrontend && (
                        <div className="mt-3 text-[12px] text-gray-500">
                            Interfaces grounded on real workflow, not just database tables.
                        </div>
                    )}

                    {isIntegrate && (
                        <div className="mt-3 text-[12px] text-gray-500">
                            Wiring auth, roles, and the exact paths users hit every day.
                        </div>
                    )}

                    {isTest && (
                        <div className="mt-3 text-[12px] text-gray-500">
                            Break it yourself first — edge cases matter.
                        </div>
                    )}

                    {isPolish && (
                        <div className="mt-3 text-[12px] text-gray-500">
                            Deployment, performance, and refinement that survives real usage.
                        </div>
                    )}
                </div>

                {/* RIGHT ICON GRID */}
                <div className="relative z-10 flex w-[50%] items-center justify-center bg-transparent backdrop-blur-sm ">
                    <div className=" p-2 opacity-80  h-full">
                        {isPlan && (
                            <motion.div
                                className="h-full "
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <video
                                    src={strategy}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full rounded-2xl "
                                />

                            </motion.div>
                        )}

                        {isDesign && (
                            <div>
                                qwe
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
