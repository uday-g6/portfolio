import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    title: "Android Application Security Testing & APK Reverse Engineering",
    desc: "Hands-on Android security assessment work covering APK static analysis, reverse engineering, dynamic testing, runtime instrumentation, and validation of Android security controls.",
    tools: ["MobSF", "JADX", "Apktool", "Frida", "Burp Suite", "Android Studio"],
    findings: ["SSL Pinning", "Root Detection", "Emulator Detection", "Proxy Detection", "Anti-Hooking", "Application Integrity", "Exported Components", "Secure Storage"],
  },
  {
    num: "02",
    title: "API Security & Web Application VAPT",
    desc: "Practical web and API security testing based on OWASP methodologies, covering authentication, authorization, broken access control, BOLA/IDOR, injection, session security, endpoint security, and HTTP request manipulation.",
    tools: ["Burp Suite", "OWASP ZAP", "Postman"],
    findings: ["Authentication & authorization review", "Broken access control testing", "BOLA / IDOR validation", "Injection and session security checks", "Endpoint and request manipulation assessment"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[var(--bg-paper-dark)]">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.05] leading-none select-none pointer-events-none" aria-hidden="true">05</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-label text-[var(--accent-gold)]">05 — Projects</span>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="flex flex-col gap-0">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-12 md:py-16 border-b border-[var(--border-thin)] last:border-0 grid md:grid-cols-[100px_1fr] gap-8 md:gap-12"
            >
              <div className="hidden md:block">
                <span className="serif text-[4rem] font-light leading-none text-[var(--accent-gold)]/25 select-none">{p.num}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="md:hidden text-label text-[var(--accent-gold)] font-medium">{p.num}.</span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-ink)] tracking-tight leading-tight">{p.title}</h3>
                </div>
                <p className="text-body text-[var(--text-ink-muted)] mb-8 max-w-2xl">{p.desc}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-label text-[var(--accent-gold)] font-medium mb-4">Key Findings</p>
                    <ul className="flex flex-col gap-2.5">
                      {p.findings.map((f, i) => (
                        <li key={i} className="flex gap-2.5 text-body text-[var(--text-ink-muted)] leading-[1.8]">
                          <span className="text-[var(--accent-gold)] shrink-0 mt-0.5 text-xs">—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-label text-[var(--accent-gold)] font-medium mb-4">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tools.map((t, i) => (
                        <span key={i} className="px-3.5 py-2 bg-[var(--bg-card)] border border-[var(--border-thin)] text-[var(--text-ink-muted)] text-sm hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}