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
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="download">
      <div className="bg-gradient-to-b from-[#12151C] to-[#181C26] border border-[#232936] rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#cef11c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto space-y-5">
          {/* Streamlined Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 text-[#cef11c] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Android APK · {UGABYTE_APP_META.fileSize} · {UGABYTE_APP_META.version}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] tracking-tight">
            Download the UgaByte App
          </h2>

          <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
            Fast, secure, and built specifically for Ugandan campus data speeds. Direct APK install with zero bloatware.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onDownloadApk}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#cef11c] text-[#090A0E] text-[13px] font-black uppercase tracking-wider glow-lime hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download APK ({UGABYTE_APP_META.fileSize})</span>
            </button>

            <a
              href={UGABYTE_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWebApp}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#12151C] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-[13px] font-bold tracking-wider hover:bg-[#181C26] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Globe className="w-4 h-4 text-[#cef11c]" />
              <span>Open Web App</span>
            </a>
          </div>

          {/* Lean, Organized Verification Footer */}
          <div className="pt-6 border-t border-[#232936]/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-[#8E98A8]">
            <div className="inline-flex items-center gap-1.5 bg-[#090A0E]/70 px-3 py-1 rounded-full border border-[#232936]">
              <span className="text-[#8E98A8]">SHA-256:</span>
              <code className="text-[#e3e2e8] font-mono text-[11px]">
                {UGABYTE_APP_META.sha256.slice(0, 8)}...{UGABYTE_APP_META.sha256.slice(-6)}
              </code>
              <button
                onClick={handleCopyHash}
                className="p-0.5 rounded text-[#8E98A8] hover:text-[#cef11c] transition-colors focus:outline-none"
                title="Copy Full SHA-256 Checksum"
                aria-label="Copy SHA-256 checksum"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#cef11c]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <button
              onClick={onOpenInstallGuide}
              className="text-[#cef11c] hover:underline font-bold flex items-center gap-1.5 focus:outline-none transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Installation Guide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
