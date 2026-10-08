import React from "react";
import {
  UGABYTE_HANDLE,
  UGABYTE_PLATFORMS,
  UGABYTE_WEB_APP_URL,
} from "../config/ugabyte";
import { UgaByteLogo } from "./UgaByteLogo";
import {
  ExternalLink,
  Download,
  AtSign,
  Globe,
  HelpCircle,
  Shield,
  FileText,
  Cookie,
  RotateCcw,
} from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "cookie" | "refund") => void;
  onOpenInstallGuide: () => void;
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
}

// Crisp, dedicated SVG icons for the 4 official platforms
const PlatformIcon: React.FC<{ id: string; className?: string }> = ({
  id,
  className = "w-4 h-4",
}) => {
  switch (id) {
    case "twitter":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.28 6.28 0 0 0 1.86-4.47V8.71a8.18 8.18 0 0 0 4.91 1.62v-3.64z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
};

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onOpenInstallGuide,
  onDownloadApk,
  onOpenWebApp,
}) => {
  return (
    <footer className="w-full bg-[#090A0E] border-t border-[#232936] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#232936]/80">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="inline-block hover:brightness-110 transition-all">
              <UgaByteLogo className="h-8" />
            </a>
            <p className="text-xs sm:text-sm text-[#8E98A8] max-w-sm leading-relaxed">
              Your campus. One app. Verified deals, zero-fee student marketplace, and events across Kampala.
            </p>
            <div className="pt-1 text-xs text-[#8E98A8]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12151C] border border-[#232936]">
                <AtSign className="w-3.5 h-3.5 text-[#cef11c]" />
                <span className="text-[#FFFFFF] font-mono font-semibold">
                  {UGABYTE_HANDLE}
                </span>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-[11px] font-black uppercase tracking-wider text-[#FFFFFF]">
              Get the App
            </h5>
            <ul className="space-y-2 text-xs text-[#8E98A8]">
              <li>
                <button
                  onClick={onDownloadApk}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <Download className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>Android APK</span>
                </button>
              </li>
              <li>
                <a
                  href={UGABYTE_WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onOpenWebApp}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <Globe className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>Web App (PWA)</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenInstallGuide}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>Install Guide</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-black uppercase tracking-wider text-[#FFFFFF]">
              Legal
            </h5>
            <ul className="space-y-2 text-xs text-[#8E98A8]">
              <li>
                <button
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <Shield className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>Privacy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("terms")}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <FileText className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>Terms</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("cookie")}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <Cookie className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>Cookies</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("refund")}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>Refunds</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Platforms with Custom Icons (@ugabyteinc) */}
        <div className="py-7 border-b border-[#232936]/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {UGABYTE_PLATFORMS.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#12151C] hover:bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#181C26] group-hover:bg-[#cef11c]/10 text-[#8E98A8] group-hover:text-[#cef11c] border border-[#232936] group-hover:border-[#cef11c]/30 flex items-center justify-center shrink-0 transition-colors">
                    <PlatformIcon id={platform.id} className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#FFFFFF] group-hover:text-[#cef11c] transition-colors truncate">
                      {platform.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#8E98A8] truncate">
                      {platform.handle}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E98A8] group-hover:text-[#cef11c] transition-colors shrink-0 ml-2 opacity-60 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E98A8]/80 gap-2 text-center sm:text-left">
          <div>&copy; 2026 UgaByte Technologies. All rights reserved.</div>
          <div>Makerere · MUBS · Kyambogo</div>
        </div>
      </div>
    </footer>
  );
};
