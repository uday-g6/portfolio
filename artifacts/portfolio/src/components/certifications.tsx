import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionIcon from "./section-icon";

const CERTS = [
  { title: "Ethical Hacking & CTF", issuer: "IIT (ISM) Dhanbad — ChES", year: "2024" },
  { title: "Cybersecurity and Cloud Fundamentals 1.0", issuer: "Fortinet Training Institute", year: "2026" },
  { title: "Introduction to Critical Infrastructure Protection", issuer: "OPSWAT Academy", year: "2026" },
  { title: "Penetration Testing and Ethical Hacking", issuer: "LinkedIn Learning", year: "2026" },
  { title: "Learning the OWASP Top 10", issuer: "LinkedIn Learning", year: "2026" },
  { title: "OWASP API Security Top 10", issuer: "LinkedIn Learning", year: "2026" },
  { title: "Cybersecurity Fundamentals", issuer: "IBM", year: "2025" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2025" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden bg-[var(--bg-paper)]">
      <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">06</div>
      <SectionIcon icon={BadgeCheck} />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto lg:pl-[max(4rem,calc(28vw_-_max(0px,(100vw_-_80rem)/2)))]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-label text-[var(--accent-gold)]">06 — Certifications</h2>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="border-t border-[var(--border-thin)]">
          <div className="grid grid-cols-[1fr_auto_auto] gap-6 py-3 border-b border-[var(--border-thin)]">
            <span className="text-label text-[var(--text-ink-light)] font-medium">Certificate</span>
            <span className="text-label text-[var(--text-ink-light)] font-medium hidden sm:block w-44 text-right">Issuer</span>
            <span className="text-label text-[var(--text-ink-light)] font-medium w-10 text-right">Year</span>
          </div>

          {CERTS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group grid grid-cols-[1fr_auto_auto] gap-6 items-center py-5 border-b border-[var(--border-thin)] last:border-0 hover:bg-[var(--bg-paper-dark)] -mx-4 px-4 transition-colors"
            >
              <div>
                <p className="text-body text-[var(--text-ink-muted)] font-medium group-hover:text-[var(--text-ink)] transition-colors leading-snug">{cert.title}</p>
                <p className="sm:hidden text-sm text-[var(--text-ink-light)] mt-1">{cert.issuer}</p>
              </div>
              <p className="text-sm text-[var(--text-ink-light)] hidden sm:block w-44 text-right group-hover:text-[var(--accent-gold)] transition-colors">{cert.issuer}</p>
              <p className="text-sm text-[var(--text-ink-light)] w-10 text-right">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}