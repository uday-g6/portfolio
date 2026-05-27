import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    spring.set(progress);
  }, [progress, spring]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-[#B8892F] origin-left"
        style={{ scaleX: spring }}
      />
    </div>
  );
}
