import React, { useState, useEffect } from "react";
import { UGABYTE_APK_URL, UGABYTE_WEB_APP_URL, UGABYTE_APP_META } from "../config/ugabyte";
import { CATEGORY_PAGE_LIST, CategoryRouteSlug } from "../data/seoPages";
import { UgaByteLogo } from "./UgaByteLogo";
import {
  Download,
  Globe,
  Menu,
  X,
  Sun,
  Moon,
  Flame,
  Store,
  HelpCircle,
  Sparkles,
  Info,
  ChevronRight,
} from "lucide-react";

interface NavbarProps {
  onDownloadApk: (e?: React.MouseEvent) => void;
  onOpenWebApp: (e?: React.MouseEvent) => void;
  onNavigateHome?: (e?: React.MouseEvent) => void;
  onNavigateCategory?: (slug: CategoryRouteSlug, e?: React.MouseEvent) => void;
  activeRoute?: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDownloadApk,
  onOpenWebApp,
  onNavigateHome,
  onNavigateCategory,
  activeRoute = "/",
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

  const isHome = activeRoute === "/";

  const navLinks = [
    { label: "Pillars", href: isHome ? "#features" : "/#features", icon: Flame },
    { label: "How It Works", href: isHome ? "#how-it-works" : "/#how-it-works", icon: Sparkles },
    { label: "About", href: isHome ? "#about" : "/#about", icon: Info },
    { label: "Sell", href: isHome ? "#sellers" : "/#sellers", icon: Store },
    { label: "Download", href: isHome ? "#download" : "/#download", icon: Download },
    { label: "FAQ", href: isHome ? "#faq" : "/#faq", icon: HelpCircle },
  ];

  const handleSectionClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome && href.startsWith("/#") && onNavigateHome) {
      e.preventDefault();
      const targetId = href.slice(2);
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

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
          {/* Zone 1: Official UgaByte Favicon + Brand Mark */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                onNavigateHome(e);
              }
            }}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] rounded min-h-[44px]"
            aria-label="UgaByte Home"
          >
            <UgaByteLogo
              showWordmark={true}
              wordmarkClassName="text-base sm:text-lg font-black tracking-tight"
              className="h-8 sm:h-9 hover:brightness-110 transition-all"
            />
          </a>

          {/* Zone 2: Icon + Label Navigation (Desktop) */}
          <nav
            className="hidden lg:flex items-center gap-5 text-[11px] font-bold tracking-wider uppercase text-[#8E98A8]"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionClick(link.href, e)}
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
              type="button"
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

            {/* Desktop secondary APK link */}
            <a
              href={UGABYTE_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDownloadApk}
              title={`Download ${UGABYTE_APP_META.fileName} (${UGABYTE_APP_META.version} · ${UGABYTE_APP_META.fileSize})`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-full border border-[#232936] hover:border-[#323B4E] bg-[#12151C] hover:bg-[#181C26] text-[#8E98A8] hover:text-[#FFFFFF] text-[11px] font-bold tracking-wide transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Download className="w-3.5 h-3.5 text-[#cef11c]" />
              <span>APK ({UGABYTE_APP_META.fileSize})</span>
            </a>

            {/* Primary Action in Top Right: Open Web App */}
            <a
              href={UGABYTE_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWebApp}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 min-h-[36px] sm:min-h-[38px] rounded-full bg-[#cef11c] text-[#090A0E] text-[11px] sm:text-[12px] font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              title="Open UgaByte Web App"
            >
              <Globe className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden xs:inline">Open Web App</span>
              <span className="xs:hidden">Web App</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-lg text-[#8E98A8] hover:text-[#cef11c] hover:bg-[#12151C] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
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
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        aria-label="Mobile Navigation"
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[84vw] bg-[#12151C] border-l border-[#232936] shadow-2xl p-5 sm:p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#232936]">
            <a
              href="/"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onNavigateHome) onNavigateHome(e);
              }}
            >
              <UgaByteLogo className="h-7" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center text-[#8E98A8] hover:text-[#FFFFFF] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-0.5 mt-4" aria-label="Homepage Sections">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleSectionClick(link.href, e);
                  }}
                  className="px-3 py-2.5 min-h-[42px] rounded-xl text-[#e3e2e8] hover:bg-[#181C26] hover:text-[#cef11c] text-sm font-semibold transition-colors flex items-center gap-2.5 active:bg-[#181C26]"
                >
                  <Icon className="w-4 h-4 text-[#cef11c]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Crawlable Category Landing Pages */}
          <div className="mt-4 pt-4 border-t border-[#232936]">
            <div className="px-3 mb-1.5 text-[10px] font-black uppercase tracking-wider text-[#8E98A8]">
              Explore Uganda Hubs
            </div>
            <div className="flex flex-col gap-0.5">
              {CATEGORY_PAGE_LIST.map((cat) => (
                <a
                  key={cat.slug}
                  href={cat.path}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onNavigateCategory) onNavigateCategory(cat.slug, e);
                  }}
                  className="px-3 py-2 min-h-[40px] rounded-xl text-[#e3e2e8] hover:bg-[#181C26] hover:text-[#cef11c] text-xs font-semibold transition-colors flex items-center justify-between"
                >
                  <span>{cat.navLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#cef11c]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 mt-4 border-t border-[#232936] space-y-2.5 pb-safe">
          <a
            href={UGABYTE_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWebApp();
            }}
            className="w-full py-3 min-h-[46px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <Globe className="w-4 h-4 stroke-[2.5]" />
            <span>Open Web App</span>
          </a>

          <a
            href={UGABYTE_APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              onDownloadApk(e);
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 min-h-[46px] rounded-full bg-[#181C26] border border-[#232936] text-[#e3e2e8] text-xs font-bold tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-[#cef11c]" />
            <span>Download APK ({UGABYTE_APP_META.fileSize})</span>
          </a>
        </div>
      </aside>
    </>
  );
};
