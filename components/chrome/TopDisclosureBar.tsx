import { CallLink } from '@/components/ui/CallLink';
import { disclosures, operator } from '@/lib/content';

/**
 * §2.0 — Persistent, non-dismissable retailer disclosure.
 *
 * There is deliberately no close button and no dismissal state: the disclosure
 * that this is not Hughesnet must be visible on every viewport at all times.
 */
export function TopDisclosureBar() {
  return (
    <div className="bg-brand-navy-deep text-white">
      <div className="shell flex flex-col items-center justify-center gap-x-3 gap-y-1 py-2 text-center sm:flex-row">
        <p className="text-xs font-semibold leading-snug sm:text-[13px]">
          {disclosures.retailer}
        </p>
        <p className="text-xs leading-snug sm:text-[13px]">
          <span className="text-white/70">Call to order: </span>
          {/* inline-block + vertical padding lifts this from a 16px line-box to a
              ~28px tap target. It is a primary CTA on mobile, not prose. */}
          <CallLink
            variant="bare"
            className="inline-block py-1.5"
            label={`Call ${operator.phoneDisplay} to order`}
          >
            {operator.phoneDisplay}
          </CallLink>
        </p>
      </div>
    </div>
  );
}
