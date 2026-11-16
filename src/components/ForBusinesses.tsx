import React from "react";
import { ExternalLink } from "lucide-react";
import { UGABYTE_APP_LINKS } from "../config/ugabyte";

interface ForBusinessesProps {
  onOpenPartnerModal?: () => void;
}

export const ForBusinesses: React.FC<ForBusinessesProps> = () => {
  return (
    <section
      className="py-16 sm:py-24 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]/80"
      id="sellers"
    >
      <div className="bg-[#12151C] border border-[#232936]/80 rounded-2xl p-7 sm:p-12 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#cef11c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
              Merchants &amp; Sellers
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight text-balance">
              Sell to 10,000+ Students.
            </h2>
          </div>

          {/* Hairline-divided metrics (no nested boxes) */}
          <div className="grid grid-cols-3 divide-x divide-[#232936]/80 py-2 border-y border-[#232936]/70">
            <div className="px-2 py-2 text-center">
              <div className="text-lg sm:text-2xl font-extrabold text-[#cef11c] tabular-nums">
                0%
              </div>
              <p className="text-[11px] sm:text-xs text-[#8E98A8] mt-0.5 font-medium">
                Commission
              </p>
            </div>

            <div className="px-2 py-2 text-center">
              <div className="text-lg sm:text-2xl font-extrabold text-[#FFFFFF] tabular-nums">
                2 min
              </div>
              <p className="text-[11px] sm:text-xs text-[#8E98A8] mt-0.5 font-medium">
                Setup
              </p>
            </div>

            <div className="px-2 py-2 text-center">
              <div className="text-lg sm:text-2xl font-extrabold text-[#cef11c] tabular-nums">
                Direct
              </div>
              <p className="text-[11px] sm:text-xs text-[#8E98A8] mt-0.5 font-medium">
                Orders
              </p>
            </div>
          </div>

          <div className="pt-1">
            <a
              href={`${UGABYTE_APP_LINKS.marketplace}#add`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 min-h-[46px] rounded-full bg-[#cef11c] text-[#090A0E] text-sm font-bold tracking-tight hover:brightness-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] inline-flex items-center justify-center gap-2"
              title="Partner with UgaByte"
            >
              <span>Partner with UgaByte</span>
              <ExternalLink className="w-4 h-4 stroke-[2.25]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
