import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Security Test Engineer",
    company: "WizzyBox Private Limited",
    type: "Full-Time",
    location: "Bengaluru",
    period: "Jan 2026 – Present",
    domain: "Banking & Financial Domain",
    callout: "Promoted from intern to full-time within six months based on findings quality.",
    bullets: [
      "Performed Android mobile application security testing across 20+ banking APKs — static analysis, reverse engineering, dynamic testing, API security assessment, and remediation validation.",
      "Developed custom Frida scripts to bypass SSL pinning, root detection, and certificate validation across 10+ banking APKs — enabling full API traffic visibility in production apps.",
      "APK reverse engineering with JADX and Apktool — identified hardcoded API keys, insecure SharedPreferences, and business logic flaws.",
      "Static analysis with MobSF: exposed unprotected broadcast receivers, dangerous permission configurations, and insecure data storage patterns.",
      "Dynamic analysis with Burp Suite: identified authentication bypasses, Broken Object Level Authorization (BOLA), IDOR, and injection vulnerabilities in REST APIs.",
      "Delivered full OWASP Mobile Top 10 (M1–M10) coverage on every assessment.",
      "Authored 50+ CVSS-rated vulnerability reports with PoC steps, business impact analysis, and remediation guidance — contributing to a 30% reduction in MTTR.",
    ],
  },
  {
    role: "Security Test Engineer",
    company: "WizzyBox Private Limited",
    type: "Internship",
    location: "Bengaluru",
    period: "Apr 2025 – Aug 2025",
    domain: "",
    callout: "",
    bullets: [
      "Android APK security testing on 5+ mobile applications using MobSF, JADX, Apktool, and Burp Suite.",
      "Static analysis: identified insecure data storage, hardcoded credentials, exported activities without access controls, and misconfigured broadcast receivers.",
      "Documented 20+ vulnerabilities with structured findings reports, reproduction steps, and prioritised remediation recommendations.",
      "Supported API security testing — traffic interception with Burp Suite, correlating runtime behaviour with static findings.",
      "Promoted to full-time Security Test Engineer within six months.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium">03 / Experience</span>
        <div className="h-px flex-1 bg-[#C4973A]/20" />
      </motion.div>

      <div className="flex flex-col gap-0">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="py-12 md:py-16 border-b border-black/8 last:border-0 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
          >
            {/* Left meta */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4973A] font-medium">{exp.period}</p>
              <div className="h-px w-12 bg-[#C4973A]/40" />
              <p className="serif text-2xl font-light text-[#111] leading-snug">{exp.role}</p>
              <p className="text-sm text-[#111]/60 font-light">{exp.company}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] tracking-[0.12em] uppercase border border-black/12 text-[#111]/40 px-2.5 py-1 font-medium">
                  {exp.type}
                </span>
                {exp.domain && (
                  <span className="text-[10px] tracking-[0.12em] uppercase border border-[#C4973A]/30 text-[#C4973A] px-2.5 py-1 font-medium">
                    {exp.domain}
                  </span>
                )}
              </div>
            </div>

            {/* Right content */}
            <div className="flex flex-col gap-6">
              {exp.callout && (
                <div className="bg-[#F5F0E8] border-l-2 border-[#C4973A] pl-5 py-3.5 pr-4">
                  <p className="text-sm text-[#111]/70 font-light leading-relaxed italic serif">
                    {exp.callout}
                  </p>
                </div>
              )}
              <ul className="flex flex-col gap-3.5">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#111]/60 leading-[1.8] font-light">
                    <span className="text-[#C4973A] shrink-0 mt-1.5 text-xs">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
