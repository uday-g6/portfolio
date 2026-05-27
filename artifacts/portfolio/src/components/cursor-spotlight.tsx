import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorSpotlight() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const opacity = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const DARK_IDS = ["skills", "contact"];

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const section = el?.closest("section");
      const id = section?.getAttribute("id") ?? "";
      opacity.set(DARK_IDS.includes(id) ? 1 : 0);
    };

    const onLeave = () => opacity.set(0);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y, opacity]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      style={{ opacity: springOpacity }}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(184,137,47,0.13) 0%, rgba(184,137,47,0.05) 45%, transparent 68%)",
        }}
        className="absolute w-[560px] h-[560px] rounded-full"
      />
    </motion.div>
  );
}
