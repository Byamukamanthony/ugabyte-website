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
      className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]"
      id="features"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          What UgaByte Offers Across Uganda
        </span>
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight text-balance">
          Four Core Pillars by UgaByte
        </h2>
        <p className="text-xs sm:text-sm text-[#8E98A8] mt-2 leading-relaxed">
          Everything students and campus communities need to save money, trade safely, attend university events, and earn income—accessible in any browser or Android phone.
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
                <span>Open Deals</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Student Deals &amp; Affordable Campus Food
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Verified meal discounts, rolex &amp; café combos, academic printing offers, and hostel promotions around Makerere, MUBS Nakawa, and Kyambogo.
            </p>
          </div>

          {/* Live Deal Card synced directly from Supabase */}
          <div>
            {featuredDeal ? (
              <div className="bg-[#181C26] border border-[#232936] rounded-xl p-3.5 sm:p-5 relative mt-1 sm:mt-2">
                <div className="flex flex-col xs:flex-row items-start xs:items-start justify-between gap-2 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-black text-[#FFA800] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-pulse" />
                      {featuredDeal.discount || "LIVE IN APP"}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF] mt-1 truncate">
                      {featuredDeal.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-[#8E98A8] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
                      <span className="truncate">{featuredDeal.location}</span>
                    </div>
                  </div>

                  <div className="text-left xs:text-right shrink-0">
                    <div className="text-base sm:text-xl font-black text-[#cef11c] tabular-nums">
                      {featuredDeal.price}
                    </div>
                    {featuredDeal.originalPrice && (
                      <div className="text-[11px] sm:text-xs line-through text-[#8E98A8] tabular-nums">
                        {featuredDeal.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3.5 sm:mt-4 flex items-center justify-between border-t border-[#232936] pt-3 gap-2">
                  <span className="text-[10px] sm:text-[11px] text-[#8E98A8]">{featuredDeal.time}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleShareItem(
                          `deal-${featuredDeal.id}`,
                          `${featuredDeal.title} — UgaByte Deal`,
                          `${featuredDeal.title} (${featuredDeal.price}) near ${featuredDeal.location} on UgaByte`,
                          "student-deals-uganda"
                        )
                      }
                      className="w-9 h-9 rounded-full bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/50 text-[#8E98A8] hover:text-[#cef11c] flex items-center justify-center transition-colors"
                      title="Share this deal"
                      aria-label="Share this deal"
                    >
                      {sharedKey === `deal-${featuredDeal.id}` ? (
                        <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={UGABYTE_APP_LINKS.deals}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 sm:px-4 py-2 sm:py-1.5 min-h-[40px] rounded-full text-xs font-black uppercase tracking-wider bg-[#cef11c] text-[#090A0E] hover:brightness-105 transition-all active:scale-95 inline-flex items-center gap-1.5"
                    >
                      <span>Claim Deal</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#181C26] border border-[#232936] rounded-xl p-3.5 sm:p-5 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3 sm:gap-4 mt-1 sm:mt-2">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
                    Synced with Live Campus Deals
                  </div>
                  <div className="text-xs text-[#8E98A8] mt-0.5">
                    Browse current local food offers and student discounts inside the UgaByte app.
                  </div>
                </div>
                <a
                  href={UGABYTE_APP_LINKS.deals}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 min-h-[44px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider shrink-0 inline-flex items-center justify-center gap-1.5 hover:brightness-105 active:scale-95 transition-all"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Open Deals</span>
                  <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                </a>
              </div>
            )}

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/student-deals-uganda"
                onClick={(e) => onNavigateCategory?.("student-deals-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Explore Student Deals &amp; Food in Uganda</span>
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
                <span>View Marketplace</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Peer-to-Peer Student Marketplace
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Buy and sell laptops, Casio calculators, textbooks, and hostel essentials directly at university gates with UGX 0 listing fees.
            </p>
          </div>

          <div className="border-t border-[#232936] pt-3 sm:pt-4">
            {topProducts.length > 0 ? (
              <div className="space-y-1 sm:space-y-2">
                {topProducts.map((item, i) => (
                  <a
                    key={item.id}
                    href={UGABYTE_APP_LINKS.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-between text-xs min-h-[42px] py-2 px-1 text-left hover:bg-[#181C26] rounded-lg transition-colors active:scale-[0.99] group/item ${
                      i > 0 ? "border-t border-[#232936]/40" : ""
                    }`}
                  >
                    <span className="text-[#FFFFFF] group-hover/item:text-[#cef11c] font-medium truncate pr-2 transition-colors">
                      {item.title}
                    </span>
                    <span className="font-bold text-[#cef11c] tabular-nums shrink-0 flex items-center gap-1">
                      {item.price}
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover/item:opacity-100" />
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={UGABYTE_APP_LINKS.marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 sm:p-3.5 min-h-[48px] rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 flex items-center justify-between text-xs transition-colors active:scale-[0.99]"
              >
                <span className="text-[#8E98A8] truncate pr-2">
                  List or browse verified student items
                </span>
                <span className="font-bold text-[#cef11c] flex items-center gap-1.5 shrink-0">
                  <span>Marketplace</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            )}

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/student-marketplace-uganda"
                onClick={(e) => onNavigateCategory?.("student-marketplace-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Student Marketplace Guide</span>
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
                <span>Live Campus Events</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              University &amp; Campus Events
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Hackathons, career fairs, public lectures, cultural galas, and inter-university sports fixtures across Ugandan campuses.
            </p>
          </div>

          <div>
            <a
              href={UGABYTE_APP_LINKS.events}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left bg-[#181C26] p-3 sm:p-3.5 min-h-[56px] rounded-xl border border-[#232936] hover:border-[#cef11c]/50 flex items-center gap-3 transition-colors active:scale-[0.99] group/evt focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#12151C] flex flex-col items-center justify-center border border-[#232936] text-[#cef11c] shrink-0 group-hover/evt:border-[#cef11c]/50 transition-colors">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-bold text-[#FFFFFF] group-hover/evt:text-[#cef11c] truncate transition-colors">
                  {featuredEvent ? featuredEvent.title : "Live Campus Events"}
                </div>
                <span className="text-[11px] text-[#8E98A8] truncate block">
                  {featuredEvent
                    ? `${featuredEvent.location} · ${featuredEvent.time}`
                    : "Browse or publish upcoming university events"}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#cef11c] shrink-0">
                <span className="hidden xs:inline">Open</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
              </span>
            </a>

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/campus-events-uganda"
                onClick={(e) => onNavigateCategory?.("campus-events-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Explore Campus Events in Uganda</span>
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
                <span>Opportunities</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Student Gigs, Freelance Hustles &amp; Internships
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-4 sm:mb-5">
              Vetted brand ambassador roles, tech and business internships, academic tutoring, and paid student tasks across Uganda.
            </p>
          </div>

          <div className="border-t border-[#232936] pt-3 sm:pt-4">
            {topGigs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {topGigs.map((gig, idx) => (
                  <a
                    key={gig.id}
                    href={UGABYTE_APP_LINKS.opportunities}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 min-h-[64px] rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-left transition-colors active:scale-[0.99] block group/gig"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider ${
                          idx === 0 ? "text-[#cef11c]" : "text-[#FFA800]"
                        }`}
                      >
                        {gig.discount || "OPPORTUNITY"}
                      </span>
                      <ExternalLink className="w-3 h-3 text-[#8E98A8] group-hover/gig:text-[#cef11c] transition-colors" />
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#FFFFFF] group-hover/gig:text-[#cef11c] mt-0.5 truncate transition-colors">
                      {gig.title}
                    </h5>
                    <p className="text-[11px] text-[#8E98A8] mt-0.5 font-mono">
                      {gig.price}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={UGABYTE_APP_LINKS.opportunities}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 sm:p-3.5 min-h-[48px] rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 flex items-center justify-between text-xs transition-colors active:scale-[0.99]"
              >
                <span className="text-[#8E98A8] truncate pr-2">
                  Explore paid student gigs, hustles &amp; internships
                </span>
                <span className="font-bold text-[#cef11c] flex items-center gap-1 shrink-0">
                  <span>Opportunities</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            )}

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <a
                href="/student-gigs-uganda"
                onClick={(e) => onNavigateCategory?.("student-gigs-uganda", e)}
                className="inline-flex items-center gap-1.5 font-bold text-[#cef11c] hover:underline"
              >
                <span>Explore Student Gigs &amp; Internships in Uganda</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
