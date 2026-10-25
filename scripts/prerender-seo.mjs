import fs from "node:fs";
import path from "node:path";

const SITE_ORIGIN = "https://ugabyte-website.vercel.app";
const WEB_APP_ORIGIN = "https://ugabyte.vercel.app";
const APK_URL = "https://limewire.com/d/87VtZ#gAMC0GRo8H";

const ROUTES = [
  {
    slug: "student-deals-uganda",
    navLabel: "Student Deals & Food",
    title: "Student Deals & Affordable Campus Food in Uganda | UgaByte",
    description:
      "Discover verified student discounts, affordable meals, printing offers, and hostel deals around Makerere, MUBS Nakawa, and Kyambogo University on UgaByte.",
    h1: "Student Deals & Affordable Campus Food in Uganda",
    intro:
      "Stretch your semester upkeep further with verified meal drops, rolex & café discounts, printing offers, and hostel promotions around Kampala university gates.",
    paragraphs: [
      "UgaByte partners with local restaurants, cafés, stationery shops, and student-friendly merchants around Makerere University (Kikoni, Wandegeya, Kagugube), MUBS Nakawa, and Kyambogo University to publish real-time price drops directly to students.",
      "Every deal displays transparent UGX pricing, exact campus-gate or hostel proximity, and direct access inside the UgaByte Web App or Android APK at zero cost to students.",
    ],
    bullets: [
      "Affordable student lunch combos, snacks, and local café offers near campus gates.",
      "Coursework printing, binding, salon, laundry, and verified hostel move-in promotions.",
      "Local merchants can partner with UgaByte to publish off-peak and flash student discounts.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/campus-deals`,
    appCta: "Open Live Deals in UgaByte Web App",
  },
  {
    slug: "student-marketplace-uganda",
    navLabel: "Student Marketplace",
    title: "Student Marketplace in Uganda — Buy & Sell Peer-to-Peer | UgaByte",
    description:
      "Buy and sell laptops, scientific calculators, textbooks, and hostel essentials peer-to-peer across Ugandan universities with UGX 0 commission on UgaByte.",
    h1: "Student Peer-to-Peer Marketplace in Uganda",
    intro:
      "Buy and sell second-hand laptops, Casio calculators, hostel appliances, and textbooks directly with fellow university students at UGX 0 listing fee.",
    paragraphs: [
      "The UgaByte Peer Marketplace connects buyers and sellers on the same Ugandan university campus so essential study gear and hostel appliances stay affordable and within walking distance.",
      "Personal student listings carry a UGX 0 listing fee and 0% commission. Students meet in daylight at recognized university gates or hall receptions to inspect items before paying.",
    ],
    bullets: [
      "UGX 0 listing fee and 0% commission on student-to-student sales.",
      "Trade laptops, phones, scientific calculators, kettles, lamps, and study notes.",
      "Safe in-person campus gate inspection across Makerere, MUBS Nakawa, and Kyambogo.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/marketplace`,
    appCta: "Browse Marketplace in UgaByte Web App",
  },
  {
    slug: "campus-events-uganda",
    navLabel: "Campus Events",
    title: "University & Campus Events in Uganda — Tech, Guild & Sports | UgaByte",
    description:
      "Track upcoming university hackathons, career fairs, guild nights, freshers orientation, and inter-university sports across Kampala and Uganda on UgaByte.",
    h1: "University & Campus Events Across Uganda",
    intro:
      "Never miss a hackathon, public lecture, career fair, cultural gala, or inter-university sports fixture across Ugandan campuses.",
    paragraphs: [
      "UgaByte centralizes upcoming academic, tech, cultural, and sports gatherings across Makerere, MUBS, Kyambogo, UCU, MUST, and Kampala innovation hubs into one accessible feed.",
      "Student associations, developer clubs, faculties, and guild organizers can share upcoming events so students across Uganda can discover dates, venues, and RSVP details.",
    ],
    bullets: [
      "Student developer circles, software hackathons, and startup pitch nights.",
      "Graduate career fairs, scholarship briefings, and faculty symposiums.",
      "Cultural galas, hall nights, freshers orientation, and university sports.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/events`,
    appCta: "Explore Campus Events in UgaByte Web App",
  },
  {
    slug: "student-gigs-uganda",
    navLabel: "Student Gigs & Internships",
    title: "Student Gigs, Internships & Campus Opportunities in Uganda | UgaByte",
    description:
      "Find paid student gigs, brand ambassador roles, freelance services, and university internships in Kampala and across Uganda on the UgaByte platform.",
    h1: "Student Gigs, Internships & Opportunities in Uganda",
    intro:
      "Earn upkeep income and gain practical experience through vetted campus gigs, student freelance services, internships, and fellowships in Uganda.",
    paragraphs: [
      "UgaByte connects talented undergraduates across Uganda with flexible paid tasks, brand ambassador roles, field attachment internships, and peer freelance opportunities that fit lecture schedules.",
      "Students offering photography, coding, graphic design, academic tutoring, or repair skills can also showcase their services directly in the UgaByte Web App.",
    ],
    bullets: [
      "Paid brand activation, research data collection, and campus event staffing.",
      "Software, finance, engineering, and NGO internships for Ugandan students.",
      "Peer freelance showcase for student designers, developers, tutors, and creatives.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/opportunities`,
    appCta: "View Opportunities in UgaByte Web App",
  },
];

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("Prerender error: dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, "utf8");

for (const route of ROUTES) {
  const canonicalUrl = `${SITE_ORIGIN}/${route.slug}`;
  const escapedTitle = escapeHtml(route.title);
  const escapedDesc = escapeHtml(route.description);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        name: "UgaByte",
        alternateName: "UgaByte",
        url: `${SITE_ORIGIN}/`,
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: "UgaByte",
        url: `${SITE_ORIGIN}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}/favicon.png`,
          width: 192,
          height: 192,
        },
        sameAs: [
          "https://x.com/ugabyteinc",
          "https://instagram.com/ugabyteinc",
          "https://tiktok.com/@ugabyteinc",
          "https://facebook.com/ugabyteinc",
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: route.title,
        description: route.description,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        about: { "@id": `${SITE_ORIGIN}/#organization` },
        inLanguage: "en-UG",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "UgaByte",
            item: `${SITE_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: route.navLabel,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  const otherLinksHtml = ROUTES.filter((r) => r.slug !== route.slug)
    .map(
      (r) =>
        `<li><a href="/${r.slug}" class="text-[#cef11c] underline">${escapeHtml(r.h1)}</a></li>`
    )
    .join("\n            ");

  const bodyShell = `
      <header class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between border-b border-[#232936]">
        <a href="/" class="text-lg font-black text-white">Uga<span class="text-[#cef11c]">Byte</span></a>
        <nav aria-label="Breadcrumb" class="text-xs text-[#8E98A8]">
          <a href="/" class="hover:underline">Home</a> / <span>${escapeHtml(route.navLabel)}</span>
        </nav>
      </header>
      <main class="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <article class="space-y-4">
          <h1 class="text-3xl sm:text-5xl font-black text-white">${escapeHtml(route.h1)}</h1>
          <p class="text-base text-[#e3e2e8]">${escapeHtml(route.intro)}</p>
          ${route.paragraphs
            .map((p) => `<p class="text-sm text-[#8E98A8] leading-relaxed">${escapeHtml(p)}</p>`)
            .join("\n          ")}
          <ul class="list-disc pl-5 space-y-1.5 text-sm text-[#e3e2e8]">
            ${route.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("\n            ")}
          </ul>
          <div class="pt-4 flex flex-wrap gap-3">
            <a href="${route.appUrl}" class="px-6 py-3 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase">${escapeHtml(route.appCta)}</a>
            <a href="${APK_URL}" class="px-6 py-3 rounded-full border border-[#232936] text-white text-xs font-bold">Download Android APK (6.4 MB)</a>
          </div>
        </article>
        <nav aria-label="Related UgaByte Uganda Pages" class="pt-6 border-t border-[#232936]">
          <h2 class="text-lg font-bold text-white mb-2">More UgaByte Campus Hubs in Uganda</h2>
          <ul class="space-y-1.5 text-sm">
            <li><a href="/" class="text-[#cef11c] underline">UgaByte Homepage — Student Deals, Events &amp; Opportunities</a></li>
            ${otherLinksHtml}
          </ul>
        </nav>
      </main>`;

  let pageHtml = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapedDesc}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapedTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapedDesc}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapedTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapedDesc}" />`
    )
    .replace(
      /<script type="application\/ld\+json" id="ugabyte-jsonld">[\s\S]*?<\/script>/,
      `<script type="application/ld+json" id="ugabyte-jsonld">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>`
    )
    .replace(
      /<div id="root">[\s\S]*<\/div>(\s*(?:<script[^>]*><\/script>\s*)*<\/body>)/,
      `<div id="root">${bodyShell}\n    </div>$1`
    );

  const outDir = path.join(distDir, route.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), pageHtml, "utf8");
  console.log(`Pre-rendered static SEO HTML: /${route.slug}/index.html`);
}
