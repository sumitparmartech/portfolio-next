import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Sumit Parmar | AI/ML Engineer | Full Stack Developer';
const description =
  'Sumit Parmar is an AI engineer who builds production AI systems end to end: LLM pipelines, retrieval and knowledge graphs, agents, voice AI and the infrastructure they run on.';

export const metadata: Metadata = {
  metadataBase: new URL('https://sumitparmar.vercel.app'),
  title: { default: 'Sumit Parmar · AI Engineer', template: '%s | Sumit Parmar' },
  description,
  alternates: { canonical: '/' },
  authors: [{ name: 'Sumit Parmar' }],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Sumit Parmar',
    title,
    description: 'AI/ML engineer and full stack developer building production AI end to end: LLM systems, AI agents, RAG, backend and cloud.',
    images: [{ url: '/og-sp2.jpg', width: 1200, height: 630, alt: 'Sumit Parmar, AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'From what AI can do, to what it actually does.',
    images: ['/og-sp2.jpg'],
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#08090c' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
