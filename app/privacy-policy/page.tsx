import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Privacy Policy | ${operator.legalName}`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
        <LegalHeading>What we collect</LegalHeading>
        <p>
          When you call the order line or submit a request, we collect the information needed to place a service order: name, service address, contact telephone number, email address and the plan selected. We do not collect payment card data on this website.
        </p>
        <LegalHeading>How we use it</LegalHeading>
        <p>
          Information is used solely to qualify your address for service, submit your order to Hughesnet, and contact you about that order. Hughesnet processes your subscriber account under its own privacy policy once the order is placed.
        </p>
        <LegalHeading>Sharing</LegalHeading>
        <p>
          Order details are shared with Hughes Network Systems, LLC in order to provision service, and with installation contractors scheduling your appointment. We do not sell personal information. See our Do Not Sell or Share page for your CPRA rights.
        </p>
        <LegalHeading>Retention and security</LegalHeading>
        <p>
          Order records are retained for the period required by our carrier agreement and applicable law, then deleted. Access is limited to staff who need it to service your order.
        </p>
        <LegalHeading>Your choices</LegalHeading>
        <p>
          You may request access to, correction of, or deletion of the information we hold about you by contacting us at the address below.
        </p>
    </LegalPage>
  );
}
