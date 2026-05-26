import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Target, TrendingDown, GraduationCap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Experience", value: "1+ Yr", icon: <TrendingDown className="h-6 w-6 text-primary" /> },
    { label: "Banking APKs Assessed", value: "20+", icon: <Smartphone className="h-6 w-6 text-primary" /> },
    { label: "Vulnerabilities Reported", value: "50+", icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
    { label: "MTTR Reduction", value: "30%", icon: <Target className="h-6 w-6 text-primary" /> },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary mr-3">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Security Test Engineer with <span className="text-white font-medium">1+ year of experience</span> in mobile application security, VAPT, web application security, and API security testing for banking and financial applications.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Experienced in <span className="text-white font-medium">Android APK reverse engineering</span>, static &amp; dynamic analysis, Frida-based runtime instrumentation, SSL pinning bypass, root detection bypass, certificate validation bypass, and OWASP-aligned security assessments on production applications.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Specialised in <span className="text-white font-medium">Frida-based runtime instrumentation</span> for SSL pinning bypass, root detection bypass, and certificate validation bypass to enable advanced runtime and API traffic analysis in production applications.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Proficient in <span className="text-white font-medium">Burp Suite-driven</span> web application and API penetration testing aligned with OWASP Top 10 and OWASP Mobile Top 10 standards. Promoted from intern to full-time within six months based on performance and technical contributions.
            </p>

            {/* Education */}
            <div className="glass-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-white font-semibold text-lg">Education</h3>
              </div>
              <p className="text-white font-medium">Bachelor of Engineering — Computer Science</p>
              <p className="text-muted-foreground text-sm mt-1">Maharaja Institute of Technology, Mysuru</p>
              <p className="text-muted-foreground text-sm">Visvesvaraya Technological University (VTU)</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md">2021 – 2025</span>
                <span className="text-xs font-medium px-2.5 py-1 bg-secondary text-muted-foreground border border-white/10 rounded-md">CGPA 7.2 / 10</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Relevant: Network Security · Cryptography · Operating Systems · Data Structures · Database Management
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors group"
                data-testid={`card-stat-${idx}`}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 glow-text">{stat.value}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-snug">{stat.label}</p>
              </div>
            ))}

            {/* Domain badge */}
            <div className="col-span-2 glass-card p-5 rounded-xl border border-white/5 hover:border-primary/20 transition-colors">
              <p className="text-xs font-medium text-primary mb-2 tracking-widest uppercase">Domain Expertise</p>
              <div className="flex flex-wrap gap-2">
                {["Banking & Financial Apps", "Android Security", "REST API Testing", "OWASP Standards", "CVSS Reporting", "Remediation Validation"].map((d, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-secondary/80 text-muted-foreground border border-white/5 rounded-md">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
