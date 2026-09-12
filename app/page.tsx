import { SiteHeader } from '@/components/chrome/SiteHeader';
import { StickyCallBar } from '@/components/chrome/StickyCallBar';
import { Hero } from '@/components/sections/Hero';
import { FiberNote } from '@/components/sections/FiberNote';
import { SatellitePlans } from '@/components/sections/SatellitePlans';
import { Bundles } from '@/components/sections/Bundles';
import { Coverage } from '@/components/sections/Coverage';
import { Voice } from '@/components/sections/Voice';
import { Equipment } from '@/components/sections/Equipment';
import { FinePrint } from '@/components/sections/FinePrint';
import { WhyOrder } from '@/components/sections/WhyOrder';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Faq } from '@/components/sections/Faq';
import { SiteFooter } from '@/components/sections/SiteFooter';

/**
 * Canonical section order (Master Structure Spec v1.2).
 *
 *  1  Top disclosure bar     — inside SiteHeader, always visible
 *  2  Sticky header
 *  3  Hero
 *  4  Coverage clarity note
 *  5  Satellite broadband plans
 *  6  Bundles
 *  7  Whole-home Wi-Fi coverage
 *  8  Hughesnet Voice
 *  9  Equipment & value-added services
 * 10  Pricing and terms grid
 * 11  Why order through us
 * 12  How it works
 * 13  FAQ — always the final content section
 * 14  Compliance footer
 * 15  Sticky mobile call bar
 *
 * The TV cross-sell section was removed: Hughesnet does not sell television
 * service, so there is no carrier-published offer to represent.
 */
export default function Home() {
  return (
    <>
      {/* pb-24 clears the fixed call bar (shown below lg) so the footer is never covered. */}
      <div className="flex min-h-screen flex-col pb-24 lg:pb-0">
        <SiteHeader />

        <main className="flex-1">
          <Hero />
          <FiberNote />
          <SatellitePlans />
          <Bundles />
          <Coverage />
          <Voice />
          <Equipment />
          <FinePrint />
          <WhyOrder />
          <HowItWorks />
          <Faq />
        </main>

        <SiteFooter />
      </div>

      <StickyCallBar />
    </>
  );
}
