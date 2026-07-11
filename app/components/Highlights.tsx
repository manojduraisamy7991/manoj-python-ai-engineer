'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Businesses served', value: '100+' },
  { label: 'Transaction success', value: '45% ↑' },
  { label: 'Login success', value: '30% ↑' },
  { label: 'Uptime', value: '99.9%' },
];

export default function Highlights() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="rounded-[32px] border border-border bg-panel p-8 sm:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted">// impact</p>
          <h2 className="text-2xl font-semibold">Outcome-driven metrics</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl border border-border bg-surface/90 p-6"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-muted">{stat.label}</p>
              <p className="mt-3 text-2xl font-semibold text-text">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
