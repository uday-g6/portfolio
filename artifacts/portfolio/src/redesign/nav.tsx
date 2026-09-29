import { useEffect, useRef, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "./content";

const LINKS = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "toolkit", label: "Toolkit" },
  { id: "work", label: "Work" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < window.innerHeight * 0.5) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = LINKS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(([e]) => e.isIntersecting && setActive(id), {
        rootMargin: "-35% 0px -60% 0px",
      });
      o.observe(el);
      return o;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Mobile menu: Escape closes and returns focus; focus moves into the panel on open.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`on-navy fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 border-b ${
        solid ? "bg-[var(--navy)]/95 backdrop-blur border-[var(--navy-line)] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]" : "bg-transparent border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 btn btn-primary"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 shrink-0" aria-label="Uday G — back to top">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--signal)]/50 bg-[var(--navy-2)] font-mono text-sm font-semibold text-[var(--signal)]">
            UG
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.95rem] font-semibold text-[var(--on-navy)]">Uday G</span>
            <span className="hidden sm:block font-mono text-[0.68rem] tracking-wide text-[var(--on-navy-3)]">Security Test Engineer</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "text-[var(--signal)]" : "text-[var(--on-navy-2)] hover:text-[var(--on-navy)]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-[var(--signal)] transition-opacity ${
                    active === l.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden sm:inline-flex !min-h-10 !py-2 !px-4 text-sm">
            <FileText size={16} aria-hidden="true" /> Resume
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="lg:hidden grid h-11 w-11 place-items-center rounded-lg border border-[var(--navy-line)] text-[var(--on-navy)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" ref={panelRef} className="lg:hidden border-t border-[var(--navy-line)] bg-[var(--navy)]">
          <ul className="container-x flex flex-col py-3">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-[var(--navy-line)] text-base text-[var(--on-navy)] hover:text-[var(--signal)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-x flex flex-wrap gap-3 pb-5">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1">
              <FileText size={16} aria-hidden="true" /> View Resume
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="LinkedIn profile">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="GitHub profile">
              <SiGithub size={16} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
