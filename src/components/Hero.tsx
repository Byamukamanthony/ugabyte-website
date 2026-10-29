import React, { useState } from "react";
import {
  BRAND_ASSETS,
  UGABYTE_APK_URL,
  UGABYTE_APP_META,
  UGABYTE_WEB_APP_URL,
  UGABYTE_APP_LINKS,
} from "../config/ugabyte";
import { HOMEPAGE_SEO } from "../data/seoPages";
import { shareUgaByteContent } from "../utils/share";
import {
  Download,
  Globe,
  ShieldCheck,
  MapPin,
  Tag,
  Flame,
  Store,
  Calendar,
  Briefcase,
  ExternalLink,
  Share2,
  Check,
} from "lucide-react";

interface HeroProps {
  onDownloadApk: (e?: React.MouseEvent) => void;
  onOpenWebApp: (e?: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadApk, onOpenWebApp }) => {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [sharedCopied, setSharedCopied] = useState(false);

  const handleShareUgaByte = async () => {
    const res = await shareUgaByteContent({
      title: HOMEPAGE_SEO.title,
      text: "Check out UgaByte — student deals, zero-fee campus marketplace, events & gigs across Uganda",
      url: HOMEPAGE_SEO.canonicalUrl,
    });
    if (res === "copied" || res === "shared") {
      setSharedCopied(true);
      setTimeout(() => setSharedCopied(false), 2500);
    }
  };

  return (
    <section className="relative min-h-[82vh] sm:min-h-[86vh] flex items-center justify-center overflow-hidden border-b border-[#232936] pt-18 sm:pt-22 pb-12 sm:pb-16">
      {/* Cinematic Portrait Backdrop with Organic Glow & Graceful Fallback */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {!heroImgFailed && (
          <img
            src={BRAND_ASSETS.heroPortrait}
            alt="Ugandan university student discovering campus deals and opportunities on UgaByte"
            width={1200}
            height={800}
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHeroImgFailed(true)}
            className="hero-portrait-img w-full h-full object-cover object-top opacity-40 sm:opacity-50 mix-blend-screen scale-105"
            loading="eager"
          />
        )}
        {/* Gradients layering dark onyx aesthetic with subtle lime tint */}
        <div className="hero-scrim absolute inset-0 bg-gradient-to-b from-[#090A0E]/40 via-[#090A0E]/85 to-[#090A0E]" />
        <div className="hero-radial-glow absolute -top-24 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[450px] bg-[#cef11c]/12 rounded-full blur-[100px] sm:blur-[140px]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
        {/* Smartphone-Optimized Display Headline (g and y descenders preserved completely) */}
        <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#FFFFFF] max-w-4xl mb-3 sm:mb-4 leading-[1.12] sm:leading-[1.08] text-balance">
          <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black tracking-tight hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e3e2e8] to-[#cef11c] mb-1 sm:mb-2 select-none transform -translate-y-1 sm:-translate-y-1.5 pb-1 sm:pb-1.5 leading-normal">
            UgaByte
          </span>
          Deals, Market &amp; Events.{" "}
          <br className="hidden sm:inline" />
          <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e3e2e8] to-[#cef11c]">
            For Students in Uganda.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-[#8E98A8] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          Verified campus deals, affordable food, zero-fee student trading, events, and gigs across Uganda.
        </p>

        {/* Dual Primary & Secondary Action CTAs (Web App Primary, Touch-first on smartphones) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none justify-center mb-5 sm:mb-6 px-2 sm:px-0">
          <a
            href={UGABYTE_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenWebApp}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs sm:text-[13px] font-black uppercase tracking-wider glow-lime hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cef11c] shadow-lg"
          >
            <Globe className="w-4 h-4 stroke-[2.5]" />
            <span>OPEN WEB APP</span>
          </a>

          <a
            href={UGABYTE_APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDownloadApk}
            title={`Download ${UGABYTE_APP_META.fileName} (${UGABYTE_APP_META.version} · ${UGABYTE_APP_META.fileSize})`}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-3.5 min-h-[48px] rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-xs sm:text-[13px] font-bold tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          >
            <Download className="w-4 h-4 text-[#cef11c]" />
            <span>DOWNLOAD APK ({UGABYTE_APP_META.fileSize})</span>
          </a>
        </div>

        {/* Direct Web App Hub Quick-Access Chips + One-Tap Share */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10 w-full max-w-3xl px-2">
          <a
            href={UGABYTE_APP_LINKS.deals}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-xs text-[#e3e2e8] hover:text-[#cef11c] font-semibold transition-all active:scale-95"
            title="Open Deals in Web App"
          >
            <Flame className="w-3.5 h-3.5 text-[#cef11c]" />
            <span>Deals</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={UGABYTE_APP_LINKS.marketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-xs text-[#e3e2e8] hover:text-[#cef11c] font-semibold transition-all active:scale-95"
            title="View Marketplace in Web App"
          >
            <Store className="w-3.5 h-3.5 text-[#cef11c]" />
            <span>Market</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={UGABYTE_APP_LINKS.events}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-xs text-[#e3e2e8] hover:text-[#cef11c] font-semibold transition-all active:scale-95"
            title="Live Campus Events in Web App"
          >
            <Calendar className="w-3.5 h-3.5 text-[#cef11c]" />
            <span>Events</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={UGABYTE_APP_LINKS.opportunities}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-xs text-[#e3e2e8] hover:text-[#cef11c] font-semibold transition-all active:scale-95"
            title="Campus Opportunities in Web App"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#cef11c]" />
            <span>Gigs</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <button
            type="button"
            onClick={handleShareUgaByte}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-xs text-[#e3e2e8] hover:text-[#cef11c] font-semibold transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            title="Share UgaByte"
          >
            {sharedCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                <span className="text-[#cef11c]">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#cef11c]" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>

        {/* High-Impact Metric Stats Row (Proportionate on mobile) */}
        <div className="w-full max-w-3xl pt-5 sm:pt-7 border-t border-[#232936] grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-lg xs:text-xl sm:text-3xl font-black text-[#cef11c] tracking-tight tabular-nums">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
              <span>98%</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#8E98A8] mt-0.5 sm:mt-1 uppercase tracking-wider">
              Peer Trust
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-[#232936] px-1 sm:px-2">
            <div className="flex items-center gap-1 text-lg xs:text-xl sm:text-3xl font-black text-[#FFFFFF] tracking-tight tabular-nums">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#cef11c] shrink-0" />
              <span>3+ Hubs</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#8E98A8] mt-0.5 sm:mt-1 uppercase tracking-wider truncate max-w-full">
              MAK · MUBS · KYU
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-lg xs:text-xl sm:text-3xl font-black text-[#cef11c] tracking-tight tabular-nums">
              <Tag className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
              <span>UGX 0</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#8E98A8] mt-0.5 sm:mt-1 uppercase tracking-wider">
              Listing Fee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
