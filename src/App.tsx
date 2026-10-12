import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CampusTicker } from "./components/CampusTicker";
import { TheSolution } from "./components/TheSolution";
import { ForBusinesses } from "./components/ForBusinesses";
import { DownloadSection } from "./components/DownloadSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { InstallGuideModal } from "./components/InstallGuideModal";
import { PartnerInquiryModal } from "./components/PartnerInquiryModal";
import { LegalModal } from "./components/LegalModal";
import { DownloadToast } from "./components/DownloadToast";
import { MobileThumbBar } from "./components/MobileThumbBar";
import { UGABYTE_APK_URL, UGABYTE_WEB_APP_URL } from "./config/ugabyte";
import {
  subscribeToLiveAppFeed,
  EMPTY_LIVE_FEED,
  LiveFeedPayload,
} from "./services/liveFeed";

export default function App() {
  const [installGuideOpen, setInstallGuideOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"privacy" | "terms" | "cookie" | "refund" | null>(null);
  const [downloadToastOpen, setDownloadToastOpen] = useState(false);
  const [liveFeed, setLiveFeed] = useState<LiveFeedPayload>(EMPTY_LIVE_FEED);

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ugabyte_theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    localStorage.setItem("ugabyte_theme", theme);
  }, [theme]);

  useEffect(() => {
    const unsubscribe = subscribeToLiveAppFeed((payload) => {
      setLiveFeed(payload);
    });
    return () => unsubscribe();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleDownloadApk = () => {
    setDownloadToastOpen(true);
    const link = document.createElement("a");
    link.href = UGABYTE_APK_URL;
    link.setAttribute("download", "ugabyte-v1.2.0-release.apk");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenWebApp = () => {
    window.open(UGABYTE_WEB_APP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#090A0E] text-[#e3e2e8] flex flex-col font-sans selection:bg-[#cef11c] selection:text-[#090A0E] transition-colors duration-200">
      {/* Sticky Navbar with Theme Switcher */}
      <Navbar
        onDownloadApk={handleDownloadApk}
        onOpenWebApp={handleOpenWebApp}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Streamlined High-Converting Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onDownloadApk={handleDownloadApk}
          onOpenWebApp={handleOpenWebApp}
        />

        {/* 2. Live Campus Marquee Strip */}
        <CampusTicker />

        {/* 3. Four Core Pillars Bento Grid (Synced with Supabase) */}
        <TheSolution
          onClaimDrop={handleDownloadApk}
          onOpenWebApp={handleOpenWebApp}
          feed={liveFeed}
        />

        {/* 4. For Campus Businesses & Sellers */}
        <ForBusinesses onOpenPartnerModal={() => setPartnerModalOpen(true)} />

        {/* 6. Direct APK & Web App Download Section */}
        <DownloadSection
          onDownloadApk={handleDownloadApk}
          onOpenWebApp={handleOpenWebApp}
          onOpenInstallGuide={() => setInstallGuideOpen(true)}
        />

        {/* 7. Quick FAQ */}
        <FAQSection />
      </main>

      {/* Footer with Official Favicon Logo, @ugabyteinc Icon Cards & Legal Links */}
      <Footer
        onOpenLegal={(tab) => setLegalTab(tab)}
        onOpenInstallGuide={() => setInstallGuideOpen(true)}
        onDownloadApk={handleDownloadApk}
        onOpenWebApp={handleOpenWebApp}
      />

      {/* Interactive Modals */}
      <InstallGuideModal
        isOpen={installGuideOpen}
        onClose={() => setInstallGuideOpen(false)}
        onDownloadApk={handleDownloadApk}
      />

      <PartnerInquiryModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />

      <LegalModal
        isOpen={legalTab !== null}
        activeTab={legalTab || "privacy"}
        onClose={() => setLegalTab(null)}
        onSelectTab={(tab) => setLegalTab(tab)}
      />

      {/* Download Alert Toast */}
      <DownloadToast
        show={downloadToastOpen}
        onClose={() => setDownloadToastOpen(false)}
        onOpenGuide={() => setInstallGuideOpen(true)}
      />

      {/* Floating Ergonomic Mobile Thumb Dock for Smartphones */}
      <MobileThumbBar
        onDownloadApk={handleDownloadApk}
        onOpenWebApp={handleOpenWebApp}
      />
    </div>
  );
}
