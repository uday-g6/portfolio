import { motion } from "framer-motion";

export default function Hero() {
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
        <span
          className="serif font-bold text-[22vw] leading-none text-[#111]/[0.04] uppercase tracking-tighter"
        >
          SECURITY
        </span>
      </div>

      {/* Large circle accent */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full border border-[#B8892F]/15 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full border border-[#B8892F]/20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-between flex-1 px-6 md:px-16 pb-12 pt-28">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.25em] uppercase text-[#B8892F] font-medium"
          >
            Security Test Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#111]/35"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Work
          </motion.div>
        </div>

        {/* Name — dramatic, vertically stacked */}
        <div className="flex flex-col gap-0 my-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="serif font-light leading-[0.88] tracking-[-0.03em] text-[#111]">
              <span className="block text-[clamp(5rem,14vw,13rem)]">Uday</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end gap-4 md:gap-8"
          >
            <h1 className="serif italic font-light leading-[0.88] tracking-[-0.03em] text-[#B8892F] text-[clamp(5rem,14vw,13rem)]">
              Gopal-
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-between gap-8"
          >
            <h1 className="serif font-light leading-[0.88] tracking-[-0.03em] text-[#111] text-[clamp(5rem,14vw,13rem)]">
              akrishna
            </h1>
            {/* Rotated side label */}
            <div className="hidden lg:flex flex-col items-center gap-3 shrink-0 mb-4">
              <div className="h-16 w-px bg-[#B8892F]/40" />
              <p
                className="serif italic text-lg text-[#111]/30"
                style={{ writingMode: "vertical-rl" }}
              >
                Mobile &amp; Web Security
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-black/10 pt-8"
        >
          <p className="text-[#111]/50 text-sm leading-[1.85] font-light max-w-md">
            Securing banking apps, APIs &amp; web platforms through offensive security — OWASP-aligned VAPT, Frida instrumentation, APK reverse engineering.
          </p>

          <div className="flex flex-col gap-4 items-start md:items-end shrink-0">
            <div className="flex gap-3">
              <a
                href="#contact"
                className="text-[11px] tracking-[0.15em] uppercase bg-[#111] text-white px-8 py-3.5 hover:bg-[#B8892F] transition-all duration-300 font-medium"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="text-[11px] tracking-[0.15em] uppercase border border-[#111]/20 text-[#111]/55 px-8 py-3.5 hover:border-[#B8892F] hover:text-[#B8892F] transition-all duration-300 font-medium"
              >
                View Work
              </a>
            </div>
            <div className="flex gap-4 text-[10px] text-[#111]/30 tracking-widest uppercase">
              <a href="tel:+917899169395" className="hover-line hover:text-[#B8892F] transition-colors">+91 78991-69395</a>
              <span className="opacity-40">·</span>
              <a href="mailto:udaygopalakrishna@gmail.com" className="hover-line hover:text-[#B8892F] transition-colors">udaygopalakrishna@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar — bold creative strip */}
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
          <div
            key={i}
            className={`px-8 py-6 flex flex-col gap-1 ${i < 2 ? "border-r border-white/10" : ""}`}
          >
            <span className="serif text-3xl md:text-4xl font-light text-[#B8892F] leading-none">{s.num}</span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/40">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
