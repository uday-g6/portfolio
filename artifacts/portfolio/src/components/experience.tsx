import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Security Test Engineer",
    company: "WizzyBox Private Limited",
    type: "Full-Time",
    domain: "Banking & Financial Domain",
    period: "Jan 2026 – Present",
    callout: "Promoted from Security Test Engineer Intern to full-time Security Test Engineer based on technical performance and delivery.",
    bullets: [
      "Conduct security assessments across 100+ production Android applications.",
      "Perform static analysis, APK reverse engineering, dynamic analysis, runtime security testing, and vulnerability validation.",
      "Develop and use custom Frida instrumentation across 60+ applications.",
      "Test SSL pinning, root detection, certificate validation, anti-hooking mechanisms, runtime behavior, and other security controls.",
      "Perform APK reverse engineering using JADX and Apktool.",
      "Analyze Android components, application logic, security configurations, hardcoded secrets, data storage, and cryptographic implementations.",
      "Conduct web application and API VAPT using Burp Suite, OWASP ZAP, and Postman.",
      "Test authentication, authorization, broken access control, BOLA/IDOR, injection vulnerabilities, session security, and API security.",
      "Author 50+ CVSS-rated vulnerability reports with technical evidence, PoC steps, CWE classification, impact analysis, severity, and remediation guidance.",
      "Work with 10+ development teams through vulnerability triage, remediation, retesting, and security closure.",
    ],
  },
  {
    role: "Security Test Engineer Intern",
    company: "WizzyBox Private Limited",
    type: "Internship",
    domain: "",
    period: "Apr 2025 – Aug 2025",
    callout: "",
    bullets: [
      "Performed Android application security testing using MobSF, JADX, Apktool, and Burp Suite.",
      "Conducted static analysis, application configuration review, and Android security-control testing.",
      "Identified issues including insecure data storage, hardcoded credentials, exported Android components, and misconfigured security controls.",
      "Documented findings with technical evidence and remediation recommendations.",
      "Supported vulnerability verification and security testing activities before transitioning to the full-time Security Test Engineer role.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[var(--bg-paper-light)]">
      <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">03</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-label text-[var(--accent-gold)]">03 — Experience</span>
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
                <p className="text-2xl font-semibold text-[var(--text-ink)] leading-tight">{exp.role}</p>
                <p className="text-sm text-[var(--text-ink-muted)]">{exp.company}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-label border border-[var(--border-thin)] text-[var(--text-ink-muted)] px-2.5 py-1.5 font-medium">{exp.type}</span>
                  {exp.domain && (
                    <span className="text-label border border-[var(--accent-gold-border)] text-[var(--accent-gold)] px-2.5 py-1.5 font-medium">{exp.domain}</span>
                  )}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6">
                {exp.callout && (
                  <div className="bg-[var(--bg-dark)] text-white px-6 py-4 border-l-2 border-[var(--accent-gold)] flex items-start gap-3">
                    <span className="text-[var(--accent-gold)] text-lg leading-none mt-0.5 shrink-0">✦</span>
                    <p className="text-base text-white/90 leading-relaxed">{exp.callout}</p>
                  </div>
                )}
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