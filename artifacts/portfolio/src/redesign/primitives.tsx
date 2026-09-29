import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Fade/slide-in once when scrolled into view. Disabled for reduced-motion users. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  id: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14 flex flex-col gap-4">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="h2">
        {title}
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
