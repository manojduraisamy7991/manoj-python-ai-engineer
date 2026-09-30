import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manoj D - AI Engineer & Python Full Stack Developer",
  description: "AI Engineer and Python Full Stack Developer building intelligent applications and modern web products.",
};

const stack = [
  {
    group: "AI & Machine Learning",
    items: ["Python for AI/ML", "Generative AI & LLMs", "Prompt engineering", "AI API integration"],
  },
  {
    group: "Python Backend & Web",
    items: ["Python", "REST APIs", "Full stack development", "Docker, Git, CI/CD"],
  },
  {
    group: "Frontend, Data & Cloud",
    items: ["React.js, Next.js", "TypeScript, JavaScript", "SQL, PostgreSQL", "Azure, AWS"],
  },
];

const projects = [
  {
    name: "Tanya - Shopping Assistant",
    description:
      "AI-powered shopping assistant with Python backend services for catalog and order management, intelligent product discovery, and a React/Next.js frontend.",
    tags: ["Python", "AI/LLMs", "PostgreSQL", "Next.js"],
  },
  {
    name: "Belk — eCommerce Platform",
    description:
      "Python-based clean-architecture REST APIs for a large-scale US enterprise eCommerce platform, supporting secure and scalable customer workflows.",
    tags: ["Python", "FastAPI", "REST APIs", "Azure"],
  },
  {
    name: "Fastbokz CRM 360",
    description:
      "Full stack CRM and appointment SaaS used by 100+ businesses with Python APIs, JWT refresh-token auth, SQL workflows, and Razorpay payments.",
    tags: ["Python", "FastAPI", "React.js", "SQL"],
  },
];

const experience = [
  {
    role: "Senior Python Full Stack Developer & AI Engineer",
    company: "Aspire Systems",
    period: "Oct 2023 — Present",
    points: [
      "Built scalable backend services with clean architecture for a large US eCommerce platform.",
      "Implemented JWT auth, RBAC, REST API workflows, and SQL-backed business features.",
      "Shipped the Next.js 15/16 (App Router) frontend with Tailwind CSS and shadcn/ui.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Responsive",
    period: "Aug 2022 — Mar 2023",
    points: [
      "Built B2B SaaS features for Microsoft, Facebook, and Google using full stack web technologies.",
      "Raised TypeScript adoption to 80% and test coverage to 85%.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Reqsta",
    period: "Oct 2019 — Jul 2022",
    points: [
      "Built a CRM & appointment SaaS with backend APIs and React/Next.js used by 100+ businesses.",
      "Added JWT refresh-token auth, lifting login success by 30%.",
      "Integrated Razorpay payments, lifting transaction success by 45%.",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#12171A] text-[#F3FFF2]">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">

        {/* Intro */}
        <header>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Manoj D</h1>
              <p className="mt-1 text-[#80EA6E]">
                AI Engineer | Python Full Stack Developer
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="shrink-0 rounded-md border border-[#80EA6E] px-3 py-1.5 text-xs font-medium text-[#80EA6E] hover:bg-[#80EA6E] hover:text-[#111111] transition-colors"
            >
              Download Resume
            </a>
          </div>
          <p className="mt-4 text-[#CFE5D0] leading-relaxed">
            AI Engineer and Python Full Stack Developer focused on building intelligent
            applications, AI-powered features, Python APIs, and polished web products.
            Experienced in full stack engineering, with a background in enterprise systems.
            Based in Bangalore, India.
          </p>
          <p className="mt-4 text-sm text-[#94B79B]">
            manojdcareer@gmail.com &nbsp;·&nbsp; +91 90808 88076 &nbsp;·&nbsp;{" "}
            <a href="https://linkedin.com/in/manoj-frontend-developer" className="text-[#80EA6E] hover:underline">LinkedIn</a>
            &nbsp;·&nbsp;
            <a href="https://github.com/manojduraisamy7991" className="text-[#80EA6E] hover:underline">GitHub</a>
          </p>
        </header>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stack.map((s) => (
              <div
                key={s.group}
                className="rounded-lg border border-[#24312A] bg-[#171F1B] p-5"
              >
                <h3 className="inline-flex rounded bg-[#80EA6E] px-2 py-0.5 text-sm font-semibold text-[#111111]">{s.group}</h3>
                <ul className="mt-3 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-[#CFE5D0]">
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
                className="rounded-lg border border-[#24312A] bg-[#171F1B] p-5"
              >
                <h3 className="font-medium text-[#F3FFF2]">{p.name}</h3>
                <p className="mt-2 text-sm text-[#CFE5D0] leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#80EA6E] px-2 py-0.5 text-xs font-medium text-[#111111]"
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
                className="rounded-lg border border-[#24312A] bg-[#171F1B] p-5"
              >
                <h3 className="font-medium text-[#F3FFF2]">
                  {job.role} <span className="text-[#80EA6E]">— {job.company}</span>
                </h3>
                <p className="mt-1 text-xs text-[#94B79B]">{job.period}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm text-[#CFE5D0] leading-relaxed">
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
          <div className="mt-6 rounded-lg border border-[#24312A] bg-[#171F1B] p-5">
            <p className="font-medium text-[#F3FFF2]">Bachelor of Engineering in Computer Science and Engineering</p>
            <p className="mt-1 text-sm text-[#94B79B]">
              Anna University
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 border-t border-[#24312A] pt-8">
          <p className="text-sm text-[#CFE5D0]">
            Open to AI Engineer and Python Full Stack Developer roles.{" "}
            <a href="mailto:manojdcareer@gmail.com" className="text-[#80EA6E] font-medium hover:underline">
              Get in touch
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}

