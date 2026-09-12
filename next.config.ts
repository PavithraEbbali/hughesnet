import type { NextConfig } from 'next';

/**
 * Configured for Vercel.
 *
 * Notes on what was removed and why:
 *
 * - `output: 'standalone'` produced a self-contained Node server bundle for
 *   Docker-style hosting. Vercel builds its own serverless output and does not
 *   use it, so it only added build time and artifact size.
 * - `images.remotePatterns` allow-listed picsum.photos and images.unsplash.com.
 *   Every image is now served from /public, so no remote host needs allowing —
 *   and leaving unused hosts in the allow-list lets any future code proxy
 *   arbitrary images from them through our optimizer.
 * - The `DISABLE_HMR` webpack override was dev-only scaffolding.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Type errors fail the build. Lint runs separately so a style nit cannot
  // block a deploy, but a type error is a real defect.
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // Serve modern formats where the browser accepts them.
    formats: ['image/avif', 'image/webp'],
  },

  // Strip the `X-Powered-By: Next.js` response header.
  poweredByHeader: false,
};

export default nextConfig;
