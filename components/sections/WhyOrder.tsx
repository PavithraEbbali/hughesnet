import { Section } from '@/components/ui/Section';
import { whyOrder } from '@/lib/content';

/**
 * §12 — Why order through us.
 *
 * Aggregation-convenience claims only. Nothing here asserts local presence,
 * owned technicians, price guarantees, or service capability the retailer does
 * not have — those claims were the core of the previous locality-themed
 * section and are banned outright.
 */
export function WhyOrder() {
  return (
    <Section
      id="why-order"
      eyebrow="Ordering through us"
      title="Why customers order through this line"
      intro="A single point of contact for setting up Hughesnet service, with availability and pricing confirmed for your address before you commit."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {whyOrder.map((card, i) => (
          <article key={card.title} className="card flex min-w-0 gap-4">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-slate text-sm font-bold text-brand-cyan-dark"
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-brand-navy">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
