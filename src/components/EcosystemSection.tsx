import React from "react";
import { Truck, ShieldCheck, BatteryCharging, PiggyBank } from "lucide-react";

export const EcosystemSection: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
            About UgaByte
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
            Built for everyday student life in Uganda.
          </h2>
          <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
            UgaByte unifies campus deals, peer trading, university events, and student gigs in one fast platform.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <Truck className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Campus-Gate Local</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              Indexed by gates and hostels across Makerere, Kikoni, Wandegeya, MUBS, and Kyambogo.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <ShieldCheck className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Peer Trust</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              Community verification keeps campus trading transparent and safe.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <BatteryCharging className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Low Data</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              Compressed media, offline caching, and zero bloated trackers.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/30 transition-all space-y-2.5">
            <PiggyBank className="w-7 h-7 text-[#cef11c]" />
            <h4 className="text-base font-bold text-[#FFFFFF]">Zero Cut</h4>
            <p className="text-xs text-[#8E98A8] leading-relaxed">
              0% commission on student sales and free club events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
