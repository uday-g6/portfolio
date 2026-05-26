import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Security Test Engineer",
    company: "WizzyBox Private Limited",
    meta: "Banking & Financial Domain · Full-Time · Bengaluru",
    period: "Jan 2026 – Present",
    highlight: "Promoted from intern to full-time within six months based on findings quality.",
    bullets: [
      "Performed Android mobile application security testing across 20+ banking APKs — covering static analysis, reverse engineering, dynamic testing, API security assessment, and remediation validation.",
      "Developed custom Frida scripts to bypass SSL pinning, root detection, and certificate validation across 10+ banking APKs — enabling full API traffic visibility in production apps.",
      "APK reverse engineering with JADX and Apktool — identified hardcoded API keys, insecure SharedPreferences, and business logic flaws.",
      "Static analysis with MobSF: exposed unprotected broadcast receivers, dangerous permission configurations, and insecure data storage patterns.",
      "Dynamic analysis with Burp Suite: identified authentication bypasses, Broken Object Level Authorization (BOLA), IDOR, and injection vulnerabilities in REST APIs.",
      "Delivered full OWASP Mobile Top 10 (M1–M10) coverage on every assessment — insecure data storage, improper authentication, insufficient cryptography, and code tampering.",
      "Authored 50+ CVSS-rated vulnerability reports with PoC steps, business impact analysis, and remediation guidance — contributing to a 30% reduction in MTTR.",
      "Worked directly with development teams through the remediation cycle — explaining findings, verifying fixes, and formally closing vulnerabilities.",
    ],
  },
  {
    role: "Security Test Engineer — Intern",
    company: "WizzyBox Private Limited",
    meta: "Internship · Bengaluru",
    period: "Apr 2025 – Aug 2025",
    highlight: "",
    bullets: [
      "Android APK security testing on 5+ mobile applications using MobSF, JADX, Apktool, and Burp Suite under senior engineer mentorship.",
      "Static analysis: identified insecure data storage, hardcoded credentials, exported activities without access controls, and misconfigured broadcast receivers.",
      "Documented 20+ vulnerabilities with structured findings reports, reproduction steps, and prioritised remediation recommendations.",
      "Supported API security testing — traffic interception with Burp Suite, correlating runtime behaviour with static findings to build complete, evidence-backed reports.",
      "Promoted to full-time Security Test Engineer within six months based on report quality and technical output.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="mono text-primary text-lg mr-4">// 03</span>
            Experience
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 border-l border-white/10 pb-16 last:pb-0"
              data-testid={`card-experience-${idx}`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-primary" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium mt-0.5">{exp.company}</p>
                  <p className="mono text-xs text-white/40 mt-1">{exp.meta}</p>
                </div>
                <span className="mono text-sm text-white/50 shrink-0 mt-1">{exp.period}</span>
              </div>

              {/* Promotion callout */}
              {exp.highlight && (
                <div className="mb-6 pl-4 border-l-2 border-primary bg-primary/5 py-3 pr-4">
                  <p className="mono text-sm text-primary">{exp.highlight}</p>
                </div>
              )}

              {/* Bullets */}
              <ul className="flex flex-col gap-3">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-white/65 text-sm leading-[1.75]">
                    <span className="text-primary mt-1.5 shrink-0 text-xs">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
