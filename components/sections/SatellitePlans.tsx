import { CallLink } from '@/components/ui/CallLink';
import { PriceLockup } from '@/components/ui/PriceLockup';
import { Section } from '@/components/ui/Section';
import { disclosures, satellitePlans, type PlanItem } from '@/lib/content';

/**
 * §5 — Satellite broadband plans.
 *
 * Every figure on every card comes from `satellitePlans` in lib/content.ts.
 * Changing a price there updates this grid, the hero anchor and the fine-print
 * table simultaneously.
 */
export function SatellitePlans() {
  return (
    <Section
      id="plans"
      eyebrow="Satellite broadband"
      title="Hughesnet plans powered by JUPITER™ 3"
      intro={
        <>
          Three residential tiers. Every plan includes a built-in Wi-Fi 6 modem and
          unlimited data with no overage fees. {disclosures.softCap}
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {satellitePlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-brand-muted">
        {disclosures.speeds} Promotional rates require enrollment{' '}
        {satellitePlans[0].promoQualifier.toLowerCase()} and a{' '}
        {satellitePlans[0].contractTerm.toLowerCase()}. Equipment lease, taxes and optional
        add-ons are billed separately &mdash; see the{' '}
        <a
          href="#fine-print"
          className="font-semibold text-brand-cyan-dark underline underline-offset-2"
        >
          full pricing grid
        </a>
        .
      </p>
    </Section>
  );
}

function PlanCard({ plan }: { plan: PlanItem }) {
  return (
    <article
      className={`relative flex min-w-0 flex-col rounded-xl border bg-white p-6 shadow-sm ${
        plan.isPopular ? 'border-brand-cyan ring-1 ring-brand-cyan' : 'border-slate-200'
      }`}
    >
      {plan.isPopular ? (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-cyan px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
          Most popular
        </span>
      ) : null}

      <h3 className="text-xl font-extrabold text-brand-navy">{plan.name}</h3>

      {/* Reserve three lines on the multi-column layout so the speed/data row and
          the price lockup sit on the same line across all three cards regardless
          of blurb length. Single-column mobile needs no such reservation. */}
      {plan.blurb ? (
        <p className="mt-2 text-sm leading-relaxed text-brand-muted md:min-h-[4.5rem]">
          {plan.blurb}
        </p>
      ) : null}

      {/* Speed + data summary */}
      <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-200 py-4">
        <div className="min-w-0">
          <dt className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
            Download
          </dt>
          <dd className="mt-1 whitespace-nowrap text-base font-bold text-brand-navy">
            Up to {plan.speedDown} Mbps
          </dd>
        </div>
        <div className="min-w-0">
          <dt className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
            Priority data
          </dt>
          <dd className="mt-1 whitespace-nowrap text-base font-bold text-brand-navy">
            {plan.priorityData}
          </dd>
        </div>
      </dl>

      <div className="mt-5">
        <PriceLockup plan={plan} />
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-sm text-brand-muted">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan-dark"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="min-w-0">{feature}</span>
          </li>
        ))}
      </ul>

      <CallLink variant="primary" className="mt-6 w-full">
        Call to order
      </CallLink>
    </article>
  );
}
