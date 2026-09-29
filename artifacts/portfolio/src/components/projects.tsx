import Section3D, { type ShapeId } from "./section-3d";
import { motion } from "framer-motion";

type Project = { num: string; title: string; context: string; desc: string; tools: string[]; coverage: string[] };

const ASSESSMENTS: Project[] = [
  {
    num: "01",
    title: "Production Android APK Security Assessments",
    context: "Professional work · Wizzybox Private Limited · Client: Finacus Solutions Pvt. Ltd. (Banking & Financial Domain)",
    desc: "100+ production Android APK security assessments aligned to OWASP MASVS / MASTG and the OWASP Mobile Top 10 — static analysis, APK reverse engineering, dynamic/runtime testing and Frida-based dynamic testing (60+ applications), followed by CVSS-rated reporting, remediation support, retesting and closure.",
    tools: ["MobSF", "JADX", "Apktool", "Frida", "Burp Suite", "ADB", "Android Studio"],
    coverage: ["SSL pinning testing & bypass", "Root & emulator detection", "Certificate validation", "Debugging, developer mode & proxy/VPN detection", "App integrity & anti-hooking protections", "Insecure data storage & hardcoded secrets", "Android component configuration", "Cryptographic implementations"],
  },
  {
    num: "02",
    title: "API & Web Application VAPT",
    context: "Professional work · Wizzybox Private Limited · Client: Finacus Solutions Pvt. Ltd. (Banking & Financial Domain)",
    desc: "Intercepting API traffic of the banking applications with Burp Suite to test the REST APIs behind them, plus web application VAPT with Burp Suite and OWASP ZAP against OWASP Top 10 risk areas — every finding validated with reproducible PoC steps and reported with CVSS and CWE.",
    tools: ["Burp Suite", "OWASP ZAP", "Postman"],
    coverage: ["Authentication & authorization", "BOLA / IDOR", "Injection vulnerabilities", "Session handling", "Insecure data handling", "OWASP Top 10 & OWASP API Security Top 10"],
  },
];

const LAB_PROJECTS: Project[] = [
  {
    num: "01",
    title: "Web Application Penetration Testing Lab",
    context: "Lab project · Deliberately vulnerable applications (DVWA, WebGoat)",
    desc: "Tested deliberately vulnerable web applications (DVWA, WebGoat) across the OWASP Top 10, and practised authentication and session testing — login bypass, session token analysis, privilege escalation and request manipulation — using Burp Suite and OWASP ZAP.",
    tools: ["Burp Suite", "OWASP ZAP", "SQLmap", "DVWA", "WebGoat"],
    coverage: ["SQL injection", "Cross-site scripting (XSS)", "CSRF", "Broken authentication", "Session management flaws", "Broken access control"],
  },
];

type SectionProps = { id: string; num: string; label: string; side: "left" | "right"; bg: string; items: Project[]; shape: ShapeId };

function ProjectSection({ id, num, label, side, bg, items, shape }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-clip ${bg}`}>
      <div className={`absolute ${side === "left" ? "left-[-1rem]" : "right-[-1rem]"} top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.05] leading-none select-none pointer-events-none`} aria-hidden="true">{num}</div>
      <Section3D shape={shape} side={side} />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-label text-[var(--accent-gold)]">{num} — {label}</h2>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="flex flex-col gap-0">
          {items.map((p, idx) => (
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
                <p className="text-label text-[var(--text-ink-light)] mb-4">{p.context}</p>
                <p className="text-body text-[var(--text-ink-muted)] mb-8 max-w-2xl">{p.desc}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-label text-[var(--accent-gold)] font-medium mb-4">Test Coverage</p>
                    <ul className="flex flex-col gap-2.5">
                      {p.coverage.map((f, i) => (
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

export default function Projects() {
  return <ProjectSection id="assessments" num="06" label="Security Assessments (VAPT)" side="left" bg="bg-[var(--bg-paper)]" items={ASSESSMENTS} shape="graph" />;
}

export function LabProjects() {
  return <ProjectSection id="projects" num="08" label="Projects" side="left" bg="bg-[var(--bg-paper)]" items={LAB_PROJECTS} shape="constellation" />;
}
