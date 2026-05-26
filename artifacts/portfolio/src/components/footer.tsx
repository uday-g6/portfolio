import { SiGithub } from "react-icons/si";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-1">
              <span className="text-primary glow-text">UG</span>
            </div>
            <p className="text-xs text-muted-foreground">Security Test Engineer · Bengaluru, India</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Uday G. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="tel:+917899169395" className="hover:text-primary transition-colors flex items-center gap-1">
                <Phone className="h-3 w-3" /> +91 78991-69395
              </a>
              <span className="text-white/20">·</span>
              <a href="mailto:udaygopalakrishna@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1">
                <Mail className="h-3 w-3" /> udaygopalakrishna@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github-footer"
            >
              <SiGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/uday-g-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin-footer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
