import { MotionConfig } from "framer-motion";
import Nav from "@/redesign/nav";
import Hero from "@/redesign/hero";
import Summary from "@/redesign/summary";
import Experience from "@/redesign/experience";
import Expertise from "@/redesign/expertise";
import Toolkit from "@/redesign/toolkit";
import Work from "@/redesign/work";
import Process from "@/redesign/process";
import { Certifications, Education } from "@/redesign/credentials";
import { Contact, Footer, ResumeCta } from "@/redesign/closing";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main id="main">
        <Hero />
        <Summary />
        <Experience />
        <Expertise />
        <Toolkit />
        <Work />
        <Process />
        <Certifications />
        <Education />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
