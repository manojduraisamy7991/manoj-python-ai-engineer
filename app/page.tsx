import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manoj D — FastAPI Full Stack Developer",
  description: "Manoj D. FastAPI Full Stack Developer & AI Engineer. Python, Next.js, TypeScript.",
};

const stack = [
  {
    group: "Backend",
    items: ["Python, FastAPI, Flask", "SQL Server, PostgreSQL", "REST APIs, JWT / OAuth2", "Docker"],
  },
  {
    group: "Frontend",
    items: ["React, Next.js, TypeScript", "Tailwind CSS, shadcn/ui", "Redux, Zustand", "Module Federation"],
  },
  {
    group: "Cloud & Tools",
    items: ["Azure, AWS, GCP", "Git, CI/CD pipelines", "GitHub Actions"],
  },
];

const projects = [
  {
    name: "Tanya — AI Shopping Assistant",
    description:
      "GenAI-powered shopping assistant with a FastAPI backend for catalog and order management, React/Next.js frontend, and GitHub Copilot / Vercel AI SDK tooling baked into the build.",
    tags: ["FastAPI", "SQL Server", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Belk — eCommerce Platform",
    description:
      "Clean-architecture REST APIs (repository pattern, service layer, DI) for a large-scale US enterprise eCommerce platform, with Gemini LLM APIs powering AI shopping features.",
    tags: ["FastAPI", "Entity Framework Core", "Next.js 15/16", "Azure"],
  },
  {
    name: "Fastbokz CRM 360",
    description:
      "Full stack CRM and appointment SaaS used by 100+ businesses — JWT refresh-token auth, SignalR notifications, and Razorpay payments, deployed across Azure and AWS.",
    tags: ["FastAPI", "React.js", "SignalR", "Razorpay"],
  },
];

const experience = [
  {
    role: "Senior FastAPI Full Stack Developer",
    company: "Aspire Systems",
    period: "Oct 2023 — Present",
    points: [
      "Built scalable FastAPI services with clean architecture for a large US eCommerce platform.",
      "Implemented JWT auth, RBAC, and Gemini LLM integration for an AI shopping assistant.",
      "Shipped the Next.js 15/16 (App Router) frontend with Tailwind CSS and shadcn/ui.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Responsive",
    period: "Aug 2022 — Mar 2023",
    points: [
      "Built B2B SaaS features for Microsoft, Facebook, and Google using FastAPI and React.",
      "Raised TypeScript adoption to 80% and test coverage to 85%.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Reqsta",
    period: "Oct 2019 — Jul 2022",
    points: [
      "Built a CRM & appointment SaaS (FastAPI, React/Next.js) used by 100+ businesses.",
      "Added JWT refresh-token auth, lifting login success by 30%.",
      "Integrated Razorpay payments, lifting transaction success by 45%.",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0A0F0D] text-[#E7EFEC]">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">

        {/* Intro */}
        <header>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Manoj D</h1>
              <p className="mt-1 text-[#05B892]">
                FastAPI Full Stack Developer / AI Engineer
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="shrink-0 rounded-md border border-[#05B892] px-3 py-1.5 text-xs font-medium text-[#05B892] hover:bg-[#05B892] hover:text-[#0A0F0D] transition-colors"
            >
              Download Resume
            </a>
          </div>
          <p className="mt-4 text-[#9BB0AA] leading-relaxed">
            Full stack developer building backend services with FastAPI and
            frontend apps with Next.js and TypeScript. Based in Bangalore, India.
          </p>
          <p className="mt-4 text-sm text-[#6E8580]">
            manojdcareer@gmail.com &nbsp;·&nbsp; +91 90808 88076 &nbsp;·&nbsp;{" "}
            <a href="https://linkedin.com/in/manoj-frontend-developer" className="text-[#05B892] hover:underline">LinkedIn</a>
            &nbsp;·&nbsp;
            <a href="https://github.com/manojduraisamy7991" className="text-[#05B892] hover:underline">GitHub</a>
          </p>
        </header>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stack.map((s) => (
              <div
                key={s.group}
                className="rounded-lg border border-[#1B2925] bg-[#101917] p-5"
              >
                <h3 className="text-sm font-medium text-[#05B892]">{s.group}</h3>
                <ul className="mt-3 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-[#9BB0AA]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <div className="mt-6 space-y-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-lg border border-[#1B2925] bg-[#101917] p-5"
              >
                <h3 className="font-medium text-[#E7EFEC]">{p.name}</h3>
                <p className="mt-2 text-sm text-[#9BB0AA] leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[#1B2925] bg-[#0A0F0D] px-2 py-0.5 text-xs text-[#05B892]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-8">
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-lg border border-[#1B2925] bg-[#101917] p-5"
              >
                <h3 className="font-medium text-[#E7EFEC]">
                  {job.role} <span className="text-[#05B892]">— {job.company}</span>
                </h3>
                <p className="mt-1 text-xs text-[#6E8580]">{job.period}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm text-[#9BB0AA] leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-6 rounded-lg border border-[#1B2925] bg-[#101917] p-5">
            <p className="font-medium text-[#E7EFEC]">B.E. Computer Science and Engineering</p>
            <p className="mt-1 text-sm text-[#6E8580]">
              University College of Engineering, Ariyalur · 2015 — 2019
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 border-t border-[#1B2925] pt-8">
          <p className="text-sm text-[#9BB0AA]">
            Open to full stack / AI engineering roles.{" "}
            <a href="mailto:manojdcareer@gmail.com" className="text-[#05B892] font-medium hover:underline">
              Get in touch
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}