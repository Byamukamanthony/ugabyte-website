import React, { useState, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CampusTicker } from "./components/CampusTicker";
import { TheSolution } from "./components/TheSolution";
import { HowItWorks } from "./components/HowItWorks";
import { CampusTrustProof } from "./components/CampusTrustProof";
import { ForBusinesses } from "./components/ForBusinesses";
import { DownloadSection } from "./components/DownloadSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { CategoryHubPage } from "./components/CategoryHubPage";
import { PartnerInquiryModal } from "./components/PartnerInquiryModal";
import { LegalModal } from "./components/LegalModal";
import { DownloadToast } from "./components/DownloadToast";
import { MobileThumbBar } from "./components/MobileThumbBar";
import { OfflineIndicator } from "./components/OfflineIndicator";
import { UGABYTE_WEB_APP_URL } from "./config/ugabyte";
import { usePWAInstall } from "./hooks/usePWAInstall";
import {
  CATEGORY_SEO_PAGES,
  CategoryRouteSlug,
  HOMEPAGE_SEO,
} from "./data/seoPages";
import { updateDocumentSeo } from "./utils/seoHead";
import {
  subscribeToLiveAppFeed,
  EMPTY_LIVE_FEED,
  LiveFeedPayload,
} from "./services/liveFeed";

function parseCategoryFromPathname(pathname: string): CategoryRouteSlug | null {
  const clean = pathname.toLowerCase().replace(/\/+$/, "").replace(/^\/+/, "");
  if (clean in CATEGORY_SEO_PAGES) {
    return clean as CategoryRouteSlug;
  }
  return null;
}

