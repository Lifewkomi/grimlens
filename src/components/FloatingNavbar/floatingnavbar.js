import React, { useState } from "react";
import { motion, AnimatePresence,useScroll,useMotionValueEvent,} from "framer-motion";
import{ cn } from "../../lib/util";

export default function FloatingNav({ navItems, className }){
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0: -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border-white border-b-[#b8ff00] border-r-[#b8ff00] border rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-orange-300 hover:text-[#b8ff00]"
            )}
          >
            <span className="block sm:hidden ">{navItem.icon}</span>
            <span className="hidden sm:block text-xl font-medium font-neue-montreal">{navItem.name}</span>
          </a>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
};


