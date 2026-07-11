'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    const preferred = stored ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(preferred);
    document.documentElement.classList.toggle('light', preferred === 'light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-surface/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#intro" className="text-sm font-semibold uppercase tracking-[0.32em] text-text/90">
          MD
        </a>

        <div className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-accent">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full border border-border px-3 py-2 text-xs uppercase tracking-[0.3em] text-text transition hover:border-accent hover:text-accent"
          aria-label="Toggle light and dark mode"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
