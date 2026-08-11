const stackGroups = [
  { title: 'Languages', tags: ['Java', 'SQL', 'TypeScript', 'JavaScript'] },
  { title: 'Backend', tags: ['Spring Boot', 'REST APIs', 'Microservices', 'JWT/OAuth2'] },
  { title: 'Frontend', tags: ['React.js', 'Next.js', 'Redux', 'Zustand', 'Tailwind', 'shadcn/ui'] },
  { title: 'Database', tags: ['SQL Server', 'PostgreSQL'] },
  { title: 'Cloud & DevOps', tags: ['Azure', 'AWS', 'GCP', 'Docker', 'CI/CD'] },
];

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="rounded-[32px] border border-border bg-panel p-8 sm:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted">// tech stack</p>
          <h2 className="text-2xl font-semibold">What I work with</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-border/80 bg-surface/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 bg-surface/90 px-3 py-2 text-sm text-text/90 transition hover:border-accent hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
