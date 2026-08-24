import { useMemo, useState } from "react";
import { Section } from "./section";
import { ArrowIcon } from "./icons";

type Filter =
  | "All"
  | "Application Security"
  | "Mobile Security"
  | "API Security"
  | "Offensive Security"
  | "Security Engineering";

type Project = {
  num: string;
  title: string;
  description: string;
  technologies: string[];
  topics?: string[];
  filters: Filter[];
  variant: "feature" | "wide" | "compact";
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Android Application Security & APK Reverse Engineering",
    description:
      "Hands-on Android security assessment covering APK static analysis, reverse engineering, dynamic testing, runtime instrumentation, and validation of Android security controls.",
    technologies: ["MobSF", "JADX", "Apktool", "Frida", "Burp Suite", "Android Studio"],
    topics: [
      "SSL Pinning",
      "Root Detection",
      "Emulator Detection",
      "Proxy Detection",
      "Anti-Hooking",
      "Application Integrity",
      "Exported Components",
      "Secure Storage",
    ],
    filters: ["Mobile Security", "Application Security", "Offensive Security"],
    variant: "feature",
    tags: ["Mobile Security", "Reverse Engineering"],
  },
  {
    num: "02",
    title: "API Security & Web Application VAPT",
    description:
      "Practical web and API security testing based on OWASP methodologies, covering authentication, authorization, broken access control, BOLA/IDOR, injection, session security, API endpoint security, and HTTP request manipulation.",
    technologies: ["Burp Suite", "OWASP ZAP", "Postman"],
    filters: ["API Security", "Application Security", "Offensive Security"],
    variant: "wide",
    tags: ["API Security", "Web VAPT"],
  },
  {
    num: "03",
    title: "SecurAI / SecureGuard",
    description:
      "Cybersecurity vulnerability management and security validation platform designed to centralize asset management, vulnerability tracking, risk analysis, scanning workflows, remediation, and security reporting.",
    technologies: ["Python", "FastAPI", "React", "Redis", "Celery", "MongoDB/PostgreSQL", "Docker"],
    filters: ["Security Engineering", "Application Security"],
    variant: "compact",
    tags: ["Security Engineering"],
  },
];

const FILTERS: Filter[] = [
  "All",
  "Application Security",
  "Mobile Security",
  "API Security",
  "Offensive Security",
  "Security Engineering",
];

function ProjectCard({ project }: { project: Project }) {
  if (project.variant === "feature") {
    return (
      <article className="surface reveal grid grid-cols-1 gap-0 overflow-hidden md:grid-cols-2">
        <div className="surface-teal relative grid-texture-teal p-7">
          <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-lime)]">
            Project / {project.num}
          </span>
          <h3 className="mt-4 font-display text-2xl font-700 leading-tight text-[var(--color-paper)]">
            {project.title}
          </h3>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="chip border-[var(--color-teal-line)] bg-transparent text-[var(--color-lime)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="p-7">
          <p className="text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
            {project.description}
          </p>
          <div className="mt-5">
            <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
              Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="chip chip-teal">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {project.topics && (
            <div className="mt-4">
              <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
                Topics
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.topics.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    );
  }

  if (project.variant === "wide") {
    return (
      <article className="surface reveal overflow-hidden">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="border-b border-[var(--color-line)] p-7 md:col-span-5 md:border-b-0 md:border-r">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-coral)]">
              Project / {project.num}
            </span>
            <h3 className="mt-4 font-display text-xl font-700 leading-tight text-[var(--color-ink)] sm:text-2xl">
              {project.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="chip chip-teal">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="p-7 md:col-span-7">
            <p className="text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
              {project.description}
            </p>
            <div className="mt-5">
              <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
                Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // compact
  return (
    <article className="surface reveal overflow-hidden">
      <div className="surface-teal grid-texture-teal p-6">
        <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-lime)]">
          Project / {project.num}
        </span>
        <h3 className="mt-3 font-display text-xl font-700 leading-tight text-[var(--color-paper)]">
          {project.title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
          {project.description}
        </p>
        <div className="mt-5">
          <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.filters.includes(filter)),
    [filter]
  );

  return (
    <Section id="projects" eyebrow="Projects" index="03 / 09" className="py-20">
      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="reveal font-display text-3xl font-700 leading-tight tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Featured work —{" "}
          <span className="text-[var(--color-teal)]">selected, not stacked.</span>
        </h2>
        <p className="reveal max-w-sm text-sm leading-relaxed text-[var(--color-ink-muted)]">
          An asymmetrical selection of hands-on security work across mobile,
          web, API, and engineering.
        </p>
      </div>

      {/* Filters */}
      <div className="reveal mt-8 flex flex-wrap items-center gap-2 border-y border-[var(--color-line)] py-3">
        <span className="mr-1 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-faint)]">
          filter:
        </span>
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`border px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider transition-colors ${
              filter === f
                ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-lime)]"
                : "border-[var(--color-line)] bg-transparent text-[var(--color-ink-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-faint)]">
          {filtered.length} / {PROJECTS.length}
        </span>
      </div>

      {/* Grid */}
      <div className="mt-8 space-y-5">
        {filtered.map((p) => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 font-mono text-sm text-[var(--color-ink-muted)]">
          // no projects match this filter.
        </p>
      )}
    </Section>
  );
}
