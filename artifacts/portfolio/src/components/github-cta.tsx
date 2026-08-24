import { GithubIcon, ArrowIcon } from "./icons";
import { LINKS } from "@/data/links";

export function GithubCTA() {
  return (
    <section className="px-5 sm:px-8 lg:px-12">
      <div className="reveal surface-teal grid-texture-teal relative mx-auto my-12 flex w-full max-w-6xl flex-col gap-6 overflow-hidden p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-lime)]">
            // github
          </p>
          <h2 className="mt-3 font-display text-3xl font-700 leading-[1.05] tracking-tight text-[var(--color-paper)] sm:text-4xl lg:text-5xl">
            Built, Tested,
            <br />
            Broken, Improved.
          </h2>
          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-[var(--color-paper)]/75">
            Explore my security tooling, experiments, automation, labs, and
            development work on GitHub.
          </p>
        </div>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lime self-start lg:self-auto"
        >
          <GithubIcon width={15} height={15} /> View GitHub{" "}
          <ArrowIcon width={14} height={14} />
        </a>
      </div>
    </section>
  );
}
