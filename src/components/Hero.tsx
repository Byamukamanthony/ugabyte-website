import React from "react";
import { BRAND_ASSETS, UGABYTE_APP_META, UGABYTE_WEB_APP_URL } from "../config/ugabyte";
import {
  Download,
  Globe,
  ShieldCheck,
  Flame,
  Rocket,
  Zap,
  MapPin,
  Tag,
} from "lucide-react";

interface HeroProps {
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadApk, onOpenWebApp }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-[#232936] pt-16">
      {/* Cinematic Portrait Backdrop with Organic Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={BRAND_ASSETS.heroPortrait}
          alt="African university student portrait"
          className="hero-portrait-img w-full h-full object-cover object-top opacity-50 mix-blend-screen scale-105"
          loading="eager"
        />
        {/* Gradients layering dark onyx aesthetic with subtle lime tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0E]/30 via-[#090A0E]/85 to-[#090A0E]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[#cef11c]/12 rounded-full blur-[140px]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center flex flex-col items-center justify-center">
        {/* Floating Icon Capsule Badges Row */}
        <div className="relative w-full max-w-2xl h-14 sm:h-16 mb-2 pointer-events-none">
          {/* Tag 1: Left Top */}
          <div className="absolute left-2 sm:left-4 top-1 pointer-events-auto bg-[#12151C]/90 backdrop-blur-md border border-[#232936] hover:border-[#cef11c]/60 text-[#e3e2e8] px-3 py-1 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-lg transition-transform hover:-translate-y-0.5">
            <Zap className="w-3.5 h-3.5 text-[#cef11c] fill-[#cef11c]" />
            <span>Instant Access</span>
          </div>

          {/* Tag 2: Center Right */}
          <div className="absolute right-2 sm:right-6 top-0 pointer-events-auto bg-[#12151C]/90 backdrop-blur-md border border-[#cef11c]/40 text-[#e3e2e8] px-3 py-1 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-[#cef11c]" />
            <span>ID Verified</span>
          </div>

          {/* Tag 3: Mid Left */}
          <div className="absolute left-1/4 -bottom-1 pointer-events-auto bg-[#181C26]/90 backdrop-blur-md border border-[#232936] text-[#cef11c] px-3 py-1 rounded-full text-[11px] font-bold tracking-wide items-center gap-1.5 shadow-lg hidden sm:flex">
            <Flame className="w-3.5 h-3.5 text-[#FFA800]" />
            <span className="text-[#FFFFFF]">Live Drops</span>
          </div>

          {/* Tag 4: Mid Right Lower */}
          <div className="absolute right-1/4 bottom-1 pointer-events-auto bg-[#12151C]/90 backdrop-blur-md border border-[#232936] text-[#e3e2e8] px-3 py-1 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-lg">
            <Rocket className="w-3.5 h-3.5 text-[#cef11c]" />
            <span>Zero Fees</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12151C] border border-[#232936] text-[#cef11c] text-[11px] font-extrabold uppercase tracking-widest mb-4">
          <Zap className="w-3 h-3 fill-[#cef11c]" />
          <span>YOUR CAMPUS. ONE APP.</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#FFFFFF] max-w-4xl mb-4 leading-[1.08] text-balance">
          Deals, Market &amp; Events.{" "}
          <br className="hidden sm:inline" />
          <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e3e2e8] to-[#cef11c]">
            Built for Students.
          </span>
        </h1>

        {/* Concise Subtitle */}
        <p className="text-sm sm:text-base text-[#8E98A8] max-w-xl mx-auto mb-8 leading-relaxed">
          Claim student discounts, trade peer-to-peer with zero commission, and unlock campus events across Kampala.
        </p>

        {/* Dual Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center mb-10">
          <button
            onClick={onDownloadApk}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#cef11c] text-[#090A0E] text-[13px] font-black uppercase tracking-wider glow-lime hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cef11c]"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>DOWNLOAD APK ({UGABYTE_APP_META.fileSize})</span>
          </button>

          <a
            href={UGABYTE_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenWebApp}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-[13px] font-bold tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          >
            <Globe className="w-4 h-4 text-[#cef11c]" />
            <span>OPEN WEB APP</span>
          </a>
        </div>

        {/* High-Impact Icon Metric Stats Row */}
        <div className="w-full max-w-3xl pt-7 border-t border-[#232936] grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-[#cef11c] tracking-tight tabular-nums">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>98%</span>
            </div>
            <span className="text-[11px] font-bold text-[#8E98A8] mt-1 uppercase tracking-wider">
              Peer Trust
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-[#232936] px-2">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-[#FFFFFF] tracking-tight tabular-nums">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#cef11c] shrink-0" />
              <span>3+ Hubs</span>
            </div>
            <span className="text-[11px] font-bold text-[#8E98A8] mt-1 uppercase tracking-wider">
              MAK · MUBS · KYU
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-[#cef11c] tracking-tight tabular-nums">
              <Tag className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>UGX 0</span>
            </div>
            <span className="text-[11px] font-bold text-[#8E98A8] mt-1 uppercase tracking-wider">
              Listing Fee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
