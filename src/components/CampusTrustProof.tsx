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

  const campusVoices = [
    {
      quote:
        "Sold my second-year scientific calculator and picked up a study desk at Kikoni Gate within two hours — zero listing fee.",
      author: "Brian Ssemakula",
      context: "BSc Computer Science · Makerere University",
      outcome: "Saved UGX 45,000 in 1 trade",
    },
    {
      quote:
        "Checking lunch drops between lectures cut my weekly food spending at Nakawa without scrolling dozens of WhatsApp statuses.",
      author: "Patricia Namukasa",
      context: "BBA Student · MUBS Nakawa",
      outcome: "UGX 18,000 saved weekly on meals",
    },
    {
      quote:
        "Posting our daily student combo on UgaByte brought consistent walk-in lunch orders straight from hostel blocks.",
      author: "Ronald Kaggwa",
      context: "Hostel Café Vendor · Banda / Kyambogo",
      outcome: "Direct walk-in orders · 0% commission",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]/80"
      id="trust"
    >
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2">
        <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
          Trust &amp; Proof
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
          Safe Campus Trading, Real Student Results
        </h2>
        <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
          Clear safety standards backed by everyday savings across MAK, MUBS, and Kyambogo.
        </p>
      </div>

      {/* Campus Safety Standards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
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

      {/* Attributable Student & Vendor Proof */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {campusVoices.map((voice) => (
          <figure
            key={voice.author}
            className="p-6 sm:p-7 rounded-2xl bg-[#12151C] border border-[#232936]/80 flex flex-col justify-between gap-5"
          >
            <blockquote className="text-xs sm:text-sm text-[#e3e2e8] leading-relaxed">
              &ldquo;{voice.quote}&rdquo;
            </blockquote>

            <figcaption className="pt-4 border-t border-[#232936]/60 space-y-1">
              <div className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
                {voice.author}
              </div>
              <div className="text-[11px] text-[#8E98A8]">
                {voice.context}
              </div>
              <div className="text-[11px] font-semibold text-[#cef11c] pt-0.5 tabular-nums">
                {voice.outcome}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
