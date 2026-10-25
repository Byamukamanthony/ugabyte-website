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
    "UgaByte connects university students and campus communities across Uganda with verified student deals, affordable local food, a zero-fee marketplace, campus events, and gigs.",
  canonicalUrl: `${SITE_ORIGIN}/`,
  ogImage: `${SITE_ORIGIN}/og-image.png`,
} as const;

export const CATEGORY_SEO_PAGES: Record<CategoryRouteSlug, CategorySeoPageConfig> = {
  "student-deals-uganda": {
    slug: "student-deals-uganda",
    path: "/student-deals-uganda",
    canonicalUrl: `${SITE_ORIGIN}/student-deals-uganda`,
    navLabel: "Student Deals",
    shortBadge: "Deals & Affordable Food",
    feedCategory: "deals",
    title: "Student Deals & Affordable Campus Food in Uganda | UgaByte",
    metaDescription:
      "Discover verified student discounts, affordable meals, printing offers, and hostel deals around Makerere, MUBS Nakawa, and Kyambogo University on UgaByte.",
    h1: "Student Deals & Affordable Campus Food in Uganda",
    subtitle:
      "Stretch your semester upkeep further with verified meal drops, printing discounts, salon offers, and hostel promotions around Kampala university gates.",
    overviewTitle: "How Student Deals & Local Food Drops Work on UgaByte",
    overviewParagraphs: [
      "University life in Kampala moves fast, and daily food, printing, and transport expenses add up quickly. UgaByte partners with local restaurants, rolex stalls, stationery shops, cafés, and student-friendly merchants around university hubs to publish real-time price drops directly to students.",
      "Every active deal shows the exact offer price in UGX, the merchant location by gate or hostel zone, and direct access to claim or view the offer inside the UgaByte Web App or Android app—with zero subscription fees for students.",
    ],
    appLink: UGABYTE_APP_LINKS.deals,
    appCtaLabel: "Open Live Deals in Web App",
    highlights: [
      {
        title: "Affordable Meals & Snacks",
        description:
          "Find budget-friendly lunch combos, evening snacks, and café offers near Kikoni, Wandegeya, Nakawa, and Banda.",
      },
      {
        title: "Academic & Hostel Services",
        description:
          "Save on coursework printing, binding, laundry, electronics repair, and verified student hostel move-in offers.",
      },
      {
        title: "Verified Local Merchants",
        description:
          "Offers are tied to real campus-area businesses so students know exact pickup points before walking over.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Browse Active Campus Drops",
        detail:
          "Open UgaByte on any phone or laptop browser to see live food and service discounts sorted by campus hub.",
      },
      {
        step: "02",
        title: "Check Gate & Hostel Location",
        detail:
          "Confirm whether the offer is near Makerere Main Gate, Kikoni, Wandegeya, MUBS Nakawa, or Kyambogo Banda.",
      },
      {
        step: "03",
        title: "Claim & Redeem Directly",
        detail:
          "Claim the flash drop in the UgaByte app and present your digital confirmation or university ID at the shop.",
      },
    ],
    campusZones: [
      "Makerere Kikoni & Kagugube",
      "Wandegeya Student Hub",
      "Sir Apollo Kaggwa Rd",
      "MUBS Nakawa & Kataza",
      "Kyambogo Banda & Kabaka'sGate",
    ],
    contributorTitle: "Run a Restaurant, Print Shop, or Business Near Campus?",
    contributorDescription:
      "Publish flash meal deals or off-peak student discounts to thousands of nearby university students without paying agency retainers.",
    contributorCtaLabel: "Partner as a Campus Merchant",
    faqs: [
      {
        q: "Do students pay anything to claim deals on UgaByte?",
        a: "No. Browsing and claiming student deals on UgaByte is completely free. You pay the merchant directly when redeeming your meal or service.",
      },
      {
        q: "How can a local restaurant or shop post a deal?",
        a: "Local businesses around Makerere, MUBS, Kyambogo, and Kampala can submit a partner request on our website or list offers directly inside the UgaByte Web App.",
      },
    ],
  },

  "student-marketplace-uganda": {
    slug: "student-marketplace-uganda",
    path: "/student-marketplace-uganda",
    canonicalUrl: `${SITE_ORIGIN}/student-marketplace-uganda`,
    navLabel: "Marketplace",
    shortBadge: "UGX 0 Listing Fee",
    feedCategory: "products",
    title: "Student Marketplace in Uganda — Buy & Sell Peer-to-Peer | UgaByte",
    metaDescription:
      "Buy and sell laptops, scientific calculators, textbooks, and hostel essentials peer-to-peer across Ugandan universities with UGX 0 commission on UgaByte.",
    h1: "Student Peer-to-Peer Marketplace in Uganda",
    subtitle:
      "Buy and sell second-hand laptops, Casio calculators, hostel appliances, and study materials directly with fellow university students at 0% commission.",
    overviewTitle: "Safer, Zero-Commission Campus Trading",
    overviewParagraphs: [
      "Graduating students leave behind kettles, mattresses, lamps,fridges, and textbooks every semester while incoming freshers pay full retail prices in downtown arcades. The UgaByte Peer Marketplace connects buyers and sellers on the same campus so items stay affordable and within walking distance.",
      "UgaByte charges UGX 0 listing fees and takes 0% commission on personal student sales. Buyers and sellers inspect items in person at busy university gates or hall common areas before paying via cash or Mobile Money.",
    ],
    appLink: UGABYTE_APP_LINKS.marketplace,
    appCtaLabel: "Browse Marketplace in Web App",
    highlights: [
      {
        title: "UGX 0 Seller Commission",
        description:
          "List personal gadgets, books, thrift fashion, or hostel items for free and keep 100% of your sale price.",
      },
      {
        title: "Campus-Gate Inspections",
        description:
          "Meet in daylight at public university gates or hall receptions to test electronics before paying.",
      },
      {
        title: "Built for Low Data Usage",
        description:
          "Compressed listing photos load fast even on congested hostel Wi-Fi or budget mobile data bundles.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Search by Campus or Category",
        detail:
          "Filter electronics, calculators, hostel gear, or academic books available right now at your university hub.",
      },
      {
        step: "02",
        title: "Connect with the Student Seller",
        detail:
          "Open the listing in the UgaByte Web App to view full specs, photos, and seller pickup zone.",
      },
      {
        step: "03",
        title: "Inspect at a Public Campus Point",
        detail:
          "Verify the item in person at a recognized university gate or hall before completing payment.",
      },
    ],
    campusZones: [
      "Makerere Main Gate & Freedom Square",
      "Mitchell, Lumumba & Mary Stuart Halls",
      "MUBS Main Campus Nakawa",
      "Kyambogo West End & Banda",
      "UCU Mukono & MUST (Expanding)",
    ],
    contributorTitle: "Have Textbooks, Gadgets, or Hostel Gear to Sell?",
    contributorDescription:
      "Turn unused electronics or semester essentials into cash in minutes by posting directly in the UgaByte Marketplace.",
    contributorCtaLabel: "List an Item in Web App",
    faqs: [
      {
        q: "Does UgaByte charge commission on student marketplace sales?",
        a: "No. Personal peer-to-peer listings by students carry a UGX 0 listing fee and 0% transaction cut.",
      },
      {
        q: "How do buyers stay safe when purchasing electronics?",
        a: "Always arrange meetups at busy, well-lit university gates or hall receptions and test laptops, phones, or calculators thoroughly before sending Mobile Money or cash.",
      },
    ],
  },

  "campus-events-uganda": {
    slug: "campus-events-uganda",
    path: "/campus-events-uganda",
    canonicalUrl: `${SITE_ORIGIN}/campus-events-uganda`,
    navLabel: "Campus Events",
    shortBadge: "Live University Calendar",
    feedCategory: "events",
    title: "University & Campus Events in Uganda — Tech, Guild & Sports | UgaByte",
    metaDescription:
      "Track upcoming university hackathons, career fairs, guild nights, freshers orientation, and inter-university sports across Kampala and Uganda on UgaByte.",
    h1: "University & Campus Events Across Uganda",
    subtitle:
      "Never miss a hackathon, public lecture, career fair, cultural gala, or inter-university tournament happening across Ugandan campuses.",
    overviewTitle: "One Live Feed for Academic, Tech & Cultural Campus Life",
    overviewParagraphs: [
      "Important campus events in Uganda are often buried on physical noticeboards or scattered across dozens of WhatsApp groups. By the time most students hear about a developer meetup, scholarship briefing, or guild event, registration has closed.",
      "UgaByte centralizes upcoming university gatherings—showing verified dates, campus venues, entry details (including free student sessions), and instant access inside the UgaByte Web App.",
    ],
    appLink: UGABYTE_APP_LINKS.events,
    appCtaLabel: "Explore Live Events in Web App",
    highlights: [
      {
        title: "Tech & Innovation Meetups",
        description:
          "Discover student developer circles, AI/software hackathons, startup pitch nights, and innovation challenges.",
      },
      {
        title: "Career Fairs & Public Lectures",
        description:
          "Stay ahead of graduate recruitment drives, embassy scholarship sessions, and faculty symposiums.",
      },
      {
        title: "Guild, Culture & University Sports",
        description:
          "Follow cultural galas, freshers balls, hall nights, and inter-university football, basketball, and rugby fixtures.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Check Upcoming Dates & Venues",
        detail:
          "See what is happening today and this week across Makerere, MUBS, Kyambogo, and partner hubs.",
      },
      {
        step: "02",
        title: "RSVP or Save Event Details",
        detail:
          "Open the event in the UgaByte Web App to confirm entry requirements, ticket info, or free RSVP.",
      },
      {
        step: "03",
        title: "Share with Course & Hostel Mates",
        detail:
          "Send a clean share link to your WhatsApp study group so classmates can join.",
      },
    ],
    campusZones: [
      "Makerere Main Hall & CTF Auditoriums",
      "MUBS Nakawa Leadership Centre",
      "Kyambogo Main Sports Grounds",
      "Kampala Innovation & Tech Hubs",
      "Inter-University League Venues",
    ],
    contributorTitle: "Organizing a Student Association, Club, or Guild Event?",
    contributorDescription:
      "Publish your society meetup, hackathon, or cultural night on UgaByte so students across Kampala campuses can discover and attend.",
    contributorCtaLabel: "Publish Event in Web App",
    faqs: [
      {
        q: "Are free academic and student club events listed on UgaByte?",
        a: "Yes. Student associations, developer clubs, and faculties can share free workshops, hackathons, and public lectures at zero cost.",
      },
      {
        q: "Can students from other universities attend listed events?",
        a: "Each event listing specifies whether entry is open to the general student public across Uganda or restricted to a specific faculty or university ID.",
      },
    ],
  },

  "student-gigs-uganda": {
    slug: "student-gigs-uganda",
    path: "/student-gigs-uganda",
    canonicalUrl: `${SITE_ORIGIN}/student-gigs-uganda`,
    navLabel: "Gigs & Internships",
    shortBadge: "Student Opportunities",
    feedCategory: "gigs",
    title: "Student Gigs, Internships & Campus Opportunities in Uganda | UgaByte",
    metaDescription:
      "Find paid student gigs, brand ambassador roles, freelance services, and university internships in Kampala and across Uganda on the UgaByte platform.",
    h1: "Student Gigs, Internships & Opportunities in Uganda",
    subtitle:
      "Earn upkeep income and build real work experience through vetted campus gigs, freelance student services, internships, and fellowships.",
    overviewTitle: "Connecting Ugandan University Talent with Real Work",
    overviewParagraphs: [
      "Thousands of capable undergraduates in Uganda have skills in graphic design, software development, photography, tutoring, event activation, and research—yet struggle to find flexible opportunities that fit lecture timetables.",
      "UgaByte's Opportunities hub connects students with short-term paid gigs, brand ambassador campaigns, peer service requests, and internship openings tailored for university students and recent graduates.",
    ],
    appLink: UGABYTE_APP_LINKS.opportunities,
    appCtaLabel: "View Opportunities in Web App",
    highlights: [
      {
        title: "Paid Campus Gigs & Tasks",
        description:
          "Find flexible event staffing, research data collection, content creation, and brand activation roles.",
      },
      {
        title: "Internships & Graduate Tracks",
        description:
          "Discover field attachment placements, software/business internships, and fellowship deadlines early.",
      },
      {
        title: "Student Freelance Hustles",
        description:
          "Showcase your tutoring, photography, coding, braiding, or design skills to students who need them.",
      },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Explore Open Roles & Requests",
        detail:
          "Browse live gig posts, student skill offers, and internship calls synced directly from the UgaByte app.",
      },
      {
        step: "02",
        title: "Review Scope & Compensation",
        detail:
          "Check task requirements, location or remote flexibility, and stated budget before applying.",
      },
      {
        step: "03",
        title: "Apply or Post Your Skill in the App",
        detail:
          "Launch the UgaByte Web App to connect directly or publish your own student service offering.",
      },
    ],
    campusZones: [
      "Makerere University Colleges",
      "MUBS Business & Finance Talent",
      "Kyambogo Engineering & Education",
      "Remote & Hybrid Uganda Roles",
      "Kampala Startup & NGO Ecosystem",
    ],
    contributorTitle: "Hiring Interns, Brand Ambassadors, or Student Freelancers?",
    contributorDescription:
      "Reach motivated university students across Kampala and Uganda for legitimate internships, research fieldwork, or campus campaigns.",
    contributorCtaLabel: "Connect to Post Opportunities",
    faqs: [
      {
        q: "Does UgaByte charge students to apply for gigs or internships?",
        a: "Never. Legitimate opportunities on UgaByte never ask students to pay application or registration fees.",
      },
      {
        q: "Can students advertise their own freelance skills?",
        a: "Yes. Students offering photography, coding, academic tutoring, graphic design, or repair services can post hustle offers inside the UgaByte app.",
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
