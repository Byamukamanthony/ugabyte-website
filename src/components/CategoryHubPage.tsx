import React, { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Download,
  Share2,
  Check,
  MapPin,
  ShieldCheck,
  Sparkles,
  Store,
  ChevronRight,
} from "lucide-react";
import {
  CategorySeoPageConfig,
  CATEGORY_PAGE_LIST,
  CategoryRouteSlug,
} from "../data/seoPages";
import { LiveFeedPayload, LiveAppListing } from "../services/liveFeed";
import { UGABYTE_APK_URL, UGABYTE_APP_META } from "../config/ugabyte";
import { shareUgaByteContent } from "../utils/share";

interface CategoryHubPageProps {
  page: CategorySeoPageConfig;
  feed: LiveFeedPayload;
  onNavigateHome: (e?: React.MouseEvent) => void;
  onNavigateCategory: (slug: CategoryRouteSlug, e?: React.MouseEvent) => void;
  onDownloadApk: (e?: React.MouseEvent) => void;
  onOpenPartnerModal: () => void;
}

export const CategoryHubPage: React.FC<CategoryHubPageProps> = ({
  page,
  feed,
  onNavigateHome,
  onNavigateCategory,
  onDownloadApk,
  onOpenPartnerModal,
}) => {
  const [sharedId, setSharedId] = useState<string | null>(null);

  const listings: LiveAppListing[] = feed[page.feedCategory] || [];
  const otherPages = CATEGORY_PAGE_LIST.filter((p) => p.slug !== page.slug);

  const handleSharePage = async () => {
    const res = await shareUgaByteContent({
      title: page.title,
      text: `${page.h1} on UgaByte`,
      url: page.canonicalUrl,
    });
    if (res === "copied" || res === "shared") {
      setSharedId("page");
      setTimeout(() => setSharedId(null), 2500);
    }
  };

  const handleShareListing = async (item: LiveAppListing) => {
    const res = await shareUgaByteContent({
      title: `${item.title} — UgaByte`,
      text: `${item.title} (${item.price}) at ${item.location} on UgaByte`,
      url: page.canonicalUrl,
    });
    if (res === "copied" || res === "shared") {
      setSharedId(item.id);
      setTimeout(() => setSharedId(null), 2500);
    }
  };

  return (
    <div className="pt-24 md:pt-20 pb-12">
      {/* Breadcrumb & Hero Header */}
      <section className="relative overflow-hidden border-b border-[#232936] py-10 sm:py-16">
        <div className="hero-radial-glow absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[260px] bg-[#cef11c]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-[#8E98A8] mb-5"
          >
            <a
              href="/"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 hover:text-[#cef11c] font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#cef11c]" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#FFFFFF] font-semibold">{page.navLabel}</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12151C] border border-[#232936] text-[#cef11c] text-[11px] font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{page.shortBadge}</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tight leading-tight max-w-3xl text-balance">
            {page.h1}
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#8E98A8] max-w-2xl leading-relaxed">
            {page.subtitle}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <a
              href={page.appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 min-h-[48px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs sm:text-[13px] font-black uppercase tracking-wider glow-lime hover:brightness-105 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{page.appCtaLabel}</span>
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href={UGABYTE_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDownloadApk}
              className="px-6 py-3.5 min-h-[48px] rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-xs sm:text-[13px] font-bold tracking-wider active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#cef11c]" />
              <span>Download APK ({UGABYTE_APP_META.fileSize})</span>
            </a>

            <button
              type="button"
              onClick={handleSharePage}
              className="px-5 py-3.5 min-h-[48px] rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-[#e3e2e8] text-xs font-bold inline-flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {sharedId === "page" ? (
                <>
                  <Check className="w-4 h-4 text-[#cef11c]" />
                  <span className="text-[#cef11c]">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#cef11c]" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Live Synced Feed Section */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
              Live Feed
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
              Live {page.navLabel}
            </h2>
          </div>
          <a
            href={page.appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#cef11c] hover:underline"
          >
            <span>Open in Web App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {listings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {listings.slice(0, 6).map((item) => (
              <article
                key={item.id}
                className="bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-2xl p-5 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#181C26] border border-[#232936] text-[#cef11c]">
                      {item.discount || page.navLabel}
                    </span>
                    <span className="text-[11px] text-[#8E98A8]">{item.time}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#FFFFFF] leading-snug">
                    {item.title}
                  </h3>

                  {item.desc && (
                    <p className="text-xs text-[#8E98A8] mt-1.5 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  )}

                  <div className="flex items-center gap-1.5 text-xs text-[#8E98A8] mt-3">
                    <MapPin className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#232936] flex items-center justify-between gap-2">
                  <div>
                    <div className="text-sm sm:text-base font-black text-[#cef11c] tabular-nums">
                      {item.price}
                    </div>
                    {item.originalPrice && (
                      <div className="text-[11px] line-through text-[#8E98A8] tabular-nums">
                        {item.originalPrice}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleShareListing(item)}
                      className="w-9 h-9 rounded-full bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-[#8E98A8] hover:text-[#cef11c] flex items-center justify-center transition-colors"
                      title="Share listing"
                      aria-label={`Share ${item.title}`}
                    >
                      {sharedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <a
                      href={item.appUrl || page.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 min-h-[36px] rounded-full bg-[#cef11c] text-[#090A0E] text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1 hover:brightness-105 transition-all"
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-[#12151C] border border-[#232936] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF]">
                Live Campus Feed
              </h3>
              <p className="text-xs sm:text-sm text-[#8E98A8] max-w-xl leading-relaxed">
                Browse current {page.navLabel.toLowerCase()} or post for free in the Web App.
              </p>
            </div>
            <a
              href={page.appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 min-h-[44px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider shrink-0 inline-flex items-center gap-1.5"
            >
              <span>{page.appCtaLabel}</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        )}
      </section>

      {/* Deep Educational & Uganda Context Section */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
              {page.overviewTitle}
            </h2>
            {page.overviewParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
              {page.highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-[#12151C] border border-[#232936]"
                >
                  <ShieldCheck className="w-5 h-5 text-[#cef11c] mb-2" />
                  <h3 className="text-xs sm:text-sm font-bold text-[#FFFFFF] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8E98A8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#12151C] border border-[#232936]">
              <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF] mb-3.5">
                Quick Start
              </h3>
              <div className="space-y-3.5">
                {page.howToSteps.map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="text-xs font-black text-[#090A0E] bg-[#cef11c] rounded-md px-2 py-1 tabular-nums shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
                        {s.title}
                      </h4>
                      <p className="text-xs text-[#8E98A8] mt-0.5 leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#12151C] border border-[#232936]">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#cef11c] mb-2.5">
                Campus Zones
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#e3e2e8]">
                {page.campusZones.map((zone) => (
                  <li key={zone} className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contributor / Merchant CTA + Category FAQs */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-[#181C26] border border-[#232936] rounded-2xl p-6 sm:p-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
              <Store className="w-3.5 h-3.5" />
              <span>Contribute</span>
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-[#FFFFFF] tracking-tight">
              {page.contributorTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
              {page.contributorDescription}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              {page.slug === "student-deals-uganda" ||
              page.slug === "student-gigs-uganda" ? (
                <button
                  type="button"
                  onClick={onOpenPartnerModal}
                  className="px-5 py-3 min-h-[44px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 hover:brightness-105 transition-all"
                >
                  <Store className="w-4 h-4" />
                  <span>{page.contributorCtaLabel}</span>
                </button>
              ) : null}
              <a
                href={page.appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 min-h-[44px] rounded-full bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/50 text-[#FFFFFF] text-xs font-bold inline-flex items-center gap-2 transition-all"
              >
                <span>Web App</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#cef11c]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#FFFFFF] mb-2">
              FAQ
            </h2>
            {page.faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-4 sm:p-5 rounded-xl bg-[#12151C] border border-[#232936]"
              >
                <h3 className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
                  {faq.q}
                </h3>
                <p className="text-xs text-[#8E98A8] mt-1.5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crawlable Internal Cross-Links to Other UgaByte Hubs */}
      <section className="pt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-base sm:text-lg font-extrabold text-[#FFFFFF] mb-4">
          More Hubs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {otherPages.map((other) => (
            <a
              key={other.slug}
              href={other.path}
              onClick={(e) => onNavigateCategory(other.slug, e)}
              className="p-4 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/50 transition-all group block"
            >
              <span className="text-[10px] font-black uppercase tracking-wider text-[#cef11c]">
                {other.shortBadge}
              </span>
              <h3 className="text-sm font-bold text-[#FFFFFF] group-hover:text-[#cef11c] mt-1 transition-colors">
                {other.navLabel}
              </h3>
              <p className="text-xs text-[#8E98A8] mt-1 line-clamp-2">
                {other.subtitle}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
