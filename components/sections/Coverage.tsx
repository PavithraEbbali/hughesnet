import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { coverage } from '@/lib/content';

/**
 * §8 — Mobile / hotspot and whole-home coverage.
 *
 * Note the third card states plainly that residential satellite is a fixed
 * install rather than implying portable hotspot capability it does not have.
 */
export function Coverage() {
  return (
    <Section
      id="coverage"
      eyebrow="In-home coverage"
      title={coverage.headline}
      intro={coverage.body}
      tone="slate"
    >
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[3/2] min-w-0 overflow-hidden rounded-xl shadow-sm">
          <Image
            src="/images/coverage-home-interior.jpg"
            alt="An open-plan farmhouse living room at dusk with a laptop on the coffee table and a tablet on the sofa arm, lit by lamplight."
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grid min-w-0 gap-4">
          {coverage.points.map((point) => (
            <article key={point.title} className="card min-w-0">
              <h3 className="text-base font-bold text-brand-navy">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
