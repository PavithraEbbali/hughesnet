import { CallLink } from '@/components/ui/CallLink';
import { Section } from '@/components/ui/Section';
import { bundle } from '@/lib/content';

/** §6 — Internet + Home Phone bundle. */
export function Bundles() {
  return (
    <Section
      id="bundles"
      eyebrow="Bundles"
      title={bundle.headline}
      intro={bundle.body}
      tone="slate"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="card min-w-0">
          <h3 className="text-lg font-bold text-brand-navy">{bundle.name}</h3>
          <ul className="mt-4 space-y-3">
            {bundle.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-brand-muted">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan"
                />
                <span className="min-w-0">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-relaxed text-brand-muted">
            {bundle.note}
          </p>
        </div>

        <div className="flex min-w-0 flex-col justify-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-semibold text-brand-navy">
            Bundled voice pricing depends on the internet plan you choose.
          </p>
          <p className="mt-2 text-sm text-brand-muted">
            An agent quotes the exact bundled rate for your address on the order call.
          </p>
          <CallLink variant="primary" className="mt-5 w-full">
            Call for pricing
          </CallLink>
        </div>
      </div>
    </Section>
  );
}
