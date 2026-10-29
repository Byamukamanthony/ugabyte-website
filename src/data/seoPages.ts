import { UGABYTE_APP_LINKS } from "../config/ugabyte";

export const SITE_ORIGIN = "https://ugabyte-website.vercel.app";

export type CategoryRouteSlug =
  | "student-deals-uganda"
  | "student-marketplace-uganda"
  | "campus-events-uganda"
  | "student-gigs-uganda";

export interface CategorySeoPageConfig {
  slug: CategoryRouteSlug;
  path: `/${CategoryRouteSlug}`;
  canonicalUrl: string;
  navLabel: string;
  shortBadge: string;
  feedCategory: "deals" | "products" | "events" | "gigs";
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  appLink: string;
  appCtaLabel: string;
  highlights: {
    title: string;
    description: string;
  }[];
  howToSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  campusZones: string[];
  contributorTitle: string;
  contributorDescription: string;
  contributorCtaLabel: string;
  faqs: {
    q: string;
    a: string;
  }[];
}

export const HOMEPAGE_SEO = {
  title: "UgaByte — Student Deals, Events & Opportunities",
  metaDescription:
    "UgaByte connects students across Uganda with verified campus deals, affordable local food, a zero-fee marketplace, university events, and opportunities.",
  canonicalUrl: `${SITE_ORIGIN}/`,
  ogImage: `${SITE_ORIGIN}/og-image.png`,
} as const;

