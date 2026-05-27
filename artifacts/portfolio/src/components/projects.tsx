import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    title: "Android Banking APK Security Assessment",
    desc: "Static and dynamic security assessment of Android banking APKs using Frida, MobSF, JADX, and Burp Suite — full OWASP Mobile Top 10 coverage.",
    tools: ["Frida", "MobSF", "JADX", "Apktool", "Burp Suite"],
    findings: ["15+ OWASP Mobile Top 10 vulnerabilities", "10+ hidden API endpoints via SSL/root bypass", "Hardcoded credentials & insecure SharedPreferences", "API: broken access control & insecure transmission", "Custom Frida scripts for pinning/root bypass"],
  },
  {
    num: "02",
    title: "Web Application Penetration Testing Lab",
    desc: "OWASP Top 10 testing on DVWA and WebGoat — exploiting and documenting vulnerabilities with full proof-of-concept reproduction steps.",
    tools: ["Burp Suite", "OWASP ZAP", "SQLMap", "DVWA", "WebGoat"],
    findings: ["SQL Injection, XSS, CSRF with full PoC", "Authentication bypass via token manipulation", "Privilege escalation and IDOR testing", "Session entropy analysis & cookie flag validation", "Burp Suite Repeater parameter tampering"],
  },
  {
    num: "03",
    title: "Network Security & Traffic Analysis",
    desc: "Network reconnaissance and packet capture across enterprise lab environments — host enumeration, service discovery, and plaintext traffic analysis.",
    tools: ["Nmap", "Wireshark", "Linux CLI", "Bash Scripting"],
    findings: ["50+ live hosts & 30+ insecure service configs", "1,000+ HTTP, DNS, FTP packets analysed", "Unencrypted sensitive data in FTP/Telnet/HTTP", "OS detection, version scanning & service enum", "Bash scripts for automated enumeration"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#EDE6D6]">
      {/* Big decorative number */}
      <div
        className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[#111]/[0.05] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        04
      </div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8892F] font-medium">
            04 — Projects
          </span>
          <div className="h-px w-16 bg-[#B8892F]/30" />
        </motion.div>

        <div className="flex flex-col gap-0">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-12 md:py-16 border-b border-black/8 last:border-0 grid md:grid-cols-[100px_1fr] gap-8 md:gap-12"
            >
              {/* Number */}
              <div className="hidden md:block">
                <span className="serif text-[4rem] font-light leading-none text-[#B8892F]/20 select-none">
                  {p.num}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="md:hidden text-[10px] tracking-widest uppercase text-[#B8892F] font-medium">{p.num}.</span>
                  <h3 className="serif font-light text-2xl md:text-3xl text-[#111] tracking-tight leading-tight">{p.title}</h3>
                </div>
                <p className="text-[#111]/50 text-sm leading-[1.85] font-light mb-8 max-w-2xl">{p.desc}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8892F] font-medium mb-4">Key Findings</p>
                    <ul className="flex flex-col gap-2.5">
                      {p.findings.map((f, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-[#111]/55 leading-[1.75] font-light">
                          <span className="text-[#B8892F] shrink-0 mt-0.5 text-xs">—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8892F] font-medium mb-4">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tools.map((t, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-2 bg-white border border-black/10 text-[#111]/55 text-xs font-light hover:border-[#B8892F] hover:text-[#B8892F] transition-colors cursor-default"
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
      </div>
    </section>
  );
}
