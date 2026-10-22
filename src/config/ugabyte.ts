/**
 * Centralized Configuration for UgaByte Inc.
 * Source of truth for URLs, Supabase connection, social links, and app metadata.
 */

export const UGABYTE_APK_URL =
  import.meta.env.VITE_UGABYTE_APK_URL ||
  "https://github.com/Byamukamanthony/ugabyte-website/raw/main/ugabyte.apk.apk";

export const UGABYTE_WEB_APP_URL =
  import.meta.env.VITE_UGABYTE_WEB_APP_URL || "https://ugabyte.vercel.app/";

const rawBaseAppUrl = (
  import.meta.env.VITE_UGABYTE_WEB_APP_URL || "https://ugabyte.vercel.app"
).replace(/\/$/, "");

export const UGABYTE_APP_LINKS = {
  home: `${rawBaseAppUrl}/`,
  deals: `${rawBaseAppUrl}/campus-deals`,
  marketplace: `${rawBaseAppUrl}/marketplace`,
  events: `${rawBaseAppUrl}/events`,
  opportunities: `${rawBaseAppUrl}/opportunities`,
} as const;

export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://kojhndxcclkwrxulwfsk.supabase.co";

export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvamhuZHhjY2xrd3J4dWx3ZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NjAyOTAsImV4cCI6MjA5NjUzNjI5MH0.oNbW4niZFedxsWC6xYFoLMOwJDWAnppeCmvflkCrUCU";

export const UGABYTE_HANDLE = "@ugabyteinc";

export const UGABYTE_PLATFORMS = [
  {
    name: "X (Twitter)",
    handle: "@ugabyteinc",
    url: "https://x.com/ugabyteinc",
    id: "twitter",
  },
  {
    name: "Instagram",
    handle: "@ugabyteinc",
    url: "https://instagram.com/ugabyteinc",
    id: "instagram",
  },
  {
    name: "TikTok",
    handle: "@ugabyteinc",
    url: "https://tiktok.com/@ugabyteinc",
    id: "tiktok",
  },
  {
    name: "Facebook",
    handle: "@ugabyteinc",
    url: "https://facebook.com/ugabyteinc",
    id: "facebook",
  },
] as const;

export const UGABYTE_SOCIALS = {
  twitter: "https://x.com/ugabyteinc",
  instagram: "https://instagram.com/ugabyteinc",
  tiktok: "https://tiktok.com/@ugabyteinc",
  facebook: "https://facebook.com/ugabyteinc",
} as const;

export const UGABYTE_APP_META = {
  version: "v1.2.0",
  fileSize: "14.1 MB",
  sha256: "2f8338ca40c7f7d695eb584a7d8ffb9cd65396b0effe7e12a54a1fc178a2c3d7",
  targetSdk: "Android 34 (Android 14)",
  minSdk: "Android 26 (Android 8.0)",
  releaseDate: "October 2026",
  hubs: ["Makerere University (Main & Kikoni)", "MUBS Nakawa", "Kyambogo University"],
  upcomingHubs: ["Uganda Christian University (UCU)", "Mbarara University (MUST)"],
} as const;

export const BRAND_ASSETS = {
  icon: "/assets/aistudio/ugabyte_icon_29c10976.png",
  logo: "/assets/aistudio/ugabyte_icon_29c10976.png",
  heroPortrait:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAtXafFzie9FAs8hKzkGlirs1SPP9pgnFYSn27AQEhT7YXYx53Nmke5BmxJ4LDUVCzuc72Z3f22NKVbxsbBJPVfei4NayASOL7xVXm_inNEmrlR4634T_Go_iYjmZmCK86NAtUB2mdCSjiQ84jlza0o_nHZYYS4PQ3WqXEXTs7NWBGrmJOA2S8FyqqHKUPafDCwvcN3Lda8a1j5dDa92N_xRHuVe2r3rH6_2jJoBmgqNaRN4XfJbT6j",
  headphonesProduct:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Ug-UBaDTGmCMKshFRWwJxJWL6U4EQqLO3MlBgKOpK4biOyWZ4KSGin5SDbBNxTWtwmO9OSVh12FttcQqk-LzLBcmKoOKeitXH86fPZ4r-cKzoDGCyGFzNEIdV3mtuxEyPUone2oiUTS5VopsDOc7S8wa_89Fzc9-LzbvZ9L9TzVPmwdCCFBSbSQcrpVdSDFr0bUWjkpfG_Dz06C4jX8F-An-yGWdPH9IbtTibXc2ktzIYwr6Oq0z",
} as const;
