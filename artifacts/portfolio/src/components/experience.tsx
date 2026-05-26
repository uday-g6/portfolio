import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Security Test Engineer",
      company: "WizzyBox Private Limited",
      period: "Jan 2026 – Present",
      achievements: [
        "Performed Android mobile application security testing across 20+ banking APKs",
        "Conducted static analysis, reverse engineering, dynamic testing, API security assessment, and remediation validation",
        "Developed custom Frida scripts for SSL pinning bypass, root detection bypass, and certificate validation bypass",
        "Performed APK reverse engineering using JADX and Apktool",
        "Identified hardcoded API keys, insecure storage, and business logic flaws",
        "Conducted MobSF static analysis and dynamic analysis using Burp Suite",
        "Identified BOLA, IDOR, authentication bypass, and injection vulnerabilities",
        "Delivered OWASP Mobile Top 10 security assessments and authored 50+ CVSS-rated vulnerability reports",
        "Contributed to 30% MTTR reduction by working directly with developers for remediation validation",
      ],
    },
    {
      role: "Security Test Engineer Intern",
      company: "WizzyBox Private Limited",
      period: "Apr 2025 – Aug 2025",
      achievements: [
        "Android APK security testing on 5+ applications",
        "Static & dynamic analysis, Burp Suite traffic interception, vulnerability documentation, API security testing support",
        "Promoted to full-time within six months due to exceptional performance",
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
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-background border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.3)]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              
              <div className="glass-card p-6 md:p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 w-fit">
                    <Calendar className="mr-2 h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-3 mt-1.5 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{achievement}</span>
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
