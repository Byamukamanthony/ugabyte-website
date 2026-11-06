import React, { useState } from "react";
import {
  Flame,
  Store,
  Calendar,
  Briefcase,
  MapPin,
  ExternalLink,
  PlusCircle,
  Share2,
  Check,
  ArrowRight,
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
      className="py-14 sm:py-20 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]"
      id="features"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          Campus Ecosystem
        </span>
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight text-balance">
          Four Core Pillars
        </h2>
        <p className="text-xs sm:text-sm text-[#8E98A8] mt-2 leading-relaxed">
          Save money, trade safely, attend events, and earn across campus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        {/* Pillar 1: Deals & Drops (Col-Span 7) */}
        <div className="md:col-span-7 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-2xl p-4 sm:p-7 flex flex-col justify-between transition-all relative overflow-hidden group">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c] shrink-0">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#cef11c]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase bg-[#181C26] border border-[#232936] px-2.5 sm:px-3 py-1 rounded-full text-[#cef11c] shrink-0">
                  Flash Drops
                </span>
              </div>

              {/* Direct Link: Open Deals */}
              <a
                href={UGABYTE_APP_LINKS.deals}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 min-h-[38px] rounded-full bg-[#cef11c] text-[#090A0E] text-[11px] font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-1.5 shadow-sm shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
                title="Open Campus Deals in Web App"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Deals</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Student Deals &amp; Food
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Verified meal drops, café combos, printing discounts, and hostel offers near campus.
            </p>
          </div>

          {/* Real App Glimpse: Top Deal */}
          <div>
            <div className="bg-[#181C26] border border-[#232936] hover:border-[#323B4E] rounded-xl p-3 sm:p-4 relative mt-1 sm:mt-2 transition-all">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                {/* Real Glimpse Image */}
                <div className="relative w-full sm:w-36 h-36 sm:h-28 rounded-lg overflow-hidden shrink-0 border border-[#232936] bg-[#12151C]">
                  <img
                    src={featuredDeal?.image || topDealImg}
                    alt={featuredDeal?.title || "Top Campus Meal Drop on UgaByte"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-1.5 left-1.5 text-[9.5px] font-black uppercase tracking-wider bg-[#FFA800] text-[#090A0E] px-2 py-0.5 rounded-full shadow-sm">
                    {featuredDeal?.discount || "42% OFF"}
                  </span>
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black text-[#FFA800] uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-pulse" />
                        TOP DEAL
                      </span>
                      <div className="text-right">
                        <span className="text-base sm:text-lg font-black text-[#cef11c] tabular-nums">
                          {featuredDeal?.price || "UGX 3,500"}
                        </span>
                        {(featuredDeal?.originalPrice || !featuredDeal) && (
                          <span className="text-[11px] line-through text-[#8E98A8] tabular-nums ml-1.5">
                            {featuredDeal?.originalPrice || "UGX 6,000"}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF] mt-1 line-clamp-1">
                      {featuredDeal?.title || "Double Rolex & Fresh Passion Juice"}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-[#8E98A8] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
                      <span className="truncate">{featuredDeal?.location || "Kikoni Gate · Makerere"}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-[#232936] pt-2.5 gap-2">
                    <span className="text-[10px] text-[#8E98A8]">{featuredDeal?.time || "Live on App"}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleShareItem(
                            `deal-${featuredDeal?.id || "top"}`,
                            `${featuredDeal?.title || "Double Rolex & Juice"} — UgaByte Deal`,
                            `${featuredDeal?.title || "Double Rolex & Juice"} on UgaByte`,
                            "student-deals-uganda"
                          )
                        }
                        className="w-8 h-8 rounded-full bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/50 text-[#8E98A8] hover:text-[#cef11c] flex items-center justify-center transition-colors"
                        title="Share this deal"
                        aria-label="Share this deal"
                      >
                        {sharedKey === `deal-${featuredDeal?.id || "top"}` ? (
                          <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                        ) : (
                          <Share2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <a
                        href={UGABYTE_APP_LINKS.deals}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 min-h-[36px] rounded-full text-xs font-black uppercase tracking-wider bg-[#cef11c] text-[#090A0E] hover:brightness-105 transition-all active:scale-95 inline-flex items-center gap-1.5 shrink-0 shadow-sm"
                        title="View deal in UgaByte Web App"
                      >
                        <span>View in App</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/student-deals-uganda"
                onClick={(e) => onNavigateCategory?.("student-deals-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Deals Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Pillar 2: Peer Market (Col-Span 5) */}
        <div className="md:col-span-5 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-2xl p-4 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181C26] border border-[#232936] flex items-center justify-center text-[#cef11c] shrink-0">
                  <Store className="w-4 h-4 sm:w-5 sm:h-5 text-[#cef11c]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase bg-[#181C26] border border-[#232936] px-2.5 sm:px-3 py-1 rounded-full text-[#8E98A8] shrink-0">
                  0% Fee
                </span>
              </div>

              {/* Direct Link: View Marketplace */}
              <a
                href={UGABYTE_APP_LINKS.marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 min-h-[38px] rounded-full bg-[#181C26] hover:bg-[#232936] border border-[#232936] hover:border-[#cef11c]/50 text-[#cef11c] text-[11px] font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-1.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
                title="View Peer Marketplace in Web App"
              >
                <Store className="w-3.5 h-3.5 text-[#cef11c]" />
                <span>Market</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Peer Marketplace
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Buy and sell laptops, calculators, books, and hostel gear at UGX 0 fee.
            </p>
          </div>

          <div className="border-t border-[#232936] pt-3 sm:pt-4">
            <div className="bg-[#181C26] border border-[#232936] hover:border-[#323B4E] rounded-xl p-3 sm:p-3.5 relative transition-all">
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-3.5">
                {/* Real Item Image */}
                <div className="relative w-full xs:w-24 sm:w-28 h-28 xs:h-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-[#232936] bg-[#12151C]">
                  <img
                    src={topProducts[0]?.image || topProductImg}
                    alt={topProducts[0]?.title || "Top Student Listing on UgaByte"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-1 left-1 text-[8.5px] font-black uppercase tracking-wider bg-[#12151C]/90 text-[#cef11c] border border-[#232936] px-1.5 py-0.5 rounded">
                    0% FEE
                  </span>
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-black text-[#cef11c] uppercase tracking-wider">
                        TOP ITEM
                      </span>
                      <span className="text-sm sm:text-base font-black text-[#cef11c] tabular-nums">
                        {topProducts[0]?.price || "UGX 85,000"}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF] mt-1 line-clamp-1">
                      {topProducts[0]?.title || "Wireless Studio ANC Headphones"}
                    </h4>
                    <p className="text-[11px] text-[#8E98A8] mt-0.5 truncate">
                      {topProducts[0]?.location || "Makerere Main Campus · Direct Pickup"}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#232936] flex items-center justify-between gap-2">
                    <span className="text-[10px] text-[#8E98A8]">Verified Student Seller</span>
                    <a
                      href={UGABYTE_APP_LINKS.marketplace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 min-h-[32px] rounded-full text-[11px] font-black uppercase tracking-wider bg-[#cef11c] text-[#090A0E] hover:brightness-105 transition-all active:scale-95 inline-flex items-center gap-1.5 shrink-0 shadow-sm"
                      title="View item in UgaByte Marketplace"
                    >
                      <span>View in App</span>
                      <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/student-marketplace-uganda"
                onClick={(e) => onNavigateCategory?.("student-marketplace-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Marketplace Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Pillar 3: Events & Culture (Col-Span 5) */}
        <div className="md:col-span-5 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-2xl p-4 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181C26] border border-[#232936] flex items-center justify-center text-[#cef11c] shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#cef11c]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase bg-[#181C26] border border-[#232936] px-2.5 sm:px-3 py-1 rounded-full text-[#8E98A8] shrink-0">
                  Events Hub
                </span>
              </div>

              {/* Direct Link: Live campus events */}
              <a
                href={UGABYTE_APP_LINKS.events}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 min-h-[38px] rounded-full bg-[#181C26] hover:bg-[#232936] border border-[#232936] hover:border-[#cef11c]/50 text-[#cef11c] text-[11px] font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-1.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
                title="Open Live Campus Events in Web App"
              >
                <Calendar className="w-3.5 h-3.5 text-[#cef11c]" />
                <span>Events</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Campus Events
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Hackathons, career fairs, guild nights, and university sports across Uganda.
            </p>
          </div>

          <div className="border-t border-[#232936] pt-3 sm:pt-4">
            <div className="bg-[#181C26] border border-[#232936] hover:border-[#323B4E] rounded-xl p-3 sm:p-3.5 relative transition-all">
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-3.5">
                {/* Real Event Image */}
                <div className="relative w-full xs:w-24 sm:w-28 h-28 xs:h-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-[#232936] bg-[#12151C]">
                  <img
                    src={featuredEvent?.image || topEventImg}
                    alt={featuredEvent?.title || "Top Campus Event on UgaByte"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-1 left-1 text-[8.5px] font-black uppercase tracking-wider bg-[#cef11c] text-[#090A0E] px-1.5 py-0.5 rounded">
                    CAMPUS EVENT
                  </span>
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-black text-[#cef11c] uppercase tracking-wider">
                        TOP EVENT
                      </span>
                      <span className="text-xs sm:text-sm font-black text-[#cef11c]">
                        {featuredEvent?.price || "FREE ENTRY"}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF] mt-1 line-clamp-1">
                      {featuredEvent?.title || "Makerere Tech Hackathon & Demo Day"}
                    </h4>
                    <p className="text-[11px] text-[#8E98A8] mt-0.5 truncate">
                      {featuredEvent
                        ? `${featuredEvent.location} · ${featuredEvent.time}`
                        : "Guild Auditorium · Sat 6:00 PM"}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#232936] flex items-center justify-between gap-2">
                    <span className="text-[10px] text-[#8E98A8]">Live Dates &amp; Entry</span>
                    <a
                      href={UGABYTE_APP_LINKS.events}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 min-h-[32px] rounded-full text-[11px] font-black uppercase tracking-wider bg-[#cef11c] text-[#090A0E] hover:brightness-105 transition-all active:scale-95 inline-flex items-center gap-1.5 shrink-0 shadow-sm"
                      title="View event in UgaByte Events"
                    >
                      <span>View in App</span>
                      <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/campus-events-uganda"
                onClick={(e) => onNavigateCategory?.("campus-events-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Events Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Pillar 4: Internships & Freelance Gigs (Col-Span 7) */}
        <div className="md:col-span-7 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-2xl p-4 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c] shrink-0">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#cef11c]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase bg-[#cef11c]/10 border border-[#cef11c]/30 px-2.5 sm:px-3 py-1 rounded-full text-[#cef11c] shrink-0">
                  Campus Gigs
                </span>
              </div>

              {/* Direct Link: Opportunities */}
              <a
                href={UGABYTE_APP_LINKS.opportunities}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 min-h-[38px] rounded-full bg-[#cef11c]/10 hover:bg-[#cef11c]/20 border border-[#cef11c]/30 text-[#cef11c] text-[11px] font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-1.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
                title="View Campus Opportunities in Web App"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#cef11c]" />
                <span>Gigs</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Gigs &amp; Internships
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Paid campus gigs, freelance student services, and verified internships.
            </p>
          </div>

          <div className="border-t border-[#232936] pt-3 sm:pt-4">
            <div className="bg-[#181C26] border border-[#232936] hover:border-[#323B4E] rounded-xl p-3 sm:p-4 relative transition-all">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                {/* Real Gig Image */}
                <div className="relative w-full sm:w-36 h-36 sm:h-28 rounded-lg overflow-hidden shrink-0 border border-[#232936] bg-[#12151C]">
                  <img
                    src={topGigs[0]?.image || topGigImg}
                    alt={topGigs[0]?.title || "Top Campus Gig on UgaByte"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-1.5 left-1.5 text-[9.5px] font-black uppercase tracking-wider bg-[#cef11c]/20 border border-[#cef11c]/40 text-[#cef11c] px-2 py-0.5 rounded-full shadow-sm">
                    {topGigs[0]?.discount || "PAID GIG"}
                  </span>
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black text-[#cef11c] uppercase tracking-wider">
                        TOP GIG
                      </span>
                      <span className="text-base sm:text-lg font-black text-[#cef11c] tabular-nums">
                        {topGigs[0]?.price || "UGX 150,000"}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF] mt-1 line-clamp-1">
                      {topGigs[0]?.title || "Campus Brand Identity & Poster Design"}
                    </h4>
                    <p className="text-xs text-[#8E98A8] mt-1 truncate">
                      {topGigs[0]?.location || "@Makerere Innovation Hub · Remote / Campus"}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-[#232936] pt-2.5 gap-2">
                    <span className="text-[10px] text-[#8E98A8]">{topGigs[0]?.time || "Live on App"}</span>
                    <a
                      href={UGABYTE_APP_LINKS.opportunities}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 min-h-[36px] rounded-full text-xs font-black uppercase tracking-wider bg-[#cef11c] text-[#090A0E] hover:brightness-105 transition-all active:scale-95 inline-flex items-center gap-1.5 shrink-0 shadow-sm"
                      title="View gig in UgaByte Opportunities"
                    >
                      <span>View in App</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/student-gigs-uganda"
                onClick={(e) => onNavigateCategory?.("student-gigs-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Gigs Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
