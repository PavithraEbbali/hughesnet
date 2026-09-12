import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Terms of Use | ${operator.legalName}`,
};

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use">
        <LegalHeading>Who operates this site</LegalHeading>
        <p>
          This website is operated by an independent authorized retailer of Hughesnet services. It is not operated by, endorsed by, or affiliated with Hughes Network Systems, LLC or EchoStar beyond an authorized retailer relationship.
        </p>
        <LegalHeading>What this site does</LegalHeading>
        <p>
          This site provides information about Hughesnet residential services and a telephone ordering channel. Service itself is sold and provided by Hughesnet under its own subscriber agreement, which governs your account.
        </p>
        <LegalHeading>Pricing information</LegalHeading>
        <p>
          Prices, speeds, data allowances and promotional terms shown here are subject to change by Hughesnet and vary by service address. Figures on this site are informational; the rate quoted on your order call and confirmed in your Hughesnet agreement controls.
        </p>
        <LegalHeading>Acceptable use</LegalHeading>
        <p>
          You may not scrape, republish or misrepresent the content of this site, or use it to imply an affiliation with Hughesnet that does not exist.
        </p>
        <LegalHeading>Limitation of liability</LegalHeading>
        <p>
          This site is provided on an as-is basis. We are not liable for service interruptions, installation outcomes, or billing matters arising under your Hughesnet subscriber agreement.
        </p>
    </LegalPage>
  );
}
