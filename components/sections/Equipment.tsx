import Image from 'next/image';
import { CallLink } from '@/components/ui/CallLink';
import { Section } from '@/components/ui/Section';
import { equipment } from '@/lib/content';

/** §10 — Equipment and value-added services. Genuine Hughesnet SKUs only. */
export function Equipment() {
  return (
    <Section
      id="equipment"
      eyebrow="Equipment & add-ons"
      title="Hardware and optional services"
      intro="The satellite gateway is included with every plan. Everything below is an optional add-on quoted by an agent at the time of order."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {equipment.map((item) => (
          <article
            key={item.id}
            className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            {item.image ? (
              <div className="relative aspect-[16/10] w-full bg-brand-slate">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? ''}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-bold text-brand-navy">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-base font-bold text-brand-navy">{item.price}</p>
                {item.note ? (
                  <p className="mt-1 text-xs text-brand-muted">{item.note}</p>
                ) : null}
                <CallLink variant="primary" className="mt-4 w-full">
                  Call for pricing
                </CallLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
