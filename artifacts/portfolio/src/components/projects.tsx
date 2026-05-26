import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    title: "Android Banking APK — Security Assessment Lab",
    description:
      "Comprehensive static and dynamic security assessment on Android banking APKs. JADX for source code analysis, MobSF for automated static scanning, Frida for runtime SSL pinning and root detection bypass.",
    tools: ["Frida", "MobSF", "JADX", "Apktool", "Burp Suite"],
    findings: [
      "15+ OWASP Mobile Top 10 vulnerabilities identified across M1–M10",
      "10+ hidden API endpoints surfaced after SSL pinning and root detection bypass",
      "Hardcoded credentials, insecure SharedPreferences, and weak certificate handling",
      "API layer: authentication weaknesses, broken access control, insecure data transmission",
      "Frida scripts for SSL pinning, root detection, and certificate validation bypass",
    ],
  },
  {
    num: "02",
    title: "Web Application Penetration Testing Lab",
    description:
      "Web application penetration testing across the OWASP Top 10 using DVWA and WebGoat to identify, exploit, and document complex vulnerabilities with full proof-of-concept reproduction steps.",
    tools: ["Burp Suite", "OWASP ZAP", "SQLMap", "DVWA", "WebGoat"],
    findings: [
      "SQL Injection, XSS, and CSRF exploitation with full PoC documentation",
      "Authentication bypass via login token manipulation and session fixation",
      "Privilege escalation and IDOR testing across horizontal and vertical boundaries",
      "Session token analysis: entropy testing, cookie flag validation",
      "Request manipulation and parameter tampering via Burp Suite Repeater",
    ],
  },
  {
    num: "03",
    title: "Network Security — Traffic Analysis & Enumeration",
    description:
      "Network reconnaissance and packet capture across enterprise lab environments. Host enumeration, service discovery, and unencrypted traffic analysis using Nmap, Wireshark, and custom Bash scripts.",
    tools: ["Nmap", "Wireshark", "Linux CLI", "Bash Scripting"],
    findings: [
      "50+ live hosts and 30+ insecure service configurations identified via Nmap",
      "Captured and analysed 1,000+ HTTP, DNS, and FTP packets with Wireshark",
      "Unencrypted sensitive data flagged in FTP/Telnet/HTTP traffic",
      "OS detection, version scanning, and service enumeration across lab subnets",
      "Custom Bash scripts for automated host enumeration and output parsing",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="mono text-primary text-lg mr-4">// 04</span>
            Projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative grid md:grid-cols-[80px_1fr] gap-6 md:gap-12 py-12 border-b border-white/5 last:border-0"
              data-testid={`card-project-${idx}`}
            >
              {/* Number */}
              <div className="hidden md:flex items-start pt-1">
                <span className="mono text-5xl font-black text-white/8 select-none leading-none">
                  {project.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="md:hidden mono text-sm text-primary">{project.num}.</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-white/55 text-sm leading-[1.8] mb-6 max-w-2xl">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Findings */}
                  <div>
                    <h4 className="mono text-xs text-primary mb-3 border-b border-primary/20 pb-2">
                      Key Findings
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {project.findings.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-white/60 leading-[1.7]">
                          <span className="text-primary shrink-0 mt-1 text-xs">—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="mono text-xs text-primary mb-3 border-b border-primary/20 pb-2">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 border border-white/10 text-white/70 text-xs mono hover:border-primary hover:text-primary transition-colors cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
