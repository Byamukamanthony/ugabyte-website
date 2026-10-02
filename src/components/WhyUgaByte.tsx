import React from "react";
import { Compass, Network, Sparkles, MapPin } from "lucide-react";

export const WhyUgaByte: React.FC = () => {
  const principles = [
    {
      title: "Campus-First",
      desc: "Built around the way campus life actually works — from hall gates to hostel strips.",
      icon: Compass,
    },
    {
      title: "Connected",
      desc: "Bring discoveries, peers, local merchants, and student gigs into a single coherent feed.",
      icon: Network,
    },
    {
      title: "Simple",
      desc: "Less searching through 50 dead WhatsApp status messages. More immediate finding.",
      icon: Sparkles,
    },
    {
      title: "Local",
      desc: "Designed ground-up around Ugandan university realities, currencies, and transport points.",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          Product Philosophy
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
          Why We Built UgaByte
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#181C26] text-[#cef11c] flex items-center justify-center border border-[#232936]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFFFFF]">
                {item.title}
              </h3>
              <p className="text-xs text-[#8E98A8] leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