export default function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"privacy" | "terms" | "cookie" | "refund" | null>(null);
  const [toastState, setToastState] = useState<"installed" | "launched" | null>(null);
  const [liveFeed, setLiveFeed] = useState<LiveFeedPayload>(EMPTY_LIVE_FEED);
  const [notFound, setNotFound] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryRouteSlug | null>(() =>
    typeof window !== "undefined" ? parseCategoryFromPathname(window.location.pathname) : null
  );

  const { isInstalled, triggerAutomatedInstall } = usePWAInstall();

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ugabyte_theme_user");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "light";
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
    const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute("content", theme === "light" ? "#F8FAFC" : "#090A0E");
    }
  }, [theme]);

  useEffect(() => {
    const unsubscribe = subscribeToLiveAppFeed((payload) => {
      setLiveFeed(payload);
    });
    return () => unsubscribe();
  }, []);

  const syncRouteState = useCallback(() => {
    if (typeof window === "undefined") return;
    const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
    const matchedCategory = parseCategoryFromPathname(rawPath);

    if (matchedCategory) {
      setNotFound(false);
      setActiveCategory(matchedCategory);
      setLegalTab(null);
      const cfg = CATEGORY_SEO_PAGES[matchedCategory];
      updateDocumentSeo({
        title: cfg.title,
        description: cfg.metaDescription,
        canonicalUrl: cfg.canonicalUrl,
      });
      return;
    }

    setActiveCategory(null);

    if (rawPath === "/privacy") {
      setNotFound(false);
      setLegalTab("privacy");
      updateDocumentSeo({
        title: "Privacy Policy | UgaByte",
        description: HOMEPAGE_SEO.metaDescription,
        canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
        robots: "noindex, follow",
      });
      return;
    }
    if (rawPath === "/terms") {
      setNotFound(false);
      setLegalTab("terms");
      updateDocumentSeo({
        title: "Terms of Use | UgaByte",
        description: HOMEPAGE_SEO.metaDescription,
        canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
        robots: "noindex, follow",
      });
      return;
    }
    if (rawPath === "/cookie" || rawPath === "/cookies") {
      setNotFound(false);
      setLegalTab("cookie");
      updateDocumentSeo({
        title: "Cookie Policy | UgaByte",
        description: HOMEPAGE_SEO.metaDescription,
        canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
        robots: "noindex, follow",
      });
      return;
    }
    if (rawPath === "/refund" || rawPath === "/refunds") {
      setNotFound(false);
      setLegalTab("refund");
      updateDocumentSeo({
        title: "Dispute & Refund Policy | UgaByte",
        description: HOMEPAGE_SEO.metaDescription,
        canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
        robots: "noindex, follow",
      });
      return;
    }

    setLegalTab(null);

    const knownAliases = new Set(["/", "/download", "/install", "/faq", "/about"]);
    if (!knownAliases.has(rawPath)) {
      setNotFound(true);
      updateDocumentSeo({
        title: "Page Not Found | UgaByte",
        description: HOMEPAGE_SEO.metaDescription,
        canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
        robots: "noindex, follow",
      });
      return;
    }

    setNotFound(false);
    updateDocumentSeo({
      title: HOMEPAGE_SEO.title,
      description: HOMEPAGE_SEO.metaDescription,
      canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
    });

    // Legacy section alias fallback: normalize URL to /#section so canonical & browser bar match
    if (rawPath === "/download" || rawPath === "/install") {
      window.history.replaceState({}, "", "/#download");
      setTimeout(() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" }), 120);
    } else if (rawPath === "/faq") {
      window.history.replaceState({}, "", "/#faq");
      setTimeout(() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }), 120);
    } else if (rawPath === "/about") {
      window.history.replaceState({}, "", "/");
    }
  }, []);

  useEffect(() => {
    syncRouteState();
    window.addEventListener("popstate", syncRouteState);
    return () => window.removeEventListener("popstate", syncRouteState);
  }, [syncRouteState]);

  const handleNavigateHome = (e?: React.MouseEvent, skipScrollTop = false) => {
    if (e && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
    }
    if (typeof window !== "undefined") {
      if (window.location.pathname !== "/" || window.location.hash) {
        window.history.pushState({}, "", "/");
      }
      if (!skipScrollTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setNotFound(false);
    setActiveCategory(null);
    setLegalTab(null);
    updateDocumentSeo({
      title: HOMEPAGE_SEO.title,
      description: HOMEPAGE_SEO.metaDescription,
      canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
    });
  };

  const handleNavigateCategory = (slug: CategoryRouteSlug, e?: React.MouseEvent) => {
    if (e && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
    }
    const cfg = CATEGORY_SEO_PAGES[slug];
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", cfg.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setNotFound(false);
    setActiveCategory(slug);
    setLegalTab(null);
    updateDocumentSeo({
      title: cfg.title,
      description: cfg.metaDescription,
      canonicalUrl: cfg.canonicalUrl,
    });
  };

  const handleOpenLegal = (tab: "privacy" | "terms" | "cookie" | "refund") => {
    setLegalTab(tab);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `/${tab}`);
    }
    updateDocumentSeo({
      title: `Policies — ${tab.charAt(0).toUpperCase() + tab.slice(1)} | UgaByte`,
      description: HOMEPAGE_SEO.metaDescription,
      canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
      robots: "noindex, follow",
    });
  };

  const handleCloseLegal = () => {
    setLegalTab(null);
    if (typeof window !== "undefined") {
      const targetPath = activeCategory ? `/${activeCategory}` : "/";
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, "", targetPath);
      }
    }
    if (activeCategory) {
      const cfg = CATEGORY_SEO_PAGES[activeCategory];
      updateDocumentSeo({
        title: cfg.title,
        description: cfg.metaDescription,
        canonicalUrl: cfg.canonicalUrl,
      });
    } else {
      updateDocumentSeo({
        title: HOMEPAGE_SEO.title,
        description: HOMEPAGE_SEO.metaDescription,
        canonicalUrl: HOMEPAGE_SEO.canonicalUrl,
      });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        localStorage.setItem("ugabyte_theme_user", next);
      }
      return next;
    });
  };

  const handleOpenWebApp = (e?: React.MouseEvent) => {
    if (e?.currentTarget instanceof HTMLAnchorElement) {
      return;
    }
    const link = document.createElement("a");
    link.href = UGABYTE_WEB_APP_URL;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInstallApp = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    const outcome = await triggerAutomatedInstall();
    if (outcome === "installed") {
      setToastState("installed");
    } else if (outcome === "launched" || outcome === "chrome_intent") {
      setToastState("launched");
    }
  };

  const activeCategoryConfig = activeCategory ? CATEGORY_SEO_PAGES[activeCategory] : null;

  return (
    <div className="min-h-screen bg-[#090A0E] text-[#e3e2e8] flex flex-col font-sans selection:bg-[#cef11c] selection:text-[#090A0E] transition-colors duration-200">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-full focus:bg-[#cef11c] focus:text-[#090A0E] focus:text-xs focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Navbar with Theme Switcher & Crawlable Navigation */}
      <Navbar
        onInstallApp={handleInstallApp}
        isInstalled={isInstalled}
        onOpenWebApp={handleOpenWebApp}
        onNavigateHome={handleNavigateHome}
        onNavigateCategory={handleNavigateCategory}
        activeRoute={activeCategoryConfig ? activeCategoryConfig.path : "/"}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {notFound ? (
          <section className="pt-36 pb-24 max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
              404 · Not Found
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
              We couldn&apos;t find that page.
            </h1>
            <p className="text-sm sm:text-base text-[#8E98A8] leading-relaxed">
              The link may have moved or contains a typo. Return to the UgaByte homepage or jump directly into one of our campus guides below.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="/"
                onClick={(e) => handleNavigateHome(e)}
                className="px-6 py-3 min-h-[44px] rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-bold tracking-tight hover:brightness-105 transition-all inline-flex items-center justify-center"
              >
                Back to Homepage
              </a>
              <a
                href="/student-deals-uganda"
                onClick={(e) => handleNavigateCategory("student-deals-uganda", e)}
                className="px-5 py-3 min-h-[44px] rounded-full bg-[#12151C] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-xs font-semibold transition-all inline-flex items-center justify-center"
              >
                Deals Guide
              </a>
              <a
                href="/student-marketplace-uganda"
                onClick={(e) => handleNavigateCategory("student-marketplace-uganda", e)}
                className="px-5 py-3 min-h-[44px] rounded-full bg-[#12151C] border border-[#232936] hover:border-[#323B4E] text-[#FFFFFF] text-xs font-semibold transition-all inline-flex items-center justify-center"
              >
                Market Guide
              </a>
            </div>
          </section>
        ) : activeCategoryConfig ? (
          <CategoryHubPage
            page={activeCategoryConfig}
            feed={liveFeed}
            onNavigateHome={handleNavigateHome}
            onNavigateCategory={handleNavigateCategory}
            onInstallApp={handleInstallApp}
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero
              onInstallApp={handleInstallApp}
              onOpenWebApp={handleOpenWebApp}
            />

            {/* 2. Live Campus Marquee Strip */}
            <CampusTicker />

            {/* 3. Four Core Pillars Bento Grid (Synced with Supabase + Category Guides) */}
            <TheSolution
              onClaimDrop={handleInstallApp}
              onOpenWebApp={handleOpenWebApp}
              onNavigateCategory={handleNavigateCategory}
              feed={liveFeed}
            />

            {/* 4. Clear 3-Step Mechanism */}
            <HowItWorks />

            {/* 5. Campus Safety Standards & Student Social Proof */}
            <CampusTrustProof />

            {/* 6. For Campus Businesses & Sellers (#sellers) */}
            <ForBusinesses onOpenPartnerModal={() => setPartnerModalOpen(true)} />

            {/* 7. App Shortcut & Web App Install Section (#download) */}
            <DownloadSection
              onInstallApp={handleInstallApp}
              onOpenWebApp={handleOpenWebApp}
            />

            {/* 8. Comprehensive FAQ (#faq) */}
            <FAQSection />
          </>
        )}
      </main>

      {/* Footer with Official Favicon Logo, Uganda Guides, @ugabyteinc & Legal Links */}
      <Footer
        onOpenLegal={handleOpenLegal}
        onInstallApp={handleInstallApp}
        onOpenWebApp={handleOpenWebApp}
        onNavigateHome={handleNavigateHome}
        onNavigateCategory={handleNavigateCategory}
      />

      {/* Interactive Modals */}
      <PartnerInquiryModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />

      <LegalModal
        isOpen={legalTab !== null}
        activeTab={legalTab || "privacy"}
        onClose={handleCloseLegal}
        onSelectTab={handleOpenLegal}
      />

      {/* App Install / Launch Confirmation Toast */}
      <DownloadToast
        show={toastState !== null}
        mode={toastState || "installed"}
        onClose={() => setToastState(null)}
      />

      {/* Offline Connectivity Indicator */}
      <OfflineIndicator />

      {/* Floating Ergonomic Mobile Thumb Dock for Smartphones */}
      <MobileThumbBar
        onInstallApp={handleInstallApp}
        isInstalled={isInstalled}
        onOpenWebApp={handleOpenWebApp}
      />
    </div>
  );
}
