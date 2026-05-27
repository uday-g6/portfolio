import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F5EF]/95 backdrop-blur-sm border-b border-black/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="serif text-xl font-light text-[#111] tracking-tight hover:text-[#B8892F] transition-colors"
        >
          Uday G
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-xs tracking-[0.12em] uppercase text-[#111]/55 hover:text-[#B8892F] transition-colors font-medium"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#111]/60 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Work
          </div>
          <a
            href="mailto:udaygopalakrishna@gmail.com?subject=Resume%20Request"
            className="text-[11px] tracking-[0.12em] uppercase border border-[#B8892F] text-[#B8892F] px-5 py-2 hover:bg-[#B8892F] hover:text-white transition-all duration-300 font-medium"
          >
            Download CV
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} className="text-[#111]" /> : <Menu size={20} className="text-[#111]" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-[#F8F5EF]/98 backdrop-blur border-b border-black/8 px-6 py-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase text-[#111]/45 hover:text-[#B8892F] transition-colors">
                {l.name}
              </a>
            ))}
            <div className="pt-4 border-t border-black/8 flex items-center gap-2 text-[11px] text-[#111]/35 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Work
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
