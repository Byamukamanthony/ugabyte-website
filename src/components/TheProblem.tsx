import React from "react";
import { MessageSquare, AlertCircle, FileText, CheckCircle2, XCircle, Store, Flame, Calendar } from "lucide-react";

export const TheProblem: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
            The Campus Friction
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
            Campus moves fast. <br />
            Your info is scattered across 10 apps.
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#8E98A8] max-w-md leading-relaxed">
          Between dead WhatsApp group links, fleeting 24h status sales, and noisy Telegram threads, finding cheap electronics, hostel sublets, or valid food combos is frustratingly broken.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Chaotic Old Way */}
        <div className="bg-[#12151C] border border-[#232936] rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-[#232936]">
            <span className="text-xs font-black uppercase text-[#ff8080] tracking-wider flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-[#ff8080]" />
              The Fragmented Status Quo
            </span>
            <span className="text-[11px] text-[#8E98A8]">High Noise · Zero Trust</span>
          </div>

          <div className="my-6 space-y-3 opacity-85">
            <div className="p-3 bg-[#181C26]/70 rounded-lg border border-[#232936]/80 flex items-start gap-3 text-xs">
              <MessageSquare className="w-4 h-4 text-[#8E98A8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#FFFFFF] font-medium leading-snug">
                  WhatsApp Status: "Who has a mini-fridge in Kikoni?? Urgent!!"
                </p>
                <span className="text-[10px] text-[#8E98A8]">Expired in 24 hours · 0 verified responses</span>
              </div>
            </div>

            <div className="p-3 bg-[#181C26]/70 rounded-lg border border-[#232936]/80 flex items-start gap-3 text-xs">
              <FileText className="w-4 h-4 text-[#8E98A8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#FFFFFF] font-medium leading-snug">
                  Physical notice board flyer: "Cheap HP laptop charger call 070..."
                </p>
                <span className="text-[10px] text-[#8E98A8]">Ripped off in rain · Unverified seller</span>
              </div>
            </div>

            <div className="p-3 bg-[#181C26]/70 rounded-lg border border-[#232936]/80 flex items-start gap-3 text-xs">
              <AlertCircle className="w-4 h-4 text-[#8E98A8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#FFFFFF] font-medium leading-snug">
                  Class Telegram: 850 unread messages burying the guild hackathon ticket link.
                </p>
                <span className="text-[10px] text-[#8E98A8]">Spam overload · Missed deadline</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#8E98A8] flex items-center gap-2 pt-2 border-t border-[#232936]/60">
            <AlertCircle className="w-4 h-4 text-[#ff8080] shrink-0" />
            <span>Result: Missed discounts, ghosted deals, and unreliable offline trade.</span>
          </div>
        </div>

        {/* The UgaByte Way */}
        <div className="bg-[#181C26] border border-[#cef11c]/40 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-black/30">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#cef11c]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-[#232936]">
            <span className="text-xs font-black uppercase text-[#cef11c] tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#cef11c]" />
              The UgaByte Unified Stream
            </span>
            <span className="text-[10px] font-black bg-[#cef11c]/20 text-[#cef11c] px-2 py-0.5 rounded-full uppercase tracking-wider">
              100% Peer Verified
            </span>
          </div>

          <div className="my-6 space-y-3">
            <div className="p-3 bg-[#12151C] rounded-lg border border-[#232936] flex items-start gap-3 text-xs">
              <Store className="w-4 h-4 text-[#cef11c] shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[#FFFFFF] font-semibold">Campus Market: Mini Fridge 90L</p>
                  <span className="text-[#cef11c] font-black tabular-nums">UGX 220,000</span>
                </div>
                <span className="text-[10px] text-[#8E98A8]">Kikoni · Seller: Derrick K. (Eng Year 3, Makerere)</span>
              </div>
            </div>

            <div className="p-3 bg-[#12151C] rounded-lg border border-[#232936] flex items-start gap-3 text-xs">
              <Flame className="w-4 h-4 text-[#FFA800] shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[#FFFFFF] font-semibold">Live Drop: Rolex Combo (3 Eggs + Chapati + Tea)</p>
                  <span className="text-[#cef11c] font-black tabular-nums">UGX 3,500</span>
                </div>
                <span className="text-[10px] text-[#8E98A8]">Wandegeya Stall 4 · Valid till 11:30 PM tonight</span>
              </div>
            </div>

            <div className="p-3 bg-[#12151C] rounded-lg border border-[#232936] flex items-start gap-3 text-xs">
              <Calendar className="w-4 h-4 text-[#cef11c] shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[#FFFFFF] font-semibold">Google Developer Student Club Hack Day</p>
                  <span className="text-[#8E98A8] font-bold">Free Pass</span>
                </div>
                <span className="text-[10px] text-[#8E98A8]">CoCIS Lab 3 · Direct RSVP sync with Google Calendar</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#cef11c] flex items-center gap-2 font-bold pt-2 border-t border-[#232936]/60">
            <CheckCircle2 className="w-4 h-4 text-[#cef11c] shrink-0" />
            <span>Single feed. Zero noise. Filtered by your faculty and residence.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
