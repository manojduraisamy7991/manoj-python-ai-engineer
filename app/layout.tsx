import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manoj D | AI Engineer & Python Full Stack Developer',
  description: 'AI Engineer and Python Full Stack Developer building intelligent applications, AI-powered products, APIs, and modern web experiences.',
  openGraph: {
    title: 'Manoj D | AI Engineer & Python Full Stack Developer',
    description: 'AI Engineer and Python Full Stack Developer building intelligent applications, AI-powered products, APIs, and modern web experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manoj D | AI Engineer & Python Full Stack Developer',
    description: 'AI Engineer and Python Full Stack Developer building intelligent applications, AI-powered products, APIs, and modern web experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'AI Engineer',
    'Python Full Stack Developer',
    'Python Developer',
    'Generative AI Developer',
    'LLM Application Developer',
    'Next.js Developer',
    'React Developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
