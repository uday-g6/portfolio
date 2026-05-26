import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { Download, Mail, Linkedin, Phone } from "lucide-react";

export default function Hero() {
  const badges = [
    "OWASP Mobile Top 10",
    "Frida Instrumentation",
    "Burp Suite",
    "APK Reverse Engineering",
    "SSL Pinning Bypass",
    "VAPT",
    "API Security",
    "CVSS Scoring",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {badges.map((badge, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.07 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm shadow-[0_0_12px_rgba(14,165,233,0.12)]"
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Uday G
          </motion.h1>

          <motion.h2
            className="text-lg md:text-2xl font-medium text-primary mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Security Test Engineer &nbsp;|&nbsp; Mobile &amp; Web Application Security &nbsp;|&nbsp; VAPT &nbsp;|&nbsp; API Security
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Securing Mobile Applications, APIs, and Modern Web Platforms Through Practical Offensive Security Testing.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-3 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="tel:+917899169395"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
              data-testid="link-phone-hero"
            >
              <Phone className="h-4 w-4 text-primary" />
              +91 78991-69395
            </a>
            <span className="text-white/20">·</span>
            <a
              href="mailto:udaygopalakrishna@gmail.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
              data-testid="link-email-hero"
            >
              <Mail className="h-4 w-4 text-primary" />
              udaygopalakrishna@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all"
              data-testid="button-resume-download"
              asChild
            >
              <a href="mailto:udaygopalakrishna@gmail.com?subject=Resume%20Request">
                <Download className="mr-2 h-4 w-4" />
                Resume Download
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
              data-testid="button-contact-me"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 h-11 w-11"
              asChild
              data-testid="button-github"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <SiGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 h-11 w-11"
              asChild
              data-testid="button-linkedin"
            >
              <a href="https://linkedin.com/in/uday-g-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-primary flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
