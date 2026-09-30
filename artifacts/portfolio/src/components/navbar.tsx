import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Assessments", href: "#assessments", id: "assessments" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // The hero isn't a nav item, so clear the highlight when back at the top.
      if (window.scrollY < window.innerHeight * 0.5) setActiveSection("");
    };
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
          ? "bg-[var(--bg-paper-light)]/95 backdrop-blur-sm border-b border-[var(--border-thin)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={() => setActiveSection("")}
          className="font-display text-xl font-light text-[var(--text-ink)] tracking-tight hover:text-[var(--accent-gold)] transition-colors"
        >
          Uday G
        </a>

        <nav className="hidden xl:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className={`relative text-label font-medium transition-colors ${
                activeSection === l.id
                  ? "text-[var(--accent-gold)]"
                  : "text-[var(--text-ink-muted)] hover:text-[var(--accent-gold)]"
              }`}
            >
              {l.name}
              {activeSection === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--accent-gold)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-5">
          <div className="flex items-center gap-2 text-label text-[var(--text-ink-muted)] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Work
          </div>
          <a
            href="/Uday_G_Application_Security_Resume.pdf"
            download="Uday_G_Application_Security_Resume.pdf"
            className="text-label border border-[var(--accent-gold)] text-[var(--accent-gold)] px-5 py-2 hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-300 font-medium"
          >
            Download Resume
          </a>
        </div>

        <button className="xl:hidden p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={20} className="text-[var(--text-ink)]" /> : <Menu size={20} className="text-[var(--text-ink)]" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="xl:hidden bg-[var(--bg-paper-light)]/98 backdrop-blur border-b border-[var(--border-thin)] px-6 py-6 flex flex-col gap-4"
          >
            {LINKS.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  activeSection === l.id
                    ? "text-[var(--accent-gold)]"
                    : "text-[var(--text-ink-muted)] hover:text-[var(--accent-gold)]"
                }`}
              >
                {l.name}
              </a>
            ))}
            <a
              href="/Uday_G_Application_Security_Resume.pdf"
              download="Uday_G_Application_Security_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="text-sm tracking-widest uppercase text-[var(--accent-gold)]"
            >
              Download Resume
            </a>
            <div className="pt-4 border-t border-[var(--border-thin)] flex items-center gap-2 text-label text-[var(--text-ink-light)] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Work
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}