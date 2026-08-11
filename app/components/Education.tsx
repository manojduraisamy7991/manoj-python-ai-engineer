export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="rounded-[32px] border border-border bg-panel p-8 sm:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted">// education</p>
          <h2 className="text-2xl font-semibold">Academic background</h2>
        </div>
        <div className="mt-8 grid gap-4 rounded-3xl border border-border/80 bg-surface/90 p-6 text-sm leading-7 text-text/90">
          <div>
            <p className="text-sm font-semibold">Bachelor of Engineering in Computer Science and Engineering</p>
            <p className="mt-2 text-muted">Anna University</p>
          </div>
        </div>
      </div>
    </section>
  );
}
