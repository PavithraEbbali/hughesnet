import Image from 'next/image';
import { CallLink } from '@/components/ui/CallLink';
import { Section } from '@/components/ui/Section';
import { operator, steps } from '@/lib/content';

/** §13 — How it works. Exactly three steps, ending at a scheduled install. */
export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="Ordering"
      title="Three steps from call to connected"
      tone="navy"
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.number}
            className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/15 bg-white/5"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy-deep/85 text-sm font-extrabold text-brand-cyan backdrop-blur-sm"
              >
                {step.number}
              </span>
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-bold text-white">
            Agents available {operator.hours}
          </p>
          <p className="mt-1 text-xs text-white/65">
            Availability, speeds and current pricing are confirmed for your address before
            anything is ordered.
          </p>
        </div>
        <CallLink variant="primary" className="w-full shrink-0 sm:w-auto">
          Call to order
        </CallLink>
      </div>
    </Section>
  );
}
