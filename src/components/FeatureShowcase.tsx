import React, { useState } from "react";
import { UgaByteLogo } from "./UgaByteLogo";
import {
  Smartphone,
  MapPin,
  Bookmark,
  Flame,
  ShoppingBag,
  Calendar,
  Briefcase,
  Download,
  ExternalLink,
  ShieldCheck,
  Zap,
  BatteryCharging,
  Wifi,
  PlusCircle,
} from "lucide-react";
import { LiveFeedPayload, EMPTY_LIVE_FEED } from "../services/liveFeed";

interface FeatureShowcaseProps {
  onInspectApk: () => void;
  onStudentChat: () => void;
  feed?: LiveFeedPayload;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  onInspectApk,
  onStudentChat,
  feed = EMPTY_LIVE_FEED,
}) => {
  const [activeTab, setActiveTab] = useState<"deals" | "products" | "events" | "gigs">("deals");
  const [bookmarked, setBookmarked] = useState(false);

  const itemsForTab = feed[activeTab] || [];
  const current = itemsForTab[0];

  return (
    <section className="py-16 bg-[#121317] border-b border-[#232936]" id="live-radar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Icon-First Specs */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12151C] border border-[#232936] text-[#cef11c] text-xs font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>14.1 MB</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Built for Speed.
            </h2>

            {/* Universal Icon Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <Wifi className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#FFFFFF]">Data Saver</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#FFFFFF]">Battery Light</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#FFFFFF]">ID Verified</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#FFFFFF]">Live Sync</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onInspectApk}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#cef11c] text-[#cef11c] text-xs font-bold uppercase tracking-wider transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              >
                <Download className="w-4 h-4" />
                <span>APK Checksum</span>
              </button>
            </div>
          </div>

          {/* Right Visual: Live Neo-Techno Mobile App HUD */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-[#12151C] border border-[#232936] rounded-2xl p-4 sm:p-5 shadow-2xl relative">
              {/* Top HUD Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#232936] text-[11px]">
                <div className="flex items-center gap-2">
                  <UgaByteLogo showWordmark={false} className="h-4" />
                  <span className="text-[#FFFFFF] font-black tracking-wide">
                    RADAR
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[#8E98A8] font-bold">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      feed.stats.isConnected ? "bg-[#cef11c] animate-pulse" : "bg-[#FFA800]"
                    }`}
                  />
                  {feed.stats.isConnected ? "LIVE" : "..."}
                </span>
              </div>

              {/* Universal Icon Category Selector */}
              <div className="my-3 p-3 rounded-xl bg-[#181C26] border border-[#232936]">
                <div className="grid grid-cols-4 gap-1.5">
                  <button
                    onClick={() => setActiveTab("deals")}
                    title="Deals"
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === "deals"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{feed.stats.dealsCount}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("products")}
                    title="Marketplace"
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === "products"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{feed.stats.productsCount}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("events")}
                    title="Events"
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === "events"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{feed.stats.eventsCount}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("gigs")}
                    title="Gigs"
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === "gigs"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{feed.stats.gigsCount}</span>
                  </button>
                </div>
              </div>

              {/* Live Item Preview from Supabase */}
              {current ? (
                <div className="rounded-xl overflow-hidden border border-[#232936] bg-[#181C26]">
                  {current.image && (
                    <div className="relative h-40 w-full bg-[#090A0E]">
                      <img
                        src={current.image}
                        alt={current.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {current.discount && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#cef11c] text-[#090A0E] text-[10px] font-black uppercase tracking-wider">
                          {current.discount}
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-full bg-[#090A0E]/85 backdrop-blur-md border border-[#232936] flex items-center justify-between text-[11px]">
                        <span className="text-[#FFFFFF] flex items-center gap-1 font-medium truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
                          <span className="truncate">{current.location}</span>
                        </span>
                        <span className="text-[#8E98A8] text-[10px] shrink-0 ml-2">
                          {current.time}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-[#FFFFFF] leading-snug">
                          {current.title}
                        </h4>
                        {!current.image && (
                          <div className="flex items-center gap-1.5 text-[11px] text-[#8E98A8] mt-1">
                            <MapPin className="w-3 h-3 text-[#cef11c]" />
                            <span>{current.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-base font-black text-[#cef11c] tabular-nums">
                          {current.price}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={onStudentChat}
                        className="flex-1 py-2 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Open</span>
                      </button>
                      <button
                        onClick={() => setBookmarked(!bookmarked)}
                        className={`p-2 rounded-full border border-[#232936] transition-colors ${
                          bookmarked
                            ? "bg-[#cef11c] text-[#090A0E] border-[#cef11c]"
                            : "bg-[#12151C] text-[#8E98A8] hover:text-[#cef11c]"
                        }`}
                        aria-label="Bookmark item"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-[#232936] bg-[#181C26] p-5 text-center space-y-3">
                  <div className="w-9 h-9 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 text-[#cef11c] flex items-center justify-center mx-auto">
                    <PlusCircle className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#FFFFFF]">
                    0 Live Listings
                  </div>
                  <button
                    onClick={onStudentChat}
                    className="w-full py-2.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Open App</span>
                  </button>
                </div>
              )}

              {/* Universal Icon Nav Dock */}
              <div className="mt-4 pt-3 border-t border-[#232936] flex justify-around text-[#8E98A8]">
                <button
                  onClick={() => setActiveTab("deals")}
                  title="Deals"
                  className={`p-1.5 rounded-lg ${
                    activeTab === "deals" ? "text-[#cef11c]" : "hover:text-[#FFFFFF]"
                  } cursor-pointer`}
                >
                  <Flame className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab("products")}
                  title="Marketplace"
                  className={`p-1.5 rounded-lg ${
                    activeTab === "products" ? "text-[#cef11c]" : "hover:text-[#FFFFFF]"
                  } cursor-pointer`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab("events")}
                  title="Events"
                  className={`p-1.5 rounded-lg ${
                    activeTab === "events" ? "text-[#cef11c]" : "hover:text-[#FFFFFF]"
                  } cursor-pointer`}
                >
                  <Calendar className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab("gigs")}
                  title="Gigs"
                  className={`p-1.5 rounded-lg ${
                    activeTab === "gigs" ? "text-[#cef11c]" : "hover:text-[#FFFFFF]"
                  } cursor-pointer`}
                >
                  <Briefcase className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
