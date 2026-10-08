import React, { useState } from "react";
import { UgaByteLogo } from "./UgaByteLogo";
import {
  Smartphone,
  TrendingUp,
  MapPin,
  Bookmark,
  Flame,
  Store,
  Calendar,
  User,
  Download,
  ExternalLink,
  ShieldCheck,
  Zap,
  BatteryCharging,
  Wifi,
  Cpu,
  Utensils,
  Home,
} from "lucide-react";
import { LiveFeedPayload, VERIFIED_APP_FEED } from "../services/liveFeed";

interface FeatureShowcaseProps {
  onInspectApk: () => void;
  onStudentChat: () => void;
  feed?: LiveFeedPayload;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  onInspectApk,
  onStudentChat,
  feed = VERIFIED_APP_FEED,
}) => {
  const [activeCategory, setActiveCategory] = useState<"food" | "electronics" | "hostels">("food");
  const [bookmarked, setBookmarked] = useState(false);

  const current = feed.listings[activeCategory];

  return (
    <section className="py-20 bg-[#121317] border-b border-[#232936]" id="live-radar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Icon-First Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151C] border border-[#232936] text-[#cef11c] text-xs font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Engineered for Speed</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              14.1 MB. Zero Ads. Instant Campus Sync.
            </h2>

            {/* Icon-driven feature cards instead of dense paragraphs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FFFFFF]">Data Saver</div>
                  <div className="text-[11px] text-[#8E98A8]">Zero background data</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FFFFFF]">Battery Light</div>
                  <div className="text-[11px] text-[#8E98A8]">14.1 MB native client</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FFFFFF]">ID Verified</div>
                  <div className="text-[11px] text-[#8E98A8]">Trusted student peers</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#232936] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#cef11c]/10 text-[#cef11c] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FFFFFF]">Direct Sync</div>
                  <div className="text-[11px] text-[#8E98A8]">Live Web &amp; Android</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onInspectApk}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#cef11c] text-[#cef11c] text-xs font-bold uppercase tracking-wider transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              >
                <Download className="w-4 h-4" />
                <span>APK Specs &amp; Checksum</span>
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
                    UGABYTE LIVE RADAR
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[#8E98A8] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cef11c] animate-pulse" />
                  {feed.stats.isLiveConnected ? "LIVE API" : "APP FEED"}
                </span>
              </div>

              {/* Performance Card Style Widget */}
              <div className="my-4 p-4 rounded-xl bg-[#181C26] border border-[#232936]">
                <div className="flex items-center justify-between text-[11px] text-[#8E98A8] uppercase tracking-wider">
                  <span>Active Campus Feed</span>
                  <span className="text-[#cef11c] flex items-center gap-1 font-bold">
                    <TrendingUp className="w-3.5 h-3.5" /> Live
                  </span>
                </div>

                <div className="my-2 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#FFFFFF] leading-none tabular-nums">
                    {feed.stats.activeListings.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#cef11c] font-bold">
                    verified listings
                  </span>
                </div>

                {/* Interactive Icon Filter Tabs */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-[#232936]/60">
                  <button
                    onClick={() => setActiveCategory("food")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeCategory === "food"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    <Utensils className="w-3 h-3" />
                    <span>Food</span>
                  </button>
                  <button
                    onClick={() => setActiveCategory("electronics")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeCategory === "electronics"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>Tech</span>
                  </button>
                  <button
                    onClick={() => setActiveCategory("hostels")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeCategory === "hostels"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    <Home className="w-3 h-3" />
                    <span>Hostels</span>
                  </button>
                </div>
              </div>

              {/* Live Item Preview */}
              <div className="rounded-xl overflow-hidden border border-[#232936] bg-[#181C26]">
                <div className="relative h-44 w-full bg-[#090A0E]">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Discount Badge */}
                  {current.discount && (
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#cef11c] text-[#090A0E] text-[10px] font-black uppercase tracking-wider">
                      {current.discount}
                    </div>
                  )}

                  {/* Verified Seller Badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#090A0E]/80 backdrop-blur-md border border-[#232936] text-[#FFA800] text-[10px] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#FFA800]" />
                    <span>Verified</span>
                  </div>

                  {/* Location ribbon */}
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-full bg-[#090A0E]/85 backdrop-blur-md border border-[#232936] flex items-center justify-between text-[11px]">
                    <span className="text-[#FFFFFF] flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#cef11c]" />
                      <span>{current.location}</span>
                    </span>
                    <span className="text-[#8E98A8] text-[10px]">{current.time}</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-[#FFFFFF] leading-snug">
                        {current.title}
                      </h4>
                      <p className="text-xs text-[#8E98A8] mt-0.5">{current.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-black text-[#cef11c] tabular-nums">
                        {current.price}
                      </div>
                      {current.originalPrice && (
                        <div className="text-[11px] line-through text-[#8E98A8] tabular-nums">
                          {current.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={onStudentChat}
                      className="flex-1 py-2.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Open in App</span>
                    </button>
                    <button
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`p-2.5 rounded-full border border-[#232936] transition-colors ${
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

              {/* Simulated Mobile Nav Dock */}
              <div className="mt-4 pt-3 border-t border-[#232936] flex justify-around text-[#8E98A8] text-[10px]">
                <button
                  onClick={() => setActiveCategory("food")}
                  className={`${
                    activeCategory === "food" ? "text-[#cef11c]" : "hover:text-[#FFFFFF]"
                  } flex flex-col items-center cursor-pointer`}
                >
                  <Flame className="w-4 h-4" />
                  <span className="font-bold mt-0.5">Drops</span>
                </button>
                <button
                  onClick={() => setActiveCategory("electronics")}
                  className={`${
                    activeCategory === "electronics" ? "text-[#cef11c]" : "hover:text-[#FFFFFF]"
                  } flex flex-col items-center cursor-pointer`}
                >
                  <Store className="w-4 h-4" />
                  <span className="mt-0.5">Market</span>
                </button>
                <button
                  onClick={onStudentChat}
                  className="flex flex-col items-center hover:text-[#FFFFFF] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="mt-0.5">Events</span>
                </button>
                <button
                  onClick={onStudentChat}
                  className="flex flex-col items-center hover:text-[#FFFFFF] cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  <span className="mt-0.5">Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
