import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CampusTicker } from "./components/CampusTicker";
import { TheProblem } from "./components/TheProblem";
import { TheSolution } from "./components/TheSolution";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { ForStudents } from "./components/ForStudents";
import { ForBusinesses } from "./components/ForBusinesses";
import { HowItWorks } from "./components/HowItWorks";
import { DownloadSection } from "./components/DownloadSection";
import { WebAppSection } from "./components/WebAppSection";
import { WhyUgaByte } from "./components/WhyUgaByte";
import { EcosystemSection } from "./components/EcosystemSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { InstallGuideModal } from "./components/InstallGuideModal";
import { PartnerInquiryModal } from "./components/PartnerInquiryModal";
import { LegalModal } from "./components/LegalModal";
import { DownloadToast } from "./components/DownloadToast";
import { UGABYTE_APK_URL, UGABYTE_WEB_APP_URL, UGABYTE_PHONE_CLEAN } from "./config/ugabyte";

export default function App() {
  const [installGuideOpen, setInstallGuideOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"privacy" | "terms" | "cookie" | "refund" | null>(null);
  const [downloadToastOpen, setDownloadToastOpen] = useState(false);

  const handleDownloadApk = () => {
    setDownloadToastOpen(true);
    // Trigger download of the configured APK URL
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

  const handleInspectApk = () => {
    const el = document.getElementById("download");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStudentChat = () => {
    const message = encodeURIComponent(
      "Hello! I saw your Anker Soundcore Q30 ANC listing on UgaByte Live Radar. Is it still available for pickup at Mitchell Hall?"
    );
    window.open(`https://wa.me/${UGABYTE_PHONE_CLEAN}?text=${message}`, "_blank");
  };

  const handleSelectStudentAction = (actionKey: string) => {
    // Smooth scroll to relevant preview or download
    if (actionKey === "discover" || actionKey === "buy") {
      const el = document.getElementById("features");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (actionKey === "sell") {
      setPartnerModalOpen(true);
    } else {
      const el = document.getElementById("download");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0E] text-[#e3e2e8] flex flex-col font-sans selection:bg-[#cef11c] selection:text-[#090A0E]">
      {/* Sticky Navbar */}
      <Navbar
        onDownloadApk={handleDownloadApk}
        onOpenWebApp={handleOpenWebApp}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onDownloadApk={handleDownloadApk}
          onOpenWebApp={handleOpenWebApp}
        />

        {/* Live Campus Marquee Strip */}
        <CampusTicker />

        {/* Problem Section: Campus Friction & Fragmented Info */}
        <TheProblem />

        {/* Solution Section: 4 Core Pillars Bento Grid */}
        <TheSolution onClaimDrop={handleDownloadApk} />

        {/* Feature Showcase: Mobile Architecture & Live App HUD Preview */}
        <FeatureShowcase
          onInspectApk={handleInspectApk}
          onStudentChat={handleStudentChat}
        />

        {/* For Students: 5 Action Vectors */}
        <ForStudents onSelectAction={handleSelectStudentAction} />

        {/* For Campus Businesses & Sellers */}
        <ForBusinesses onOpenPartnerModal={() => setPartnerModalOpen(true)} />

        {/* How It Works: 4 Steps */}
        <HowItWorks />

        {/* Dedicated APK Download Section */}
        <DownloadSection
          onDownloadApk={handleDownloadApk}
          onOpenWebApp={handleOpenWebApp}
          onOpenInstallGuide={() => setInstallGuideOpen(true)}
        />

        {/* Web App Section */}
        <WebAppSection onOpenWebApp={handleOpenWebApp} />

        {/* Why UgaByte: Product Philosophy */}
        <WhyUgaByte />

        {/* UgaByte Ecosystem: The Mission & Digital Layer */}
        <EcosystemSection />

        {/* Common Questions & Verified FAQ */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTA
          onDownloadApk={handleDownloadApk}
          onOpenWebApp={handleOpenWebApp}
        />
      </main>

      {/* Footer with Legal & Contact links */}
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
    </div>
  );
}
