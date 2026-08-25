import { motion } from "framer-motion";

const TOPICS = [
  "Web Application Penetration Testing",
  "API Security Testing",
  "Authentication & Authorization Testing",
  "Vulnerability Discovery & Validation",
  "Burp Suite",
  "OWASP ZAP",
  "Nmap",
];

export default function OffensiveSecurity() {
  return (
    <section id="offensive-security" className="relative overflow-hidden bg-[var(--bg-paper-darker)]">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">07</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-label text-[var(--accent-gold)]">07 — Offensive Security</span>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display font-light text-4xl md:text-5xl leading-[1.1] tracking-tight text-[var(--text-ink)]">
              Offensive Security
            </h3>
            <p className="text-body text-[var(--text-ink-muted)] max-w-xl">
              My offensive security approach focuses on understanding attack surfaces, identifying weaknesses, validating exploitability in authorized environments, and communicating risk clearly.
            </p>
            <div className="border border-[var(--accent-gold-border)] bg-[var(--accent-gold-muted)] px-5 py-4 self-start">
              <p className="text-label text-[var(--accent-gold)] font-medium">
                All offensive security activities are performed only in authorized environments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-3 items-stretch"
          >
            {TOPICS.map((topic) => (
              <div
                key={topic}
                className="group h-full border border-[var(--border-thin)] bg-[var(--bg-card)] px-4 py-4 transition-colors card-hover"
              >
                <p className="text-body text-[var(--text-ink-muted)] leading-relaxed">{topic}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}