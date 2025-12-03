import { useEffect, useState } from "react";
import StaggeredMenuPanel from "./StaggeredMenu";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 px-8 z-50 bg-white/60">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-sf font-medium text-[40px] text-black"
        >
          alistair
        </motion.div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Hamburger Menu - ALWAYS visible */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-black cursor-pointer hover:text-gray-700 transition duration-150"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={32} /> : <HiMenuAlt3 size={38} />}
          </motion.button>
        </div>
      </div>

      {/* Sliding Menu Panel */}
      <AnimatePresence>
        {open && (
          <StaggeredMenuPanel
            open={open}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
