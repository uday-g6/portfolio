import { motion } from "framer-motion";
import { ShieldAlert, Globe, Activity } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Android Banking APK Security Assessment Lab",
      icon: <ShieldAlert className="h-8 w-8 text-primary" />,
      description: "Comprehensive security testing environment for Android applications, focusing on bypassing modern defensive mechanisms.",
      tools: ["Frida", "MobSF", "JADX", "Apktool", "Burp Suite"],
      highlights: [
        "SSL pinning bypass",
        "Root detection bypass",
        "API traffic interception",
        "OWASP Mobile Top 10 testing",
        "Hidden API endpoint discovery",
        "Insecure storage identification"
      ]
    },
    {
      title: "Web Application Penetration Testing Lab",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Dedicated environment for identifying and exploiting complex web vulnerabilities aligned with OWASP Top 10.",
      tools: ["Burp Suite", "OWASP ZAP", "SQLMap", "DVWA", "WebGoat"],
      highlights: [
        "SQL Injection",
        "XSS & CSRF",
        "Broken Authentication",
        "Session Management Testing",
        "Privilege Escalation",
        "Request Manipulation"
      ]
    },
    {
      title: "Network Security Traffic Analysis",
      icon: <Activity className="h-8 w-8 text-primary" />,
      description: "In-depth network reconnaissance and traffic monitoring setup for detecting anomalous activities.",
      tools: ["Nmap", "Wireshark", "Linux CLI"],
      highlights: [
        "Network Scanning",
        "Packet Analysis",
        "Insecure Service Discovery",
        "Traffic Monitoring"
      ]
    }
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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-8 border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:-translate-y-1"
            >
              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5 mt-auto">
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
