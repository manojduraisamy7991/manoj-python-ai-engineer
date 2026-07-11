import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.25)',
      },
      colors: {
        surface: '#111214',
        panel: '#16181d',
        border: '#272c34',
        text: '#e5e7eb',
        muted: '#94a3b8',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
