import React, { useState } from "react";
import { BRAND_ASSETS } from "../config/ugabyte";
import { UgaByteLogo } from "./UgaByteLogo";
import {
  Smartphone,
  Check,
  TrendingUp,
  MapPin,
  Bookmark,
  Flame,
  Store,
  Calendar,
  User,
  ShieldAlert,
  Download,
  MessageCircle,
} from "lucide-react";

interface FeatureShowcaseProps {
  onInspectApk: () => void;
  onStudentChat: () => void;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  onInspectApk,
  onStudentChat,
}) => {
  const [activeCategory, setActiveCategory] = useState<"food" | "electronics" | "hostels">("food");
  const [bookmarked, setBookmarked] = useState(false);

  const categoryItems = {
    food: {
      title: "The Triple-Deck Rolex + Spiced Chai",
      desc: "Fresh, hot, delivered at Lumumba Hall gate.",
      location: "Wandegeya Stall 4",
      time: "Posted 4m ago",
      price: "UGX 3,500",
      originalPrice: "UGX 5,500",
      discount: "36% OFF",
      seller: "Wandegeya Chef",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    },
    electronics: {
      title: "Anker Soundcore Q30 ANC",
      desc: "Boxed, used 2 weeks. Battery health 100%.",
      location: "Mitchell Hall Quad",
      time: "Posted 12m ago",
      price: "UGX 165K",
      originalPrice: "UGX 240K",
      discount: "35% OFF",
      seller: "Eng Dept Peer",
      image: BRAND_ASSETS.headphonesProduct,
    },
    hostels: {
      title: "Hostel Sublet: Self-Contained Single",
      desc: "Water 24/7, solar backup, balcony view.",
      location: "Kikoni Kagugube Rd",
      time: "Posted 25m ago",
      price: "UGX 550K/sem",
      originalPrice: "UGX 700K",
      discount: "21% OFF",
      seller: "Graduating Senior",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80",
    },
  };

  const current = categoryItems[activeCategory];

  return (
    <section className="py-24 bg-[#121317] border-b border-[#232936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Explanatory Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151C] border border-[#232936] text-[#cef11c] text-xs font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Sleek Mobile Architecture</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Built for 3G Networks, Hot Battery Life, and Fast Thumbs.
            </h2>

            <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
              We know student life in Kampala. Phones run low on charge during 4-hour lectures, and data bundles are precious. The UgaByte client weighs under 14MB, consumes zero idle background data, and functions fluidly in dark mode to save OLED battery life.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#cef11c]/20 text-[#cef11c] flex items-center justify-center font-bold text-[11px] shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-[#FFFFFF]">
                  End-to-end peer verification tied to student IDs
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#cef11c]/20 text-[#cef11c] flex items-center justify-center font-bold text-[11px] shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-[#FFFFFF]">
                  Direct WhatsApp handoff or in-app encrypted inquiry
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#cef11c]/20 text-[#cef11c] flex items-center justify-center font-bold text-[11px] shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-[#FFFFFF]">
                  Zero banner ads or algorithm-driven junk
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onInspectApk}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#cef11c] text-[#cef11c] text-xs font-bold uppercase tracking-wider transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              >
                <Download className="w-4 h-4" />
                <span>Inspect APK Specs &amp; Hash</span>
              </button>
            </div>
          </div>

          {/* Right Visual: Real Neo-Techno Mobile App HUD */}
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
                <span className="text-[#8E98A8] font-bold">MAKERERE HILL</span>
              </div>

              {/* Performance Card Style Widget */}
              <div className="my-4 p-4 rounded-xl bg-[#181C26] border border-[#232936]">
                <div className="flex items-center justify-between text-[11px] text-[#8E98A8] uppercase tracking-wider">
                  <span>Active Student Activity</span>
                  <span className="text-[#cef11c] flex items-center gap-1 font-bold">
                    <TrendingUp className="w-3.5 h-3.5" /> +34% today
                  </span>
                </div>

                <div className="my-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#FFFFFF] leading-none tabular-nums">
                    2,840
                  </span>
                  <span className="text-xs text-[#cef11c] font-bold">
                    verified drops claimed
                  </span>
                </div>

                {/* Interactive filter tabs */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-[#232936]/60">
                  <button
                    onClick={() => setActiveCategory("electronics")}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeCategory === "electronics"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    Electronics (42)
                  </button>
                  <button
                    onClick={() => setActiveCategory("food")}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeCategory === "food"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    Food Combos (118)
                  </button>
                  <button
                    onClick={() => setActiveCategory("hostels")}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                      activeCategory === "hostels"
                        ? "bg-[#cef11c] text-[#090A0E]"
                        : "bg-[#12151C] text-[#8E98A8] hover:text-[#FFFFFF] border border-[#232936]"
                    }`}
                  >
                    Hostels (19)
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
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#cef11c] text-[#090A0E] text-[10px] font-black uppercase tracking-wider">
                    {current.discount}
                  </div>

                  {/* Verified Seller Badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#090A0E]/80 backdrop-blur-md border border-[#232936] text-[#FFA800] text-[10px] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-ping" />
                    <span>Verified Seller</span>
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
                      <div className="text-[11px] line-through text-[#8E98A8] tabular-nums">
                        {current.originalPrice}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={onStudentChat}
                      className="flex-1 py-2.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Chat with Student</span>
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
                <div className="text-[#cef11c] flex flex-col items-center">
                  <Flame className="w-4 h-4" />
                  <span className="font-bold mt-0.5">Drops</span>
                </div>
                <div className="flex flex-col items-center hover:text-[#FFFFFF] cursor-pointer">
                  <Store className="w-4 h-4" />
                  <span className="mt-0.5">Market</span>
                </div>
                <div className="flex flex-col items-center hover:text-[#FFFFFF] cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  <span className="mt-0.5">Events</span>
                </div>
                <div className="flex flex-col items-center hover:text-[#FFFFFF] cursor-pointer">
                  <User className="w-4 h-4" />
                  <span className="mt-0.5">Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
