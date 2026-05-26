import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Target, TrendingDown } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Experience", value: "1+ Year", icon: <TrendingDown className="h-6 w-6 text-primary" /> },
    { label: "APKs Assessed", value: "20+", icon: <Smartphone className="h-6 w-6 text-primary" /> },
    { label: "Vulnerabilities", value: "50+", icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Security Test Engineer with hands-on experience in Mobile Application Security, Web Application Penetration Testing, API Security, and VAPT for banking and financial applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Experienced in Android APK reverse engineering, static & dynamic analysis, Frida-based runtime instrumentation, SSL pinning bypass, root detection bypass, certificate validation bypass, and OWASP-aligned security assessments on production applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Performed security assessments across 20+ production banking applications. Reported 50+ vulnerabilities with CVSS-based risk classification.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors group">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
