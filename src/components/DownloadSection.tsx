import React, { useState } from "react";
import { UGABYTE_APP_META, UGABYTE_WEB_APP_URL } from "../config/ugabyte";
import { Download, Globe, Copy, Check, HelpCircle, ShieldCheck } from "lucide-react";

interface DownloadSectionProps {
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
  onOpenInstallGuide: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onDownloadApk,
  onOpenWebApp,
  onOpenInstallGuide,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(UGABYTE_APP_META.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]"
      id="download"
    >
      <div className="bg-gradient-to-b from-[#12151C] to-[#181C26] border border-[#232936] rounded-2xl p-5 sm:p-10 relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-24 -left-24 w-60 sm:w-72 h-60 sm:h-72 bg-[#cef11c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-xl mx-auto space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 text-[#cef11c] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {UGABYTE_APP_META.version} · {UGABYTE_APP_META.fileSize}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] tracking-tight text-balance">
            Get UgaByte on Any Device
          </h2>

          <p className="text-xs sm:text-sm text-[#8E98A8] max-w-md mx-auto leading-relaxed">
            Install the native Android APK for instant campus alerts, or run the web app in any browser.
          </p>

          {/* Action Buttons (Touch-first stacked on smartphone) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              onClick={onDownloadApk}
              className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs sm:text-[13px] font-black uppercase tracking-wider glow-lime hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>DOWNLOAD APK ({UGABYTE_APP_META.fileSize})</span>
            </button>

            <a
              href={UGABYTE_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWebApp}
              className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] rounded-full bg-[#12151C] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-xs sm:text-[13px] font-bold tracking-wider hover:bg-[#181C26] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Globe className="w-4 h-4 text-[#cef11c]" />
              <span>LAUNCH WEB APP</span>
            </a>
          </div>

          {/* Verification Controls (Proportionate on mobile) */}
          <div className="pt-4 sm:pt-5 border-t border-[#232936]/80 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#8E98A8]">
            <div className="inline-flex items-center gap-2 bg-[#090A0E]/70 px-3 py-1.5 rounded-full border border-[#232936] max-w-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
              <code className="text-[#e3e2e8] font-mono text-[11px] truncate">
                SHA-256: {UGABYTE_APP_META.sha256.slice(0, 8)}...{UGABYTE_APP_META.sha256.slice(-4)}
              </code>
              <button
                onClick={handleCopyHash}
                className="p-1 rounded text-[#8E98A8] hover:text-[#cef11c] transition-colors focus:outline-none min-w-[32px] min-h-[32px] flex items-center justify-center"
                title="Copy SHA-256 Checksum"
                aria-label="Copy SHA-256 checksum"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <button
              onClick={onOpenInstallGuide}
              className="text-[#cef11c] hover:underline font-bold flex items-center gap-1.5 min-h-[36px] px-2 focus:outline-none transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Install Guide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
