import React from "react";
import {
  Flame,
  Store,
  Calendar,
  Briefcase,
  MapPin,
  ExternalLink,
  RefreshCw,
  PlusCircle,
} from "lucide-react";
import { LiveFeedPayload, EMPTY_LIVE_FEED } from "../services/liveFeed";

interface TheSolutionProps {
  onClaimDrop?: () => void;
  onOpenWebApp?: () => void;
  feed?: LiveFeedPayload;
}

export const TheSolution: React.FC<TheSolutionProps> = ({
  onOpenWebApp,
  feed = EMPTY_LIVE_FEED,
}) => {
  const featuredDeal = feed.deals[0];
  const topProducts = feed.products.slice(0, 3);
  const featuredEvent = feed.events[0];
  const topGigs = feed.gigs.slice(0, 2);

  return (
    <section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]"
      id="features"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          <RefreshCw className="w-3 h-3" />
          <span>Live Supabase Feed · {feed.stats.lastSynced}</span>
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
          Four Core Pillars. One App.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Pillar 1: Deals & Drops (Col-Span 7) */}
        <div className="md:col-span-7 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all relative overflow-hidden group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c]">
                <Flame className="w-5 h-5 text-[#cef11c]" />
              </div>
              <span className="text-[11px] font-black uppercase bg-[#181C26] border border-[#232936] px-3 py-1 rounded-full text-[#cef11c]">
                {feed.deals.length} Live
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Flash Deals &amp; Student Drops
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Exclusive partner food, printing, and hostel discounts verified by Student ID.
            </p>
          </div>

          {/* Live Deal Card synced directly from Supabase */}
          {featuredDeal ? (
            <div className="bg-[#181C26] border border-[#232936] rounded-xl p-4 sm:p-5 relative mt-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black text-[#FFA800] uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-pulse" />
                    {featuredDeal.discount || "LIVE IN APP"}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF] mt-1">
                    {featuredDeal.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#8E98A8] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
                    <span>{featuredDeal.location}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-lg sm:text-xl font-black text-[#cef11c] tabular-nums">
                    {featuredDeal.price}
                  </div>
                  {featuredDeal.originalPrice && (
                    <div className="text-xs line-through text-[#8E98A8] tabular-nums">
                      {featuredDeal.originalPrice}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#232936] pt-3">
                <span className="text-[11px] text-[#8E98A8]">{featuredDeal.time}</span>
                <button
                  onClick={onOpenWebApp}
                  className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#cef11c] text-[#090A0E] hover:brightness-105 transition-all active:scale-95 inline-flex items-center gap-1.5"
                >
                  <span>Claim in App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#181C26] border border-[#232936] rounded-xl p-4 sm:p-5 flex items-center justify-between gap-4 mt-2">
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
                  Synced with Live Campus Deals
                </div>
                <div className="text-xs text-[#8E98A8] mt-0.5">
                  No active flash drops posted right now. Post or claim deals in the app.
                </div>
              </div>
              <button
                onClick={onOpenWebApp}
                className="px-4 py-2 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider shrink-0 inline-flex items-center gap-1.5 hover:brightness-105 transition-all"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Open Deals</span>
              </button>
            </div>
          )}
        </div>

        {/* Pillar 2: Peer Market (Col-Span 5) */}
        <div className="md:col-span-5 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#181C26] border border-[#232936] flex items-center justify-center text-[#cef11c]">
                <Store className="w-5 h-5 text-[#cef11c]" />
              </div>
              <span className="text-[11px] font-black uppercase bg-[#181C26] border border-[#232936] px-3 py-1 rounded-full text-[#8E98A8]">
                0% Fee · {feed.products.length} Live
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Peer Marketplace
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Trade electronics, calculators, and hostel essentials directly at campus gates.
            </p>
          </div>

          <div className="border-t border-[#232936] pt-4">
            {topProducts.length > 0 ? (
              <div className="space-y-2">
                {topProducts.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={onOpenWebApp}
                    className={`w-full flex items-center justify-between text-xs py-1.5 text-left hover:opacity-80 transition-opacity ${
                      i > 0 ? "border-t border-[#232936]/40" : ""
                    }`}
                  >
                    <span className="text-[#FFFFFF] font-medium truncate pr-2">
                      {item.title}
                    </span>
                    <span className="font-bold text-[#cef11c] tabular-nums shrink-0 flex items-center gap-1">
                      {item.price}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={onOpenWebApp}
                className="w-full p-3.5 rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 flex items-center justify-between text-xs transition-colors"
              >
                <span className="text-[#8E98A8]">
                  List or browse verified student items in the app
                </span>
                <span className="font-bold text-[#cef11c] flex items-center gap-1 shrink-0 ml-2">
                  <span>Marketplace</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Pillar 3: Events & Culture (Col-Span 5) */}
        <div className="md:col-span-5 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#181C26] border border-[#232936] flex items-center justify-center text-[#cef11c]">
                <Calendar className="w-5 h-5 text-[#cef11c]" />
              </div>
              <span className="text-[11px] font-black uppercase bg-[#181C26] border border-[#232936] px-3 py-1 rounded-full text-[#8E98A8]">
                {feed.events.length} Live
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Campus Events
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Hackathons, hall nights, and inter-university sports with instant QR check-in.
            </p>
          </div>

          <button
            onClick={onOpenWebApp}
            className="w-full text-left bg-[#181C26] p-3.5 rounded-xl border border-[#232936] hover:border-[#cef11c]/50 flex items-center gap-3.5 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-[#12151C] flex flex-col items-center justify-center border border-[#232936] text-[#cef11c] shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm font-bold text-[#FFFFFF] truncate">
                {featuredEvent ? featuredEvent.title : "Live Campus Calendar"}
              </div>
              <span className="text-[11px] text-[#8E98A8] truncate block">
                {featuredEvent
                  ? `${featuredEvent.location} · ${featuredEvent.time}`
                  : "Browse or host upcoming university events"}
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
          </button>
        </div>

        {/* Pillar 4: Internships & Freelance Gigs (Col-Span 7) */}
        <div className="md:col-span-7 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c]">
                <Briefcase className="w-5 h-5 text-[#cef11c]" />
              </div>
              <span className="text-[11px] font-black uppercase bg-[#cef11c]/10 border border-[#cef11c]/30 px-3 py-1 rounded-full text-[#cef11c]">
                {feed.gigs.length} Live
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1">
              Internships &amp; Campus Gigs
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-5">
              Vetted brand ambassador roles, tech internships, and paid student tasks.
            </p>
          </div>

          <div className="border-t border-[#232936] pt-4">
            {topGigs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topGigs.map((gig, idx) => (
                  <button
                    key={gig.id}
                    onClick={onOpenWebApp}
                    className="p-3.5 rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-left transition-colors"
                  >
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider ${
                        idx === 0 ? "text-[#cef11c]" : "text-[#FFA800]"
                      }`}
                    >
                      {gig.discount || "OPPORTUNITY"}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-[#FFFFFF] mt-0.5 truncate">
                      {gig.title}
                    </h5>
                    <p className="text-[11px] text-[#8E98A8] mt-0.5 font-mono">
                      {gig.price}
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={onOpenWebApp}
                className="w-full p-3.5 rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 flex items-center justify-between text-xs transition-colors"
              >
                <span className="text-[#8E98A8]">
                  Explore or post paid student gigs and roles in the app
                </span>
                <span className="font-bold text-[#cef11c] flex items-center gap-1 shrink-0 ml-2">
                  <span>Opportunities</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