export const CATEGORY_SEO_PAGES: Record<CategoryRouteSlug, CategorySeoPageConfig> = {
  "student-deals-uganda": {
    slug: "student-deals-uganda",
    path: "/student-deals-uganda",
    canonicalUrl: `${SITE_ORIGIN}/student-deals-uganda`,
    navLabel: "Deals",
    shortBadge: "Deals & Food",
    feedCategory: "deals",
    title: "Student Deals & Affordable Campus Food in Uganda | UgaByte",
    metaDescription:
      "Discover verified student discounts, affordable meals, printing offers, and hostel deals around Makerere, MUBS Nakawa, and Kyambogo University on UgaByte.",
    h1: "Student Deals & Campus Food in Uganda",
    subtitle:
      "Verified meal drops, printing discounts, and hostel offers near Kampala university gates.",
    overviewTitle: "How Campus Deals Work",
    overviewParagraphs: [
      "UgaByte partners with local cafés, restaurants, print shops, and hostels around university gates to share real-time student discounts.",
      "Every deal shows transparent UGX pricing, gate proximity, and instant access in the Web App or Android APK at zero cost.",
    ],
    appLink: UGABYTE_APP_LINKS.deals,
    appCtaLabel: "Open Deals",
    highlights: [
      {
        title: "Meals & Snacks",
        description: "Budget lunch combos and café offers near Kikoni, Wandegeya, Nakawa, and Banda.",
      },
      {
        title: "Study & Hostel",
        description: "Discounts on printing, binding, laundry, repairs, and hostel rooms.",
      },
      {
        title: "Verified Shops",
        description: "Real campus-area merchants with clear pickup gates.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Browse Drops",
        detail: "Filter live food and service offers by campus hub.",
      },
      {
        step: "02",
        title: "Check Gate",
        detail: "Confirm pickup near Makerere, MUBS Nakawa, or Kyambogo.",
      },
      {
        step: "03",
        title: "Redeem",
        detail: "Claim in the app and pay the merchant directly.",
      },
    ],
    campusZones: [
      "Makerere & Kikoni",
      "Wandegeya",
      "Sir Apollo Rd",
      "MUBS Nakawa",
      "Kyambogo Banda",
    ],
    contributorTitle: "Run a Shop Near Campus?",
    contributorDescription:
      "Publish flash meal deals or student discounts directly to nearby university students.",
    contributorCtaLabel: "Partner as Merchant",
    faqs: [
      {
        q: "Are student deals free to claim?",
        a: "Yes. Claiming deals is free—you only pay the merchant upon redemption.",
      },
      {
        q: "How can a business post a deal?",
        a: "Submit a partner request or publish offers directly in the UgaByte Web App.",
      },
    ],
  },

  "student-marketplace-uganda": {
    slug: "student-marketplace-uganda",
    path: "/student-marketplace-uganda",
    canonicalUrl: `${SITE_ORIGIN}/student-marketplace-uganda`,
    navLabel: "Marketplace",
    shortBadge: "0% Fee",
    feedCategory: "products",
    title: "Student Marketplace in Uganda — Buy & Sell Peer-to-Peer | UgaByte",
    metaDescription:
      "Buy and sell laptops, scientific calculators, textbooks, and hostel essentials peer-to-peer across Ugandan universities with UGX 0 commission on UgaByte.",
    h1: "Student Marketplace in Uganda",
    subtitle:
      "Buy and sell laptops, calculators, books, and hostel gear with fellow students at 0% commission.",
    overviewTitle: "Zero-Fee Campus Trading",
    overviewParagraphs: [
      "Connect with buyers and sellers on your own campus so study gear and hostel essentials stay affordable and within walking distance.",
      "Personal student listings carry UGX 0 fees. Meet at busy university gates or hall receptions to inspect items before paying.",
    ],
    appLink: UGABYTE_APP_LINKS.marketplace,
    appCtaLabel: "Open Marketplace",
    highlights: [
      {
        title: "UGX 0 Commission",
        description: "List personal items for free and keep 100% of every sale.",
      },
      {
        title: "Gate Meetups",
        description: "Inspect electronics in daylight at public campus gates before paying.",
      },
      {
        title: "Low Data",
        description: "Compressed photos load fast on hostel Wi-Fi or mobile bundles.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Filter Campus",
        detail: "Search electronics, calculators, books, or hostel gear nearby.",
      },
      {
        step: "02",
        title: "Message Seller",
        detail: "Check specs, photos, and pickup gate in the Web App.",
      },
      {
        step: "03",
        title: "Inspect & Pay",
        detail: "Test items in person at a public gate before paying.",
      },
    ],
    campusZones: [
      "Makerere Main Gate",
      "University Halls",
      "MUBS Nakawa",
      "Kyambogo Banda",
      "UCU & MUST (Next)",
    ],
    contributorTitle: "Selling Gadgets or Books?",
    contributorDescription:
      "Turn unused electronics or hostel gear into cash in minutes on UgaByte.",
    contributorCtaLabel: "List an Item",
    faqs: [
      {
        q: "Does UgaByte take a cut?",
        a: "No. Student peer-to-peer listings have UGX 0 listing fees and 0% commission.",
      },
      {
        q: "How do buyers stay safe?",
        a: "Meet at public campus gates in daylight and test items thoroughly before paying.",
      },
    ],
  },

  "campus-events-uganda": {
    slug: "campus-events-uganda",
    path: "/campus-events-uganda",
    canonicalUrl: `${SITE_ORIGIN}/campus-events-uganda`,
    navLabel: "Events",
    shortBadge: "Campus Calendar",
    feedCategory: "events",
    title: "University & Campus Events in Uganda — Tech, Guild & Sports | UgaByte",
    metaDescription:
      "Track upcoming university hackathons, career fairs, guild nights, freshers orientation, and inter-university sports across Kampala and Uganda on UgaByte.",
    h1: "University & Campus Events in Uganda",
    subtitle:
      "Hackathons, career fairs, public lectures, guild nights, and university sports in one live feed.",
    overviewTitle: "One Live Campus Calendar",
    overviewParagraphs: [
      "Skip scattered noticeboards and missed WhatsApp flyers—see verified dates, venues, and entry details across Ugandan universities.",
      "Student clubs, faculties, and guild teams can publish free or ticketed campus events directly in the UgaByte Web App.",
    ],
    appLink: UGABYTE_APP_LINKS.events,
    appCtaLabel: "Open Events",
    highlights: [
      {
        title: "Tech & Hackathons",
        description: "Developer meetups, software hackathons, and startup pitch nights.",
      },
      {
        title: "Careers & Lectures",
        description: "Graduate recruitment drives, scholarships, and faculty symposiums.",
      },
      {
        title: "Guild & Sports",
        description: "Cultural galas, freshers nights, and inter-university fixtures.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Check Dates",
        detail: "Browse events happening this week across Kampala campuses.",
      },
      {
        step: "02",
        title: "RSVP",
        detail: "Confirm venue, entry rules, or free registration in the app.",
      },
      {
        step: "03",
        title: "Share",
        detail: "Send clean event links to your course or hostel group.",
      },
    ],
    campusZones: [
      "Makerere Auditoriums",
      "MUBS Nakawa",
      "Kyambogo Grounds",
      "Kampala Tech Hubs",
      "University Leagues",
    ],
    contributorTitle: "Hosting a Club or Guild Event?",
    contributorDescription:
      "Share your meetup, hackathon, or gala so students across Uganda can attend.",
    contributorCtaLabel: "Publish Event",
    faqs: [
      {
        q: "Are student club events free to list?",
        a: "Yes. Clubs, faculties, and associations list free campus events at zero cost.",
      },
      {
        q: "Who can attend listed events?",
        a: "Each listing states whether entry is open to all students or specific faculties.",
      },
    ],
  },

  "student-gigs-uganda": {
    slug: "student-gigs-uganda",
    path: "/student-gigs-uganda",
    canonicalUrl: `${SITE_ORIGIN}/student-gigs-uganda`,
    navLabel: "Gigs",
    shortBadge: "Opportunities",
    feedCategory: "gigs",
    title: "Student Gigs, Internships & Campus Opportunities in Uganda | UgaByte",
    metaDescription:
      "Find paid student gigs, brand ambassador roles, freelance services, and university internships in Kampala and across Uganda on the UgaByte platform.",
    h1: "Student Gigs & Internships in Uganda",
    subtitle:
      "Paid campus gigs, freelance student services, and verified internships built around lecture schedules.",
    overviewTitle: "Flexible Work for Students",
    overviewParagraphs: [
      "UgaByte connects undergraduates across Uganda with vetted short-term gigs, brand campaigns, freelance tasks, and internships.",
      "Students offering coding, design, photography, or tutoring can also showcase their skills directly inside the Web App.",
    ],
    appLink: UGABYTE_APP_LINKS.opportunities,
    appCtaLabel: "Open Gigs",
    highlights: [
      {
        title: "Paid Campus Gigs",
        description: "Event staffing, research fieldwork, content, and brand roles.",
      },
      {
        title: "Internships",
        description: "Field attachments, graduate tracks, and fellowship deadlines.",
      },
      {
        title: "Peer Freelance",
        description: "Offer tutoring, coding, photography, or design to peers.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Browse Roles",
        detail: "Explore live gigs, internships, and peer service requests.",
      },
      {
        step: "02",
        title: "Check Scope",
        detail: "Review schedule, location, and pay before applying.",
      },
      {
        step: "03",
        title: "Apply or Post",
        detail: "Connect directly or list your skill in the Web App.",
      },
    ],
    campusZones: [
      "Makerere Colleges",
      "MUBS Nakawa",
      "Kyambogo",
      "Remote Uganda",
      "Kampala Startups",
    ],
    contributorTitle: "Hiring Interns or Student Talent?",
    contributorDescription:
      "Reach motivated university students across Uganda for internships or campaigns.",
    contributorCtaLabel: "Post Opportunity",
    faqs: [
      {
        q: "Do students pay to apply?",
        a: "Never. Legitimate roles on UgaByte never charge application fees.",
      },
      {
        q: "Can students post freelance skills?",
        a: "Yes. Showcase tutoring, coding, design, or photography free in the app.",
      },
    ],
  },
};

export const CATEGORY_PAGE_LIST: CategorySeoPageConfig[] = [
  CATEGORY_SEO_PAGES["student-deals-uganda"],
  CATEGORY_SEO_PAGES["student-marketplace-uganda"],
  CATEGORY_SEO_PAGES["campus-events-uganda"],
  CATEGORY_SEO_PAGES["student-gigs-uganda"],
];
