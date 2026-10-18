import React, { useState, useEffect } from "react";
import { Download, Globe, Flame, Store } from "lucide-react";
import { UGABYTE_APP_META, UGABYTE_WEB_APP_URL } from "../config/ugabyte";

interface MobileThumbBarProps {
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
}

export const MobileThumbBar: React.FC<MobileThumbBarProps> = ({
  onDownloadApk,
  onOpenWebApp,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user scrolls slightly past the initial hero CTA
      setVisible(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-3 inset-x-3 z-30 sm:hidden pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
      role="region"
      aria-label="Mobile quick actions"
    >
      <div className="bg-[#12151C]/95 backdrop-blur-md border border-[#232936] rounded-full p-1.5 shadow-2xl flex items-center justify-between gap-1.5 pointer-events-auto">
        {/* Quick jump to Pillars */}
        <a
          href="#features"
          className="flex-1 min-h-[42px] py-1 px-2 rounded-full bg-[#181C26] hover:bg-[#232936] text-[#e3e2e8] text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all text-center truncate"
        >
          <Flame className="w-3.5 h-3.5 text-[#FFA800] shrink-0" />
          <span className="truncate">Pillars</span>
        </a>

        {/* Secondary APK CTA */}
        <button
          onClick={onDownloadApk}
          className="flex-1 min-h-[42px] py-1 px-2 rounded-full bg-[#181C26] hover:bg-[#232936] text-[#e3e2e8] text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all text-center truncate"
        >
          <Download className="w-3.5 h-3.5 text-[#cef11c] shrink-0" />
          <span className="truncate">APK</span>
        </button>

        {/* Primary Open Web App CTA */}
        <a
          href={UGABYTE_WEB_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onOpenWebApp}
          className="flex-[1.4] min-h-[42px] py-1 px-3 rounded-full bg-[#cef11c] text-[#090A0E] text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md shrink-0"
        >
          <Globe className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Open Web App</span>
        </a>
      </div>
    </div>
  );
};
