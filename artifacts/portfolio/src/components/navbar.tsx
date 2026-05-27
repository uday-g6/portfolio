import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

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
          onClick={() => setActiveSection("")}
          className="serif text-xl font-light text-[#111] tracking-tight hover:text-[#B8892F] transition-colors"
        >
          Uday G
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className={`relative text-xs tracking-[0.12em] uppercase font-medium transition-colors ${
                activeSection === l.id
                  ? "text-[#B8892F]"
                  : "text-[#111]/55 hover:text-[#B8892F]"
              }`}
            >
              {l.name}
              {activeSection === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#B8892F]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
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
            {LINKS.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  activeSection === l.id
                    ? "text-[#B8892F]"
                    : "text-[#111]/55 hover:text-[#B8892F]"
                }`}
              >
                {l.name}
              </a>
            ))}
            <div className="pt-4 border-t border-black/8 flex items-center gap-2 text-[11px] text-[#111]/45 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Work
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
