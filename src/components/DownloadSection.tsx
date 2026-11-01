import React from "react";
import { UGABYTE_WEB_APP_URL } from "../config/ugabyte";
import { Download, Globe, ShieldCheck, Smartphone } from "lucide-react";

interface DownloadSectionProps {
  onInstallApp: (e?: React.MouseEvent) => void;
  onOpenWebApp: (e?: React.MouseEvent) => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onInstallApp,
  onOpenWebApp,
}) => {
  return (
    <section
      className="py-12 sm:py-16 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]"
      id="download"
    >
      <div className="bg-gradient-to-b from-[#12151C] to-[#181C26] border border-[#232936] rounded-2xl p-5 sm:p-10 relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-24 -left-24 w-60 sm:w-72 h-60 sm:h-72 bg-[#cef11c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-xl mx-auto space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 text-[#cef11c] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            <span>One-Tap Phone Install</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] tracking-tight text-balance">
            Get UgaByte Anywhere
          </h2>

          <p className="text-xs sm:text-sm text-[#8E98A8] max-w-md mx-auto leading-relaxed">
            Launch instantly in any browser or tap <span className="text-[#e3e2e8] font-semibold">Install App</span> to add <span className="text-[#e3e2e8] font-mono">ugabyte.vercel.app</span> straight to your phone.
          </p>

          {/* Action Buttons (Web App Primary, Install App Secondary) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={UGABYTE_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWebApp}
              className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs sm:text-[13px] font-black uppercase tracking-wider glow-lime hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] order-1"
            >
              <Globe className="w-4 h-4 stroke-[2.5]" />
              <span>LAUNCH WEB APP</span>
            </a>

            <button
              type="button"
              onClick={onInstallApp}
              className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] rounded-full bg-[#12151C] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-xs sm:text-[13px] font-bold tracking-wider hover:bg-[#181C26] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] order-2"
            >
              <Download className="w-4 h-4 text-[#cef11c]" />
              <span>INSTALL APP</span>
            </button>
          </div>

          {/* Official App Destination */}
          <div className="pt-4 sm:pt-5 border-t border-[#232936]/80 flex flex-wrap items-center justify-center gap-3 text-xs text-[#8E98A8]">
            <div className="inline-flex items-center gap-2 bg-[#090A0E]/70 px-3 py-1.5 rounded-full border border-[#232936] max-w-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
              <span className="text-[#e3e2e8] font-mono text-[11px] truncate">
                ugabyte.vercel.app · Android &amp; iOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
