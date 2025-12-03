import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const socials = [
  { name: "Twitter", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "GitHub", url: "#" }
];

export default function StaggeredMenuPanel({ open, onClose }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30, rotateX: -15 },
    show: { 
      opacity: 1, 
      x: 0, 
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.2 }
    }
  };

  const socialItem = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <>
      {/* Backdrop - Changed z-index from z-40 to z-[60] */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />

      {/* Panel - Changed z-index from z-50 to z-[70] */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full md:w-[620px] bg-white z-[70] flex flex-col p-8 pt-24 overflow-y-auto"
        style={{
          boxShadow: "-10px 0 50px rgba(0,0,0,0.1)"
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex-1 flex flex-col gap-3"
        >
          {menuItems.map((menuItem, index) => (
            <motion.div
              key={menuItem.id}
              variants={item}
              className="relative overflow-hidden"
            >
              <motion.a
                href={`#${menuItem.id}`}
                className="block relative text-7xl md:text-8xl font-bold text-black uppercase tracking-tighter leading-none py-2 group"
                style={{ letterSpacing: "-0.05em" }}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={onClose}
              >
                <span className="relative z-10 inline-block group-hover:text-violet-600 transition-colors duration-300">
                  {menuItem.label}
                </span>
                <span className="absolute top-2 right-0 text-lg font-normal text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  0{index + 1}
                </span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="mt-auto pt-8 border-t border-gray-200"
        >
          <motion.h3 
            variants={socialItem}
            className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4"
          >
            Connect
          </motion.h3>
          <motion.div 
            variants={socialItem}
            className="flex gap-6"
          >
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    className="text-lg font-medium text-black hover:text-violet-600 transition-colors duration-300"
                >
                    {social.name}
                </a>
                ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}