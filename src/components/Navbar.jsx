import { useEffect, useState } from "react";
import StaggeredMenuPanel from "./StaggeredMenu";
import HorizontalMenu from "./HorizontalMenu";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { div } from "framer-motion/client";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
                setOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open]);

    return (
        <>
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 px-8 z-50 bg-white/60  ">

                {/* Left: Brand */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="font-sf font-medium text-[40px] text-black"
                >
                    Alistair
                </motion.div>

                
                {!scrolled && (
                    <div className="flex-1 flex justify-center">
                        <HorizontalMenu />
                    </div>
                )}
                <div className="flex items-center">
               
                 {!scrolled && (
                    <button className="hidden md:flex bg-black rounded-full text-white text-2xl hover:bg-gray-800 transition ">
                        <span className="p-2 px-4">Contact Me</span>
                    </button>
                )}

                    <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`text-black cursor-pointer ${scrolled ? 'block' : 'md:hidden'}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={32} /> : <Menu size={32} />}
                </motion.button>              
                </div>

            </div>


            {/* Staggered Menu Panel - OUTSIDE navbar */}
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