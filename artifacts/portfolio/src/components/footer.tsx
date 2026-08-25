import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="font-display text-lg font-light text-white">Uday G</span>
          <span className="text-white/15">·</span>
          <span className="text-label text-white/50 font-medium">
            Security Engineer | Application Security | Offensive Security
          </span>
        </div>
        <p className="text-label text-white/40 tracking-widest uppercase order-last sm:order-none">
          Built with a security-first mindset.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/uday-g6" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-white/45 hover:text-[var(--accent-gold)] transition-colors">
            <SiGithub className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/uday-g-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-white/45 hover:text-[var(--accent-gold)] transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}