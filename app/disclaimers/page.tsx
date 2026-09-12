import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Disclaimers | ${operator.legalName}`,
};

export default function DisclaimersPage() {
  return (
    <LegalPage title="Disclaimers">
        <LegalHeading>Retailer status</LegalHeading>
        <p>
          This site is operated by an independent authorized retailer of Hughesnet services. It is not Hughesnet, not Hughes Network Systems, LLC, and not EchoStar. We do not operate the satellite network, perform installations ourselves, or service existing accounts.
        </p>
        <LegalHeading>Pricing disclaimer</LegalHeading>
        <p>
          Hughesnet publishes residential pricing only after an address lookup, because satellite pricing and plan availability vary by beam and market. Prices shown on this site are informational and subject to change. The rate quoted on your order call and confirmed in your Hughesnet subscriber agreement is the rate that applies.
        </p>
        <LegalHeading>Speed disclaimer</LegalHeading>
        <p>
          All speeds are stated as up to and are not guaranteed. Actual speeds vary with location, beam capacity, terrain, weather, network congestion, equipment and other factors outside network control.
        </p>
        <LegalHeading>Data policy disclaimer</LegalHeading>
        <p>
          Plans include unlimited data with no overage fees. Once the monthly Priority Data allowance is consumed, speeds are reduced during periods of network congestion until the next billing cycle.
        </p>
        <LegalHeading>Availability disclaimer</LegalHeading>
        <p>
          Hughesnet reaches most contiguous US rural addresses, but service requires a clear line of sight to the southern sky and sufficient beam capacity at your location. Availability can only be confirmed for a specific address.
        </p>
        <LegalHeading>Television services</LegalHeading>
        <p>
          Satellite television referenced on this site is provided by a separate authorized partner under a separate agreement with separate billing. It is not a Hughesnet product.
        </p>
    </LegalPage>
  );
}
