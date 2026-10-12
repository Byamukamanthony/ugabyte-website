import React from "react";
import { Store, Clock, Zap, Tag, ShieldCheck, Star } from "lucide-react";

interface ForBusinessesProps {
  onOpenPartnerModal: () => void;
}

export const ForBusinesses: React.FC<ForBusinessesProps> = ({ onOpenPartnerModal }) => {
  return (
    <section
      className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]"
      id="sellers"
    >
      <div className="bg-[#181C26] border border-[#232936] rounded-2xl p-4 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#cef11c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
              <Store className="w-3.5 h-3.5" />
              <span>Merchants &amp; Sellers</span>
            </span>

            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight text-balance">
              Sell to 10,000+ Students.
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#12151C] border border-[#232936] text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-base sm:text-xl font-black text-[#cef11c] tabular-nums">
                  <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>0%</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#8E98A8] mt-0.5">Fee</p>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#12151C] border border-[#232936] text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-base sm:text-xl font-black text-[#FFFFFF] tabular-nums">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#cef11c] shrink-0" />
                  <span>2m</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#8E98A8] mt-0.5">Setup</p>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#12151C] border border-[#232936] text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-base sm:text-xl font-black text-[#cef11c] tabular-nums">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>Direct</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#8E98A8] mt-0.5">Orders</p>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] inline-flex items-center justify-center gap-2"
              >
                <Store className="w-4 h-4" />
                <span>Partner with UgaByte</span>
              </button>
            </div>
          </div>

          {/* Merchant Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#12151C] border border-[#232936] rounded-xl p-4 sm:p-6 relative shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#cef11c]/20 border border-[#cef11c] flex items-center justify-center text-[#cef11c] font-black text-xs shrink-0">
                    EK
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
                      Elijah Kyazze
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#8E98A8]">
                      Tech Repairs · Makerere
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-[#FFFFFF]">
                  <Star className="w-3.5 h-3.5 fill-[#FFA800] text-[#FFA800]" />
                  4.9
                </span>
              </div>

              <blockquote className="text-xs text-[#e3e2e8] mb-3 leading-relaxed">
                "15+ student laptop repair orders weekly from Kikoni &amp; Mitchell."
              </blockquote>

              <div className="flex items-center gap-1 text-[10px] text-[#cef11c] font-black uppercase tracking-wider border-t border-[#232936] pt-2.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Campus Merchant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
