import type { PlanItem } from '@/lib/content';
import { splitPrice, priceToSpeech } from '@/lib/content';

/**
 * §3 canonical price lockup — the ONLY price renderer on the site.
 *
 * Structure is a flex row on a shared baseline: dominant integer, muted cents,
 * muted `/mo`. No superscript vertical-align hacks, no detached `/mo` line, no
 * negative-margin tricks — the cents and period sit on the same baseline as the
 * integer because they are flex siblings with `align-items: baseline`.
 *
 * The visual row is `aria-hidden`; a generated `sr-only` sentence carries the
 * price to assistive tech so screen readers never hear "dollar seven four
 * point nine nine slash m o".
 *
 * Every qualifier is adjacent to the number, never relegated to a footnote:
 * the AutoPay condition and the post-promo step-up rate render inline.
 */
export function PriceLockup({
  plan,
  size = 'md',
  showFineLink = true,
}: {
  plan: PlanItem;
  size?: 'md' | 'lg';
  /** Hide the "Pricing details below" link where a section already links out. */
  showFineLink?: boolean;
}) {
  const { int, cents } = splitPrice(plan.price);
  const intSize = size === 'lg' ? 'text-[3.5rem]' : 'text-[2.75rem]';

  return (
    <div className="lockup">
      {/* Visual row — hidden from AT, which reads the sr-only sentence instead. */}
      <p className="lockup__row" aria-hidden="true">
        <span className="lockup__cur">$</span>
        <span className={`lockup__int ${intSize}`}>{int}</span>
        <span className="lockup__cents">{plan.cents ?? cents}</span>
        <span className="lockup__per">/mo</span>
      </p>

      <p className="sr-only">{priceToSpeech(plan.price)}</p>

      <p className="lockup__qual">{plan.promoQualifier}</p>

      <p className="lockup__step">
        {plan.equipmentFee ? <>plus {plan.equipmentFee} &middot; </> : null}
        {plan.contractTerm}
      </p>

      {plan.stepUpPrice > plan.price && plan.promoMonths ? (
        <p className="lockup__step">
          ${plan.price.toFixed(2)}/mo for {plan.promoMonths} months, then $
          {plan.stepUpPrice.toFixed(2)}/mo
        </p>
      ) : null}

      {showFineLink ? (
        <p className="lockup__fine">
          <a href="#fine-print">Pricing details below</a>
        </p>
      ) : null}
    </div>
  );
}
