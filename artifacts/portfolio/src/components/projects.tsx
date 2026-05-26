import { motion } from "framer-motion";
import { ShieldAlert, Globe, Activity } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Android Banking APK — Security Assessment Lab",
      icon: <ShieldAlert className="h-8 w-8 text-primary" />,
      description:
        "Comprehensive static and dynamic security assessment on Android banking APKs using JADX for source code analysis, MobSF for automated static scanning, and Frida for runtime bypass.",
      tools: ["Frida", "MobSF", "JADX", "Apktool", "Burp Suite"],
      highlights: [
        "Found 15+ OWASP Mobile Top 10 vulnerabilities across M1–M10",
        "Surfaced 10+ hidden API endpoints after SSL pinning and root detection bypass",
        "Hardcoded credentials, insecure SharedPreferences, and weak certificate handling identified",
        "API layer testing with Burp Suite: authentication weaknesses, broken access control, insecure data transmission",
        "Frida scripts for SSL pinning bypass, root detection bypass, and certificate validation bypass",
        "Identified hardcoded API keys and insecure storage patterns via JADX reverse engineering",
      ],
    },
    {
      title: "Web Application Penetration Testing Lab",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description:
        "Web application penetration testing across the OWASP Top 10 using DVWA and WebGoat to identify, exploit, and document complex vulnerabilities with full proof-of-concept.",
      tools: ["Burp Suite", "OWASP ZAP", "SQLMap", "DVWA", "WebGoat"],
      highlights: [
        "SQL Injection, XSS, and CSRF exploitation with full PoC documentation",
        "Authentication bypass via login token manipulation and session fixation",
        "Privilege escalation and insecure direct object reference (IDOR) testing",
        "Session token analysis: entropy testing, cookie flag validation",
        "Broken access control and horizontal/vertical privilege escalation",
        "Request manipulation and parameter tampering via Burp Suite Repeater",
      ],
    },
    {
      title: "Network Security — Traffic Analysis & Enumeration",
      icon: <Activity className="h-8 w-8 text-primary" />,
      description:
        "Network reconnaissance and packet capture across enterprise lab environments — host enumeration, service discovery, and unencrypted traffic analysis.",
      tools: ["Nmap", "Wireshark", "Linux CLI", "Bash Scripting"],
      highlights: [
        "50+ live hosts and 30+ insecure service configurations identified via Nmap",
        "Captured and analysed 1,000+ HTTP, DNS, and FTP packets with Wireshark",
        "Flagged unencrypted sensitive data in transit across multiple protocols",
        "Network scanning with OS detection, version scanning, and service enumeration",
        "Insecure service discovery: plain-text credentials in FTP/Telnet/HTTP traffic",
        "Custom Bash scripts for automated host enumeration and output parsing",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background/95 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary mr-3">04.</span> Notable Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-7 border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:-translate-y-1"
              data-testid={`card-project-${idx}`}
            >
              <div className="mb-5 bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform flex-shrink-0">
                {project.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-grow leading-relaxed">{project.description}</p>

              <div className="mb-5">
                <h4 className="text-xs font-semibold text-white mb-3 tracking-wider uppercase">Key Findings &amp; Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-white/5 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-2.5 py-1 bg-secondary rounded text-primary border border-primary/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
