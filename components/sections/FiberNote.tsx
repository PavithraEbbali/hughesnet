import Image from 'next/image';
import { fiberNote } from '@/lib/content';

/**
 * §4 — Coverage clarity note.
 *
 * Sits between the hero and the satellite plans to set expectations honestly
 * for visitors who arrived searching for fiber, then hands off to the plans.
 */
export function FiberNote() {
  return (
    <section id="fiber" className="border-y border-slate-200 bg-brand-slate">
      <div className="shell py-12 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
              {fiberNote.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-muted">
              {fiberNote.body}
            </p>
          </div>

          <div className="relative aspect-[3/2] min-w-0 overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/images/coverage-rural-road.jpg"
              alt="A gravel county road running through open farmland toward a distant homestead, with no utility poles or cabinets along its length."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
