import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { OffensiveSecurity } from "@/components/offensive-security";
import { SecurityFindings } from "@/components/security-findings";
import { Certifications } from "@/components/certifications";
import { CurrentlyLearning } from "@/components/currently-learning";
import { GithubCTA } from "@/components/github-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { useReveal } from "@/hooks/animations";

export default function Home() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-[100dvh] bg-[var(--color-paper)]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <OffensiveSecurity />
        <SecurityFindings />
        <Certifications />
        <CurrentlyLearning />
        <GithubCTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
