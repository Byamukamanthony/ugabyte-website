import React, { useState, useRef } from "react";
import { UGABYTE_WEB_APP_URL } from "../config/ugabyte";
import { HOMEPAGE_SEO } from "../data/seoPages";
import { shareUgaByteContent } from "../utils/share";
import {
  Download,
  Globe,
  Share2,
  Check,
} from "lucide-react";

interface HeroProps {
  onInstallApp: (e?: React.MouseEvent) => void;
  onOpenWebApp: (e?: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onInstallApp,
  onOpenWebApp,
}) => {
  const [sharedCopied, setSharedCopied] = useState(false);
  const [pointerActive, setPointerActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x.toFixed(2)}%`);
    el.style.setProperty("--my", `${y.toFixed(2)}%`);
    if (!pointerActive) setPointerActive(true);
  };

  const handlePointerLeave = () => {
    setPointerActive(false);
  };

  const handleShareUgaByte = async () => {
    const res = await shareUgaByteContent({
      title: HOMEPAGE_SEO.title,
      text: "Check out UgaByte — student deals, zero-fee campus marketplace, events & gigs across Uganda",
      url: UGABYTE_WEB_APP_URL,
    });
    if (res === "copied" || res === "shared") {
      setSharedCopied(true);
      setTimeout(() => setSharedCopied(false), 2500);
    }
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-[72vh] sm:min-h-[76vh] flex items-center justify-center overflow-hidden bg-[#090A0E] border-b border-[#232936]/80 pt-28 md:pt-28 pb-16 sm:pb-24"
    >
      {/* Subtle Interactive Architectural Grid & Cursor Spotlight on Solid Canvas */}
      <div
        aria-hidden="true"
        className="hero-grid-pattern absolute inset-0 pointer-events-none select-none"
      />
      <div
        aria-hidden="true"
        className={`hero-cursor-glow absolute inset-0 pointer-events-none select-none transition-opacity duration-300 ${
          pointerActive ? "opacity-100" : "opacity-60"
        }`}
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
        {/* Display Headline */}
        <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF] max-w-3xl mb-4 sm:mb-5 leading-[1.1] sm:leading-[1.06] text-balance">
          <span className="block text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e3e2e8] to-[#cef11c] mb-1.5 sm:mb-2 select-none pb-1 sm:pb-2">
            UgaByte
          </span>
          Deals, Market &amp; Events.{" "}
          <br className="hidden sm:inline" />
          <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e3e2e8] to-[#cef11c]">
            For Students in Uganda.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#8E98A8] max-w-lg mx-auto mb-7 sm:mb-9 leading-relaxed px-2">
          Verified campus deals, affordable food, zero-fee student trading, events, and gigs across Uganda.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none justify-center mb-5 px-2 sm:px-0">
          <a
            href={UGABYTE_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenWebApp}
            className="w-full sm:w-auto px-7 py-3.5 min-h-[46px] rounded-full bg-[#cef11c] text-[#090A0E] text-sm font-bold tracking-tight glow-lime hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cef11c]"
          >
            <Globe className="w-4 h-4 stroke-[2.25]" />
            <span>Open Web App</span>
          </a>

          <button
            type="button"
            onClick={onInstallApp}
            title="Install UgaByte App to your phone via Google Chrome"
            className="w-full sm:w-auto px-7 py-3.5 min-h-[46px] rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-sm font-semibold tracking-tight active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          >
            <Download className="w-4 h-4 text-[#cef11c]" />
            <span>Install App</span>
          </button>
        </div>

        {/* Quiet Share Action */}
        <div className="mb-10 sm:mb-12">
          <button
            type="button"
            onClick={handleShareUgaByte}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#8E98A8] hover:text-[#cef11c] font-medium transition-colors active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] rounded"
            title="Share UgaByte"
          >
            {sharedCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                <span className="text-[#cef11c]">Link copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share UgaByte</span>
              </>
            )}
          </button>
        </div>

        {/* Clean Architectural Metric Row */}
        <div className="w-full max-w-2xl pt-6 sm:pt-8 border-t border-[#232936]/70 grid grid-cols-3 gap-2 sm:gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-3xl font-extrabold text-[#cef11c] tracking-tight tabular-nums">
              98%
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-[#8E98A8] mt-1">
              Peer Trust
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-[#232936]/70 px-2">
            <span className="text-xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight tabular-nums">
              3+ Hubs
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-[#8E98A8] mt-1 truncate max-w-full">
              MAK · MUBS · KYU
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-3xl font-extrabold text-[#cef11c] tracking-tight tabular-nums">
              UGX 0
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-[#8E98A8] mt-1">
              Listing Fee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
