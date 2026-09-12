import type { Metadata } from 'next';
import { LegalPage, LegalHeading } from '@/components/legal/LegalPage';
import { operator } from '@/lib/content';

export const metadata: Metadata = {
  title: `Cookies | ${operator.legalName}`,
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookies">
        <LegalHeading>What cookies we use</LegalHeading>
        <p>
          This site uses a small number of cookies: strictly necessary cookies that make the page function, and analytics cookies that tell us which sections visitors read before calling.
        </p>
        <LegalHeading>Advertising cookies</LegalHeading>
        <p>
          Where advertising platforms are used to measure whether an ad led to a call, those platforms may set cookies. California residents may opt out of any resulting sharing via our Do Not Sell or Share page.
        </p>
        <LegalHeading>Managing cookies</LegalHeading>
        <p>
          Most browsers let you block or delete cookies through their settings. Blocking strictly necessary cookies may prevent parts of the site from working correctly.
        </p>
        <LegalHeading>Do Not Track and GPC</LegalHeading>
        <p>
          We honor Global Privacy Control signals where technically feasible. Browser Do Not Track headers are not currently standardized and are not acted upon separately.
        </p>
    </LegalPage>
  );
}
