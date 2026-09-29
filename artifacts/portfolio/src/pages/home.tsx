import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Skills from "@/components/skills";
import WebApiSecurity from "@/components/web-api-security";
import Experience from "@/components/experience";
import Projects, { LabProjects } from "@/components/projects";
import MobileSecurity from "@/components/mobile-security";
import Methodology from "@/components/methodology";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import ProgressBar from "@/components/progress-bar";
import CursorSpotlight from "@/components/cursor-spotlight";
import Journey3D, { Preview3DToggle } from "@/components/journey-3d";

export default function Home() {
  return (
    <div className="min-h-[100dvh] text-foreground font-sans bg-[var(--bg-paper-light)]">
      <ProgressBar />
      <CursorSpotlight />
      <Navbar />
      <main>
        {/* One continuous 3D system travels through Hero → Contact */}
        <div className="relative">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <MobileSecurity />
        <WebApiSecurity />
        <Projects />
        <Methodology />
        <LabProjects />
        <Certifications />
        <Contact />
        <Journey3D />
        </div>
      </main>
      <Footer />
      <BackToTop />
      <Preview3DToggle />
    </div>
  );
}