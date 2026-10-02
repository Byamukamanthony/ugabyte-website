import React from "react";
import { Truck, ShieldCheck, BatteryCharging, PiggyBank } from "lucide-react";

export const EcosystemSection: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
            The Mission
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
            More than a marketplace: building the digital layer for African campus life.
          </h2>
          <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
            Universities across Africa are densely populated micro-cities with distinct economies, languages, and logistical challenges. Mainstream Big Tech platforms ignore these nuanced hyper-local dynamics.
          </p>
          <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
            UgaByte is purpose-built to empower the next generation of East African leaders with the economic tools, peer security, and digital infrastructure required to build financial independence right from lecture halls.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <Truck className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Hyper-Local Geography</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              Every drop is indexed by gates, halls, and hostels: Mitchell, Lumumba, Mary Stuart, Kikoni, Kikoni-Kagugube, and Sir Apollo Kaggwa Rd.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <ShieldCheck className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Peer Accountability</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              Students vouch for students. Bad actors face automated blacklist protocols across the entire campus registry.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <BatteryCharging className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Extreme Low-Bandwidth</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              Engineered with zero third-party bloated trackers, aggressive image compression, and full offline cached indexing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <PiggyBank className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Student-First Economy</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              We never take a cut of personal student sales or charge students to attend campus guild gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
