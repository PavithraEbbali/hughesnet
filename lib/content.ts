/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH  —  lib/content.ts
 * ============================================================================
 *
 *  Every price, speed, data allowance, fee, phone number, legal string and
 *  disclosure rendered anywhere on this site is read from this file.
 *
 *  To change pricing or promotions site-wide, edit ONLY this file. Cards, the
 *  hero lockup, the fine-print comparison grid, the FAQ answers and the footer
 *  disclosures all derive from these objects — no JSX edits required.
 *
 * ----------------------------------------------------------------------------
 *  PRICING PROVENANCE — READ BEFORE RUNNING PAID TRAFFIC
 * ----------------------------------------------------------------------------
 *  hughesnet.com does NOT publish flat plan pricing. Both the homepage and
 *  /plans-and-pricing gate every rate behind an address lookup, because
 *  satellite pricing varies by beam and market. The figures below therefore
 *  come from secondary aggregators (see `sourceUrl` on each plan) and carry an
 *  `observedAt` date.
 *
 *  They are STRUCTURALLY correct and MUST be reconciled against your own
 *  Hughesnet reseller rate card before this site serves an ad impression.
 *  Advertising an unverified rate is the exact Google Ads / FTC exposure this
 *  refactor exists to remove.
 *
 *  PRICING_VERIFIED gates a visible warning ribbon in development. Flip it to
 *  true only once the numbers are confirmed against your carrier agreement.
 * ============================================================================
 */

export const PRICING_VERIFIED = false;

