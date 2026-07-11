'use client';

import { motion } from 'framer-motion';

const contacts = [
  { label: 'Email', value: 'manoj@example.com', href: 'mailto:manoj@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/manoj', href: 'https://linkedin.com/in/manoj' },
  { label: 'GitHub', value: 'github.com/manoj', href: 'https://github.com/manoj' },
  { label: 'Phone', value: '+91 99999 99999', href: 'tel:+919999999999' },
];

export default function IntroStrip() {
  return (
    <motion.section
      id="intro"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-6xl px-5 py-8 sm:px-8"
    >
      <div className="rounded-[32px] border border-border bg-panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.8fr_1.2fr] lg:items-end">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted">Manoj D · Bangalore, India</p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              FastAPI Full Stack Developer | AI Engineer | Python + React/Next.js
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted">
              Building AI-powered, production-grade full stack systems with FastAPI, Next.js, and LLMs.
            </p>
          </div>

          <div className="grid gap-3 rounded-3xl border border-border/80 bg-surface/80 p-4 text-sm text-text/90">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border/60 px-3 py-2 transition hover:border-accent hover:text-accent"
              >
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.35em] text-muted">{contact.label}</span>
                <p className="mt-1 truncate text-sm">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
