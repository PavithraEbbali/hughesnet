# Hughesnet Authorized Retailer — landing site

A one-page, Google Ads policy-compliant landing site for an **independent
authorized retailer of Hughesnet®**, plus nine legal routes. Next.js 15, React
19, TypeScript, Tailwind CSS 4.

Every page is statically prerendered. The only client-side JavaScript on the
site is the hero ZIP field.

---

## Before this goes live

These are blocking. They are all one-file edits in `lib/content.ts`.

1. **Operator identity is a placeholder.** `operator.legalName` and
   `operator.wordmark` are currently set to `"Hughesnet"` as a temporary visual
   stand-in. Shipping that presents a retailer site as the carrier itself and
   directly contradicts the "Not Hughesnet" disclosure in the top bar. Replace
   with the real registered entity. `registeredAddress` and `email` are also
   placeholders and render literally in the footer.
2. **Pricing is unverified.** hughesnet.com gates all rates behind an address
   lookup, so the figures came from secondary aggregators and carry `observedAt`
   and `sourceUrl` fields. Reconcile against your own reseller rate card, then
   set `PRICING_VERIFIED = true`.
3. **Legal page copy is a drafting scaffold.** All nine routes render a visible
   "not reviewed legal copy" notice until counsel replaces the body text.
4. **Next.js 15.1.0 carries a published advisory**
   ([CVE-2025-66478](https://nextjs.org/blog/CVE-2025-66478)). Patched releases
   exist in the 15.5.x line.

---

## Architecture

### `lib/content.ts` is the single source of truth

Every price, speed, data allowance, fee, phone number, legal string and
disclosure is read from this one file. Changing a price there updates the hero
anchor, the plan cards, the screen-reader price announcements and the pricing
grid simultaneously — no JSX edits.

### Compliance is enforced structurally, not by discipline

- **`components/ui/CallLink.tsx` is the only file containing a `tel:` href.**
  Every call-to-action renders through it, so the `data-call-cta` tracking
  attribute cannot be forgotten. `grep -rn 'href="tel:' app components` should
  only ever match that one file.
- **`components/ui/PriceLockup.tsx` is the only price renderer.** It emits a
  flex baseline row that is `aria-hidden`, paired with a generated `sr-only`
  sentence, so screen readers announce "$89.99 per month" rather than spelling
  out symbols. Promotional qualifiers and post-promo step-up rates render
  adjacent to the number, never as a detached footnote.
- **No fabricated availability.** The hero ZIP field collects an address hint
  and routes to the order line. It never returns a coverage verdict, because
  satellite beam capacity cannot be truthfully resolved client-side.

---

## Local development

```bash
npm install
npm run dev
```

The first request compiles the route and can take up to a minute. Subsequent
loads are fast and edits hot-reload.

> Do not run `next build` while `next dev` is running — the production build
> overwrites `.next` underneath the dev server. If that happens, stop the server,
> `rm -rf .next`, and restart.

## Deploying to Vercel

1. Import the repository. Vercel auto-detects Next.js; no build settings needed.
2. Set **`APP_URL`** in Project → Settings → Environment Variables to the public
   origin (e.g. `https://your-domain.com`). It backs `metadataBase`, so Open
   Graph and Twitter card images resolve to absolute URLs. Without it, link
   previews point at localhost.

## Verification

```bash
npx tsc --noEmit
npx next build
```

Checked at 320 / 360 / 640 / 768 / 1024 px: no horizontal overflow at any width.
All `tel:` links carry `data-call-cta`. All images carry alt text except the two
decorative backgrounds, which are `aria-hidden`.

## Known cleanup

Ten declared dependencies are no longer imported anywhere (`@google/genai`,
`gsap`, `@gsap/react`, `motion`, `lucide-react`, `@hookform/resolvers`,
`@opentelemetry/api`, `class-variance-authority`, `clsx`, `tailwind-merge`),
along with the `firebase-tools` devDependency. `lib/utils.ts` and
`hooks/use-mobile.ts` are dead files. Removing them would cut install and build
time; left in place pending review.
