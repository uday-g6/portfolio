import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_TIPS: Record<string, string> = {
  "Android APK Security Testing": "Full-lifecycle security testing of production Android apps — static, dynamic, runtime, and API layers",
  "Mobile VAPT": "Vulnerability assessment and penetration testing of Android applications against MASVS / Mobile Top 10",
  "OWASP MASVS / MASTG": "Assessments mapped to the Mobile Application Security Verification Standard and Testing Guide",
  "APK Reverse Engineering": "Decompile APKs with JADX & Apktool to expose logic, keys, and hidden endpoints",
  "Static Analysis": "Source- and bytecode-level review for insecure storage, hardcoded secrets, and dangerous permissions",
  "Dynamic Analysis": "Runtime testing with live traffic interception and behavioural observation on device / emulator",
  "Frida": "Frida-based dynamic testing across 60+ applications for runtime security testing and validation",
  "MobSF": "Automated static & dynamic analysis framework for mobile applications",
  "JADX": "Java decompiler for reading APK source code and identifying vulnerabilities",
  "Apktool": "Decode and rebuild APKs for deep inspection and smali-level analysis",
  "ADB": "Android Debug Bridge for device interaction, log capture, and file extraction",
  "Android Component Security": "Test exported activities, services, receivers, providers, and deep links",
  "Web Application Penetration Testing": "End-to-end OWASP-aligned testing of web apps and their backends",
  "OWASP Top 10": "Systematic coverage of the 10 most critical web application risks",
  "SQL Injection": "Payload crafting to extract data or bypass authentication via SQL flaws",
  "Cross-Site Scripting (XSS)": "Identify and exploit reflected, stored, and DOM-based XSS",
  "CSRF Testing": "Verify token implementation and SameSite cookie enforcement",
  "Broken Access Control": "Test horizontal and vertical privilege escalation across endpoints",
  "Authentication Testing": "Credential handling, token entropy, session fixation, and MFA logic checks",
  "Authorization Testing": "Verify role and object-level access controls across users and endpoints",
  "Session Security": "Analyse session lifecycle, expiry, fixation, and cookie flags",
  "BOLA / IDOR": "Broken Object Level Authorisation — the top API security risk per OWASP",
  "API Security": "Auth, access-control, and data-exposure testing of REST APIs",
  "API Security Testing": "REST endpoint enumeration, auth bypass, and data-exposure checks",
  "REST API Security": "Test API contracts for over-exposure, auth gaps, and injection points",
  "OWASP API Security Top 10": "Systematic coverage of the top API-specific risks",
  "Burp Suite": "Primary interception proxy for manual web, mobile, and API testing",
  "OWASP ZAP": "Open-source proxy/scanner for web and API testing",
  "Postman": "API request crafting and workflow testing",
  "OWASP Mobile Top 10": "M1–M10 coverage on every mobile application assessment",
  "CVSS Scoring": "Assign standardised severity scores to each finding for prioritisation",
  "CWE Classification": "Map each finding to its Common Weakness Enumeration category",
  "Vulnerability Assessment": "Systematic identification and classification of security weaknesses",
  "Vulnerability Validation": "Manual confirmation and proof-of-concept for every reported finding",
  "Security Reporting": "CVSS-rated, reproducible vulnerability reports with remediation guidance",
  "Developer Remediation Support": "Explain findings, guide fixes, retest, and formally close vulnerabilities",
  "Web Application Security": "Manual, OWASP-aligned testing of web applications and their APIs",
  "Application Security": "Finding, validating, and helping remediate vulnerabilities in applications",
  "Security Misconfiguration": "Identify weak defaults, exposed interfaces, and missing hardening",
  "SSL Pinning Testing & Bypass": "Test certificate-pinning implementations and their resilience to runtime bypass using Frida",
  "Root Detection Testing": "Verify root-detection controls and how they respond to runtime tampering",
  "Emulator Detection Testing": "Verify that emulator-detection controls work as intended",
  "Certificate Validation": "Check how the app validates server certificates and handles untrusted ones",
  "Android Runtime Security Controls": "Debugging, developer mode, proxy/VPN detection, screen overlay/recording protections, app integrity, installation source and anti-hooking checks",
  "JWT Security Testing": "Review token handling, signature validation and claims in API authentication",
  "XXE": "Test XML parsers for external entity injection",
  "File Upload Security": "Test upload handling for type, content and storage weaknesses",
  "Vulnerability Validation & PoC": "Reproducible proof-of-concept steps for every reported finding",
  "Retesting & Remediation": "Retest fixed builds and formally close vulnerabilities",
  "Nmap": "Network and service discovery",
  "Wireshark": "Packet capture and traffic analysis",
  "SQLmap": "Automated SQL injection detection and validation",
  "Android Studio": "Android tooling for device/emulator setup and app inspection",
  "Kali Linux": "Primary testing distribution",
  "JavaScript": "Frida scripts and web testing",
  "Python": "Scripting for automation, custom checks, and data processing",
  "Bash": "Automate enumeration, reporting, and test workflows",
  "Git": "Version control for scripts, reports, and configuration",
};

