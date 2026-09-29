import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Static Analysis",
    desc: "Review APKs with MobSF, JADX and Apktool: application logic, Android component configurations, hardcoded secrets, data storage and cryptographic implementations.",
    tools: "MobSF · JADX · Apktool",
  },
  {
    title: "Dynamic & Runtime Testing",
    desc: "Frida-based runtime testing of SSL pinning, root and emulator detection, certificate validation, debugging checks and anti-hooking protections.",
    tools: "Frida · ADB · Burp Suite",
  },
  {
    title: "API & Web Testing",
    desc: "Intercept API traffic to test authentication, authorization, BOLA/IDOR, insecure data handling and injection; web application VAPT against the OWASP Top 10.",
    tools: "Burp Suite · OWASP ZAP · Postman",
  },
  {
    title: "Validation",
    desc: "Confirm every finding with reproducible PoC steps, CVSS scoring and CWE classification.",
    tools: "PoC · CVSS · CWE",
  },
  {
    title: "Reporting",
    desc: "Write CVSS-rated vulnerability reports with remediation recommendations — 50+ authored.",
    tools: "CVSS-rated reports",
  },
  {
    title: "Remediation & Closure",
    desc: "Work with 10+ developers daily on fixes, retest fixed builds, formally close findings and deliver the final security assessment report.",
    tools: "Retesting · Closure",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="bg-[var(--bg-dark)] text-white relative overflow-hidden">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">07</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <p className="text-label text-[var(--accent-gold)]">07 — Testing Methodology</p>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-light text-4xl md:text-5xl leading-[1.1] tracking-tight text-white mb-6"
        >
          How I Test
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-body text-white/70 max-w-2xl mb-16"
        >
          The complete VAPT lifecycle I own for production Android banking applications — from testing and vulnerability validation through remediation support, retesting and closure.
        </motion.p>

        <ol className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="flex flex-col gap-3 border-r border-b border-white/10 px-6 md:px-8 py-8"
            >
              <span className="text-label text-[var(--accent-gold)]">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-light text-white leading-tight">{s.title}</h3>
              <p className="text-body text-white/70 leading-relaxed">{s.desc}</p>
              <p className="mt-auto pt-2 text-label text-white/55">{s.tools}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
