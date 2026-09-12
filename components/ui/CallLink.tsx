import type { ReactNode } from 'react';
import { operator } from '@/lib/content';

/**
 * The ONLY sanctioned way to render a `tel:` link in this codebase.
 *
 * §2 tracking rule: every tel: link must carry `data-call-cta`. Rather than
 * relying on every author remembering the attribute, it is applied here
 * and the href is read from `operator` — so it cannot drift out of sync with
 * the displayed number, and a grep for `href="tel:` should only ever match
 * this file.
 */

type Variant = 'primary' | 'ghost' | 'bare' | 'bar';

const VARIANTS: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-lg border border-brand-cyan bg-white px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-slate',
  bare: 'font-semibold text-brand-cyan underline underline-offset-2 transition-colors hover:text-white',
  /* h-12 (48px) keeps the tap target well above the 44px minimum while letting
     the whole bar land inside the §2.10 64px budget before the safe-area inset. */
  bar: 'flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-orange text-base font-bold text-white transition-colors hover:bg-brand-orange-dark',
};

export function CallLink({
  variant = 'primary',
  className = '',
  children,
  label,
}: {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  /** Accessible label override. Defaults to a spoken-friendly call prompt. */
  label?: string;
}) {
  return (
    <a
      href={operator.phoneHref}
      data-call-cta
      aria-label={label ?? `Call ${operator.phoneDisplay} to order`}
      className={`${VARIANTS[variant]} ${className}`.trim()}
    >
      {children ?? (
        <>
          <PhoneGlyph />
          <span>Call {operator.phoneDisplay}</span>
        </>
      )}
    </a>
  );
}

/** Inline SVG — no icon library round-trip, no layout shift. */
export function PhoneGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
