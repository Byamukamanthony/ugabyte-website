import React, { useState, useEffect } from "react";
import { UGABYTE_APK_URL, UGABYTE_WEB_APP_URL } from "../config/ugabyte";
import { UgaByteLogo } from "./UgaByteLogo";
import { Download, ExternalLink, Menu, X, Zap } from "lucide-react";

interface NavbarProps {
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadApk, onOpenWebApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Students", href: "#students" },
    { label: "For Businesses", href: "#sellers" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#090A0E]/95 backdrop-blur-md border-b border-[#232936] shadow-lg shadow-black/40"
            : "bg-[#090A0E]/80 backdrop-blur-sm border-b border-[#232936]/60"
        } h-16`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c] rounded"
            aria-label="UgaByte Home"
          >
            <UgaByteLogo className="h-8 md:h-9 hover:brightness-110 transition-all" />
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-[12px] font-bold tracking-wider uppercase text-[#8E98A8]"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#cef11c] transition-colors focus:outline-none focus-visible:text-[#cef11c]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Trailing Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenWebApp}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#232936] hover:border-[#323B4E] bg-[#12151C] hover:bg-[#181C26] text-[#e3e2e8] text-[12px] font-bold tracking-wide transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#cef11c]" />
              <span>Open Web App</span>
            </button>

            <button
              onClick={onDownloadApk}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cef11c] text-[#090A0E] text-[12px] font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            >
              <Zap className="w-3.5 h-3.5 fill-[#090A0E]" />
              <span>Download APK</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-[#8E98A8] hover:text-[#cef11c] hover:bg-[#12151C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        aria-label="Mobile Navigation"
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-[#12151C] border-l border-[#232936] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#232936]">
            <UgaByteLogo className="h-7" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#8E98A8] hover:text-[#FFFFFF] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-[#e3e2e8] hover:bg-[#181C26] hover:text-[#cef11c] text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#232936] space-y-3">
          <div className="text-xs text-[#8E98A8]">
            Active at Makerere, MUBS &amp; Kyambogo.
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onDownloadApk();
            }}
            className="w-full py-3 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download APK (13.8MB)</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWebApp();
            }}
            className="w-full py-2.5 rounded-full bg-[#181C26] border border-[#232936] text-[#e3e2e8] text-xs font-bold tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#cef11c]" />
            <span>Open Web App</span>
          </button>
        </div>
      </aside>
    </>
  );
};