const CATEGORIES = [
  {
    id: "mobile", label: "Android & Mobile Security",
    skills: ["Android APK Security Testing", "Mobile VAPT", "OWASP MASVS / MASTG", "OWASP Mobile Top 10", "APK Reverse Engineering", "Static Analysis", "Dynamic Analysis", "Frida", "SSL Pinning Testing & Bypass", "Root Detection Testing", "Emulator Detection Testing", "Certificate Validation", "Android Runtime Security Controls", "Android Component Security"],
  },
  {
    id: "api", label: "API Security",
    skills: ["API Security Testing", "REST API Security", "OWASP API Security Top 10", "Authentication Testing", "Authorization Testing", "BOLA / IDOR", "JWT Security Testing", "Session Security", "Broken Access Control"],
  },
  {
    id: "vapt", label: "Web Application VAPT",
    skills: ["Web Application Security", "OWASP Top 10", "SQL Injection", "Cross-Site Scripting (XSS)", "XXE", "CSRF Testing", "File Upload Security"],
  },
  {
    id: "reporting", label: "Assessment & Reporting",
    skills: ["Vulnerability Validation & PoC", "CVSS Scoring", "CWE Classification", "Security Reporting", "Retesting & Remediation", "Developer Remediation Support"],
  },
  {
    id: "tools", label: "Tools",
    skills: ["Frida", "Burp Suite", "MobSF", "JADX", "Apktool", "OWASP ZAP", "Postman", "Nmap", "Wireshark", "SQLmap", "Android Studio", "ADB", "Kali Linux", "Python", "JavaScript", "Bash", "Git"],
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
            ? "border-[var(--accent-gold)] text-[var(--accent-gold)]"
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
            className="absolute bottom-full left-0 mb-2 z-50 w-64 bg-[var(--bg-dark)] border border-[var(--accent-gold-border)] px-3.5 py-2.5 pointer-events-none"
          >
            <p className="text-xs text-white/75 leading-relaxed">{tip}</p>
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[var(--accent-gold-border)]" />
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
    <section id="skills" className="bg-[var(--bg-dark)] text-white relative overflow-hidden">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">03</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-label text-[var(--accent-gold)]">03 — Skills</h2>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                aria-pressed={active === c.id}
                className={`flex w-full min-h-[72px] items-center justify-between gap-4 text-left py-4 pr-6 border-b border-white/10 last:border-0 transition-all shrink-0 ${
                  active === c.id ? "text-[var(--accent-gold)]" : "text-white/60 hover:text-white/90"
                }`}
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  {active === c.id && <span className="w-6 h-px bg-[var(--accent-gold)] shrink-0" />}
                  <span className="text-sm tracking-wide whitespace-nowrap">{c.label}</span>
                </div>
                <span className={`w-8 text-right text-xs ${active === c.id ? "text-[var(--accent-gold)]" : "text-white/50"}`}>{c.skills.length}</span>
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
                  <span className="serif italic text-[var(--accent-gold)]/40 text-6xl font-light leading-none select-none">
                    {String(cat.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <SkillTag key={`${active}-${i}`} skill={skill} />
                  ))}
                </div>
                <p className="mt-6 text-label text-white/55">Hover a skill for details</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}