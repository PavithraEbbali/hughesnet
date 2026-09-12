import { CallLink } from '@/components/ui/CallLink';
import { TopDisclosureBar } from '@/components/chrome/TopDisclosureBar';
import { navLinks, operator } from '@/lib/content';

/**
 * §2.1 — Sticky header.
 *
 * The operator wordmark leads; the Hughesnet mark never stands alone as the
 * site's identity (§7.1). The disclosure bar is inside the sticky wrapper so
 * the "Not Hughesnet" line stays on screen at every scroll position.
 *
 * Anchor nav collapses below `md` rather than opening a JS drawer — the
 * conversion path on mobile is the sticky call bar, not the menu.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <TopDisclosureBar />

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="shell flex h-16 items-center justify-between gap-4">
          {/* Operator wordmark */}
          <a href="#top" className="flex shrink-0 flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-brand-navy sm:text-xl">
              {operator.wordmark}
            </span>
            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-cyan-dark sm:text-[11px]">
              {operator.wordmarkSuffix}
            </span>
          </a>

          {/*
            Anchor navigation appears from `lg`, not `md`.

            At 768px the row needs 794px (wordmark 211 + nav 361 + button 189 +
            32 gaps) against 705px of content width — an 89px deficit that blew
            the page out horizontally. Tightening gaps and type recovers ~73px,
            which is a fragile fit that breaks under a different font or browser
            zoom. Tablets get the sticky bottom call bar instead (raised to
            lg:hidden to match), which is the stronger conversion path anyway.
          */}
          <nav aria-label="Section navigation" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-brand-muted transition-colors hover:text-brand-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/*
            Solid call button. Visibility is controlled by this wrapper, not by
            a `hidden` class on the CallLink itself: the `primary` variant already
            sets `inline-flex`, and Tailwind resolves competing display utilities
            by stylesheet order rather than by the order they appear in the class
            string — so `hidden` on the element loses and the button would render
            at 320px, pushing the nowrap phone number past the viewport.
            Below `sm` the sticky bottom call bar carries the conversion path.
          */}
          <div className="hidden shrink-0 sm:block">
            <CallLink variant="primary" className="px-4 py-2.5 text-sm" />
          </div>
        </div>
      </div>
    </header>
  );
}
