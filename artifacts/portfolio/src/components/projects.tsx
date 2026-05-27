import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    title: "Android Banking APK — Security Assessment Lab",
    description:
      "Comprehensive static and dynamic security assessment of Android banking APKs. JADX for source code analysis, MobSF for automated scanning, Frida for runtime bypass of SSL pinning and root detection.",
    tools: ["Frida", "MobSF", "JADX", "Apktool", "Burp Suite"],
    findings: [
      "15+ OWASP Mobile Top 10 vulnerabilities (M1–M10)",
      "10+ hidden API endpoints discovered via SSL / root bypass",
      "Hardcoded credentials and insecure SharedPreferences",
      "API layer: broken access control, insecure transmission",
      "Custom Frida scripts for SSL pinning and root detection bypass",
    ],
  },
  {
    num: "02",
    title: "Web Application Penetration Testing Lab",
    description:
      "OWASP Top 10 testing across DVWA and WebGoat — identifying, exploiting, and documenting vulnerabilities with full proof-of-concept reproduction steps.",
    tools: ["Burp Suite", "OWASP ZAP", "SQLMap", "DVWA", "WebGoat"],
    findings: [
      "SQL Injection, XSS, CSRF exploitation with PoC documentation",
      "Authentication bypass via token manipulation and session fixation",
      "Privilege escalation and IDOR (horizontal / vertical)",
      "Session token entropy analysis and cookie flag validation",
      "Burp Suite Repeater-based request manipulation and parameter tampering",
    ],
  },
  {
    num: "03",
    title: "Network Security — Traffic Analysis & Enumeration",
    description:
      "Network reconnaissance and packet analysis across enterprise lab environments. Host enumeration, service discovery, and plaintext traffic analysis.",
    tools: ["Nmap", "Wireshark", "Linux CLI", "Bash Scripting"],
    findings: [
      "50+ live hosts and 30+ insecure service configurations via Nmap",
      "1,000+ HTTP, DNS, and FTP packets captured and analysed",
      "Unencrypted sensitive data flagged in FTP / Telnet / HTTP",
      "OS detection, version scanning, and service enumeration",
      "Custom Bash scripts for automated host enumeration",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/8 bg-[#F5F0E8]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium">04 / Projects</span>
        <div className="h-px flex-1 bg-[#C4973A]/20" />
      </motion.div>

      <div className="flex flex-col gap-0">
        {PROJECTS.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="py-12 md:py-16 border-b border-black/8 last:border-0 grid md:grid-cols-[80px_1fr] gap-8 md:gap-12"
          >
            {/* Large number */}
            <div className="flex items-start pt-1">
              <span className="serif text-6xl font-light text-[#C4973A]/25 leading-none select-none hidden md:block">
                {p.num}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="md:hidden text-[10px] tracking-widest uppercase text-[#C4973A] font-medium">{p.num}.</span>
                <h3 className="serif text-2xl md:text-3xl font-light text-[#111] tracking-tight leading-snug">
                  {p.title}
                </h3>
              </div>

              <p className="text-[#111]/50 text-sm leading-[1.85] mb-8 max-w-2xl font-light">
                {p.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4973A] font-medium mb-4">
                    Key Findings
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {p.findings.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#111]/55 leading-[1.75] font-light">
                        <span className="text-[#C4973A] shrink-0 mt-1 text-xs">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4973A] font-medium mb-4">
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-2 bg-white border border-black/10 text-[#111]/60 text-xs font-light hover:border-[#C4973A] hover:text-[#C4973A] transition-colors cursor-default tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
