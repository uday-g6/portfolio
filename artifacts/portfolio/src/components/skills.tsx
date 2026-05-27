import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "mobile", label: "Mobile Security", count: 14,
    skills: ["Android APK Security Testing", "APK Reverse Engineering", "Static Analysis", "Dynamic Analysis", "SSL Pinning Bypass", "Root Detection Bypass", "Certificate Validation Bypass", "Frida Instrumentation", "Runtime Instrumentation", "MobSF", "JADX", "Apktool", "ADB", "Android Studio"],
  },
  {
    id: "web", label: "Web & API", count: 14,
    skills: ["Web Application Penetration Testing", "OWASP Top 10", "SQL Injection", "Cross-Site Scripting (XSS)", "CSRF Testing", "Broken Access Control", "Authentication Testing", "Session Management", "IDOR Testing", "BOLA Testing", "API Security Testing", "REST API Security", "Burp Suite", "OWASP ZAP"],
  },
  {
    id: "standards", label: "Standards", count: 12,
    skills: ["OWASP Mobile Top 10", "OWASP Top 10", "CVSS Scoring", "CVE Analysis", "Vulnerability Assessment", "Penetration Testing Methodology", "Secure SDLC", "Threat Modelling", "Secure Code Review", "SAST", "DAST", "Security Reporting"],
  },
  {
    id: "tools", label: "Tools", count: 15,
    skills: ["Burp Suite", "Frida", "MobSF", "JADX", "Apktool", "OWASP ZAP", "Nmap", "Wireshark", "Metasploit", "Kali Linux", "Ubuntu", "Linux CLI", "Bash Scripting", "Python", "Git"],
  },
];

export default function Skills() {
  const [active, setActive] = useState("mobile");
  const cat = CATEGORIES.find(c => c.id === active)!;

  return (
    <section id="skills" className="bg-[#111] text-white relative overflow-hidden">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">02</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8892F] font-medium">02 — Skills</span>
          <div className="h-px w-16 bg-[#B8892F]/30" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex items-center justify-between text-left py-4 pr-6 border-b border-white/10 last:border-0 transition-all w-full shrink-0 ${
                  active === c.id ? "text-[#B8892F]" : "text-white/60 hover:text-white/90"
                }`}
              >
                <div className="flex items-center gap-3">
                  {active === c.id && <span className="w-6 h-px bg-[#B8892F] shrink-0" />}
                  <span className="text-sm tracking-wide">{c.label}</span>
                </div>
                <span className={`text-xs mono ${active === c.id ? "text-[#B8892F]" : "text-white/35"}`}>{c.count}</span>
              </button>
            ))}
          </div>

          {/* Skills panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-end justify-between mb-8">
                  <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">{cat.label}</h3>
                  <span className="serif italic text-[#B8892F]/40 text-6xl font-light leading-none select-none">
                    {String(cat.count).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.025 }}
                      className="px-4 py-2.5 border border-white/20 text-white/85 text-sm hover:border-[#B8892F] hover:text-[#B8892F] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
