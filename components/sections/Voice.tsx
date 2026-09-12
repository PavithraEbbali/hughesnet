import Image from 'next/image';
import { CallLink } from '@/components/ui/CallLink';
import { voicePlan } from '@/lib/content';

/**
 * §9 — Hughesnet Voice® digital home phone.
 *
 * This section owns its own <section> rather than using the shared Section
 * shell, because it runs the home-phone photograph full-bleed behind the whole
 * band. A flat scrim plus a left-weighted gradient keeps the white body copy
 * above the contrast floor wherever the image crops at a given viewport.
 */
export function Voice() {
  return (
    <section id="voice" className="relative isolate overflow-hidden bg-brand-navy-deep">
      <Image
        src="/images/voice-home-phone.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[70%_50%]"
      />
      {/* Scrim is deliberately light (30%). The left-weighted gradient already
          carries the contrast where the copy sits — measured at ~14:1 against
          white, comfortably past WCAG AAA — so a heavier flat wash would only
          bury the photograph without buying any legibility. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-navy-deep/30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy-deep/95 via-brand-navy-deep/70 to-transparent"
      />

      <div className="shell section">
        <header className="max-w-3xl">
          <p className="eyebrow text-brand-cyan">Home phone</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Hughesnet Voice® digital home phone
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">{voicePlan.blurb}</p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0 rounded-xl border border-white/15 bg-brand-navy-deep/70 p-6 backdrop-blur-sm">
            <ul className="space-y-3">
              {voicePlan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-white/80">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan"
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
            <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/60">
              {voicePlan.dataPolicy}. Voice service requires an active residential
              Hughesnet internet subscription and is billed on the same Hughesnet account.
            </p>
          </div>

          {/* No price lockup here: no public Hughesnet Voice rate could be sourced,
              and rendering a placeholder as though it were an advertised rate is
              exactly the failure mode this refactor removes. An agent quotes it. */}
          <div className="flex min-w-0 flex-col justify-center rounded-xl border border-white/15 bg-brand-navy-deep/70 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-cyan">
              {voicePlan.name}
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed text-white">
              Voice pricing depends on the internet plan it is added to.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              An agent quotes the current monthly rate for your address when the order is
              placed.
            </p>
            <CallLink variant="primary" className="mt-5 w-full">
              Call for pricing
            </CallLink>
          </div>
        </div>
      </div>
    </section>
  );
}
