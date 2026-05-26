import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile Application Security",
      accent: "from-sky-500/20 to-blue-600/5",
      skills: [
        "Android APK Security Testing",
        "APK Reverse Engineering",
        "Static Analysis",
        "Dynamic Analysis",
        "SSL Pinning Bypass",
        "Root Detection Bypass",
        "Certificate Validation Bypass",
        "Frida Instrumentation",
        "Runtime Instrumentation",
        "MobSF",
        "JADX",
        "Apktool",
        "ADB",
        "Android Studio",
      ],
    },
    {
      title: "Web Application Security",
      accent: "from-violet-500/20 to-purple-600/5",
      skills: [
        "Web Application Penetration Testing",
        "OWASP Top 10",
        "SQL Injection Testing",
        "Cross-Site Scripting (XSS)",
        "CSRF Testing",
        "Broken Access Control",
        "Authentication Testing",
        "Session Management Testing",
        "Input Validation Testing",
        "IDOR Testing",
      ],
    },
    {
      title: "API Security",
      accent: "from-cyan-500/20 to-teal-600/5",
      skills: [
        "API Security Testing",
        "API Penetration Testing",
        "REST API Security",
        "Authentication & Authorization Testing",
        "BOLA Testing",
        "Broken Object Level Authorization",
        "API Traffic Interception",
        "Burp Suite",
        "OWASP ZAP",
      ],
    },
    {
      title: "Security Standards & Methodology",
      accent: "from-emerald-500/20 to-green-600/5",
      skills: [
        "OWASP Mobile Top 10 (M1–M10)",
        "OWASP Top 10",
        "CVSS Scoring",
        "CVE Analysis",
        "Vulnerability Assessment",
        "Penetration Testing Methodology",
        "Secure SDLC",
        "Threat Modelling",
        "Secure Code Review",
        "SAST",
        "DAST",
        "Security Reporting",
      ],
    },
    {
      title: "Security Tools & Platforms",
      accent: "from-orange-500/20 to-amber-600/5",
      skills: [
        "Burp Suite",
        "Frida",
        "MobSF",
        "JADX",
        "Apktool",
        "OWASP ZAP",
        "Nmap",
        "Wireshark",
        "Metasploit (Basic)",
        "Kali Linux",
        "Ubuntu",
        "Linux CLI",
        "Bash Scripting",
        "Python",
        "Git",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-24 bg-background/95 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary mr-3">02.</span> Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`glass-card p-7 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/25 transition-colors ${
                idx === skillCategories.length - 1 && skillCategories.length % 2 !== 0
                  ? "md:col-span-2 xl:col-span-1"
                  : ""
              }`}
              data-testid={`card-skills-${idx}`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${category.accent} rounded-full blur-3xl pointer-events-none`} />

              <h3 className="text-lg font-bold text-white mb-5 relative z-10">{category.title}</h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={itemVariants}
                    className="px-3 py-1.5 bg-secondary/80 hover:bg-primary/20 hover:text-primary text-sm font-medium text-muted-foreground border border-white/5 hover:border-primary/50 rounded-md transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
