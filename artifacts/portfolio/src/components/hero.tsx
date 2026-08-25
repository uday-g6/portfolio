import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import TiltCard from "./tilt-card";

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
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[var(--bg-paper-light)]"
    >
      {/* Giant decorative background word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="serif font-bold text-[22vw] leading-none text-[var(--text-ink)]/[0.04] uppercase tracking-tighter">
          SECURITY
        </span>
      </div>

      {/* Circle accents */}
      <div className="absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full border border-[var(--accent-gold)]/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full border border-[var(--accent-gold)]/20 pointer-events-none" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-between flex-1 px-6 md:px-16 pb-12 pt-28">
        {/* Top label row */}
        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-label text-[var(--accent-gold)]"
          >
            Security Engineer | Application Security | Offensive Security
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-label text-[var(--text-ink-muted)]"
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
            className="font-display font-light leading-[0.92] tracking-[-0.03em] text-[var(--text-ink)] text-[clamp(5.5rem,15vw,14rem)]"
          >
            Uday G
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-[var(--text-ink-muted)] text-xl md:text-2xl font-light tracking-wide max-w-2xl"
          >
            Security Engineer specializing in Application & Offensive Security
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 text-[var(--text-ink-muted)] text-lg md:text-xl font-light tracking-wide max-w-3xl"
          >
            Application Security | Android & Mobile Security | API Security | Web VAPT | Penetration Testing | Frida & APK Reverse Engineering
          </motion.p>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-[var(--border-thin)] pt-8"
        >
          <p className="text-[var(--text-ink-muted)] text-sm md:text-base leading-[1.85] font-light max-w-md">
            I'm a Security Engineer focused on finding, validating, and helping remediate security vulnerabilities across web, API, and Android applications. My work combines manual security testing, reverse engineering, dynamic analysis, runtime instrumentation, and practical vulnerability validation.
          </p>

          <div className="flex flex-col gap-4 items-start md:items-end shrink-0">
            <div className="flex gap-3">
              <a href="#experience" className="btn-primary">
                View My Work
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                Download Resume
              </a>
            </div>
            <div className="flex gap-4 text-label text-[var(--text-white-dim)] tracking-widest uppercase">
              <a href="#contact" className="hover:text-[var(--accent-gold)] transition-colors">Contact Me</a>
              <span className="opacity-40">·</span>
              <a href="https://linkedin.com/in/uday-g-" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-gold)] transition-colors">LinkedIn</a>
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
        <span className="text-label text-[var(--text-ink-light)] group-hover:text-[var(--accent-gold)] transition-colors">
          Scroll
        </span>
        <div className="relative w-px h-12 bg-[var(--border-thin)] overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[var(--accent-gold)]"
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
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 bg-[var(--bg-dark)] text-white"
      >
        {[
          { num: "80+", label: "Android Applications Assessed" },
          { num: "40+", label: "Applications Tested with Frida" },
          { num: "50+", label: "Vulnerability Reports" },
          { num: "7+", label: "Development Teams Supported" },
        ].map((s, i) => (
          <TiltCard
            key={i}
            maxTilt={12}
            className={`px-6 md:px-8 py-6 flex flex-col gap-1 hover:bg-white/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(184,137,47,0.35)] ${i < 3 ? "border-r border-white/10" : ""}`}
          >
            <span className="serif text-3xl md:text-4xl font-light text-[var(--accent-gold)] leading-none">{s.num}</span>
            <span className="text-label text-white/65">{s.label}</span>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
}