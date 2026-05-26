import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Security Test Engineer",
      company: "WizzyBox Private Limited",
      client: "Client: Banking & Financial Domain (Ongoing)",
      type: "Full-Time",
      location: "Bengaluru, India",
      period: "Jan 2026 – Present",
      highlight: "Promoted from intern to full-time within six months based on findings quality.",
      achievements: [
        "Performed Android mobile application security testing across 20+ banking APKs — covering static analysis, reverse engineering, dynamic testing, API security assessment, and remediation validation.",
        "Developed custom Frida scripts to bypass SSL pinning, root detection, and certificate validation across 10+ banking APKs — enabling full API traffic visibility in production apps.",
        "Performed APK reverse engineering using JADX and Apktool to identify hardcoded API keys, insecure storage, and business logic flaws.",
        "Static analysis with MobSF across all applications: exposed Android components, unprotected broadcast receivers, dangerous permission configurations, and insecure data storage patterns.",
        "Dynamic analysis with Burp Suite: identified authentication bypasses, Broken Object Level Authorization (BOLA), IDOR, and injection vulnerabilities in REST APIs.",
        "Delivered full OWASP Mobile Top 10 (M1 through M10) coverage on every assessment — insecure data storage, insecure communication, improper authentication, insufficient cryptography, code tampering, and extraneous functionality.",
        "Authored 50+ CVSS-rated vulnerability reports with proof-of-concept steps, business impact analysis, and remediation guidance — contributing to a 30% reduction in MTTR.",
        "Worked directly with development teams through the remediation cycle — explaining findings, verifying fixes, and formally closing vulnerabilities.",
      ],
    },
    {
      role: "Security Test Engineer — Intern",
      company: "WizzyBox Private Limited",
      client: "",
      type: "Internship",
      location: "Bengaluru, India",
      period: "Apr 2025 – Aug 2025",
      highlight: "",
      achievements: [
        "Android APK security testing on 5+ mobile applications using MobSF, JADX, Apktool, and Burp Suite under senior engineer mentorship — building production-level proficiency in static and dynamic analysis from day one.",
        "Static analysis: identified insecure data storage, hardcoded credentials, exported activities without access controls, and misconfigured broadcast receivers.",
        "Documented 20+ vulnerabilities with structured findings reports, reproduction steps, and prioritised remediation recommendations.",
        "Supported API security testing and dynamic analysis — traffic interception with Burp Suite, correlating runtime behaviour with static findings to build complete, evidence-backed vulnerability reports.",
        "Promoted to full-time Security Test Engineer within six months based on report quality and technical output.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary mr-3">03.</span> Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
        </motion.div>

        <div className="relative border-l border-primary/20 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
              data-testid={`card-experience-${idx}`}
            >
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-background border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.3)]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-5 gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-muted-foreground mt-1">{exp.company}</p>
                    {exp.client && (
                      <p className="text-sm text-primary/70 mt-0.5">{exp.client}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-secondary text-muted-foreground border border-white/10 rounded-md">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 w-fit flex-shrink-0">
                    <Calendar className="mr-2 h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Promotion highlight */}
                {exp.highlight && (
                  <div className="flex items-center gap-2 mb-5 p-3 bg-primary/5 border border-primary/15 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-primary font-medium">{exp.highlight}</p>
                  </div>
                )}

                <ul className="space-y-3 mt-2">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-3 mt-1.5 flex-shrink-0 text-xs">▹</span>
                      <span className="leading-relaxed text-sm md:text-base">{achievement}</span>
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
