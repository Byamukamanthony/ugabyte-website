import fs from "node:fs";
import path from "node:path";

const SITE_ORIGIN = "https://ugabyte-website.vercel.app";
const WEB_APP_ORIGIN = "https://ugabyte.vercel.app";
const APK_URL = "https://limewire.com/d/87VtZ#gAMC0GRo8H";

const ROUTES = [
  {
    slug: "student-deals-uganda",
    navLabel: "Deals",
    title: "Student Deals & Affordable Campus Food in Uganda | UgaByte",
    description:
      "Discover verified student discounts, affordable meals, printing offers, and hostel deals around Makerere, MUBS Nakawa, and Kyambogo University on UgaByte.",
    h1: "Student Deals & Campus Food in Uganda",
    intro:
      "Verified meal drops, printing discounts, and hostel offers near Kampala university gates.",
    paragraphs: [
      "UgaByte partners with local cafés, restaurants, print shops, and hostels around university gates to share real-time student discounts.",
      "Every deal shows transparent UGX pricing, gate proximity, and instant access in the Web App or Android APK at zero cost.",
    ],
    bullets: [
      "Budget lunch combos and café offers near campus gates.",
      "Printing, binding, laundry, repairs, and hostel offers.",
      "Local merchants can publish flash student discounts.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/campus-deals`,
    appCta: "Open Deals",
  },
  {
    slug: "student-marketplace-uganda",
    navLabel: "Marketplace",
    title: "Student Marketplace in Uganda — Buy & Sell Peer-to-Peer | UgaByte",
    description:
      "Buy and sell laptops, scientific calculators, textbooks, and hostel essentials peer-to-peer across Ugandan universities with UGX 0 commission on UgaByte.",
    h1: "Student Marketplace in Uganda",
    intro:
      "Buy and sell laptops, calculators, books, and hostel gear with fellow students at 0% commission.",
    paragraphs: [
      "Connect with buyers and sellers on your own campus so study gear and hostel essentials stay affordable and within walking distance.",
      "Personal student listings carry UGX 0 fees. Meet at busy university gates or hall receptions to inspect items before paying.",
    ],
    bullets: [
      "UGX 0 listing fee and 0% commission on student sales.",
      "Trade laptops, calculators, textbooks, and hostel gear.",
      "Daylight campus-gate inspection across Makerere, MUBS, and Kyambogo.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/marketplace`,
    appCta: "Open Marketplace",
  },
  {
    slug: "campus-events-uganda",
    navLabel: "Events",
    title: "University & Campus Events in Uganda — Tech, Guild & Sports | UgaByte",
    description:
      "Track upcoming university hackathons, career fairs, guild nights, freshers orientation, and inter-university sports across Kampala and Uganda on UgaByte.",
    h1: "University & Campus Events in Uganda",
    intro:
      "Hackathons, career fairs, public lectures, guild nights, and university sports in one live feed.",
    paragraphs: [
      "Skip scattered noticeboards and missed WhatsApp flyers—see verified dates, venues, and entry details across Ugandan universities.",
      "Student clubs, faculties, and guild teams can publish free or ticketed campus events directly in the UgaByte Web App.",
    ],
    bullets: [
      "Developer meetups, hackathons, and pitch nights.",
      "Career fairs, scholarships, and faculty symposiums.",
      "Cultural galas, freshers nights, and university sports.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/events`,
    appCta: "Open Events",
  },
  {
    slug: "student-gigs-uganda",
    navLabel: "Gigs",
    title: "Student Gigs, Internships & Campus Opportunities in Uganda | UgaByte",
    description:
      "Find paid student gigs, brand ambassador roles, freelance services, and university internships in Kampala and across Uganda on the UgaByte platform.",
    h1: "Student Gigs & Internships in Uganda",
    intro:
      "Paid campus gigs, freelance student services, and verified internships built around lecture schedules.",
    paragraphs: [
      "UgaByte connects undergraduates across Uganda with vetted short-term gigs, brand campaigns, freelance tasks, and internships.",
      "Students offering coding, design, photography, or tutoring can also showcase their skills directly inside the Web App.",
    ],
    bullets: [
      "Paid event staffing, research fieldwork, and brand roles.",
      "Internships and fellowships for Ugandan students.",
      "Peer freelance showcase for student tutors, coders, and creatives.",
    ],
    appUrl: `${WEB_APP_ORIGIN}/opportunities`,
    appCta: "Open Gigs",
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
        alternateName: "Ugabyte",
        url: `${SITE_ORIGIN}/`,
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: "UgaByte",
        alternateName: "Ugabyte",
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
        <a href="/" class="text-lg font-black text-white">UgaByte</a>
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
            <a href="${APK_URL}" class="px-6 py-3 rounded-full border border-[#232936] text-white text-xs font-bold">Download APK (6.4 MB)</a>
          </div>
        </article>
        <nav aria-label="Related UgaByte Uganda Pages" class="pt-6 border-t border-[#232936]">
          <h2 class="text-lg font-bold text-white mb-2">More Hubs</h2>
          <ul class="space-y-1.5 text-sm">
            <li><a href="/" class="text-[#cef11c] underline">UgaByte Home</a></li>
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
