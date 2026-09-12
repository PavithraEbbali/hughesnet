import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Trademarks | ${operator.legalName}`,
};

export default function TrademarksPage() {
  return (
    <LegalPage title="Trademarks">
        <LegalHeading>Hughesnet marks</LegalHeading>
        <p>
          Hughesnet is a registered trademark of Hughes Network Systems, LLC (an EchoStar company). JUPITER is a trademark of Hughes Network Systems, LLC. These marks are used on this site solely to identify the services we are authorized to sell.
        </p>
        <LegalHeading>No claim of ownership</LegalHeading>
        <p>
          We claim no ownership of, and assert no rights in, the Hughesnet or JUPITER marks. Use of these marks does not imply that this site is operated by or endorsed by Hughes Network Systems, LLC.
        </p>
        <LegalHeading>Third-party marks</LegalHeading>
        <p>
          DISH and DIRECTV are trademarks of their respective owners and are referenced only to identify authorized satellite television partners. All other trademarks are the property of their respective owners.
        </p>
        <LegalHeading>Our identity</LegalHeading>
        <p>
          This site is operated under the retailer name shown below. Our own name and wordmark identify this ordering channel, not the underlying network operator.
        </p>
    </LegalPage>
  );
}
