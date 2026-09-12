import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Contact | ${operator.legalName}`,
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact">
        <LegalHeading>New orders</LegalHeading>
        <p>
          To order Hughesnet service, check availability at your address, or ask about pricing and equipment, call the order line listed in the footer during staffed hours.
        </p>
        <LegalHeading>Existing Hughesnet customers</LegalHeading>
        <p>
          We cannot access existing Hughesnet accounts. For billing questions, service repairs, outages, plan changes or cancellations, contact Hughesnet customer service directly through hughesnet.com or the number on your bill.
        </p>
        <LegalHeading>Written correspondence</LegalHeading>
        <p>
          Legal notices, privacy requests and accessibility reports may be sent to the registered address or business email shown at the foot of this page.
        </p>
        <LegalHeading>Response times</LegalHeading>
        <p>
          Email inquiries are generally answered within two business days. Privacy and opt-out requests are handled within the timeframes required by applicable law.
        </p>
    </LegalPage>
  );
}
