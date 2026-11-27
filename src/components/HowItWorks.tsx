import React from "react";
import { Globe, MapPin, Handshake } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01.",
      title: "Open or Install in Seconds",
      desc: "Browse live campus feeds immediately on the Web App or add the shortcut straight to your phone with zero app-store wait.",
      meta: "ugabyte.vercel.app · Android & iOS",
      icon: Globe,
    },
    {
      num: "02.",
      title: "Pick Your Campus Hub",
      desc: "Filter meal drops, hostel gear, guild events, and gigs around Makerere, MUBS Nakawa, or Kyambogo zones.",
      meta: "Localized to campus gates & halls",
      icon: MapPin,
    },
    {
      num: "03.",
      title: "Claim or Trade Directly",
      desc: "Connect peer-to-peer or redeem merchant coupons on site. Meet in public campus spots and inspect items before paying.",
      meta: "UGX 0 commission · Direct Mobile Money or Cash",
      icon: Handshake,
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]/80"
      id="how-it-works"
    >
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2">
        <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
          How It Works
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
          From Browser to Campus Pickup in Minutes
        </h2>
        <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
          Built for fast, low-data campus life with no middleman fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#12151C] border border-[#232936]/80 hover:border-[#323B4E] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#cef11c] tabular-nums tracking-tight">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#181C26] text-[#cef11c] flex items-center justify-center border border-[#232936]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#232936]/60 text-[11px] text-[#8E98A8] font-medium">
                {step.meta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
