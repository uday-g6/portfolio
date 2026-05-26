import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    id: "mobile",
    title: "Mobile",
    skills: ["Android APK Security Testing", "APK Reverse Engineering", "Static Analysis", "Dynamic Analysis", "SSL Pinning Bypass", "Root Detection Bypass", "Certificate Validation Bypass", "Frida Instrumentation", "Runtime Instrumentation", "MobSF", "JADX", "Apktool", "ADB", "Android Studio"],
  },
  {
    id: "web",
    title: "Web",
    skills: ["Web Application Penetration Testing", "OWASP Top 10", "SQL Injection Testing", "Cross-Site Scripting (XSS)", "CSRF Testing", "Broken Access Control", "Authentication Testing", "Session Management Testing", "Input Validation Testing", "IDOR Testing"],
  },
  {
    id: "api",
    title: "API",
    skills: ["API Security Testing", "API Penetration Testing", "REST API Security", "Authentication & Authorization Testing", "BOLA Testing", "Broken Object Level Authorization", "API Traffic Interception", "Burp Suite", "OWASP ZAP"],
  },
  {
    id: "standards",
    title: "Standards",
    skills: ["OWASP Mobile Top 10", "OWASP Top 10", "CVSS Scoring", "CVE Analysis", "Vulnerability Assessment", "Penetration Testing Methodology", "Secure SDLC", "Threat Modelling", "Secure Code Review", "SAST", "DAST", "Security Reporting"],
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["Burp Suite", "Frida", "MobSF", "JADX", "Apktool", "OWASP ZAP", "Nmap", "Wireshark", "Metasploit", "Kali Linux", "Ubuntu", "Linux CLI", "Bash Scripting", "Python", "Git"],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  return (
    <section id="skills" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="mono text-primary text-lg mr-4">// 02</span>
            Skills
          </h2>
        </motion.div>

        <div className="border border-white/10 bg-[#050505]">
          {/* Tab Bar */}
          <div className="flex overflow-x-auto border-b border-white/10 hide-scrollbar">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-4 text-sm mono whitespace-nowrap transition-colors relative ${
                  activeTab === cat.id ? "text-primary bg-white/5" : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.title}.md
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute top-0 left-0 w-full h-[1px] bg-primary" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12 min-h-[300px]">
            <AnimatePresence mode="wait">
              {SKILL_CATEGORIES.map((cat) => (
                cat.id === activeTab && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-wrap gap-3"
                  >
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 border border-white/10 bg-black text-white/80 text-sm rounded hover:border-primary hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
