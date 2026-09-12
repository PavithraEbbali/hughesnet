import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { SiteFooter } from '@/components/sections/SiteFooter';
import { StickyCallBar } from '@/components/chrome/StickyCallBar';
import { disclosures, operator } from '@/lib/content';

/**
 * Shared shell for the nine legal routes.
 *
 * Every page inherits the same chrome, the same retailer disclosure and the
 * same operator tokens, so updating `operator` in lib/content.ts updates the
 * entity name, address, email and phone across all nine pages at once.
 *
 * The body copy on these pages is a drafting scaffold, not reviewed legal text.
 * Each page carries a visible notice to that effect until counsel replaces it.
 */
export function LegalPage({
  title,
  updated = 'September 12, 2026',
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col pb-24 lg:pb-0">
        <SiteHeader />

        <main className="flex-1 bg-white">
          <div className="shell max-w-3xl py-12 sm:py-16">
            <h1 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-brand-muted">Last updated: {updated}</p>

            <div
              role="note"
              className="mt-6 rounded-lg border-2 border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950"
            >
              <strong className="font-bold">Draft scaffold.</strong> This page is
              structured placeholder text, not reviewed legal copy. Replace it with
              counsel-approved language before launch.
            </div>

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-brand-muted">
              {children}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6 text-xs leading-relaxed text-brand-muted">
              <p className="font-bold text-brand-navy">{disclosures.retailer}</p>
              <p className="mt-2">{disclosures.trademark}</p>
              <p className="mt-2 wrap-anywhere">
                {operator.legalName} &middot; {operator.registeredAddress} &middot;{' '}
                {operator.email}
              </p>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>

      <StickyCallBar />
    </>
  );
}

/** Consistent heading inside legal body copy. */
export function LegalHeading({ children }: { children: ReactNode }) {
  return <h2 className="pt-3 text-lg font-bold text-brand-navy">{children}</h2>;
}
