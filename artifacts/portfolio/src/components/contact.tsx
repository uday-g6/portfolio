import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, ExternalLink, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background/95 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary mr-2">06.</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)] mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:udaygopalakrishna@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    udaygopalakrishna@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/uday-g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-white">LinkedIn</span>
                </a>
                
                <a 
                  href="https://udayg.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <ExternalLink className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-white">Portfolio</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl border border-white/5 flex flex-col gap-6">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                    <Input id="name" required placeholder="John Doe" className="bg-secondary/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="bg-secondary/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Hello, I'd like to talk about..." 
                      className="min-h-[120px] bg-secondary/50 border-white/10 focus-visible:ring-primary resize-none" 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
