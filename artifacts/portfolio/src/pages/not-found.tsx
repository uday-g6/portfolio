import { useLocation } from "wouter";

export default function NotFound() {
  return (
    <div className="grid min-h-[100dvh] place-items-center bg-[var(--color-paper)] px-5">
      <div className="w-full max-w-md border border-[var(--color-line)] bg-[var(--color-paper-soft)] p-8">
        <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-coral)]">
          // 404
        </p>
        <h1 className="mt-3 font-display text-3xl font-700 text-[var(--color-ink)]">
          Not found.
        </h1>
        <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
          This path doesn't exist. Return to the workbench.
        </p>
        <a href="/" className="btn btn-lime mt-6">
          ← Back to home
        </a>
      </div>
    </div>
  );
}
