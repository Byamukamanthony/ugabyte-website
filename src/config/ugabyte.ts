/**
 * Centralized Configuration for UgaByte
 * Source of truth for URLs, contact information, social links, and app metadata.
 */

export const UGABYTE_APK_URL =
  import.meta.env.VITE_UGABYTE_APK_URL || "/ugabyte.apk";

export const UGABYTE_WEB_APP_URL =
  import.meta.env.VITE_UGABYTE_WEB_APP_URL || "https://app.ugabyte.tech";

export const UGABYTE_CONTACT_EMAIL = "partnerships@ugabyte.tech";

export const UGABYTE_PHONE = "+256 700 842 298";

export const UGABYTE_PHONE_CLEAN = "256700842298";

export const UGABYTE_SOCIALS = {
  twitter: "https://x.com/ugabyte",
  whatsapp: `https://wa.me/256700842298?text=Hello%20UgaByte%20Team!%20I%20am%20interested%20in%20learning%20more.`,
  instagram: "https://instagram.com/ugabyte.tech",
  linkedin: "https://linkedin.com/company/ugabyte",
} as const;

export const UGABYTE_APP_META = {
  version: "v1.2.0-STABLE",
  fileSize: "13.8 MB",
  sha256: "7f9a2c4e88be2387114c0049e29a99fd11802bb0234149811abecde9690d",
  targetSdk: "Android 34 (Android 14)",
  minSdk: "Android 26 (Android 8.0)",
  releaseDate: "October 2026",
  hubs: ["Makerere University (Main & Kikoni)", "MUBS Nakawa", "Kyambogo University"],
  upcomingHubs: ["Uganda Christian University (UCU)", "Mbarara University (MUST)"],
} as const;

export const BRAND_ASSETS = {
  icon: "/ugabyte-icon.svg",
  logo: "/ugabyte-icon.svg",
  heroPortrait:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAtXafFzie9FAs8hKzkGlirs1SPP9pgnFYSn27AQEhT7YXYx53Nmke5BmxJ4LDUVCzuc72Z3f22NKVbxsbBJPVfei4NayASOL7xVXm_inNEmrlR4634T_Go_iYjmZmCK86NAtUB2mdCSjiQ84jlza0o_nHZYYS4PQ3WqXEXTs7NWBGrmJOA2S8FyqqHKUPafDCwvcN3Lda8a1j5dDa92N_xRHuVe2r3rH6_2jJoBmgqNaRN4XfJbT6j",
  headphonesProduct:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Ug-UBaDTGmCMKshFRWwJxJWL6U4EQqLO3MlBgKOpK4biOyWZ4KSGin5SDbBNxTWtwmO9OSVh12FttcQqk-LzLBcmKoOKeitXH86fPZ4r-cKzoDGCyGFzNEIdV3mtuxEyPUone2oiUTS5VopsDOc7S8wa_89Fzc9-LzbvZ9L9TzVPmwdCCFBSbSQcrpVdSDFr0bUWjkpfG_Dz06C4jX8F-An-yGWdPH9IbtTibXc2ktzIYwr6Oq0z",
} as const;
