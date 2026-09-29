import { motion } from "framer-motion";

const TOPICS = [
  "Android APK Security Testing",
  "Static Analysis — MobSF, JADX & Apktool",
  "APK Reverse Engineering",
  "Frida-Based Dynamic Testing",
  "SSL Pinning Testing & Bypass",
  "Root & Emulator Detection Testing",
  "Certificate Validation",
  "Android Runtime Security Controls",
  "Android Component Security",
  "Insecure Data Storage & Hardcoded Secrets",
];

export default function MobileSecurity() {
  return (
    <section id="mobile-security" className="relative overflow-hidden bg-[var(--bg-paper)]">
      <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">04</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <p className="text-label text-[var(--accent-gold)]">04 — Mobile Application Security</p>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] tracking-tight text-[var(--text-ink)]">
              Mobile Application Security
            </h2>
            <p className="text-body text-[var(--text-ink-muted)] max-w-xl">
              My core work is security testing of production Android banking applications: 100+ APK security assessments combining static analysis with MobSF, JADX and Apktool, APK reverse engineering and Frida-based dynamic testing across 60+ applications. I test Android runtime security controls — debugging, developer mode, proxy/VPN detection, screen overlay and recording protections, app integrity, installation source validation and anti-hooking — and review component configurations, data storage and cryptographic implementations.
            </p>
            <div className="border border-[var(--accent-gold-border)] bg-[var(--bg-paper)] px-5 py-4 self-start">
              <p className="text-label text-[var(--accent-gold)] font-medium">
                Aligned to OWASP MASVS / MASTG and the OWASP Mobile Top 10.
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
