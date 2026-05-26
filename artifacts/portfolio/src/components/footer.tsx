import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-primary glow-text">UG</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Uday G. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/uday-g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
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
