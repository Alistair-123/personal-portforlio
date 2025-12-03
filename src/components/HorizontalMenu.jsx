import React from 'react'
import { motion } from "framer-motion";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export default function HorizontalMenu() {
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="hidden md:flex items-center gap-8 text-lg font-medium"
    >
      {menuItems.map((menuItem) => (
        <motion.a
          key={menuItem.id}
          variants={item}
          href={`#${menuItem.id}`}
          className="text-black hover:text-violet-600 transition-colors duration-300 relative group"
        >
          {menuItem.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300" />
        </motion.a>
      ))}
    </motion.div>
  );
}