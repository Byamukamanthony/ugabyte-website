import React, { useState } from "react";
import {
  MapPin,
  ExternalLink,
  Share2,
  Check,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { LiveFeedPayload, EMPTY_LIVE_FEED } from "../services/liveFeed";
import { UGABYTE_APP_LINKS } from "../config/ugabyte";
import { CategoryRouteSlug, SITE_ORIGIN } from "../data/seoPages";
import { shareUgaByteContent } from "../utils/share";
import topDealImg from "../assets/images/ugabyte_top_deal_1793876710444.jpg";
import topProductImg from "../assets/images/ugabyte_top_product_1793876722807.jpg";
import topEventImg from "../assets/images/ugabyte_top_event_1793876734663.jpg";
import topGigImg from "../assets/images/ugabyte_top_gig_1793876746971.jpg";

interface TheSolutionProps {
  onClaimDrop?: () => void;
  onOpenWebApp?: () => void;
  onNavigateCategory?: (slug: CategoryRouteSlug, e?: React.MouseEvent) => void;
  feed?: LiveFeedPayload;
}

interface PillarImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  label: string;
}

const PillarImage: React.FC<PillarImageProps> = ({
  src,
  fallbackSrc,
  alt,
  label,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#181C26] via-[#12151C] to-[#090A0E] flex flex-col items-center justify-center p-4 text-center">
        <MapPin className="w-6 h-6 text-[#cef11c] mb-1.5" />
        <span className="text-xs font-bold text-[#FFFFFF]">{label}</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        } else {
          setFailed(true);
        }
      }}
      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
      loading="lazy"
    />
  );
};

