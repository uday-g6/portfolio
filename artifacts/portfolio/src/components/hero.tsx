import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 pt-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.2em] uppercase text-[#C4973A] mb-8 font-medium"
      >
        Security Test Engineer — Bengaluru, India
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="serif font-light text-[clamp(4rem,12vw,11rem)] leading-[0.92] tracking-[-0.03em] text-[#111] mb-10"
      >
        Uday
        <br />
        <span className="italic text-[#C4973A]">Gopal</span>
        <br />
        akrishna
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="w-full h-px bg-[#C4973A]/30 mb-10"
      />

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <p className="text-[#111]/55 text-base md:text-lg leading-relaxed max-w-lg font-light">
          Securing mobile applications, APIs, and web platforms through
          offensive security testing — Android APK analysis, Frida
          instrumentation, OWASP-aligned VAPT.
        </p>

        <div className="flex flex-col gap-3 items-start md:items-end shrink-0">
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="#contact"
              className="text-xs tracking-[0.15em] uppercase bg-[#111] text-white px-8 py-3.5 hover:bg-[#C4973A] transition-colors font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="text-xs tracking-[0.15em] uppercase border border-[#111]/20 text-[#111]/60 px-8 py-3.5 hover:border-[#C4973A] hover:text-[#C4973A] transition-colors font-medium"
            >
              View Work
            </a>
          </div>

          <div className="flex gap-6 text-xs text-[#111]/35 tracking-widest uppercase mt-1">
            <a href="tel:+917899169395" className="hover:text-[#C4973A] transition-colors">
              +91 78991-69395
            </a>
            <span className="opacity-30">·</span>
            <a href="mailto:udaygopalakrishna@gmail.com" className="hover:text-[#C4973A] transition-colors">
              udaygopalakrishna@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 grid grid-cols-3 border-t border-black/8 pt-8 gap-4"
      >
        {[
          { num: "20+", label: "Banking APKs Tested" },
          { num: "50+", label: "Vulnerabilities Found" },
          { num: "30%", label: "MTTR Reduction" },
        ].map((s) => (
          <div key={s.num} className="flex flex-col gap-1">
            <span className="serif text-3xl md:text-4xl font-light text-[#111] leading-none">
              {s.num}
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#C4973A] font-medium">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
