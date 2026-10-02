import React from "react";
import { Download, ExternalLink, Sparkles } from "lucide-react";
import { UGABYTE_APP_META } from "../config/ugabyte";

interface FinalCTAProps {
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onDownloadApk, onOpenWebApp }) => {
  return (
    <section className="py-24 border-t border-[#232936] relative overflow-hidden bg-gradient-to-b from-[#090A0E] via-[#12151C] to-[#090A0E]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#cef11c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181C26] border border-[#cef11c]/30 text-[#cef11c] text-[11px] font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR CAMPUS. ONE APP.</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] tracking-tight text-balance leading-tight">
          Your campus is already moving.
        </h2>

        <p className="text-base sm:text-lg text-[#8E98A8] max-w-xl mx-auto">
          Don't miss what's happening around you. Get the app, unlock live flash deals, and start trading with peers today.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onDownloadApk}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#cef11c] text-[#090A0E] text-[13px] font-black uppercase tracking-wider glow-lime hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>DOWNLOAD UGABYTE ({UGABYTE_APP_META.fileSize})</span>
          </button>

          <button
            onClick={onOpenWebApp}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#12151C] hover:bg-[#181C26] border border-[#232936] text-[#FFFFFF] text-[13px] font-bold tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          >
            <ExternalLink className="w-4 h-4 text-[#cef11c]" />
            <span>OPEN WEB APP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
