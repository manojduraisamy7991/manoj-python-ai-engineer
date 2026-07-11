import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manoj D | FastAPI Full Stack Developer & AI Engineer',
  description: 'Building AI-powered, production-grade full stack systems with FastAPI, Next.js, and LLMs.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Manoj D | FastAPI Full Stack Developer & AI Engineer',
    description: 'Building AI-powered, production-grade full stack systems with FastAPI, Next.js, and LLMs.',
    type: 'website',
    url: 'https://example.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manoj D | FastAPI Full Stack Developer & AI Engineer',
    description: 'Building AI-powered, production-grade full stack systems with FastAPI, Next.js, and LLMs.',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'FastAPI Full Stack Developer',
    'AI Engineer',
    'Python Developer',
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
