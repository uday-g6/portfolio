export default function NotFound() {
  return (
    <main className="on-navy grid-bg grid min-h-[100dvh] place-items-center px-5">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">404 — Page not found</p>
        <h1 className="mt-4 text-3xl font-semibold text-[var(--on-navy)]">This page doesn't exist.</h1>
        <p className="mt-3 text-[var(--on-navy-2)]">Uday G — Security Test Engineer · Android &amp; Mobile Application Security</p>
        <a href="/" className="btn btn-primary mt-8">Back to portfolio</a>
      </div>
    </main>
  );
}
