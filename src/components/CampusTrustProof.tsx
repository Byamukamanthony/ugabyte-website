import React from "react";
import { ShieldCheck, MapPin, Banknote, Users } from "lucide-react";

export const CampusTrustProof: React.FC = () => {
  const trustStandards = [
    {
      icon: ShieldCheck,
      title: "Verified Campus Merchants",
      detail: "Partner food joints, bookshops, and print kiosks are checked before appearing in student deal feeds.",
    },
    {
      icon: MapPin,
      title: "Public Gate Meetups",
      detail: "Recommended handover points at Kikoni Gate, Freedom Square, MUBS Main Gate, and Banda Road.",
    },
    {
      icon: Banknote,
      title: "Inspect Before Paying",
      detail: "Students inspect electronics, books, and hostel items in person before paying cash or Mobile Money.",
    },
    {
      icon: Users,
      title: "UGX 0 Platform Cut",
      detail: "No listing fees or hidden transaction commissions on peer-to-peer student trades.",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]/80"
      id="trust"
    >
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2">
        <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
          Trust &amp; Safety
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
          Safe Campus Trading
        </h2>
        <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
          Clear safety standards across MAK, MUBS, and Kyambogo.
        </p>
      </div>

      {/* Campus Safety Standards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {trustStandards.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-[#12151C] border border-[#232936]/80 flex flex-col gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#181C26] border border-[#232936] text-[#cef11c] flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#FFFFFF] tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-[#8E98A8] leading-relaxed">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
