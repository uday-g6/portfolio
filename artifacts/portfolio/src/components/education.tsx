import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import TiltCard from "./tilt-card";
import SectionIcon from "./section-icon";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[var(--bg-paper-darker)]">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">07</div>
      <SectionIcon icon={GraduationCap} />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto lg:pr-[max(4rem,calc(28vw_-_max(0px,(100vw_-_80rem)/2)))]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-label text-[var(--accent-gold)]">07 — Education</h2>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <TiltCard className="card-dark-hover bg-[var(--bg-dark)] text-white p-8">
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[var(--accent-gold-border)]" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[var(--accent-gold-border)]" />
            <p className="text-label text-[var(--accent-gold)] font-medium mb-4">Education</p>
            <p className="text-xl font-medium leading-snug mb-1 text-white">B.E. Computer Science</p>
            <p className="text-sm text-white/70 mb-0.5">Maharaja Institute of Technology, Mysuru</p>
            <p className="text-sm text-white/60 mb-5">Visvesvaraya Technological University</p>
            <div className="flex justify-between items-center text-label text-white/50 tracking-widest uppercase">
              <span>2021 – 2025</span>
              <span className="text-[var(--accent-gold)] font-medium">CGPA 7.2 / 10</span>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
