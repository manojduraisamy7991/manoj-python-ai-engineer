import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manoj D | Java Full Stack Developer',
  description: 'Building production-grade full stack systems with Java, SQL, Spring Boot, React.js, and Next.js.',
  openGraph: {
    title: 'Manoj D | Java Full Stack Developer',
    description: 'Building production-grade full stack systems with Java, SQL, Spring Boot, React.js, and Next.js.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manoj D | Java Full Stack Developer',
    description: 'Building production-grade full stack systems with Java, SQL, Spring Boot, React.js, and Next.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Java Full Stack Developer',
    'Spring Boot Developer',
    'SQL Developer',
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
