import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import SkillGraph from "./skill-graph";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center subtle-grid">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              UDAY G
            </motion.h1>

            <motion.div className="space-y-1 mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">Security Test Engineer</h2>
              <p className="text-lg text-muted-foreground">Mobile &amp; Web Application Security</p>
              <p className="text-lg text-muted-foreground">VAPT &amp; API Security</p>
            </motion.div>

            <motion.p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-[1.75]">
              Securing Mobile Applications, APIs, and Modern Web Platforms Through Practical Offensive Security Testing.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-4 mb-10 text-sm mono text-muted-foreground">
              <a href="tel:+917899169395" className="hover:text-primary transition-colors">+91 78991-69395</a>
              <span className="text-white/20">|</span>
              <a href="mailto:udaygopalakrishna@gmail.com" className="hover:text-primary transition-colors">udaygopalakrishna@gmail.com</a>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded border-white/20 hover:border-white text-white hover:bg-transparent px-8" asChild>
                <a href="mailto:udaygopalakrishna@gmail.com?subject=Resume%20Request">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-[40%] h-[400px] lg:h-[600px] border border-white/5 bg-black/50 hidden md:block"
          >
            <SkillGraph />
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 border-y border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-8 md:gap-4 max-w-4xl"
        >
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-3xl font-bold text-white mb-1">20+</span>
            <span className="text-sm mono text-primary">Banking APKs</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-3xl font-bold text-white mb-1">50+</span>
            <span className="text-sm mono text-primary">Vulnerabilities</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-3xl font-bold text-white mb-1">30%</span>
            <span className="text-sm mono text-primary">MTTR Reduction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
