import React from "react";
import { Handshake, Clock, MessageSquare, Star, ArrowUpRight } from "lucide-react";

interface ForBusinessesProps {
  onOpenPartnerModal: () => void;
}

export const ForBusinesses: React.FC<ForBusinessesProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="sellers">
      <div className="bg-[#181C26] border border-[#232936] rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cef11c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
              Merchant &amp; Hustler Network
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Have something to sell to university students?
            </h2>
            <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
              Whether you run a fast-food rolex joint in Kikoni, a book-binding stall in Wandegeya, or an online thrift boutique from your hostel room, UgaByte provides direct, unhindered access to thousands of hungry campus buyers without ad spend.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12151C] border border-[#232936]">
                <span className="text-2xl font-black text-[#cef11c] tabular-nums">0%</span>
                <p className="text-xs text-[#8E98A8] mt-1">Listing fee on peer inventory</p>
              </div>

              <div className="p-4 rounded-xl bg-[#12151C] border border-[#232936]">
                <span className="text-2xl font-black text-[#FFFFFF] tabular-nums">&lt; 3 mins</span>
                <p className="text-xs text-[#8E98A8] mt-1">From setup to live campus feed</p>
              </div>

              <div className="p-4 rounded-xl bg-[#12151C] border border-[#232936]">
                <span className="text-2xl font-black text-[#cef11c] tabular-nums">1-Click</span>
                <p className="text-xs text-[#8E98A8] mt-1">WhatsApp order initiation</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenPartnerModal}
                className="px-6 py-3.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              >
                TALK TO UGABYTE PARTNERSHIPS
              </button>

              <a
                href="#how-it-works"
                className="px-6 py-3.5 rounded-full bg-[#12151C] border border-[#232936] hover:bg-[#181C26] text-[#FFFFFF] text-xs font-bold tracking-wider transition-all focus:outline-none"
              >
                Seller Guidelines
              </a>
            </div>
          </div>

          {/* Merchant Testimonial / Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#12151C] border border-[#232936] rounded-xl p-6 sm:p-7 relative shadow-xl">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#cef11c]/20 border border-[#cef11c] flex items-center justify-center text-[#cef11c] font-black text-base shrink-0">
                  EK
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF]">
                    Elijah Kyazze
                  </h4>
                  <p className="text-xs text-[#8E98A8]">
                    Hostel Tech Repairs · Makerere Year 4
                  </p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#e3e2e8] italic mb-6 leading-relaxed">
                "Before UgaByte, I used to repost laptop repair services on my WhatsApp status every single morning. With UgaByte, I get 15+ student inquiries every week right from Kikoni and Mitchell."
              </blockquote>

              <div className="flex items-center justify-between text-[11px] text-[#8E98A8] border-t border-[#232936] pt-3">
                <span className="text-[#cef11c] font-black uppercase tracking-wider">
                  Verified Campus Merchant
                </span>
                <span className="flex items-center gap-1 font-bold text-[#FFFFFF]">
                  <Star className="w-3 h-3 fill-[#FFA800] text-[#FFA800]" />
                  4.9 (140+ reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
