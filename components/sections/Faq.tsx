import { Section } from '@/components/ui/Section';
import { faqs } from '@/lib/content';

/**
 * §14 — FAQ. Always the final content section before the footer.
 *
 * Built on native <details>/<summary>: the accordion works with zero JavaScript,
 * is keyboard-operable and screen-reader-announced for free, and the answer text
 * is present in the DOM for crawlers even when collapsed.
 */
export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="Questions"
      title="Frequently asked questions"
      intro="Straight answers on availability, pricing, contracts and who you are actually buying from."
      tone="slate"
    >
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
        {faqs.map((faq) => (
          <details key={faq.id} name="faq" className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-brand-navy transition-colors hover:bg-brand-slate sm:text-base">
              <span className="min-w-0">{faq.question}</span>
              <svg
                className="h-5 w-5 shrink-0 text-brand-cyan-dark transition-transform group-open:rotate-45"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M10 4v12M4 10h12" />
              </svg>
            </summary>
            <div className="px-5 pb-5 text-sm leading-relaxed text-brand-muted">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
