export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <div className="rounded-[32px] border border-border bg-panel p-6 sm:p-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted">// status</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-text/90">
              <span className="inline-flex h-3 w-3 animate-pulse rounded-full bg-accent" />
              Available for opportunities
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
            <p>Resume available on request</p>
            <a href="/resume.pdf" className="text-accent transition hover:text-text">
              Download resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
