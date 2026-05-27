import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="serif text-lg font-light text-[#111]">Uday G</span>
          <span className="text-black/15">·</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-[#111]/30 font-medium">
            Security Test Engineer
          </span>
        </div>

        <p className="text-[10px] text-[#111]/25 tracking-widest uppercase order-last sm:order-none">
          © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#111]/30 hover:text-[#C4973A] transition-colors"
          >
            <SiGithub className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/uday-g-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#111]/30 hover:text-[#C4973A] transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
