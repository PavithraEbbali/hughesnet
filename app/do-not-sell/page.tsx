import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Do Not Sell or Share My Personal Information | ${operator.legalName}`,
};

export default function DoNotSellPage() {
  return (
    <LegalPage title="Do Not Sell or Share My Personal Information">
        <LegalHeading>Your CPRA rights</LegalHeading>
        <p>
          If you are a California resident, the California Privacy Rights Act gives you the right to know what personal information is collected about you, to have it deleted, to correct it, and to opt out of its sale or sharing for cross-context behavioral advertising.
        </p>
        <LegalHeading>Our position on selling</LegalHeading>
        <p>
          We do not sell personal information for money. Where advertising technology on this site may constitute sharing under the CPRA, you may opt out using the mechanism below.
        </p>
        <LegalHeading>How to opt out</LegalHeading>
        <p>
          Submit an opt-out request by emailing the address at the foot of this page with the subject line Do Not Sell or Share. We honor Global Privacy Control signals sent by your browser where technically feasible.
        </p>
        <LegalHeading>Authorized agents</LegalHeading>
        <p>
          An authorized agent may submit a request on your behalf with written permission. We may ask you to verify your identity before acting on a request.
        </p>
        <LegalHeading>Non-discrimination</LegalHeading>
        <p>
          We will not deny service, charge a different price, or provide a different level of service because you exercised a privacy right.
        </p>
    </LegalPage>
  );
}
