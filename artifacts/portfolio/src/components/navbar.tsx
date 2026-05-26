import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[54px] flex items-center transition-all duration-200 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <a href="#hero" className="mono font-bold text-white tracking-tight hover:text-primary transition-colors">
          Uday G
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm text-muted-foreground hover:text-white transition-colors lowercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-medium mono text-white">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to Work
          </div>
          <Button variant="outline" size="sm" className="h-8 text-xs mono rounded border-white/20 hover:border-primary hover:text-primary hover:bg-transparent" asChild>
            <a href="mailto:udaygopalakrishna@gmail.com?subject=Resume%20Request">
              <Download className="mr-2 h-3 w-3" /> CV
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-muted-foreground hover:text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[54px] left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-white block py-2 lowercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                <div className="flex items-center gap-2 text-xs font-medium mono text-white">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to Work
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
