import Image from 'next/image';
import { PriceLockup } from '@/components/ui/PriceLockup';
import { ZipCheck } from '@/components/ui/ZipCheck';
import { disclosures, leadPlan, trustChips } from '@/lib/content';

/**
 * §2.2 — Hero.
 *
 * No moving background: the previous autoplaying orbit loops were dropped for a
 * single static image, which removes roughly 5 MB of media from the critical
 * path.
 *
 * Availability is entered through the ZIP field, which collects an address hint
 * and routes to the order line. It never renders an availability verdict — see
 * ZipCheck for why a client-side result would be fabricated.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-brand-navy-deep">
      {/*
        Static background — no autoplaying video. Rendered through next/image
        rather than a CSS background so it gets a responsive srcset and AVIF/WebP
        encoding; `priority` preloads it because it is the LCP element.
        Decorative, so alt is empty and it is hidden from assistive tech.
      */}
      <Image
        src="/images/hero-rural-satellite.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        /* The farmhouse sits right-of-centre in the frame. On narrow viewports the
           hero is tall and object-cover crops hard to the sides, so anchoring the
           focal point here keeps the house in shot instead of showing empty sky. */
        className="-z-10 object-cover object-[64%_58%]"
      />
      {/*
        Two overlays rather than one. The horizontal gradient is heaviest on the
        left, where the headline and ZIP form sit, and thins toward the right so
        the photograph is actually legible behind the price card. The flat wash
        underneath guarantees a contrast floor no matter how the image crops at
        a given viewport width.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-brand-navy-deep/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/80 to-transparent"
      />

      <div className="shell py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ---------------------------------------------------------- copy */}
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">
              Independent Authorized Retailer
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Satellite{' '}
              <span className="text-brand-cyan">internet</span>{' '}
              built{' '}
              for{' '}
              rural{' '}
              America
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              High-speed satellite broadband powered by JUPITER&trade; 3, reaching homes
              beyond the edge of cable and fiber. Every plan includes a built-in Wi-Fi 6
              modem and unlimited data with no overage fees.
            </p>

            {/* ------------------------------------------- availability entry */}
            <div className="mt-8 max-w-xl">
              <ZipCheck />
            </div>

            {/* ------------------------------------------------- trust chips */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          {/* --------------------------------------------------- price anchor */}
          <div className="min-w-0 rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
              {leadPlan.name} &middot; up to {leadPlan.speedDown} Mbps
            </p>
            <div className="lockup--invert mt-3">
              <PriceLockup plan={leadPlan} size="lg" />
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/70">
              {leadPlan.priorityData} of Priority Data each month, then unlimited Standard
              Data with no overage fees.
            </p>
          </div>
        </div>

        {/* Hero-level footnote resolving the asterisks on the trust chips. */}
        <p className="mt-12 max-w-4xl text-xs leading-relaxed text-white/60">
          *{disclosures.softCap} {disclosures.speeds} Built-in Wi-Fi 6 modem included with
          equipment lease. Professional installation included on promotional lease orders;
          standard installation charges apply otherwise &mdash; see{' '}
          <a href="#fine-print" className="underline underline-offset-2 hover:text-white">
            full pricing details
          </a>
          .
        </p>
      </div>
    </section>
  );
}
