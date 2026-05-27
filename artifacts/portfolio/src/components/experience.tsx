import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Security Test Engineer",
    company: "WizzyBox Private Limited",
    type: "Full-Time",
    domain: "Banking & Financial Domain",
    period: "Jan 2026 – Present",
    callout: "Promoted from intern to full-time within six months based on findings quality.",
    bullets: [
      "Performed Android mobile application security testing across 20+ banking APKs — static analysis, reverse engineering, dynamic testing, API security assessment, and remediation validation.",
      "Developed custom Frida scripts to bypass SSL pinning, root detection, and certificate validation across 10+ banking APKs.",
      "APK reverse engineering with JADX and Apktool — identified hardcoded API keys, insecure SharedPreferences, and business logic flaws.",
      "Static analysis with MobSF: exposed unprotected broadcast receivers, dangerous permissions, and insecure data storage.",
      "Dynamic analysis with Burp Suite: authentication bypasses, BOLA, IDOR, and injection vulnerabilities in REST APIs.",
      "Full OWASP Mobile Top 10 (M1–M10) coverage on every assessment.",
      "50+ CVSS-rated vulnerability reports — contributing to a 30% MTTR reduction.",
    ],
  },
  {
    role: "Security Test Engineer",
    company: "WizzyBox Private Limited",
    type: "Internship",
    domain: "",
    period: "Apr 2025 – Aug 2025",
    callout: "",
    bullets: [
      "Android APK security testing across 5+ applications using MobSF, JADX, Apktool, and Burp Suite.",
      "Static analysis: insecure data storage, hardcoded credentials, exported activities without access controls.",
      "Documented 20+ vulnerabilities with structured reports, reproduction steps, and remediation recommendations.",
      "Supported API security testing — traffic interception, correlating runtime with static findings.",
      "Promoted to full-time Security Test Engineer within six months.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#F8F5EF]">
      {/* Big decorative number */}
      <div
        className="absolute left-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[#111]/[0.04] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        03
      </div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8892F] font-medium">
            03 — Experience
          </span>
          <div className="h-px w-16 bg-[#B8892F]/30" />
        </motion.div>

        <div className="flex flex-col gap-0">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-12 md:py-16 border-b border-black/8 last:border-0 grid md:grid-cols-[220px_1fr] gap-8 md:gap-16"
            >
              {/* Left */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8892F] font-medium">{exp.period}</span>
                <div className="w-8 h-px bg-[#B8892F]/40" />
                <p className="serif text-2xl font-light text-[#111] leading-tight">{exp.role}</p>
                <p className="text-sm text-[#111]/50 font-light">{exp.company}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-[10px] tracking-widest uppercase border border-black/12 text-[#111]/35 px-2.5 py-1 font-medium">
                    {exp.type}
                  </span>
                  {exp.domain && (
                    <span className="text-[10px] tracking-widest uppercase border border-[#B8892F]/30 text-[#B8892F] px-2.5 py-1 font-medium">
                      {exp.domain}
                    </span>
                  )}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6">
                {exp.callout && (
                  <div className="bg-[#111] text-white px-6 py-4 border-l-2 border-[#B8892F] flex items-start gap-3">
                    <span className="text-[#B8892F] text-lg leading-none mt-0.5">✦</span>
                    <p className="serif italic font-light text-sm text-white/80 leading-relaxed">
                      {exp.callout}
                    </p>
                  </div>
                )}
                <ul className="flex flex-col gap-3.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#111]/60 leading-[1.8] font-light">
                      <span className="text-[#B8892F] shrink-0 mt-1.5 text-xs">—</span>
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
