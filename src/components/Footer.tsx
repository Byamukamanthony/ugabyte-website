import React from "react";
import {
  UGABYTE_HANDLE,
  UGABYTE_PLATFORMS,
  UGABYTE_WEB_APP_URL,
  UGABYTE_APP_LINKS,
} from "../config/ugabyte";
import { CATEGORY_PAGE_LIST, CategoryRouteSlug } from "../data/seoPages";
import { UgaByteLogo } from "./UgaByteLogo";
import { ExternalLink } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "cookie" | "refund") => void;
  onInstallApp: (e?: React.MouseEvent) => void;
  onOpenWebApp: (e?: React.MouseEvent) => void;
  onNavigateHome?: (e?: React.MouseEvent) => void;
  onNavigateCategory?: (slug: CategoryRouteSlug, e?: React.MouseEvent) => void;
}

const PlatformIcon: React.FC<{ id: string; className?: string }> = ({
  id,
  className = "w-4 h-4",
}) => {
  switch (id) {
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
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
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.28 6.28 0 0 0 1.86-4.47V8.71a8.18 8.18 0 0 0 4.91 1.62v-3.64z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
};

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onInstallApp,
  onOpenWebApp,
  onNavigateHome,
  onNavigateCategory,
}) => {
  return (
    <footer className="w-full bg-[#090A0E] border-t border-[#232936]/80 pt-12 sm:pt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 pb-8 sm:pb-10 border-b border-[#232936]/70">
          {/* Brand Column */}
          <div className="col-span-4 lg:col-span-4 space-y-3 pb-4 lg:pb-0">
            <a
              href="/"
              onClick={onNavigateHome}
              className="inline-block hover:brightness-110 transition-all"
            >
              <UgaByteLogo className="h-7 sm:h-8" />
            </a>
            <p className="text-xs sm:text-sm text-[#8E98A8] max-w-xs leading-relaxed">
              Campus deals, zero-fee trading, events, and gigs for students in Uganda.
            </p>
          </div>

          {/* Crawlable Uganda Category Guides */}
          <div className="col-span-1 lg:col-span-2 min-w-0 space-y-2.5">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#FFFFFF]">
              Guides
            </h5>
            <ul className="space-y-1.5 text-xs text-[#e3e2e8]">
              {CATEGORY_PAGE_LIST.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={cat.path}
                    onClick={(e) => onNavigateCategory?.(cat.slug, e)}
                    className="hover:text-[#cef11c] transition-colors block py-0.5 truncate focus:outline-none focus-visible:text-[#cef11c]"
                  >
                    {cat.navLabel} Guide
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Web App Modules Column */}
          <div className="col-span-1 lg:col-span-2 min-w-0 space-y-2.5">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#FFFFFF]">
              Web App
            </h5>
            <ul className="space-y-1.5 text-xs text-[#8E98A8]">
              <li>
                <a
                  href={UGABYTE_APP_LINKS.deals}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cef11c] transition-colors inline-flex items-center gap-1 py-0.5 max-w-full focus:outline-none group"
                >
                  <span className="truncate">Deals</span>
                  <ExternalLink className="hidden sm:block w-3 h-3 opacity-0 group-hover:opacity-75 transition-opacity shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={UGABYTE_APP_LINKS.marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cef11c] transition-colors inline-flex items-center gap-1 py-0.5 max-w-full focus:outline-none group"
                >
                  <span className="truncate">Market</span>
                  <ExternalLink className="hidden sm:block w-3 h-3 opacity-0 group-hover:opacity-75 transition-opacity shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={UGABYTE_APP_LINKS.events}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cef11c] transition-colors inline-flex items-center gap-1 py-0.5 max-w-full focus:outline-none group"
                >
                  <span className="truncate">Events</span>
                  <ExternalLink className="hidden sm:block w-3 h-3 opacity-0 group-hover:opacity-75 transition-opacity shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={UGABYTE_APP_LINKS.opportunities}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cef11c] transition-colors inline-flex items-center gap-1 py-0.5 max-w-full focus:outline-none group"
                >
                  <span className="truncate">Gigs</span>
                  <ExternalLink className="hidden sm:block w-3 h-3 opacity-0 group-hover:opacity-75 transition-opacity shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="col-span-1 lg:col-span-2 min-w-0 space-y-2.5">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#FFFFFF]">
              Get App
            </h5>
            <ul className="space-y-1.5 text-xs text-[#8E98A8]">
              <li>
                <a
                  href={UGABYTE_WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onOpenWebApp}
                  className="hover:text-[#cef11c] transition-colors block py-0.5 truncate focus:outline-none"
                >
                  Web App
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onInstallApp}
                  className="hover:text-[#cef11c] transition-colors block py-0.5 text-left truncate max-w-full focus:outline-none"
                >
                  Install App
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1 lg:col-span-2 min-w-0 space-y-2.5">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#FFFFFF]">
              Policies
            </h5>
            <ul className="space-y-1.5 text-xs text-[#8E98A8]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-[#cef11c] transition-colors block py-0.5 text-left truncate max-w-full focus:outline-none"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("terms")}
                  className="hover:text-[#cef11c] transition-colors block py-0.5 text-left truncate max-w-full focus:outline-none"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("cookie")}
                  className="hover:text-[#cef11c] transition-colors block py-0.5 text-left truncate max-w-full focus:outline-none"
                >
                  Cookies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("refund")}
                  className="hover:text-[#cef11c] transition-colors block py-0.5 text-left truncate max-w-full focus:outline-none"
                >
                  Refunds
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Social Media Platforms */}
        <div className="py-6 border-b border-[#232936]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#8E98A8] flex items-center gap-2">
            <span>Follow</span>
            <span className="text-[#e3e2e8] font-medium">{UGABYTE_HANDLE}</span>
          </div>

          <div className="flex items-center gap-2">
            {UGABYTE_PLATFORMS.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                title={platform.name}
                className="w-9 h-9 rounded-full bg-transparent hover:bg-[#12151C] border border-[#232936]/80 hover:border-[#cef11c]/60 text-[#8E98A8] hover:text-[#cef11c] flex items-center justify-center transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              >
                <PlatformIcon id={platform.id} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E98A8]/80 gap-2 text-center sm:text-left">
          <div>&copy; 2026 UgaByte</div>
          <div>MAK · MUBS · KYU · Kampala</div>
        </div>
      </div>
    </footer>
  );
};
