import React, { useState, useEffect } from "react";
import { Navbar, PageView } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { UgaBytePhoneVideo, VideoSceneId } from "./components/UgaBytePhoneVideo";
import { InstallGuideModal } from "./components/InstallGuideModal";
import { PartnerInquiryModal } from "./components/PartnerInquiryModal";
import { LegalModal } from "./components/LegalModal";
import { DownloadToast } from "./components/DownloadToast";
import {
  UGABYTE_APK_URL,
  UGABYTE_WEB_APP_URL,
  UGABYTE_APP_META,
  UGABYTE_HANDLE,
} from "./config/ugabyte";
import {
  subscribeToLiveAppFeed,
  EMPTY_LIVE_FEED,
  LiveFeedPayload,
  LiveAppListing,
} from "./services/liveFeed";
import {
  Star,
  Download,
  Globe,
  ShieldCheck,
  MapPin,
  Clock,
  Copy,
  Check,
  HelpCircle,
  Send,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const SCENES: { id: VideoSceneId; title: string; subtitle: string }[] = [
  {
    id: "calendar",
    title: "Campus Board Calendar",
    subtitle: "Promote parties & events in under 10 minutes",
  },
  {
    id: "market",
    title: "Got Stuff to Sell?",
    subtitle: "Browse Tech, Fashion & Hostel gear at 0% fee",
  },
  {
    id: "hustle",
    title: "Today's Electric Hustle",
    subtitle: "Curated daily drops & live calendar sync",
  },
];

const DIFFERENCE_POINTS = [
  {
    number: "01.",
    title: "Campus Board Calendar",
    text: "Promote a party, guild night, or hackathon on the Prime Campus Student Network — approved in under 10 minutes.",
  },
  {
    number: "02.",
    title: "Zero-Fee Peer Market",
    text: "Got stuff to sell? List laptops, calculators, fashion, and hostel essentials directly to verified students with 0% commission.",
  },
  {
    number: "03.",
    title: "Today's Electric Hustle",
    text: "Curated daily drops, food combos, and flash student discounts synced live across Makerere, MUBS, and Kyambogo.",
  },
  {
    number: "04.",
    title: "14.1 MB Native Speed",
    text: "Engineered for campus networks and battery life — available as a signed Android APK and instant Web App.",
  },
];

const STUDENT_REVIEWS = [
  {
    name: "Elijah Kyazze · Makerere Year 4",
    text: "With UgaByte, I get 15+ student laptop repair and tech inquiries every single week right from Kikoni and Mitchell Hall without paying a shilling in ads.",
  },
  {
    name: "Aisha Namukasa · MUBS Nakawa",
    text: "Sold my old engineering calculator and desk monitor in less than 3 hours. Meeting a verified student at the main gate felt completely safe.",
  },
  {
    name: "Brian Otim · Kyambogo University",
    text: "The Campus Board Calendar is a game changer. We listed our inter-hall gaming tournament and sold out passes in two days.",
  },
  {
    name: "Sarah Nabirye · Lumumba Hall",
    text: "Today's Electric Hustle drops save me money every week on Wandegeya food combos and report printing.",
  },
  {
    name: "Kevin Mugisha · CEDAT",
    text: "The app is only 14 MB, uses almost zero data, and looks cleaner than any other marketplace in Kampala.",
  },
  {
    name: "Grace Atuhaire · Kikoni Hostels",
    text: "Found my self-contained single room sublet through UgaByte without paying any broker fees. 10/10 experience.",
  },
];

const DEFAULT_DROPS_FALLBACK: { name: string; price: string; url?: string }[] = [
  { name: "Campus Flash Food Deals", price: "Live on App" },
  { name: "Peer Tech & Calculators", price: "0% Fee" },
  { name: "Verified Hostel Sublets", price: "No Broker Fee" },
  { name: "Campus Event Advertising", price: "Approved < 10m" },
  { name: "Student Internships & Gigs", price: "Daily Sync" },
  { name: "Guild & Hall Pass Tickets", price: "Instant QR" },
];

export default function App() {
  const [activePage, setActivePage] = useState<PageView>("home");
  const [heroScene, setHeroScene] = useState<VideoSceneId>("calendar");
  const [installGuideOpen, setInstallGuideOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<
    "privacy" | "terms" | "cookie" | "refund" | null
  >(null);
  const [downloadToastOpen, setDownloadToastOpen] = useState(false);
  const [liveFeed, setLiveFeed] = useState<LiveFeedPayload>(EMPTY_LIVE_FEED);
  const [copiedHash, setCopiedHash] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    const unsubscribe = subscribeToLiveAppFeed((feed) => {
      setLiveFeed(feed);
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

  const handleOpenListingUrl = (url?: string) => {
    window.open(url || UGABYTE_WEB_APP_URL, "_blank", "noopener,noreferrer");
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText(UGABYTE_APP_META.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Combine real Supabase listings for the dotted-leader section
  const allLiveListings: LiveAppListing[] = [
    ...liveFeed.deals,
    ...liveFeed.products,
    ...liveFeed.events,
    ...liveFeed.gigs,
  ];

  const dottedDropsList: { name: string; price: string; url?: string }[] =
    allLiveListings.length > 0
      ? allLiveListings.slice(0, 9).map((item) => ({
          name: item.title,
          price: item.price,
          url: item.appUrl,
        }))
      : DEFAULT_DROPS_FALLBACK;

  const dealRows: [string, string][] =
    liveFeed.deals.length > 0 || liveFeed.events.length > 0
      ? [...liveFeed.deals, ...liveFeed.events]
          .slice(0, 5)
          .map((d) => [d.title, d.price])
      : [
          ["Campus Flash Food Deals", "Live on App"],
          ["Campus Event Advertising", "Approved < 10m"],
          ["Guild & Hall Night Passes", "Instant QR"],
          ["Partner Student Discounts", "Up to 40% OFF"],
        ];

  const marketRows: [string, string][] =
    liveFeed.products.length > 0 || liveFeed.gigs.length > 0
      ? [...liveFeed.products, ...liveFeed.gigs]
          .slice(0, 5)
          .map((p) => [p.title, p.price])
      : [
          ["Peer Electronics & Laptops", "0% Commission"],
          ["Calculators & Lab Gear", "Verified Peers"],
          ["Hostel Sublets & Rooms", "No Broker Fee"],
          ["Student Internships & Gigs", "Daily Sync"],
        ];

  return (
    <div className="min-h-screen bg-[#090A0E] text-[#e3e2e8] flex flex-col font-sans overflow-x-hidden selection:bg-[#cef11c] selection:text-[#090A0E] transition-colors duration-200">
      {/* Two-Tier Centered Editorial Header (exact braidbymado.com layout) */}
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
        onDownloadApk={handleDownloadApk}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* ================================================================
            VIEW 1: HOME (Mirrors braidbymado.com '/' layout 1-to-1)
           ================================================================ */}
        {activePage === "home" && (
          <>
            {/* 1. Asymmetric 2-Column Hero with Tilted 3D Phone Video Frame */}
            <section className="relative overflow-hidden">
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.25fr] gap-10 lg:gap-14 items-center py-14 md:py-24">
                {/* Left Column */}
                <div className="space-y-6">
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                    Campus Super-App · Kampala
                  </span>

                  <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-[#FFFFFF]">
                    Elevate Your
                    <br />
                    <span className="italic text-[#cef11c]">Campus</span> Hustle
                  </h1>

                  <p className="text-base md:text-lg text-[#8E98A8] max-w-md leading-relaxed">
                    Curated daily drops, zero-fee peer marketplace, and live campus event boards — crafted for university life.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleDownloadApk}
                      className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-[#cef11c] text-[#090A0E] text-sm font-bold shadow-elegant hover:brightness-105 active:scale-95 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download APK ({UGABYTE_APP_META.fileSize})</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenWebApp}
                      className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-[#323B4E] bg-transparent hover:bg-[#12151C] text-[#FFFFFF] text-sm font-semibold transition-all"
                    >
                      <Globe className="w-4 h-4 text-[#cef11c]" />
                      <span>Open Web App</span>
                    </button>
                  </div>

                  {/* 5-Star Social Proof Row */}
                  <div className="flex items-center gap-4 pt-4 text-sm text-[#8E98A8]">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4 fill-[#cef11c] text-[#cef11c]"
                        />
                      ))}
                    </div>
                    <span>
                      {liveFeed.stats.totalLiveCount > 0
                        ? `${liveFeed.stats.totalLiveCount} live listings synced from app`
                        : "Trusted across Makerere, MUBS & Kyambogo"}
                    </span>
                  </div>
                </div>

                {/* Right Column: Editorial Header + Tilted Rounded-[2rem] 3D Video Carousel */}
                <div className="space-y-4">
                  <div className="space-y-2.5 text-center">
                    <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#8E98A8]">
                      Today&apos;s Electric Hustle
                    </span>
                    <p className="font-serif font-light text-3xl md:text-5xl leading-tight text-[#FFFFFF]">
                      Don&apos;t miss out —
                      <span className="block italic font-normal mt-1 text-[#cef11c]">
                        Get the App!
                      </span>
                    </p>
                    <div
                      className="flex justify-center items-center gap-4 pt-1"
                      aria-hidden="true"
                    >
                      <div className="h-px w-12 bg-[#323B4E]" />
                      <div className="w-1.5 h-1.5 rounded-full border border-[#cef11c]" />
                      <div className="h-px w-12 bg-[#323B4E]" />
                    </div>
                  </div>

                  {/* Signature Tilted Frame (XE from braidbymado.com) */}
                  <div className="relative max-w-md mx-auto w-full">
                    <div
                      className="absolute -inset-4 bg-[#cef11c]/10 border border-[#cef11c]/20 rounded-[2rem] -rotate-2"
                      aria-hidden="true"
                    />
                    <div className="relative overflow-hidden rounded-[2rem] shadow-elegant aspect-[4/5] border border-[#232936]">
                      <UgaBytePhoneVideo
                        scene={heroScene}
                        autoCycle={true}
                        onSceneChange={setHeroScene}
                        onActionClick={() => setPartnerModalOpen(true)}
                      />

                      {/* Bottom Gradient & Pill Dot Switcher */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 z-30">
                        {SCENES.map((s) => {
                          const active = heroScene === s.id;
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setHeroScene(s.id)}
                              aria-label={`Show ${s.title}`}
                              aria-current={active}
                              className={`h-2.5 rounded-full transition-all duration-300 ${
                                active
                                  ? "w-7 bg-[#cef11c]"
                                  : "w-2.5 bg-white/50 hover:bg-white/80"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Centered "About UgaByte" Band (Mirrors "About Braids by Mado") */}
            <section className="bg-[#121317] border-y border-[#232936] py-20">
              <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                  About
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#FFFFFF]">
                  About UgaByte
                </h2>
                <p className="text-lg font-medium text-[#e3e2e8]">
                  Your premier campus marketplace &amp; event network.
                </p>
                <p className="text-[#8E98A8] leading-relaxed">
                  UgaByte connects university students across Makerere, MUBS, and Kyambogo in one high-speed platform. From curated daily drops and peer-to-peer electronics trading to instant campus event promotion, everything is verified and built for student life.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActivePage("get-app");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="rounded-full px-8 py-3 bg-[#cef11c] text-[#090A0E] text-sm font-bold hover:brightness-105 transition-all"
                  >
                    Get the App
                  </button>
                </div>
              </div>
            </section>

            {/* 3. Dotted-Leader Live Feed Section (Mirrors "Explore Our Styles") */}
            <section className="py-20 border-b border-[#232936]">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                    Live App Feed · {liveFeed.stats.lastSynced}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#FFFFFF]">
                    Explore Live Drops
                  </h2>
                  <p className="text-[#8E98A8]">
                    Real student listings and flash deals synced directly from the UgaByte app.
                  </p>
                </div>

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 max-w-4xl mx-auto text-[#FFFFFF]">
                  {dottedDropsList.map((item, index) => (
                    <li
                      key={`${item.name}-${index}`}
                      onClick={() => handleOpenListingUrl(item.url)}
                      className="flex items-baseline gap-3 border-b border-[#232936] pb-2.5 cursor-pointer group"
                    >
                      <span className="text-sm sm:text-base font-medium group-hover:text-[#cef11c] transition-colors truncate">
                        {item.name}
                      </span>
                      <span
                        className="flex-1 border-b border-dotted border-[#323B4E] translate-y-[-4px]"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-bold text-[#cef11c] whitespace-nowrap tabular-nums">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-center text-[#8E98A8] text-lg font-serif italic mt-8">
                  . . . . and more!
                </p>

                <div className="text-center mt-10">
                  <button
                    type="button"
                    onClick={() => {
                      setActivePage("drops");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="rounded-full px-8 py-3.5 bg-[#cef11c] text-[#090A0E] text-sm font-bold shadow-elegant hover:brightness-105 transition-all"
                  >
                    See All Live Drops
                  </button>
                </div>
              </div>
            </section>

            {/* 4. Sticky Split "The UgaByte difference." + Compact Video Reel */}
            <section className="py-24">
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
                {/* Left Sticky Column with Compact 3D Phone Video */}
                <div className="md:sticky md:top-36 space-y-6">
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#cef11c]">
                    — Why UgaByte
                  </span>
                  <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-[#FFFFFF]">
                    The UgaByte
                    <br />
                    <span className="italic text-[#cef11c]">difference.</span>
                  </h2>
                  <p className="text-[#8E98A8] max-w-sm leading-relaxed">
                    Built around real campus hustle — fast, verified, and zero student commissions.
                  </p>

                  {/* Compact Video Player Card (mirrors wT({compact: true}) on braidbymado.com) */}
                  <div className="pt-2">
                    <div className="w-full max-w-[325px] overflow-hidden rounded-2xl bg-[#12151C] border border-[#232936] shadow-elegant">
                      <div className="aspect-[9/14] w-full">
                        <UgaBytePhoneVideo
                          scene="hustle"
                          autoCycle={true}
                          showControls={true}
                          onActionClick={() => setPartnerModalOpen(true)}
                        />
                      </div>
                      <p className="px-4 pb-4 pt-3 text-center text-sm font-mono font-semibold text-[#cef11c]">
                        {UGABYTE_HANDLE}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Staggered Numbered List */}
                <ol className="divide-y divide-[#232936] border-y border-[#232936]">
                  {DIFFERENCE_POINTS.map((item, idx) => (
                    <li
                      key={item.title}
                      className={`py-8 md:py-10 grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 ${
                        idx % 2 === 1 ? "md:pl-16" : ""
                      }`}
                    >
                      <span className="font-serif text-2xl md:text-3xl text-[#cef11c] leading-none pt-2">
                        {item.number}
                      </span>
                      <div className="space-y-3">
                        <h3 className="font-serif text-3xl md:text-4xl text-[#FFFFFF] leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[#8E98A8] leading-relaxed max-w-xl">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          </>
        )}

        {/* ================================================================
            VIEW 2: SHOWCASE (Mirrors braidbymado.com '/gallery' with the 3 Videos)
           ================================================================ */}
        {activePage === "showcase" && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                  App Showcase
                </span>
                <h1 className="font-serif text-4xl md:text-5xl text-[#FFFFFF]">
                  Inside the UgaByte App
                </h1>
                <p className="text-[#8E98A8]">
                  Explore all three live 3D app reels — Campus Board Calendar, Peer Marketplace, and Today&apos;s Electric Hustle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SCENES.map((s) => (
                  <div
                    key={s.id}
                    className="overflow-hidden rounded-2xl shadow-elegant bg-[#12151C] border border-[#232936] flex flex-col"
                  >
                    <div className="aspect-[4/5] w-full">
                      <UgaBytePhoneVideo
                        scene={s.id}
                        showControls={true}
                        onActionClick={() => setPartnerModalOpen(true)}
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between border-t border-[#232936]">
                      <div>
                        <h3 className="font-serif text-xl text-[#FFFFFF]">
                          {s.title}
                        </h3>
                        <p className="text-xs text-[#8E98A8] mt-0.5">
                          {s.subtitle}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleOpenWebApp}
                        className="p-2.5 rounded-full bg-[#cef11c] text-[#090A0E] hover:brightness-105 transition-all shrink-0"
                        title="Open in Web App"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================
            VIEW 3: DROPS & MARKET (Mirrors braidbymado.com '/pricing')
           ================================================================ */}
        {activePage === "drops" && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                  Synced From App · {liveFeed.stats.lastSynced}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl text-[#FFFFFF]">
                  Live Drops &amp; Marketplace
                </h1>
                <p className="text-[#8E98A8]">
                  Verified campus deals and student listings synced directly from the UgaByte database.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: "Deals & Campus Events",
                    rows: dealRows,
                  },
                  {
                    title: "Peer Market & Gigs",
                    rows: marketRows,
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    onClick={handleOpenWebApp}
                    className="group relative overflow-hidden bg-[#12151C] border border-[#cef11c]/40 rounded-2xl p-8 shadow-elegant flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] cursor-pointer"
                  >
                    <h3 className="text-center text-xl font-semibold uppercase tracking-widest text-[#cef11c] mb-2">
                      {card.title}
                    </h3>
                    <div className="w-16 h-px bg-[#cef11c]/50 mx-auto mb-6" />
                    <ul className="space-y-3.5 flex-1">
                      {card.rows.map(([label, price], idx) => (
                        <li
                          key={`${label}-${idx}`}
                          className="flex items-baseline justify-between gap-4 border-b border-[#232936] pb-2.5"
                        >
                          <span className="text-sm sm:text-base text-[#FFFFFF] group-hover:text-[#cef11c] transition-colors truncate">
                            {label}
                          </span>
                          <span className="text-sm font-bold text-[#cef11c] whitespace-nowrap tabular-nums">
                            {price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button
                  type="button"
                  onClick={handleOpenWebApp}
                  className="rounded-full px-8 py-3.5 bg-[#cef11c] text-[#090A0E] text-sm font-bold shadow-elegant hover:brightness-105 transition-all inline-flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Open Full Marketplace in Web App</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================
            VIEW 4: CAMPUS HUBS (Mirrors braidbymado.com '/workshops')
           ================================================================ */}
        {activePage === "hubs" && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                  Campus Network
                </span>
                <h1 className="font-serif text-4xl md:text-5xl text-[#FFFFFF]">
                  Active University Hubs
                </h1>
                <p className="text-[#8E98A8]">
                  Sell items, promote campus events, or claim daily student drops across our verified university hubs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  {
                    label: "Hubs",
                    value: "MAK · MUBS · KYU",
                    note: "UCU & MUST launching next",
                  },
                  {
                    label: "Seller Fee",
                    value: "UGX 0 (0%)",
                    note: "100% free peer listings",
                  },
                  {
                    label: "Event Approval",
                    value: "Under 10 Mins",
                    note: "Prime Campus Board Calendar",
                  },
                  {
                    label: "Verification",
                    value: "Student ID",
                    note: "Trusted campus-only peers",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#12151C] border border-[#cef11c]/40 rounded-2xl p-8 shadow-elegant flex flex-col items-center text-center min-h-[14rem] justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-semibold uppercase tracking-widest text-[#cef11c] mb-4">
                      {stat.label}
                    </h3>
                    <div className="w-20 h-px bg-[#232936] mb-6" />
                    <p className="text-lg font-bold text-[#FFFFFF] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[#8E98A8] text-xs">{stat.note}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setPartnerModalOpen(true)}
                  className="rounded-full px-8 py-3.5 bg-[#cef11c] text-[#090A0E] text-sm font-bold shadow-elegant hover:brightness-105 transition-all"
                >
                  Become a Campus Seller or Partner
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================
            VIEW 5: REVIEWS (Mirrors braidbymado.com '/testimonials')
           ================================================================ */}
        {activePage === "reviews" && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                  Testimonials
                </span>
                <h1 className="font-serif text-4xl md:text-5xl text-[#FFFFFF]">
                  What Students Say
                </h1>
                <p className="text-[#8E98A8]">
                  Real words from verified students and campus merchants across Kampala.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {STUDENT_REVIEWS.map((review) => (
                  <div
                    key={review.name}
                    className="bg-[#12151C] border border-[#232936] rounded-2xl p-6 shadow-elegant flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-4 h-4 fill-[#cef11c] text-[#cef11c]"
                          />
                        ))}
                      </div>
                      <p className="text-[#e3e2e8] leading-relaxed mb-4 text-sm">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                    <p className="text-xs font-semibold text-[#cef11c]">
                      — {review.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================
            VIEW 6: GET APP & PARTNER (Mirrors braidbymado.com '/contact')
           ================================================================ */}
        {activePage === "get-app" && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Direct App Access & Specs */}
              <div className="space-y-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#cef11c]">
                  Instant Access
                </span>
                <h1 className="font-serif text-4xl md:text-5xl text-[#FFFFFF]">
                  Get the UgaByte App
                </h1>
                <p className="text-[#8E98A8] max-w-md leading-relaxed">
                  Download the official {UGABYTE_APP_META.fileSize} Android APK or launch the instant Web App in any browser.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadApk}
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-[#cef11c] text-[#090A0E] text-sm font-bold shadow-elegant hover:brightness-105 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download APK ({UGABYTE_APP_META.fileSize})</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenWebApp}
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-[#323B4E] hover:bg-[#12151C] text-[#FFFFFF] text-sm font-semibold transition-all"
                  >
                    <Globe className="w-4 h-4 text-[#cef11c]" />
                    <span>Open Web App</span>
                  </button>
                </div>

                <ul className="space-y-4 pt-4 text-sm text-[#e3e2e8]">
                  <li className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#cef11c] shrink-0" />
                    <span>
                      Version {UGABYTE_APP_META.version} · {UGABYTE_APP_META.targetSdk}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#cef11c] shrink-0" />
                    <span>Makerere University, MUBS Nakawa &amp; Kyambogo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#cef11c] shrink-0" />
                    <button
                      type="button"
                      onClick={handleCopyHash}
                      className="inline-flex items-center gap-2 hover:text-[#cef11c] transition-colors font-mono text-xs"
                    >
                      <span>
                        SHA-256: {UGABYTE_APP_META.sha256.slice(0, 10)}...
                      </span>
                      {copiedHash ? (
                        <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setInstallGuideOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#cef11c] hover:underline"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>View Android APK Installation Guide</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Promote Event / Seller Inquiry Card */}
              <div className="bg-[#12151C] border border-[#232936] rounded-2xl p-6 md:p-8 shadow-elegant">
                {!formSubmitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <h3 className="font-serif text-2xl text-[#FFFFFF] mb-1">
                      Promote an Event or Sell
                    </h3>
                    <p className="text-xs text-[#8E98A8] mb-4">
                      List your campus event or merchant stall on the UgaByte network.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        name="name"
                        required
                        placeholder="Your name or brand"
                        className="w-full px-4 py-3 rounded-lg bg-[#181C26] border border-[#232936] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                      />
                      <input
                        name="campus"
                        required
                        placeholder="Campus (e.g. Makerere)"
                        className="w-full px-4 py-3 rounded-lg bg-[#181C26] border border-[#232936] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                      />
                    </div>

                    <select
                      name="category"
                      defaultValue=""
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#181C26] border border-[#232936] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      <option value="event">Advertise a Party or Event</option>
                      <option value="market">Sell Items on Marketplace</option>
                      <option value="deals">Flash Food / Student Deal</option>
                      <option value="hostel">Hostel / Accommodation</option>
                    </select>

                    <textarea
                      name="details"
                      rows={4}
                      placeholder="Tell us about your event, deal, or item..."
                      className="w-full px-4 py-3 rounded-lg bg-[#181C26] border border-[#232936] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#cef11c] resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#cef11c] text-[#090A0E] text-sm font-bold flex items-center justify-center gap-2 hover:brightness-105 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit to Campus Board</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#cef11c] mx-auto" />
                    <h3 className="font-serif text-2xl text-[#FFFFFF]">
                      Submission Received
                    </h3>
                    <p className="text-sm text-[#8E98A8] max-w-sm mx-auto">
                      Your request has been queued for the UgaByte Campus Board. You can also post directly inside the live app!
                    </p>
                    <button
                      type="button"
                      onClick={handleOpenWebApp}
                      className="rounded-full px-7 py-3 bg-[#cef11c] text-[#090A0E] text-xs font-bold uppercase tracking-wider"
                    >
                      Open Web App Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Signature 3-Card Footer + Legal Bar */}
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

      <DownloadToast
        show={downloadToastOpen}
        onClose={() => setDownloadToastOpen(false)}
        onOpenGuide={() => setInstallGuideOpen(true)}
      />
    </div>
  );
}
