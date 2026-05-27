import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 group flex flex-col items-center gap-2"
        >
          {/* Vertical line with rising dot */}
          <div className="relative w-px h-10 bg-[#B8892F]/25 overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-[#B8892F]"
              style={{ height: "40%" }}
              animate={{ y: ["0%", "-250%", "-250%"] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: "easeInOut",
                times: [0, 0.6, 1],
              }}
            />
          </div>

          {/* Label */}
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#111]/40 group-hover:text-[#B8892F] transition-colors font-medium leading-none">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
