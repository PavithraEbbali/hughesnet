import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Accessibility | ${operator.legalName}`,
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility">
        <LegalHeading>Our commitment</LegalHeading>
        <p>
          We aim to meet WCAG 2.1 Level AA across this site so that rural customers using assistive technology can review plans, pricing and terms independently.
        </p>
        <LegalHeading>What we have implemented</LegalHeading>
        <p>
          Pricing is announced to screen readers as a complete sentence rather than as fragmented symbols. The FAQ accordion uses native disclosure semantics and is fully keyboard-operable. Interactive controls carry visible focus indicators, and the site respects the reduced-motion preference.
        </p>
        <LegalHeading>Known limitations</LegalHeading>
        <p>
          The plan comparison table scrolls horizontally on narrow viewports. We are continuing to evaluate alternatives that preserve every disclosure without truncation.
        </p>
        <LegalHeading>Telephone alternative</LegalHeading>
        <p>
          If any part of this site is not accessible to you, the order line can read out any plan detail, price, or term. Staffed hours are listed in the footer.
        </p>
        <LegalHeading>Reporting a barrier</LegalHeading>
        <p>
          Email the address below describing the page and the barrier encountered. We aim to respond within five business days.
        </p>
    </LegalPage>
  );
}
