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
 * Resolves the origin that Open Graph and Twitter image paths are made absolute
 * against.
 *
 * This must never throw. `new URL('')` raises ERR_INVALID_URL, and because
 * `metadata` is evaluated while Next collects page data, a throw here fails the
 * whole build — which is exactly what happened on Vercel: APP_URL existed but
 * was an empty string, and `??` only falls back on null/undefined, not on ''.
 *
 * Order of preference:
 *   1. APP_URL          — an explicitly configured origin (custom domain)
 *   2. VERCEL_URL       — injected automatically by Vercel on every deployment,
 *                         so previews get correct absolute URLs with no config
 *   3. localhost        — local development
 *
 * Any value that is blank or unparseable is skipped rather than fatal.
 */
function resolveSiteUrl(): URL {
  const candidates = [
    process.env.APP_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  ];

  for (const candidate of candidates) {
    const trimmed = candidate?.trim();
    if (!trimmed) continue;
    try {
      return new URL(trimmed);
    } catch {
      // Malformed value — fall through to the next candidate.
    }
  }

  return new URL('http://localhost:3000');
}

export const metadata: Metadata = {
  metadataBase: resolveSiteUrl(),
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