/* -------------------------------------------------------------------------- */
/*  TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export interface PlanItem {
  id: string;
  name: string;
  serviceLine: 'satellite' | 'voice' | 'bundle';
  speedDown: number;
  speedUp?: number;
  priorityData: string;
  price: number;
  cents?: string;
  wasPrice?: number;
  /** Verbatim carrier qualifier. Rendered adjacent to the lockup, never hidden. */
  promoQualifier: string;
  /** Regular monthly rate once the promotional period ends. */
  stepUpPrice: number;
  equipmentFee: string;
  dataPolicy: string;
  contractTerm: string;
  features: string[];
  isPopular?: boolean;
  /** ISO date the figures were observed. Surfaced in the fine-print grid. */
  observedAt: string;
  sourceUrl: string;
  /** Optional one-line positioning note shown under the plan name. */
  blurb?: string;
  /** Promotional period length, used to generate step-up disclosure copy. */
  promoMonths?: number;
  installFee?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  price: string;
  note?: string;
  /** Path under /public. Omit to render the card without a visual. */
  image?: string;
  /** Required whenever `image` is set — describes the hardware, not the styling. */
  imageAlt?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface StepItem {
  number: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface ValueCard {
  title: string;
  body: string;
}

/* -------------------------------------------------------------------------- */
/*  OPERATOR IDENTITY                                                          */
/* -------------------------------------------------------------------------- */
/*  ####################################################################### */
/*  ##  STOP — `legalName` / `wordmark` are currently set to "Hughesnet".  ## */
/*  ####################################################################### */
/*                                                                           */
/*  This is a TEMPORARY visual placeholder, set at the owner's request.       */
/*                                                                           */
/*  Shipping it is not safe. Naming the operator "Hughesnet" presents this    */
/*  retailer site as the carrier itself, which is the precise impersonation   */
/*  that the top-bar disclosure, the footer disclosure and §7.1 all exist to  */
/*  prevent. The copyright line reads "© Hughesnet" while the bar above it    */
/*  reads "Not Hughesnet" — a direct contradiction a reviewer will catch.     */
/*                                                                           */
/*  Replace with the real registered entity, address and business email       */
/*  before this site takes traffic. Everything renders from these constants,  */
/*  so it is a one-place edit.                                                */

export const operator = {
  /** Registered legal entity of the independent retailer. TEMPORARY — see above. */
  legalName: 'Hughesnet',
  /** Operator wordmark. Never the Hughesnet logo standing alone (§7.1). */
  wordmark: 'Hughesnet',
  wordmarkSuffix: 'Independent Authorized Retailer',
  registeredAddress: '[Street Address], [City], [ST] [ZIP]',
  email: '[orders@entity.com]',
  /** Toll-free order line. Digits only in `tel`, formatted for display. */
  phoneDisplay: '(855) 543-5405',
  phoneHref: 'tel:+18555435405',
  /** Staffed hours for the order line. */
  hours: 'Mon–Sun 8am–10pm ET',
  copyrightYear: 2026,
} as const;

/* -------------------------------------------------------------------------- */
/*  CANONICAL DISCLOSURE STRINGS (§7.1, §7.5)                                  */
/* -------------------------------------------------------------------------- */

export const disclosures = {
  /** Top bar + footer. Non-negotiable wording. */
  retailer: 'Independent Authorized Retailer of Hughesnet® — Not Hughesnet.',
  trademark:
    'Hughesnet is a registered trademark of Hughes Network Systems, LLC (an EchoStar company).',
  /** §2.2 satellite exception. Replaces any unconditional-coverage claim. */
  capacityHonest:
    'Hughesnet satellite internet reaches most contiguous US rural addresses, but plan availability, speeds, and satellite beam capacity vary by location. Call to confirm what is available at your exact coordinates.',
  /** Priority-data soft cap. Never described as "unlimited" without this. */
  softCap:
    'Every plan stays connected with no overage fees. Once your monthly Priority Data allowance is used, speeds are reduced during network congestion until your next billing cycle.',
  speeds:
    'Speeds are "up to" and are not guaranteed. Actual speeds vary with location, beam capacity, terrain, weather, network congestion and equipment.',
  /* Deliberately does NOT interpolate operator.legalName. The disclosure has to
     stay coherent whatever the name token is set to — injecting it produced
     "operated by Hughesnet ... we are not Hughesnet". */
  footerParagraph:
    'This site is operated by an independent authorized retailer of Hughesnet® services. We are not Hughesnet, not Hughes Network Systems, LLC, and not EchoStar. Orders placed through this line are fulfilled by Hughesnet under its own subscriber agreement, pricing and terms. Pricing shown is Hughesnet advertised pricing; this retailer adds no surcharge.',
} as const;

/* -------------------------------------------------------------------------- */
/*  SHARED COMMERCIAL TERMS                                                    */
/* -------------------------------------------------------------------------- */

export const terms = {
  contract: '24-month commitment',
  etf: 'Early termination fee applies if service is cancelled inside the 24-month term; the fee declines each month of completed service.',
  leaseMonthly: '$14.99/mo',
  purchaseStandard: '$299.00',
  purchaseFusion: '$449.00',
  installPromo: '$0 with equipment lease (promotional)',
  installStandard: '$99.00',
  autopayQualifier: 'with AutoPay & Paperless Billing',
  promoMonths: 12,
  /** Carrier's own advertised promotional discount, quoted from hughesnet.com. */
  promoDiscountCopy: 'Save $25/mo. for 12 months',
  /** Internal provenance only — never rendered to visitors. */
  observedAt: '2026-09-12',
} as const;

/* -------------------------------------------------------------------------- */
/*  SATELLITE PLANS (§5) — powered by JUPITER 3                                */
/* -------------------------------------------------------------------------- */
/*  stepUpPrice is derived from the carrier's own advertised promotion         */
/*  ("SAVE $25/mo. for 12 months", hughesnet.com, observed 2026-09-12)         */
/*  applied to the promotional rate. Confirm against your rate card.           */

const AGG_SOURCE = 'https://cybernews.com/best-internet-providers/hughesnet-plans/';

export const satellitePlans: PlanItem[] = [
  {
    id: 'select',
    name: 'Hughesnet Select',
    serviceLine: 'satellite',
    speedDown: 50,
    speedUp: 5,
    priorityData: '100 GB',
    price: 49.99,
    cents: '.99',
    promoQualifier: terms.autopayQualifier,
    stepUpPrice: 74.99,
    promoMonths: terms.promoMonths,
    equipmentFee: terms.leaseMonthly + ' lease or ' + terms.purchaseStandard + ' purchase',
    installFee: terms.installPromo,
    dataPolicy: 'Unlimited data with a 100 GB priority data soft cap',
    contractTerm: terms.contract,
    blurb: 'Everyday browsing, email and streaming for smaller rural households.',
    features: [
      'Up to 50 Mbps download',
      '100 GB Priority Data each month',
      'Built-in Wi-Fi 6 modem/router',
      'No hard data limits — no overage fees',
      'Professional installation included with lease',
    ],
    observedAt: terms.observedAt,
    sourceUrl: AGG_SOURCE,
  },
  {
    id: 'elite',
    name: 'Hughesnet Elite',
    serviceLine: 'satellite',
    speedDown: 100,
    speedUp: 5,
    priorityData: '200 GB',
    price: 89.99,
    cents: '.99',
    promoQualifier: terms.autopayQualifier,
    stepUpPrice: 114.99,
    promoMonths: terms.promoMonths,
    equipmentFee: terms.leaseMonthly + ' lease or ' + terms.purchaseStandard + ' purchase',
    installFee: terms.installPromo,
    dataPolicy: 'Unlimited data with a 200 GB priority data soft cap',
    contractTerm: terms.contract,
    isPopular: true,
    blurb: 'Optimized for streaming and remote work across multiple devices.',
    features: [
      'Up to 100 Mbps download',
      '200 GB Priority Data each month',
      'Built-in Wi-Fi 6 modem/router',
      'Headroom for HD streaming and video calls',
      'Professional installation included with lease',
    ],
    observedAt: terms.observedAt,
    sourceUrl: AGG_SOURCE,
  },
  {
    id: 'fusion',
    name: 'Hughesnet Fusion',
    serviceLine: 'satellite',
    speedDown: 100,
    speedUp: 5,
    priorityData: '200 GB',
    price: 99.99,
    cents: '.99',
    promoQualifier: terms.autopayQualifier,
    stepUpPrice: 124.99,
    promoMonths: terms.promoMonths,
    equipmentFee: '$19.99/mo lease or ' + terms.purchaseFusion + ' purchase',
    installFee: terms.installPromo,
    dataPolicy: 'Unlimited data with a 200 GB priority data soft cap',
    contractTerm: terms.contract,
    blurb:
      'Hybrid satellite and terrestrial wireless for more responsive real-time video calls.',
    features: [
      'Up to 100 Mbps download',
      '200 GB Priority Data each month',
      'Hybrid satellite + wireless for lower latency',
      'Built for real-time video calls and VPN',
      'Availability limited to select areas — call to confirm',
    ],
    observedAt: terms.observedAt,
    sourceUrl: AGG_SOURCE,
  },
];

/* -------------------------------------------------------------------------- */
/*  HUGHESNET VOICE (§9)                                                       */
/* -------------------------------------------------------------------------- */
/*  UNSOURCED PRICE. No public Hughesnet Voice rate could be located — the      */
/*  carrier does not publish one, and no aggregator carried it either. The      */
/*  29.99 below is a PLACEHOLDER, not an observed figure. Replace it with your  */
/*  rate card value before this section is advertised, or drop the lockup and   */
/*  let an agent quote the rate on the call.                                    */

export const voicePlan: PlanItem = {
  id: 'voice',
  name: 'Hughesnet Voice®',
  serviceLine: 'voice',
  speedDown: 0,
  priorityData: 'Does not consume Priority Data',
  price: 29.99,
  cents: '.99',
  promoQualifier: 'when added to a residential Hughesnet internet plan',
  stepUpPrice: 29.99,
  equipmentFee: 'Voice adapter included',
  dataPolicy: 'Voice calls do not draw down your satellite Priority Data allowance',
  contractTerm: terms.contract,
  blurb: 'Digital home phone delivered over your satellite connection.',
  features: [
    'Unlimited local and nationwide calling across all 50 US states and Canada',
    'Calls do not consume your internet Priority Data',
    'Voicemail, caller ID and call forwarding included',
    'Keep your existing number where number portability is available',
  ],
  observedAt: 'unsourced-placeholder',
  sourceUrl: '',
};

/* -------------------------------------------------------------------------- */
/*  BUNDLES (§6)                                                               */
/* -------------------------------------------------------------------------- */

export const bundle = {
  id: 'internet-voice',
  name: 'Internet + Hughesnet Voice®',
  headline: 'Add home phone to any residential internet plan',
  body: 'Bundling Hughesnet Voice® with a residential satellite internet plan lowers the monthly voice rate versus standalone service. Voice traffic is carried separately and does not draw down your Priority Data allowance.',
  points: [
    'Single Hughesnet bill for internet and home phone',
    'Voice calls do not consume satellite Priority Data',
    'Unlimited nationwide and Canada calling',
    'One call to add voice to a new internet order',
  ],
  note: 'Bundle savings apply to the voice line only and require an active residential Hughesnet internet subscription. Ask an agent for the current bundled rate at your address.',
} as const;

/* -------------------------------------------------------------------------- */
/*  MOBILE / HOTSPOT + IN-HOME COVERAGE (§8)                                   */
/* -------------------------------------------------------------------------- */

export const coverage = {
  headline: 'Whole-home Wi-Fi 6 coverage',
  body: 'Every Hughesnet plan ships with a built-in Wi-Fi 6 modem/router. On larger rural properties, outbuildings and metal-roofed structures, optional mesh nodes extend coverage past what a single gateway reaches.',
  points: [
    {
      title: 'Built-in Wi-Fi 6 gateway',
      body: 'The satellite modem and Wi-Fi 6 router are a single unit — no separate router purchase required.',
    },
    {
      title: 'Optional mesh nodes',
      body: 'Add nodes to extend coverage to a second floor, a shop or a detached structure within range.',
    },
    {
      title: 'Portable connectivity',
      body: 'Hughesnet residential service is a fixed installation tied to your dish. For travel or off-grid use, ask an agent about Hughesnet business and mobility options.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  EQUIPMENT & VALUE-ADDED SERVICES (§10)                                     */
/* -------------------------------------------------------------------------- */

export const equipment: EquipmentItem[] = [
  {
    id: 'gateway',
    name: 'Wi-Fi 6 Satellite Modem / Router',
    description:
      'The standard Hughesnet gateway. Combines the satellite modem and a Wi-Fi 6 router in one unit, included with every residential plan.',
    image: '/images/equipment-gateway.jpg',
    imageAlt: 'A matte-white satellite modem and Wi-Fi 6 router in a single upright unit, with a small illuminated status light.',
    price: terms.leaseMonthly + ' lease',
    note:
      'or ' + terms.purchaseStandard + ' to purchase outright (' + terms.purchaseFusion + ' on Fusion)',
  },
  {
    id: 'mesh',
    name: 'Mesh Wi-Fi Nodes',
    description:
      'Optional add-on nodes that extend whole-home coverage into rooms, upper floors and outbuildings the main gateway does not reach.',
    image: '/images/equipment-mesh-node.jpg',
    imageAlt: 'A compact matte-white mesh Wi-Fi node with a cyan status ring around its base.',
    price: 'Optional add-on',
    note: 'Pricing quoted per node at time of order',
  },
  {
    id: 'express-basic',
    name: 'Express Repair — Basic',
    description:
      'Accelerated technician dispatch with a reduced service call fee if your equipment needs on-site attention.',
    image: '/images/equipment-service-kit.jpg',
    imageAlt: 'A technician tool roll laid out flat: signal meter, coaxial crimper, cable spool and hand tools.',
    price: 'Monthly add-on',
    note: 'Reduces standard service call charges',
  },
  {
    id: 'express-premium',
    name: 'Express Repair — Premium',
    description:
      'Priority dispatch with the shortest available appointment window and the lowest service call fee tier.',
    image: '/images/equipment-service-kit.jpg',
    imageAlt: 'A technician tool roll laid out flat: signal meter, coaxial crimper, cable spool and hand tools.',
    price: 'Monthly add-on',
    note: 'Highest dispatch priority tier',
  },
];

/* -------------------------------------------------------------------------- */
/*  FIBER CLARITY NOTE (§4)                                                    */
/* -------------------------------------------------------------------------- */

export const fiberNote = {
  heading: 'Coverage beyond the wired network',
  body: 'Fiber and cable networks are built where population density justifies the trenching, which leaves much of rural America outside their footprint. Hughesnet delivers high-speed broadband by satellite, so service does not depend on how far the wired network has been extended toward your property.',
} as const;

/* -------------------------------------------------------------------------- */
/*  WHY ORDER THROUGH US (§12) — aggregation convenience only                  */
/* -------------------------------------------------------------------------- */

export const whyOrder: ValueCard[] = [
  {
    title: 'One call, one order',
    body: 'One call orders satellite broadband, equipment, and digital home voice.',
  },
  {
    title: 'Checked against your coordinates',
    body: 'Exact beam availability and speeds confirmed live for your coordinates.',
  },
  {
    title: 'Carrier pricing, nothing added',
    body: 'Direct carrier pricing — you pay Hughesnet advertised rates; our line adds nothing.',
  },
  {
    title: 'Staffed order line',
    body: 'Trained sales agents dedicated to new orders, ' + operator.hours + '.',
  },
];

/* -------------------------------------------------------------------------- */
/*  HOW IT WORKS (§13) — exactly three steps                                   */
/* -------------------------------------------------------------------------- */

export const steps: StepItem[] = [
  {
    number: '01',
    title: 'Call the order line',
    image: '/images/step-1-call.jpg',
    imageAlt: 'A person holding a phone to their ear at a sunlit kitchen counter.',
    body:
      'Reach trained sales agents on the order line at ' +
      operator.phoneDisplay +
      ', staffed ' +
      operator.hours +
      '.',
  },
  {
    number: '02',
    title: 'Agent confirms your address',
    image: '/images/step-2-site-check.jpg',
    imageAlt: 'A technician in a rural yard holding a tablet and looking up toward open southern sky.',
    body: 'Your agent checks satellite line-of-sight and confirms which plans, speeds and beam capacity are actually available at your address.',
  },
  {
    number: '03',
    title: 'Professional installation',
    image: '/images/step-3-install.jpg',
    imageAlt: 'A technician on a ladder aligning a satellite dish mounted on the eave of a rural home.',
    body: 'Installation is scheduled with certified Hughesnet technicians, who mount the dish, run the cable and configure your Wi-Fi 6 modem.',
  },
];

/* -------------------------------------------------------------------------- */
/*  TRUST CHIPS (§2.2) — max 4, each verifiable                                */
/* -------------------------------------------------------------------------- */

export const trustChips: string[] = [
  'No Hard Data Limits*',
  'Built-in Wi-Fi 6 Modem*',
  'Professional Installation Included*',
  'Powered by JUPITER™ 3*',
];

/* -------------------------------------------------------------------------- */
/*  NAVIGATION (§2.1)                                                          */
/* -------------------------------------------------------------------------- */

export const navLinks: LegalLink[] = [
  { label: 'Plans', href: '#plans' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Voice', href: '#voice' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

/* -------------------------------------------------------------------------- */
/*  FAQ (§14) — final content section before the footer                        */
/* -------------------------------------------------------------------------- */

export const faqs: FaqItem[] = [
  {
    id: 'availability',
    question: 'Is Hughesnet available at my rural address?',
    answer:
      disclosures.capacityHonest +
      ' Service also requires a clear line of sight to the southern sky, so trees, ridgelines and structures can affect whether an address can be installed.',
  },
  {
    id: 'pricing',
    question: 'How does the pricing and AutoPay discount work?',
    answer:
      'Advertised monthly rates require enrollment ' +
      terms.autopayQualifier.toLowerCase() +
      '. Promotional pricing runs for the first ' +
      terms.promoMonths +
      ' months, after which the plan bills at its regular monthly rate — shown alongside every price on this page. Equipment lease, taxes and any optional add-ons are billed separately.',
  },
  {
    id: 'installation',
    question: 'What happens during professional installation?',
    answer:
      'A certified Hughesnet technician surveys your property for a clear southern-sky view, mounts the satellite dish, runs cable to your equipment location, installs and provisions the Wi-Fi 6 modem, and confirms the connection is live before leaving.',
  },
  {
    id: 'contract-data',
    question: 'What are the contract and data terms?',
    answer:
      'Residential service carries a ' +
      terms.contract +
      '. ' +
      terms.etf +
      ' ' +
      disclosures.softCap,
  },
  {
    id: 'equipment',
    question: 'Should I lease or buy the equipment?',
    answer:
      'Equipment can be leased at ' +
      terms.leaseMonthly +
      ' or purchased outright for ' +
      terms.purchaseStandard +
      ' (' +
      terms.purchaseFusion +
      ' on Fusion). Leasing currently includes professional installation at no charge; purchasing carries a standard installation fee of ' +
      terms.installStandard +
      '. Leased equipment must be returned if service is cancelled.',
  },
  {
    id: 'speeds',
    question: 'What download speeds can I expect?',
    answer:
      'Plans are offered at up to 50 Mbps and up to 100 Mbps depending on tier. Actual throughput varies with beam capacity at your location, terrain, weather and network congestion, so an agent confirms the speeds available at your address before an order is placed.',
  },
];

/* -------------------------------------------------------------------------- */
/*  LEGAL PAGES (§15) — nine token-driven routes                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  FOOTER COLUMNS                                                             */
/* -------------------------------------------------------------------------- */

export const footerNav: { heading: string; links: LegalLink[] }[] = [
  {
    heading: 'Shop',
    links: [
      { label: 'Satellite internet plans', href: '#plans' },
      { label: 'Internet + home phone', href: '#bundles' },
      { label: 'Hughesnet Voice®', href: '#voice' },
      { label: 'Equipment & add-ons', href: '#equipment' },
      { label: 'Check availability', href: '#top' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'How ordering works', href: '#how-it-works' },
      { label: 'Pricing and terms', href: '#fine-print' },
      { label: 'Whole-home Wi-Fi coverage', href: '#coverage' },
      { label: 'Frequently asked questions', href: '#faq' },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  OFFER DETAILS — required disclosures block rendered in the footer          */
/* -------------------------------------------------------------------------- */

export const offerDetails: { heading: string; body: string }[] = [
  {
    heading: 'Internet',
    body: 'Promotional monthly rates require enrollment with AutoPay & Paperless Billing and a 24-month commitment. Promotional pricing applies for the first 12 months; the regular monthly rate applies thereafter. Taxes, government fees and optional add-on services are billed separately.',
  },
  {
    heading: 'Speeds & data',
    body: 'Speeds are "up to" and are not guaranteed. Actual speeds vary with location, beam capacity, terrain, weather, network congestion and equipment. Plans include unlimited data with no overage fees; once the monthly Priority Data allowance is used, speeds are reduced during periods of network congestion until the next billing cycle.',
  },
  {
    heading: 'Equipment & installation',
    body: 'Equipment may be leased at $14.99/mo or purchased for $299.00 ($449.00 on Fusion). Professional installation is included on promotional lease orders; a standard installation charge of $99.00 applies otherwise. Leased equipment remains the property of Hughesnet and must be returned on cancellation.',
  },
  {
    heading: 'Agreement',
    body: 'Residential service carries a 24-month commitment. An early termination fee applies if service is cancelled inside the term; the fee declines with each month of completed service. Service requires a clear line of sight to the southern sky and sufficient beam capacity at the service address.',
  },
];

export const legalLinks: LegalLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Do Not Sell or Share My Personal Information', href: '/do-not-sell' },
  { label: 'TCPA Consent', href: '/tcpa-consent' },
  { label: 'Trademarks', href: '/trademarks' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Contact', href: '/contact' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Disclaimers', href: '/disclaimers' },
];

/* -------------------------------------------------------------------------- */
/*  DERIVED HELPERS                                                            */
/* -------------------------------------------------------------------------- */

/** Lead plan used for the hero price anchor. Falls back to the first plan. */
export const leadPlan: PlanItem =
  satellitePlans.find((p) => p.isPopular) ?? satellitePlans[0];

/** Lowest advertised promotional rate across satellite plans. */
export const lowestPlanPrice: number = Math.min(...satellitePlans.map((p) => p.price));

/** Splits a price into dominant integer and muted cents for the §3 lockup. */
export function splitPrice(value: number): { int: string; cents: string } {
  const [int, cents = '00'] = value.toFixed(2).split('.');
  return { int, cents: '.' + cents };
}

/** Screen-reader string for a price, e.g. "$74.99 per month". */
export function priceToSpeech(value: number): string {
  return '$' + value.toFixed(2) + ' per month';
}
