import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `TCPA Consent | ${operator.legalName}`,
};

export default function TcpaConsentPage() {
  return (
    <LegalPage title="TCPA Consent">
        <LegalHeading>What you are consenting to</LegalHeading>
        <p>
          By providing a telephone number and requesting contact, you consent to receive calls and text messages about Hughesnet service at that number, including calls placed using an automatic telephone dialing system or an artificial or prerecorded voice.
        </p>
        <LegalHeading>Consent is not a condition of purchase</LegalHeading>
        <p>
          You are not required to agree to receive automated marketing calls or texts as a condition of purchasing any goods or services. You may place an order by calling the order line directly.
        </p>
        <LegalHeading>Message frequency and rates</LegalHeading>
        <p>
          Message frequency varies. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.
        </p>
        <LegalHeading>How to revoke consent</LegalHeading>
        <p>
          You may revoke consent at any time by replying STOP to any text message, telling an agent on a call that you wish to be placed on our internal do-not-call list, or emailing the address below. Revocation is processed promptly.
        </p>
        <LegalHeading>Recording notice</LegalHeading>
        <p>
          Calls to and from the order line may be monitored or recorded for quality assurance and training, where permitted by law.
        </p>
    </LegalPage>
  );
}
