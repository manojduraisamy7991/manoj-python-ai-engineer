const experienceItems = [
  {
    company: 'Aspire Systems',
    role: 'Senior FastAPI Full Stack Developer',
    period: 'Oct 2023 – Present',
    summary: 'Belk eCommerce platform, American Equity insurance SaaS, Tanya AI Shopping Assistant.',
    bullets: [
      'Implemented FastAPI clean architecture with JWT/RBAC and secure access flows.',
      'Integrated Gemini LLM for conversational shopping assistance and recommendation layers.',
      'Built Next.js 15/16 App Router experiences, including Micro Frontend/Module Federation patterns.',
    ],
  },
  {
    company: 'Responsive',
    role: 'Full Stack Developer',
    period: 'Aug 2022 – Mar 2023',
    summary: 'B2B SaaS products for Microsoft, Facebook, and Google.',
    bullets: [
      'Drove TypeScript adoption to 80% across the application surface.',
      'Raised test coverage to 85% with automated UI and API validation.',
      'Maintained enterprise-grade stability while accelerating feature delivery.',
    ],
  },
  {
    company: 'Reqsta',
    role: 'Full Stack Developer',
    period: 'Oct 2019 – Jul 2022',
    summary: 'Fastbokz CRM 360 SaaS (100+ businesses) with SignalR and Razorpay integration.',
    bullets: [
      'Delivered 45% transaction success improvement through payment workflow enhancements.',
      'Maintained 99.9% uptime across Azure and AWS deployments.',
      'Scaled CRM features for 100+ small business customers in a multi-tenant SaaS platform.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="rounded-[32px] border border-border bg-panel p-8 sm:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted">// experience</p>
          <h2 className="text-2xl font-semibold">Selected roles</h2>
        </div>

        <div className="mt-8 space-y-4">
          {experienceItems.map((item) => (
            <details key={item.company} className="group overflow-hidden rounded-3xl border border-border bg-surface/90 transition hover:border-accent/40">
              <summary className="flex cursor-pointer flex-col gap-3 px-5 py-6 outline-none transition sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <div className="text-sm font-semibold">{item.company}</div>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
                <div className="text-sm text-muted">{item.period}</div>
              </summary>
              <div className="border-t border-border/70 px-5 py-5 text-sm text-text/90 sm:px-8">
                <p className="text-sm text-muted">{item.summary}</p>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-sm leading-7 text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
