import React from "react";
import { UGABYTE_WEB_APP_URL } from "../config/ugabyte";
import { Download, Globe } from "lucide-react";

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
      className="py-16 sm:py-24 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]/80"
      id="download"
    >
      <div className="bg-[#12151C] border border-[#232936]/80 rounded-2xl p-7 sm:p-12 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto space-y-5">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
              Web &amp; Mobile
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
              Get UgaByte Anywhere
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#8E98A8] max-w-md mx-auto leading-relaxed">
            Open immediately in your browser or install the <span className="text-[#e3e2e8] font-medium">UgaByte Web App</span> straight to your home screen.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={UGABYTE_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWebApp}
              className="w-full sm:w-auto px-7 py-3.5 min-h-[46px] rounded-full bg-[#cef11c] text-[#090A0E] text-sm font-bold tracking-tight glow-lime hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] order-1"
            >
              <Globe className="w-4 h-4 stroke-[2.25]" />
              <span>Launch Web App</span>
            </a>

            <button
              type="button"
              onClick={onInstallApp}
              className="w-full sm:w-auto px-7 py-3.5 min-h-[46px] rounded-full bg-transparent border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-sm font-semibold tracking-tight hover:bg-[#181C26] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] order-2"
            >
              <Download className="w-4 h-4 text-[#cef11c]" />
              <span>Install App</span>
            </button>
          </div>

          {/* Quiet Platform Metadata */}
          <p className="pt-4 border-t border-[#232936]/70 text-xs text-[#8E98A8] font-medium">
            Web App <span aria-hidden="true">·</span> Android &amp; iOS
          </p>
        </div>
      </div>
    </section>
  );
};
