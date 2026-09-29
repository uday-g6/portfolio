import { motion } from "framer-motion";
import Section3D from "./section-3d";

const EXPERIENCES = [
  {
    role: "Security Test Engineer",
    company: "Wizzybox Private Limited",
    type: "Full-Time",
    location: "Bengaluru, India",
    period: "Jan 2026 – Present",
    client: "Finacus Solutions Pvt. Ltd. — Banking & Financial Domain",
    bullets: [
      "Own the complete VAPT lifecycle for production Android banking applications: security testing, vulnerability identification and validation, developer remediation support, retesting and final security assessment reporting.",
      "Completed 100+ production Android APK security assessments covering static analysis with MobSF, JADX and Apktool, APK reverse engineering, dynamic/runtime security testing and API security testing.",
      "Performed Frida-based dynamic testing across 60+ applications for runtime security testing and validation, covering SSL pinning testing and bypass, root detection, emulator detection, certificate validation and debugging checks.",
      "Reverse-engineered APKs with JADX and Apktool to review application logic, Android component configurations, hardcoded secrets, data storage and cryptographic implementations.",
      "Tested Android runtime security controls including USB and wireless debugging, developer mode, proxy/VPN detection, screen overlay and screen recording protections, app integrity, installation source validation and anti-hooking protections.",
      "Intercepted API traffic with Burp Suite to test authentication and authorization, BOLA/IDOR, insecure data handling and injection vulnerabilities across banking REST APIs.",
      "Conducted web application VAPT with Burp Suite and OWASP ZAP against OWASP Top 10 risk areas.",
      "Validated every finding with reproducible PoC steps, CVSS scoring and CWE classification, and authored 50+ CVSS-rated vulnerability reports with remediation recommendations.",
      "Work with 10+ developers daily on remediation, retesting of fixed builds and formal closure, then deliver the final security assessment report to stakeholders.",
    ],
  },
  {
    role: "Security Test Engineer Intern",
    company: "Wizzybox Private Limited",
    type: "Internship",
    location: "Bengaluru, India",
    period: "Apr 2025 – Aug 2025",
    client: "",
    bullets: [
      "Performed Android application security testing using MobSF, JADX, Apktool and Burp Suite, covering static analysis, application configuration review and dynamic security testing.",
      "Identified insecure data storage, hardcoded credentials, exported Android components and misconfigured broadcast receivers, documented with remediation recommendations.",
      "Supported vulnerability verification and security testing activities.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-clip bg-[var(--bg-paper-darker)]">
      <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">02</div>
      <Section3D shape="timeline" side="left" />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-label text-[var(--accent-gold)]">02 — Experience</h2>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="flex flex-col gap-0">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-12 md:py-16 border-b border-[var(--border-thin)] last:border-0 grid md:grid-cols-[220px_1fr] gap-8 md:gap-16"
            >
              {/* Left meta */}
              <div className="flex flex-col gap-4">
                <span className="text-label text-[var(--accent-gold)]">{exp.period}</span>
                <div className="w-8 h-px bg-[var(--accent-gold-border)]" />
                <h3 className="text-2xl font-semibold text-[var(--text-ink)] leading-tight">{exp.role}</h3>
                <dl className="flex flex-col gap-2 text-sm">
                  <div>
                    <dt className="text-label text-[var(--text-ink-light)]">Employer</dt>
                    <dd className="text-[var(--text-ink)] font-medium">{exp.company}</dd>
                  </div>
                  {exp.client && (
                    <div>
                      <dt className="text-label text-[var(--text-ink-light)]">Client</dt>
                      <dd className="text-[var(--text-ink-muted)]">{exp.client}</dd>
                    </div>
                  )}
                </dl>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-label border border-[var(--border-thin)] text-[var(--text-ink-muted)] px-2.5 py-1.5 font-medium">{exp.type}</span>
                  <span className="text-label border border-[var(--border-thin)] text-[var(--text-ink-muted)] px-2.5 py-1.5 font-medium">{exp.location}</span>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6">
                <ul className="flex flex-col gap-3.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-body text-[var(--text-ink-muted)] leading-[1.85]">
                      <span className="text-[var(--accent-gold)] shrink-0 mt-1.5 text-xs">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}