export default function NotFound() {
  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center bg-[var(--bg-paper-light)] px-6">
      <div className="max-w-md text-center flex flex-col items-center gap-5">
        <p className="text-label text-[var(--accent-gold)]">404 — Page not found</p>
        <h1 className="font-display font-light text-4xl text-[var(--text-ink)]">This page doesn't exist.</h1>
        <p className="text-body text-[var(--text-ink-muted)]">
          Uday G — Security Test Engineer · Android &amp; Mobile Application Security
        </p>
        <a href="/" className="btn-primary">Back to portfolio</a>
      </div>
    </main>
  );
}
