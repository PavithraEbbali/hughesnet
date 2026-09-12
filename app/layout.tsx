import type { Metadata, Viewport } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { operator } from '@/lib/content';

/**
 * Self-hosted via next/font — no render-blocking stylesheet request to Google,
 * and no layout shift, because the font file is served from our own origin with
 * `display: swap` and a matched fallback.
 */
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-source-sans',
  display: 'swap',
});

/**
 * Open Graph and Twitter image URLs must be absolute when a crawler fetches
 * them, so Next needs a base to resolve `/images/og-share.jpg` against. It comes
 * from APP_URL in the environment, falling back to localhost for local dev.
 * Set APP_URL to the production origin before deploying or link previews will
 * point at localhost.
 */
const siteUrl = process.env.APP_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${operator.legalName} | Independent Authorized Retailer of Hughesnet®`,
  description:
    'Independent authorized retailer of Hughesnet® satellite internet. Plans powered by JUPITER™ 3 with built-in Wi-Fi 6 and no hard data limits. Call to confirm availability and pricing at your address.',
  // Explicitly non-indexable identity signal: this is a retailer, not the brand.
  applicationName: operator.legalName,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: operator.legalName,
    title: `${operator.legalName} | Independent Authorized Retailer of Hughesnet®`,
    description:
      'Independent authorized retailer of Hughesnet® satellite internet. Plans powered by JUPITER™ 3 with built-in Wi-Fi 6 and no hard data limits.',
    images: [
      {
        url: '/images/og-share.jpg',
        width: 1200,
        height: 630,
        alt: 'A satellite dish on a rural rooftop against a deep navy dusk sky over farmland.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-share.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b2238',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className="bg-white font-sans antialiased selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
