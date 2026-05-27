import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="serif text-lg font-light text-white">Uday G</span>
          <span className="text-white/15">·</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-white/25 font-medium">
            Security Test Engineer
          </span>
        </div>
        <p className="text-[10px] text-white/20 tracking-widest uppercase order-last sm:order-none">
          © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-white/25 hover:text-[#B8892F] transition-colors">
            <SiGithub className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/uday-g-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-white/25 hover:text-[#B8892F] transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
