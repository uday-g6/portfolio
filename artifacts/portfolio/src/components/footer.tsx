import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="mono font-bold text-white">Uday G</span>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="mono text-xs text-white/30">Security Test Engineer · Bengaluru, India</span>
          </div>

          <p className="mono text-xs text-white/25 order-last sm:order-none">
            © {new Date().getFullYear()} Uday G
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-primary transition-colors"
              data-testid="link-github-footer"
              aria-label="GitHub"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/uday-g-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-primary transition-colors"
              data-testid="link-linkedin-footer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
