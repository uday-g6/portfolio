import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "mobile",
    label: "Mobile Security",
    skills: ["Android APK Security Testing", "APK Reverse Engineering", "Static Analysis", "Dynamic Analysis", "SSL Pinning Bypass", "Root Detection Bypass", "Certificate Validation Bypass", "Frida Instrumentation", "Runtime Instrumentation", "MobSF", "JADX", "Apktool", "ADB", "Android Studio"],
  },
  {
    id: "web",
    label: "Web & API",
    skills: ["Web Application Penetration Testing", "OWASP Top 10", "SQL Injection", "Cross-Site Scripting (XSS)", "CSRF Testing", "Broken Access Control", "Authentication Testing", "Session Management", "IDOR Testing", "BOLA Testing", "API Security Testing", "REST API Security", "Burp Suite", "OWASP ZAP"],
  },
  {
    id: "standards",
    label: "Standards",
    skills: ["OWASP Mobile Top 10", "OWASP Top 10", "CVSS Scoring", "CVE Analysis", "Vulnerability Assessment", "Penetration Testing Methodology", "Secure SDLC", "Threat Modelling", "Secure Code Review", "SAST", "DAST", "Security Reporting"],
  },
  {
    id: "tools",
    label: "Tools & Tech",
    skills: ["Burp Suite", "Frida", "MobSF", "JADX", "Apktool", "OWASP ZAP", "Nmap", "Wireshark", "Metasploit", "Kali Linux", "Ubuntu", "Linux CLI", "Bash Scripting", "Python", "Git"],
  },
];

export default function Skills() {
  const [active, setActive] = useState("mobile");

  return (
    <section id="skills" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/8 bg-[#F5F0E8]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium">02 / Skills</span>
        <div className="h-px flex-1 bg-[#C4973A]/20" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left tabs */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-0 overflow-x-auto border-b lg:border-b-0 lg:border-r border-black/8 pb-4 lg:pb-0 lg:pr-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`text-left py-3 pr-6 lg:border-b border-black/6 last:border-0 text-xs tracking-[0.12em] uppercase font-medium transition-colors whitespace-nowrap lg:whitespace-normal mr-6 lg:mr-0 ${
                active === cat.id
                  ? "text-[#C4973A]"
                  : "text-[#111]/40 hover:text-[#111]/70"
              }`}
            >
              {active === cat.id && (
                <span className="inline-block w-3 h-px bg-[#C4973A] mr-2 align-middle" />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Right content */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            {CATEGORIES.map(
              (cat) =>
                cat.id === active && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="serif text-3xl md:text-4xl font-light text-[#111] mb-8 tracking-tight">
                      {cat.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 border border-black/10 bg-white text-[#111]/65 text-xs tracking-wide font-light hover:border-[#C4973A] hover:text-[#C4973A] transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
