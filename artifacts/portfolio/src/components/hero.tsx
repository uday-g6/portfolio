import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#F8F5EF]"
    >
      {/* Giant decorative background word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="serif font-bold text-[22vw] leading-none text-[#111]/[0.04] uppercase tracking-tighter">
          SECURITY
        </span>
      </div>

      {/* Circle accents */}
      <div className="absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full border border-[#B8892F]/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full border border-[#B8892F]/20 pointer-events-none" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-between flex-1 px-6 md:px-16 pb-12 pt-28">
        {/* Top label row */}
        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.25em] uppercase text-[#B8892F] font-medium"
          >
            Security Test Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.2em] uppercase text-[#111]/55 font-medium"
          >
            Bengaluru, India
          </motion.div>
        </div>

        {/* Name */}
        <div className="my-auto py-12">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="serif font-light leading-[0.92] tracking-[-0.03em] text-[#111] text-[clamp(5.5rem,15vw,14rem)]"
          >
            Uday G
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-[#111]/65 text-xl md:text-2xl font-light tracking-wide max-w-lg"
          >
            Mobile &amp; Web Application Security · VAPT · API Security
          </motion.p>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-black/10 pt-8"
        >
          <p className="text-[#111]/65 text-sm md:text-base leading-[1.85] font-light max-w-md">
            Securing banking apps, APIs &amp; web platforms through offensive security — OWASP-aligned VAPT, Frida instrumentation, APK reverse engineering.
          </p>

          <div className="flex flex-col gap-4 items-start md:items-end shrink-0">
            <div className="flex gap-3">
              <a href="#contact" className="text-[11px] tracking-[0.15em] uppercase bg-[#111] text-white px-8 py-3.5 hover:bg-[#B8892F] transition-all duration-300 font-medium">
                Get in Touch
              </a>
              <a href="#experience" className="text-[11px] tracking-[0.15em] uppercase border border-[#111]/25 text-[#111]/65 px-8 py-3.5 hover:border-[#B8892F] hover:text-[#B8892F] transition-all duration-300 font-medium">
                View Work
              </a>
            </div>
            <div className="flex gap-4 text-xs text-[#111]/55 tracking-widest uppercase">
              <a href="tel:+917899169395" className="hover:text-[#B8892F] transition-colors">+91 78991-69395</a>
              <span className="opacity-40">·</span>
              <a href="mailto:udaygopalakrishna@gmail.com" className="hover:text-[#B8892F] transition-colors">udaygopalakrishna@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-[120px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#111]/35 font-medium group-hover:text-[#B8892F] transition-colors">
          Scroll
        </span>
        <div className="relative w-px h-12 bg-[#111]/12 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#B8892F]"
            style={{ height: "40%" }}
            animate={{ y: ["0%", "250%", "250%"] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
              times: [0, 0.6, 1],
            }}
          />
        </div>
      </motion.a>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 grid grid-cols-3 bg-[#111] text-white"
      >
        {[
          { num: "20+", label: "Banking APKs Tested" },
          { num: "50+", label: "Vulnerabilities Found" },
          { num: "30%", label: "MTTR Reduction" },
        ].map((s, i) => (
          <div key={i} className={`px-6 md:px-8 py-6 flex flex-col gap-1 ${i < 2 ? "border-r border-white/10" : ""}`}>
            <span className="serif text-3xl md:text-4xl font-light text-[#B8892F] leading-none">{s.num}</span>
            <span className="text-xs tracking-[0.15em] uppercase text-white/65">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
