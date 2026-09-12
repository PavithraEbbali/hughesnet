import { Section } from '@/components/ui/Section';
import { disclosures, satellitePlans, terms } from '@/lib/content';

/**
 * §2.5 / §11 — Honest fine-print grid.
 *
 * Mirrors the structure of an FCC Broadband Facts label. Every cell is derived
 * from lib/content.ts, so the table can never drift out of sync with the plan
 * cards above it.
 *
 * The table lives inside its own `overflow-x-auto` container. That is what lets
 * an 8-column table coexist with a 320px viewport without the page body
 * scrolling sideways.
 */
export function FinePrint() {
  const columns = [
    'Plan',
    'Speeds (down/up)',
    'Priority data',
    'Promo price',
    'Standard price',
    'Equipment',
    'Installation',
    'Commitment & ETF',
  ];

  return (
    <Section
      id="fine-print"
      eyebrow="Pricing and terms"
      title="Plan pricing, equipment and agreement terms"
      intro="A complete comparison of promotional and standard monthly rates, equipment options, installation charges and commitment terms across all three residential plans."
      tone="slate"
    >
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            Hughesnet plan pricing, equipment, installation and commitment terms
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-brand-slate">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-navy"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {satellitePlans.map((plan) => (
              <tr key={plan.id} className="border-b border-slate-200 last:border-0">
                <th scope="row" className="px-4 py-4 font-bold text-brand-navy">
                  {plan.name}
                </th>
                <td className="px-4 py-4 text-brand-muted">
                  Up to {plan.speedDown} / {plan.speedUp ?? '—'} Mbps
                </td>
                <td className="px-4 py-4 text-brand-muted">{plan.priorityData}</td>
                <td className="px-4 py-4 font-semibold text-brand-navy">
                  ${plan.price.toFixed(2)}/mo
                  <span className="block text-xs font-normal text-brand-muted">
                    {plan.promoQualifier}
                    {plan.promoMonths ? ` · first ${plan.promoMonths} months` : ''}
                  </span>
                </td>
                <td className="px-4 py-4 font-semibold text-brand-navy">
                  ${plan.stepUpPrice.toFixed(2)}/mo
                  <span className="block text-xs font-normal text-brand-muted">
                    after promotional period
                  </span>
                </td>
                <td className="px-4 py-4 text-brand-muted">{plan.equipmentFee}</td>
                <td className="px-4 py-4 text-brand-muted">
                  {plan.installFee}
                  <span className="block text-xs">
                    otherwise {terms.installStandard}
                  </span>
                </td>
                <td className="px-4 py-4 text-brand-muted">
                  {plan.contractTerm}
                  <span className="block text-xs">Early termination fee applies</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-brand-muted sm:hidden">
        Scroll the table sideways to see every column.
      </p>

      <div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-xs leading-relaxed text-brand-muted">
        <p>{disclosures.softCap}</p>
        <p>{disclosures.speeds}</p>
        <p>{terms.etf}</p>
        <p>
          Taxes, government fees and optional add-on services are billed separately and are
          not included in the rates shown. Leased equipment remains the property of
          Hughesnet and must be returned on cancellation.
        </p>
        <p>
          Satellite pricing and plan availability vary by location. The current rate for
          your address is confirmed on the order call before service is placed.
        </p>
      </div>
    </Section>
  );
}
