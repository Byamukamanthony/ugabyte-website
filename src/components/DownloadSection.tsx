import React, { useState, useEffect } from "react";
import { UGABYTE_APP_META } from "../config/ugabyte";
import { Download, Globe, Copy, Check, HelpCircle, Smartphone, ShieldCheck } from "lucide-react";

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
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.userAgent) {
      setIsAndroid(/android/i.test(navigator.userAgent));
    }
  }, []);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(UGABYTE_APP_META.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="download">
      <div className="bg-gradient-to-b from-[#12151C] to-[#181C26] border border-[#232936] rounded-2xl p-6 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#cef11c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cef11c]/10 border border-[#cef11c]/30 text-[#cef11c] text-[11px] font-black uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            <span>OFFICIAL ANDROID RELEASE · {UGABYTE_APP_META.version}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tight">
            Download the UgaByte Android Client
          </h2>

          <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed max-w-2xl mx-auto">
            Direct high-speed download hosted on local African Edge CDN. No Google Play account required. Verified safe, signature-checked, and lightweight.
          </p>

          {isAndroid && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C26] border border-[#cef11c]/40 text-xs text-[#cef11c] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#cef11c]" />
              <span>Android device detected · Ready for direct package install</span>
            </div>
          )}

          {/* Download Action Module */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onDownloadApk}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#cef11c] text-[#090A0E] text-[13px] font-black uppercase tracking-wider glow-lime hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>DOWNLOAD UGABYTE APK ({UGABYTE_APP_META.fileSize})</span>
            </button>

            <button
              onClick={onOpenWebApp}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#12151C] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-[13px] font-bold tracking-wider hover:bg-[#181C26] transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Globe className="w-4 h-4 text-[#cef11c]" />
              <span>CONTINUE IN BROWSER (PWA)</span>
            </button>
          </div>

          {/* Hash & Verification Details */}
          <div className="pt-6 border-t border-[#232936]/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#8E98A8]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#cef11c] font-bold">SHA-256:</span>
              <code className="bg-[#090A0E] px-2 py-0.5 rounded font-mono text-[11px] text-[#e3e2e8]">
                7f9a2c4e...9690d
              </code>
              <button
                onClick={handleCopyHash}
                className="p-1 rounded text-[#8E98A8] hover:text-[#cef11c] focus:outline-none"
                title="Copy Full SHA-256 Hash"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#cef11c]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <span>Target SDK: {UGABYTE_APP_META.targetSdk}</span>
            <span>Min SDK: {UGABYTE_APP_META.minSdk}</span>

            <button
              onClick={onOpenInstallGuide}
              className="text-[#cef11c] hover:underline font-bold flex items-center gap-1 focus:outline-none"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>How to Install APK</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
