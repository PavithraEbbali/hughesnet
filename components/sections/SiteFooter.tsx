import Link from 'next/link';
import { CallLink } from '@/components/ui/CallLink';
import {
  disclosures,
  footerNav,
  legalLinks,
  offerDetails,
  operator,
} from '@/lib/content';

/**
 * §2.9 / §15 — Compliance footer.
 *
 * Structure follows the enterprise retailer pattern: navigation columns first,
 * then a dedicated "Offer details & required disclosures" block, then legal
 * links, then the entity and trademark line. Disclosures get their own labelled
 * region rather than being compressed into a single grey paragraph.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy-deep text-white">
      <div className="shell py-14">
        {/* ------------------------------------------------ nav + contact */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Operator identity */}
          <div className="min-w-0">
            <p className="text-lg font-extrabold tracking-tight text-white">
              {operator.wordmark}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-cyan">
              {operator.wordmarkSuffix}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              An independent authorized retailer of Hughesnet® residential satellite
              internet and digital home phone service.
            </p>
          </div>

          {/* Shop / Learn columns */}
          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="min-w-0">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-cyan">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="min-w-0">
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-cyan">
              Talk to a person
            </h2>
            <p className="mt-4">
              <CallLink variant="bare" className="text-xl font-extrabold text-white">
                {operator.phoneDisplay}
              </CallLink>
            </p>
            <p className="mt-2 text-sm text-white/70">{operator.hours}</p>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/65">
              <p className="wrap-anywhere">{operator.registeredAddress}</p>
              <p className="wrap-anywhere">{operator.email}</p>
            </address>
          </div>
        </div>

        {/* ------------------------------- offer details & required disclosures */}
        <section
          aria-labelledby="offer-details"
          className="mt-12 border-t border-white/10 pt-10"
        >
          <h2
            id="offer-details"
            className="text-xs font-bold uppercase tracking-[0.14em] text-brand-cyan"
          >
            Offer details &amp; required disclosures
          </h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {offerDetails.map((item) => (
              <div key={item.heading} className="min-w-0">
                <h3 className="text-sm font-bold text-white">{item.heading}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------- retailer disclosure */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm font-bold text-white">{disclosures.retailer}</p>
          <p className="mt-3 max-w-4xl text-xs leading-relaxed text-white/60">
            {disclosures.footerParagraph}
          </p>
        </div>

        {/* --------------------------------------------------- legal links */}
        <nav aria-label="Legal" className="mt-8 border-t border-white/10 pt-8">
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ------------------------------------- copyright + trademark line */}
        <div className="mt-8 space-y-2 border-t border-white/10 pt-8">
          {/* "Not Hughesnet" is dropped from this line only while `legalName` is
              itself "Hughesnet", which would read as a contradiction. The
              disclosure still appears in full in the top bar and above. */}
          <p className="text-xs text-white/55">
            &copy; {operator.copyrightYear} {operator.legalName} &mdash; Independent
            Authorized Retailer of Hughesnet®.
          </p>
          <p className="text-xs text-white/55">
            {disclosures.trademark} All other trademarks are the property of their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
