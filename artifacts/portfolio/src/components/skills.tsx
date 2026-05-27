import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_TIPS: Record<string, string> = {
  "Android APK Security Testing": "Full lifecycle security testing of Android apps — static, dynamic, and API layers",
  "APK Reverse Engineering": "Decompile APKs with JADX & Apktool to expose logic, keys, and hidden endpoints",
  "Static Analysis": "Source-level review for insecure storage, hardcoded secrets, and dangerous permissions",
  "Dynamic Analysis": "Runtime testing with live traffic interception and behavioural observation",
  "SSL Pinning Bypass": "Custom Frida scripts to bypass certificate pinning on banking APKs",
  "Root Detection Bypass": "Hook root-check routines at runtime to enable testing on rooted devices",
  "Certificate Validation Bypass": "Override cert validation logic to intercept HTTPS traffic",
  "Frida Instrumentation": "JavaScript-based runtime hooking to modify app behaviour on the fly",
  "Runtime Instrumentation": "Inject logic into running processes without modifying the APK",
  "MobSF": "Automated static & dynamic analysis framework for mobile applications",
  "JADX": "Java decompiler for reading APK source code and identifying vulnerabilities",
  "Apktool": "Decode and rebuild APKs for deep inspection and smali-level patching",
  "ADB": "Android Debug Bridge for device interaction, log capture, and file extraction",
  "Android Studio": "IDE used for building test harnesses and emulator-based dynamic testing",
  "Web Application Penetration Testing": "End-to-end OWASP-aligned testing of web apps and their backends",
  "OWASP Top 10": "Systematic coverage of the 10 most critical web application risks",
  "SQL Injection": "Payload crafting to extract data or bypass authentication via SQL flaws",
  "Cross-Site Scripting (XSS)": "Identify and exploit reflected, stored, and DOM-based XSS",
  "CSRF Testing": "Verify token implementation and SameSite cookie enforcement",
  "Broken Access Control": "Test horizontal and vertical privilege escalation across endpoints",
  "Authentication Testing": "Credential brute-force, token entropy, and session fixation checks",
  "Session Management": "Analyse session lifecycle, expiry, fixation, and cookie flags",
  "IDOR Testing": "Identify insecure direct object references that expose other users' data",
  "BOLA Testing": "Broken Object Level Authorisation — top API security risk per OWASP",
  "API Security Testing": "REST endpoint enumeration, auth bypass, and data exposure checks",
  "REST API Security": "Test API contracts for over-exposure, auth gaps, and injection points",
  "Burp Suite": "Primary interception proxy for manual web and API penetration testing",
  "OWASP ZAP": "Open-source scanner for automated and manual web application testing",
  "OWASP Mobile Top 10": "Full M1–M10 coverage on every mobile application assessment",
  "CVSS Scoring": "Assign standardised severity scores to each finding for prioritisation",
  "CVE Analysis": "Research known CVEs to assess exploitability in client environments",
  "Vulnerability Assessment": "Systematic identification and classification of security weaknesses",
  "Penetration Testing Methodology": "Structured approach: recon → enum → exploit → report",
  "Secure SDLC": "Embedding security checkpoints across the software development lifecycle",
  "Threat Modelling": "Identify attack surfaces and prioritise controls using STRIDE/DREAD",
  "Secure Code Review": "Manual review of source code for logic flaws and insecure patterns",
  "SAST": "Static Application Security Testing — automated code-level vulnerability scanning",
  "DAST": "Dynamic Application Security Testing — black-box runtime scanning",
  "Security Reporting": "CVSS-rated, reproducible vulnerability reports with remediation steps",
  "Frida": "Dynamic instrumentation toolkit — core tool for mobile runtime hooking",
  "Nmap": "Network scanner for host discovery, port scanning, and service detection",
  "Wireshark": "Packet analyser for inspecting unencrypted protocol traffic",
  "Metasploit": "Exploitation framework used in lab and CTF environments",
  "Kali Linux": "Primary penetration testing OS for tooling and lab work",
  "Ubuntu": "Server OS used for hosting test environments and automation scripts",
  "Linux CLI": "Command-line proficiency for scripting, log analysis, and tool automation",
  "Bash Scripting": "Automate enumeration, reporting, and test workflows",
  "Python": "Scripting for custom payloads, automation, and data processing",
  "Git": "Version control for managing scripts, reports, and config files",
};

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

function SkillTag({ skill }: { skill: string }) {
  const [hovered, setHovered] = useState(false);
  const tip = SKILL_TIPS[skill];

  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.span
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`block px-4 py-2.5 border text-sm cursor-default transition-colors ${
          hovered
            ? "border-[#B8892F] text-[#B8892F]"
            : "border-white/20 text-white/85"
        }`}
      >
        {skill}
      </motion.span>

      <AnimatePresence>
        {hovered && tip && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 mb-2 z-50 w-64 bg-[#1a1a1a] border border-[#B8892F]/30 px-3.5 py-2.5 pointer-events-none"
          >
            <p className="text-xs text-white/75 leading-relaxed">{tip}</p>
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#B8892F]/30" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
                <span className={`text-xs ${active === c.id ? "text-[#B8892F]" : "text-white/35"}`}>{c.count}</span>
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
                    <SkillTag key={`${active}-${i}`} skill={skill} />
                  ))}
                </div>
                <p className="mt-6 text-[10px] tracking-widest uppercase text-white/25">Hover a skill for details</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
