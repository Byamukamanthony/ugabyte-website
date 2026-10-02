import React from "react";
import { Laptop, ExternalLink, WifiOff, RefreshCw, Zap } from "lucide-react";

interface WebAppSectionProps {
  onOpenWebApp: () => void;
}

export const WebAppSection: React.FC<WebAppSectionProps> = ({ onOpenWebApp }) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="webapp">
      <div className="bg-[#12151C] border border-[#232936] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C26] border border-[#232936] text-[#cef11c] text-xs font-bold uppercase tracking-wider">
            <Laptop className="w-3.5 h-3.5" />
            <span>Browser &amp; Desktop Ready</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
            Prefer the web?
          </h2>

          <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
            Open UgaByte directly in your browser. Using an iPhone, Mac, or library desktop in the computer lab? The UgaByte Web App runs smoothly without installing anything.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-[#8E98A8]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#cef11c]" />
              <span>Instant PWA Launch</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-[#cef11c]" />
              <span>Real-time Sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <WifiOff className="w-4 h-4 text-[#cef11c]" />
              <span>Low-Data Mode</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <button
            onClick={onOpenWebApp}
            className="w-full md:w-auto px-8 py-3.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>OPEN WEB APP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
