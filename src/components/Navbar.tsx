import React, { useState, useEffect } from "react";
import { UGABYTE_WEB_APP_URL, UGABYTE_APP_META } from "../config/ugabyte";
import { UgaByteLogo } from "./UgaByteLogo";
import {
  Download,
  Globe,
  Menu,
  X,
  Zap,
  Sun,
  Moon,
  Flame,
  Store,
  HelpCircle,
} from "lucide-react";

interface NavbarProps {
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDownloadApk,
  onOpenWebApp,
  theme,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Pillars", href: "#features", icon: Flame },
    { label: "Sell", href: "#sellers", icon: Store },
    { label: "Download", href: "#download", icon: Download },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#090A0E]/95 backdrop-blur-md border-b border-[#232936] shadow-lg"
            : "bg-[#090A0E]/80 backdrop-blur-sm border-b border-[#232936]/60"
        } h-14 sm:h-16`}
      >
        <div className="max-w-7xl mx-auto h-full px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Official Favicon Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] rounded min-h-[44px]"
            aria-label="UgaByte Inc. Home"
          >
            <UgaByteLogo showWordmark={false} className="h-8 sm:h-9 md:h-10 hover:brightness-110 transition-all" />
          </a>

          {/* Zone 2: Icon + Label Navigation (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-6 text-[12px] font-bold tracking-wider uppercase text-[#8E98A8]"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 hover:text-[#cef11c] transition-colors focus:outline-none focus-visible:text-[#cef11c]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#cef11c]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Theme Switcher & Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#232936] hover:border-[#323B4E] bg-[#12151C] hover:bg-[#181C26] text-[#e3e2e8] transition-all active:scale-95 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#cef11c]" />
              ) : (
                <Moon className="w-4 h-4 text-[#0F172A]" />
              )}
            </button>

            <a
              href={UGABYTE_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWebApp}
              title="Open Web App"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#232936] hover:border-[#323B4E] bg-[#12151C] hover:bg-[#181C26] text-[#e3e2e8] text-[12px] font-bold tracking-wide transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Globe className="w-3.5 h-3.5 text-[#cef11c]" />
              <span>Web App</span>
            </a>

            <button
              onClick={onDownloadApk}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 min-h-[36px] sm:min-h-[38px] rounded-full bg-[#cef11c] text-[#090A0E] text-[11px] sm:text-[12px] font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#090A0E]" />
              <span>Get APK</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-lg text-[#8E98A8] hover:text-[#cef11c] hover:bg-[#12151C] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        aria-label="Mobile Navigation"
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[82vw] bg-[#12151C] border-l border-[#232936] shadow-2xl p-5 sm:p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#232936]">
            <UgaByteLogo className="h-7" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center text-[#8E98A8] hover:text-[#FFFFFF] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 mt-5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 min-h-[44px] rounded-xl text-[#e3e2e8] hover:bg-[#181C26] hover:text-[#cef11c] text-sm font-semibold transition-colors flex items-center gap-2.5 active:bg-[#181C26]"
                >
                  <Icon className="w-4 h-4 text-[#cef11c]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-5 border-t border-[#232936] space-y-2.5 pb-safe">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onDownloadApk();
            }}
            className="w-full py-3 min-h-[46px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>APK ({UGABYTE_APP_META.fileSize})</span>
          </button>

          <a
            href={UGABYTE_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWebApp();
            }}
            className="w-full py-3 min-h-[46px] rounded-full bg-[#181C26] border border-[#232936] text-[#e3e2e8] text-xs font-bold tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Globe className="w-4 h-4 text-[#cef11c]" />
            <span>Web App</span>
          </a>
        </div>
      </aside>
    </>
  );
};
