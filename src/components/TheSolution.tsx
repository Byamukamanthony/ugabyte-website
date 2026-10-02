import React, { useState } from "react";
import { Flame, Store, Calendar, Briefcase, MapPin, Check, ArrowRight } from "lucide-react";

interface TheSolutionProps {
  onClaimDrop?: () => void;
}

export const TheSolution: React.FC<TheSolutionProps> = ({ onClaimDrop }) => {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    if (onClaimDrop) onClaimDrop();
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          Engineered for Hustlers
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
          Four Core Pillars Powering Campus Daily
        </h2>
        <p className="text-sm sm:text-base text-[#8E98A8] mt-2.5 leading-relaxed">
          From lunch discounts on the Kikoni strip to peer trading and career stepping stones, UgaByte turns campus chaos into immediate leverage.
        </p>
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
                Live Timers
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1.5">
              Flash Deals &amp; Everyday Campus Drops
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-6">
              Score partner food discounts, rolex combos, high-speed report printing in Wandegeya, and late-night coffee vouchers negotiated exclusively for university students.
            </p>
          </div>

          {/* Live Deal Card simulation */}
          <div className="bg-[#181C26] border border-[#232936] rounded-xl p-4 sm:p-5 relative mt-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-black text-[#FFA800] uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-pulse" />
                  14 Left
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF] mt-1">
                  The Triple-Deck Rolex + Spiced Chai
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#8E98A8] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
                  <span>Wandegeya Food Alley · Stall 12</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-lg sm:text-xl font-black text-[#cef11c] tabular-nums">
                  UGX 4,000
                </div>
                <div className="text-xs line-through text-[#8E98A8] tabular-nums">
                  UGX 6,500
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#232936] pt-3">
              <span className="text-[11px] text-[#8E98A8]">
                Makerere Student Pass required
              </span>
              <button
                onClick={handleClaim}
                disabled={claimed}
                className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all active:scale-95 ${
                  claimed
                    ? "bg-[#181C26] text-[#cef11c] border border-[#cef11c]/50 cursor-default"
                    : "bg-[#cef11c] text-[#090A0E] hover:brightness-105"
                }`}
              >
                {claimed ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Claimed! Check App
                  </span>
                ) : (
                  "Claim Drop"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pillar 2: Peer Market (Col-Span 5) */}
        <div className="md:col-span-5 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#181C26] border border-[#232936] flex items-center justify-center text-[#cef11c]">
                <Store className="w-5 h-5 text-[#cef11c]" />
              </div>
              <span className="text-[11px] font-black uppercase bg-[#181C26] border border-[#232936] px-3 py-1 rounded-full text-[#8E98A8]">
                0% Fee
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1.5">
              Campus Marketplace
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-6">
              Buy and sell engineering calculators, textbooks, monitors, beds, and semester hostel essentials directly with peers you can meet at University gates.
            </p>
          </div>

          <div className="space-y-2 border-t border-[#232936] pt-4">
            <div className="flex items-center justify-between text-xs py-1">
              <span className="text-[#FFFFFF]">Casio fx-991EX Scientific Calc</span>
              <span className="font-bold text-[#cef11c] tabular-nums">UGX 75,000</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1 border-t border-[#232936]/40">
              <span className="text-[#FFFFFF]">Hostel Single Mattress (4x6)</span>
              <span className="font-bold text-[#cef11c] tabular-nums">UGX 90,000</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1 border-t border-[#232936]/40">
              <span className="text-[#FFFFFF]">Dell 24" IPS Desk Monitor</span>
              <span className="font-bold text-[#cef11c] tabular-nums">UGX 260,000</span>
            </div>
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
                Live Calendar
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1.5">
              Campus Events &amp; Culture
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-6">
              Guild elections, Inter-Hall Sports Galas, Lumumba Hall Nights, tech meetups, and open-mic sessions with digital pass check-in.
            </p>
          </div>

          <div className="bg-[#181C26] p-3.5 rounded-xl border border-[#232936] flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-lg bg-[#12151C] flex flex-col items-center justify-center border border-[#232936] text-[#cef11c] shrink-0">
              <span className="text-[10px] font-black uppercase">FRI</span>
              <span className="text-lg font-black leading-none">24</span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
                Inter-University FinTech Hackathon
              </div>
              <span className="text-[11px] text-[#8E98A8]">
                Main Hall Makerere · 500+ Participants
              </span>
            </div>
          </div>
        </div>

        {/* Pillar 4: Internships & Freelance Gigs (Col-Span 7) */}
        <div className="md:col-span-7 bg-[#12151C] border border-[#232936] hover:border-[#323B4E] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c]">
                <Briefcase className="w-5 h-5 text-[#cef11c]" />
              </div>
              <span className="text-[11px] font-black uppercase bg-[#cef11c]/10 border border-[#cef11c]/30 px-3 py-1 rounded-full text-[#cef11c]">
                Earn &amp; Grow
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-1.5">
              Internships &amp; Freelance Gigs
            </h3>
            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed mb-6">
              Vetted campus ambassador programs, weekend graphic design gigs, data entry for local startups, and software engineering internships with African tech ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#232936] pt-4">
            <div className="p-3.5 rounded-xl bg-[#181C26] border border-[#232936]">
              <span className="text-[10px] text-[#cef11c] font-black uppercase tracking-wider">
                Tech Ambassador
              </span>
              <h5 className="text-xs sm:text-sm font-bold text-[#FFFFFF] mt-1">
                Flutterwave Campus Lead
              </h5>
              <p className="text-[11px] text-[#8E98A8] mt-1">Stipend: UGX 450k/mo + Merch</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#181C26] border border-[#232936]">
              <span className="text-[10px] text-[#FFA800] font-black uppercase tracking-wider">
                Freelance Task
              </span>
              <h5 className="text-xs sm:text-sm font-bold text-[#FFFFFF] mt-1">
                Event Photography (2 Days)
              </h5>
              <p className="text-[11px] text-[#8E98A8] mt-1">Pay: UGX 200,000 on completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