export const TheSolution: React.FC<TheSolutionProps> = ({
  onNavigateCategory,
  feed = EMPTY_LIVE_FEED,
}) => {
  const [sharedKey, setSharedKey] = useState<string | null>(null);

  const featuredDeal = feed.deals[0];
  const topProducts = feed.products.slice(0, 3);
  const featuredEvent = feed.events[0];
  const topGigs = feed.gigs.slice(0, 2);

  const handleShareItem = async (
    key: string,
    title: string,
    text: string,
    slug: CategoryRouteSlug
  ) => {
    const res = await shareUgaByteContent({
      title,
      text,
      url: `${SITE_ORIGIN}/${slug}`,
    });
    if (res === "copied" || res === "shared") {
      setSharedKey(key);
      setTimeout(() => setSharedKey(null), 2500);
    }
  };

  return (
    <section
      className="py-16 sm:py-24 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]/80"
      id="features"
    >
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2">
        <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
          Campus Ecosystem
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
          Four Core Pillars
        </h2>
        <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
          Save money, trade safely, attend events, and earn across campus.
        </p>
      </div>

      {/* Minimalist Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Pillar 1: Deals & Food (Col-Span 7) */}
        <div className="md:col-span-7 bg-[#12151C] border border-[#232936]/80 hover:border-[#323B4E] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 relative overflow-hidden group">
          <div>
            {/* Clean Unboxed Header Row */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E98A8]">
                01 <span aria-hidden="true" className="mx-1 text-[#8E98A8]/50">·</span> Flash Drops &amp; Food
              </span>
              <button
                type="button"
                onClick={() =>
                  handleShareItem(
                    `deal-${featuredDeal?.id || "top"}`,
                    `${featuredDeal?.title || "Double Rolex & Fresh Passion Juice"} — UgaByte Deal`,
                    `${featuredDeal?.title || "Double Rolex & Fresh Passion Juice"} on UgaByte`,
                    "student-deals-uganda"
                  )
                }
                className="w-8 h-8 rounded-full text-[#8E98A8] hover:text-[#cef11c] hover:bg-[#181C26] flex items-center justify-center transition-colors"
                title="Share this deal"
                aria-label="Share this deal"
              >
                {sharedKey === `deal-${featuredDeal?.id || "top"}` ? (
                  <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                ) : (
                  <Share2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] tracking-tight mb-1.5">
              Student Deals &amp; Campus Food
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Verified meal drops, café combos, printing discounts, and hostel offers near campus.
            </p>

            {/* Showcase Visual Preview */}
            <div className="relative rounded-xl overflow-hidden border border-[#232936]/80 bg-[#090A0E] mb-5">
              <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
                <PillarImage
                  src={featuredDeal?.image || topDealImg}
                  fallbackSrc={topDealImg}
                  alt={featuredDeal?.title || "Top Campus Meal Drop on UgaByte"}
                  label="Student Deals & Campus Food"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider card-media-badge-warning bg-[#FFA800] text-[#090A0E] px-2.5 py-1 rounded-md shadow-sm">
                    {featuredDeal?.discount || "42% OFF DROP"}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 card-media-overlay z-10">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <h4
                        className="text-sm sm:text-base font-bold text-white drop-shadow media-title truncate"
                        data-media-title
                        style={{ color: "#FFFFFF" }}
                      >
                        {featuredDeal?.title || "Double Rolex & Fresh Passion Juice"}
                      </h4>
                      <div
                        className="flex items-center gap-1.5 text-xs text-slate-100 mt-0.5 drop-shadow media-subtext"
                        data-media-subtext
                        style={{ color: "#F1F5F9" }}
                      >
                        <MapPin
                          className="w-3.5 h-3.5 text-[#cef11c] shrink-0 media-accent"
                          data-media-accent
                          style={{ color: "#CEF11C" }}
                        />
                        <span className="truncate">{featuredDeal?.location || "Kikoni Gate · Makerere"}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className="text-base sm:text-lg font-extrabold text-[#cef11c] tabular-nums media-accent drop-shadow"
                        data-media-accent
                        style={{ color: "#CEF11C" }}
                      >
                        {featuredDeal?.price || "UGX 3,500"}
                      </div>
                      <div
                        className="text-[11px] line-through text-slate-300 tabular-nums media-strikethrough"
                        style={{ color: "#CBD5E1" }}
                      >
                        {featuredDeal?.originalPrice || "UGX 6,000"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#232936]/60 flex items-center justify-between gap-3">
            <a
              href={UGABYTE_APP_LINKS.deals}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 min-h-[38px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-bold tracking-tight hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-1.5"
              title="Claim Deal in UgaByte App"
            >
              <span>View in App</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.25]" />
            </a>
            <a
              href="/student-deals-uganda"
              onClick={(e) => onNavigateCategory?.("student-deals-uganda", e)}
              className="group/guide px-3.5 py-2 min-h-[38px] rounded-full border border-[#323B4E] hover:border-[#cef11c] hover:bg-[#181C26] text-[#e3e2e8] hover:text-[#cef11c] text-xs font-semibold transition-all inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
              <span>Deals Guide</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/guide:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Pillar 2: Peer Marketplace (Col-Span 5) */}
        <div className="md:col-span-5 bg-[#12151C] border border-[#232936]/80 hover:border-[#323B4E] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 relative overflow-hidden group">
          <div>
            {/* Clean Unboxed Header Row */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E98A8]">
                02 <span aria-hidden="true" className="mx-1 text-[#8E98A8]/50">·</span> Zero-Fee Trading
              </span>
              <span className="text-[11px] font-semibold text-[#cef11c]">
                0% Fee
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] tracking-tight mb-1.5">
              Peer Marketplace
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Buy and sell laptops, calculators, books, and hostel gear directly.
            </p>

            {/* Showcase Visual Preview */}
            <div className="relative rounded-xl overflow-hidden border border-[#232936]/80 bg-[#090A0E] mb-5">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <PillarImage
                  src={topProducts[0]?.image || topProductImg}
                  fallbackSrc={topProductImg}
                  alt={topProducts[0]?.title || "Top Student Listing on UgaByte"}
                  label="Zero-Fee Campus Marketplace"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 card-media-overlay z-10">
                  <div className="flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <h4
                        className="text-sm font-bold text-white drop-shadow media-title truncate"
                        data-media-title
                        style={{ color: "#FFFFFF" }}
                      >
                        {topProducts[0]?.title || "Wireless Studio ANC Headphones"}
                      </h4>
                      <p
                        className="text-xs text-slate-100 truncate drop-shadow media-subtext mt-0.5"
                        data-media-subtext
                        style={{ color: "#F1F5F9" }}
                      >
                        {topProducts[0]?.location || "Makerere Main Campus · Direct Pickup"}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className="text-sm sm:text-base font-extrabold text-[#cef11c] tabular-nums media-accent drop-shadow"
                        data-media-accent
                        style={{ color: "#CEF11C" }}
                      >
                        {topProducts[0]?.price || "UGX 85,000"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#232936]/60 flex items-center justify-between gap-3">
            <a
              href={UGABYTE_APP_LINKS.marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 min-h-[38px] rounded-full bg-[#181C26] hover:bg-[#232936] border border-[#232936] hover:border-[#cef11c]/40 text-[#cef11c] text-xs font-bold tracking-tight active:scale-95 transition-all inline-flex items-center gap-1.5"
              title="Browse Marketplace in Web App"
            >
              <span>View in App</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.25]" />
            </a>
            <a
              href="/student-marketplace-uganda"
              onClick={(e) => onNavigateCategory?.("student-marketplace-uganda", e)}
              className="group/guide px-3.5 py-2 min-h-[38px] rounded-full border border-[#323B4E] hover:border-[#cef11c] hover:bg-[#181C26] text-[#e3e2e8] hover:text-[#cef11c] text-xs font-semibold transition-all inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
              <span>Market Guide</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/guide:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Pillar 3: Campus Events (Col-Span 5) */}
        <div className="md:col-span-5 bg-[#12151C] border border-[#232936]/80 hover:border-[#323B4E] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 relative overflow-hidden group">
          <div>
            {/* Clean Unboxed Header Row */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E98A8]">
                03 <span aria-hidden="true" className="mx-1 text-[#8E98A8]/50">·</span> Campus Events
              </span>
              <span className="text-[11px] font-semibold text-[#cef11c]">
                Verified
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] tracking-tight mb-1.5">
              Campus Events &amp; Hubs
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Hackathons, career fairs, guild nights, and university sports across Uganda.
            </p>

            {/* Showcase Visual Preview */}
            <div className="relative rounded-xl overflow-hidden border border-[#232936]/80 bg-[#090A0E] mb-5">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <PillarImage
                  src={featuredEvent?.image || topEventImg}
                  fallbackSrc={topEventImg}
                  alt={featuredEvent?.title || "Top Campus Event on UgaByte"}
                  label="Campus Events & Hubs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 card-media-overlay z-10">
                  <div className="flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <h4
                        className="text-sm font-bold text-white drop-shadow media-title truncate"
                        data-media-title
                        style={{ color: "#FFFFFF" }}
                      >
                        {featuredEvent?.title || "Makerere Tech Hackathon & Demo Day"}
                      </h4>
                      <p
                        className="text-xs text-slate-100 truncate drop-shadow media-subtext mt-0.5"
                        data-media-subtext
                        style={{ color: "#F1F5F9" }}
                      >
                        {featuredEvent
                          ? `${featuredEvent.location} · ${featuredEvent.time}`
                          : "Guild Auditorium · Sat 6:00 PM"}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className="text-xs sm:text-sm font-extrabold text-[#cef11c] media-accent drop-shadow"
                        data-media-accent
                        style={{ color: "#CEF11C" }}
                      >
                        {featuredEvent?.price || "FREE ENTRY"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#232936]/60 flex items-center justify-between gap-3">
            <a
              href={UGABYTE_APP_LINKS.events}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 min-h-[38px] rounded-full bg-[#181C26] hover:bg-[#232936] border border-[#232936] hover:border-[#cef11c]/40 text-[#cef11c] text-xs font-bold tracking-tight active:scale-95 transition-all inline-flex items-center gap-1.5"
              title="Explore Events in Web App"
            >
              <span>View in App</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.25]" />
            </a>
            <a
              href="/campus-events-uganda"
              onClick={(e) => onNavigateCategory?.("campus-events-uganda", e)}
              className="group/guide px-3.5 py-2 min-h-[38px] rounded-full border border-[#323B4E] hover:border-[#cef11c] hover:bg-[#181C26] text-[#e3e2e8] hover:text-[#cef11c] text-xs font-semibold transition-all inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
              <span>Events Guide</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/guide:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Pillar 4: Gigs & Internships (Col-Span 7) */}
        <div className="md:col-span-7 bg-[#12151C] border border-[#232936]/80 hover:border-[#323B4E] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 relative overflow-hidden group">
          <div>
            {/* Clean Unboxed Header Row */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E98A8]">
                04 <span aria-hidden="true" className="mx-1 text-[#8E98A8]/50">·</span> Gigs &amp; Freelance
              </span>
              <span className="text-[11px] font-semibold text-[#cef11c]">
                Paid Work
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] tracking-tight mb-1.5">
              Gigs &amp; Student Internships
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Paid campus gigs, freelance student services, and verified internships.
            </p>

            {/* Showcase Visual Preview */}
            <div className="relative rounded-xl overflow-hidden border border-[#232936]/80 bg-[#090A0E] mb-5">
              <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
                <PillarImage
                  src={topGigs[0]?.image || topGigImg}
                  fallbackSrc={topGigImg}
                  alt={topGigs[0]?.title || "Top Campus Gig on UgaByte"}
                  label="Student Gigs & Internships"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider card-media-badge-warning bg-[#FFA800] text-[#090A0E] px-2.5 py-1 rounded-md shadow-sm">
                    {topGigs[0]?.discount || "PAID OPPORTUNITY"}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 card-media-overlay z-10">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <h4
                        className="text-sm sm:text-base font-bold text-white drop-shadow media-title truncate"
                        data-media-title
                        style={{ color: "#FFFFFF" }}
                      >
                        {topGigs[0]?.title || "Campus Brand Identity & Poster Design"}
                      </h4>
                      <p
                        className="text-xs text-slate-100 mt-0.5 truncate drop-shadow media-subtext"
                        data-media-subtext
                        style={{ color: "#F1F5F9" }}
                      >
                        {topGigs[0]?.location || "@Makerere Innovation Hub · Remote / Campus"}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className="text-base sm:text-lg font-extrabold text-[#cef11c] tabular-nums media-accent drop-shadow"
                        data-media-accent
                        style={{ color: "#CEF11C" }}
                      >
                        {topGigs[0]?.price || "UGX 150,000"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#232936]/60 flex items-center justify-between gap-3">
            <a
              href={UGABYTE_APP_LINKS.opportunities}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 min-h-[38px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-bold tracking-tight hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-1.5"
              title="Explore Gigs in Web App"
            >
              <span>View in App</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.25]" />
            </a>
            <a
              href="/student-gigs-uganda"
              onClick={(e) => onNavigateCategory?.("student-gigs-uganda", e)}
              className="group/guide px-3.5 py-2 min-h-[38px] rounded-full border border-[#323B4E] hover:border-[#cef11c] hover:bg-[#181C26] text-[#e3e2e8] hover:text-[#cef11c] text-xs font-semibold transition-all inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
              <span>Gigs Guide</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/guide:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
