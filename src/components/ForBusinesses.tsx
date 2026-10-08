import React from "react";
import { Store, Clock, Zap, Tag, ShieldCheck, Star } from "lucide-react";

interface ForBusinessesProps {
  onOpenPartnerModal: () => void;
}

export const ForBusinesses: React.FC<ForBusinessesProps> = ({ onOpenPartnerModal }) => {
  return (
    <section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]"
      id="sellers"
    >
      <div className="bg-[#181C26] border border-[#232936] rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cef11c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
              <Store className="w-3.5 h-3.5" />
              <span>For Sellers &amp; Campus Merchants</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Reach 10,000+ Students Instantly.
            </h2>

            <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
              List food deals, electronics, or hostel services directly on the campus feed with zero listing fees.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936]">
                <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black text-[#cef11c] tabular-nums">
                  <Tag className="w-4 h-4 shrink-0" />
                  <span>0%</span>
                </div>
                <p className="text-[11px] text-[#8E98A8] mt-1">Commission</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936]">
                <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black text-[#FFFFFF] tabular-nums">
                  <Clock className="w-4 h-4 text-[#cef11c] shrink-0" />
                  <span>2 min</span>
                </div>
                <p className="text-[11px] text-[#8E98A8] mt-1">Live Setup</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936]">
                <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black text-[#cef11c] tabular-nums">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span>Direct</span>
                </div>
                <p className="text-[11px] text-[#8E98A8] mt-1">Student Orders</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPartnerModal}
                className="px-6 py-3.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] inline-flex items-center gap-2"
              >
                <Store className="w-4 h-4" />
                <span>BECOME A CAMPUS PARTNER</span>
              </button>
            </div>
          </div>

          {/* Merchant Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#12151C] border border-[#232936] rounded-xl p-6 relative shadow-xl">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#cef11c]/20 border border-[#cef11c] flex items-center justify-center text-[#cef11c] font-black text-sm shrink-0">
                  EK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">
                    Elijah Kyazze
                  </h4>
                  <p className="text-xs text-[#8E98A8]">
                    Tech Repairs · Makerere
                  </p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#e3e2e8] mb-5 leading-relaxed">
                "With UgaByte, I get 15+ student laptop repair orders every week right from Kikoni and Mitchell Hall."
              </blockquote>

              <div className="flex items-center justify-between text-[11px] text-[#8E98A8] border-t border-[#232936] pt-3">
                <span className="text-[#cef11c] font-black uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Seller
                </span>
                <span className="flex items-center gap-1 font-bold text-[#FFFFFF]">
                  <Star className="w-3 h-3 fill-[#FFA800] text-[#FFA800]" />
                  4.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
