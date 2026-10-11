import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY, UGABYTE_WEB_APP_URL } from "../config/ugabyte";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export interface LiveAppListing {
  id: string;
  category: "deals" | "products" | "events" | "gigs";
  title: string;
  desc: string;
  location: string;
  time: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  verified: boolean;
  image?: string;
  appUrl: string;
  claimsCount?: number;
}

export interface LiveFeedPayload {
  deals: LiveAppListing[];
  products: LiveAppListing[];
  events: LiveAppListing[];
  gigs: LiveAppListing[];
  stats: {
    totalLiveCount: number;
    dealsCount: number;
    productsCount: number;
    eventsCount: number;
    gigsCount: number;
    isConnected: boolean;
    lastSynced: string;
  };
}

export const EMPTY_LIVE_FEED: LiveFeedPayload = {
  deals: [],
  products: [],
  events: [],
  gigs: [],
  stats: {
    totalLiveCount: 0,
    dealsCount: 0,
    productsCount: 0,
    eventsCount: 0,
    gigsCount: 0,
    isConnected: false,
    lastSynced: "Connecting...",
  },
};

// Demo IDs excluded by the UgaByte app
const DEMO_IDS = new Set([
  "deal-rolex-drop",
  "deal-varsity-jacket",
  "deal-print-spiral",
  "prod-casio-calc",
  "prod-hostel-study-lamp",
  "prod-ugabyte-bomber",
  "prod-cs-revision-notes",
  "event-freshers-rave",
  "event-eu-uganda-fair",
  "event-sports-gala",
  "event-dev-circle",
  "gig-1",
  "gig-2",
  "gig-3",
  "post-1",
  "post-2",
  "post-3",
]);

function isDemoRow(row: any): boolean {
  if (!row || row.isDemo || (row.id && DEMO_IDS.has(String(row.id)))) return true;
  const title = String(row.title || "").toLowerCase();
  const loc = String(row.location || "").toLowerCase();
  return title.includes("iphone 12 pro") || (title.includes("iphone 12") && loc.includes("wandegeya"));
}

/**
 * Strips embedded metadata tags ([WA:...], [DESC:...], [UID:...], [EMAIL:...])
 * used by the UgaByte app when storing records in Supabase.
 */
function parseAppText(raw?: string): { clean: string; extraDesc: string } {
  let text = raw || "";
  let extraDesc = "";
  const descMatch = text.match(/\[DESC:([^\]]+)\]/);
  if (descMatch) {
    extraDesc = descMatch[1].trim();
  }
  text = text.replace(/\[(WA|DESC|UID|EMAIL):[^\]]+\]/g, "").trim();
  return { clean: text, extraDesc };
}

function formatRelativeTime(dateStr?: string): string {
  if (!dateStr) return "Live on App";
  try {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  } catch {
    return "Live on App";
  }
}

async function safeSelect(tableName: string): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .order("created_at", { ascending: false })
      .limit(12);
    if (error || !Array.isArray(data)) return [];
    return data.filter((r) => !isDemoRow(r));
  } catch {
    return [];
  }
}

/**
 * Fetches 100% real listings directly from the UgaByte Supabase database.
 * Queries both the v2 tables (deals, products, events, posts) and v1 tables
 * (advertisements, marketplace_items, events, requests, businesses).
 */
export async function fetchLiveAppFeed(): Promise<LiveFeedPayload> {
  const [
    dealsRows,
    adsRows,
    productsRows,
    marketRows,
    eventsRows,
    postsRows,
    requestsRows,
  ] = await Promise.all([
    safeSelect("deals"),
    safeSelect("advertisements"),
    safeSelect("products"),
    safeSelect("marketplace_items"),
    safeSelect("events"),
    safeSelect("posts"),
    safeSelect("requests"),
  ]);

  // 1. Map real Deals
  const rawDeals = [...dealsRows, ...adsRows];
  const deals: LiveAppListing[] = rawDeals.map((r) => {
    const { clean: cleanDesc } = parseAppText(r.description || r.content || "");
    const { clean: cleanLoc } = parseAppText(r.location || "Campus Hub");
    return {
      id: String(r.id),
      category: "deals",
      title: r.title || r.name || "Campus Deal",
      desc: cleanDesc || "Verified campus student deal",
      location: cleanLoc || "Kampala Campus",
      time: formatRelativeTime(r.created_at),
      price: r.price_string || (r.price ? `UGX ${Number(r.price).toLocaleString()}` : "Student Deal"),
      originalPrice: r.original_price_string || undefined,
      discount: r.discount || "DEAL",
      verified: true,
      image: r.image || r.image_url || undefined,
      appUrl: `${UGABYTE_WEB_APP_URL}campus-deals`,
      claimsCount: Number(r.claims_count || 0),
    };
  });

  // 2. Map real Marketplace Products
  const rawProducts = [...productsRows, ...marketRows];
  const products: LiveAppListing[] = rawProducts.map((r) => {
    const { clean: cleanLoc, extraDesc } = parseAppText(r.location || "Campus Gate");
    const { clean: cleanDesc } = parseAppText(r.description || extraDesc || "");
    const priceStr =
      r.price_string ||
      (r.price_number ? `UGX ${Number(r.price_number).toLocaleString()}` : "") ||
      (r.price ? `UGX ${Number(r.price).toLocaleString()}` : "Ask Price");

    return {
      id: String(r.id),
      category: "products",
      title: r.title || r.name || "Campus Listing",
      desc: cleanDesc || r.category || "Peer marketplace listing",
      location: cleanLoc || "Campus Pickup",
      time: formatRelativeTime(r.created_at),
      price: priceStr,
      discount: r.category || "MARKET",
      verified: Boolean(r.is_verified ?? true),
      image: r.image || r.image_url || undefined,
      appUrl: `${UGABYTE_WEB_APP_URL}marketplace`,
    };
  });

  // 3. Map real Events
  const events: LiveAppListing[] = eventsRows.map((r) => {
    const { clean: cleanLoc, extraDesc } = parseAppText(r.location || "Campus Venue");
    const { clean: cleanDesc } = parseAppText(r.description || extraDesc || r.price_sub_label || "");
    return {
      id: String(r.id),
      category: "events",
      title: r.title || r.name || "Campus Event",
      desc: cleanDesc || "Campus event",
      location: cleanLoc || "Campus Venue",
      time: [r.date, r.time].filter(Boolean).join(" · ") || formatRelativeTime(r.created_at),
      price: r.price_string || (r.price ? `UGX ${Number(r.price).toLocaleString()}` : "FREE"),
      discount: r.verified_label || "EVENT",
      verified: Boolean(r.is_verified ?? true),
      image: r.image || r.image_url || undefined,
      appUrl: `${UGABYTE_WEB_APP_URL}events`,
    };
  });

  // 4. Map real Gigs / Opportunities / Hustle Posts
  const rawGigs = [
    ...postsRows.filter((p) => p.is_hustle_offer || p.product_title || p.category === "Opportunities"),
    ...requestsRows,
  ];
  const gigs: LiveAppListing[] = rawGigs.map((r) => {
    const { clean: cleanDesc } = parseAppText(r.product_desc || r.text || r.description || "");
    return {
      id: String(r.id),
      category: "gigs",
      title: r.product_title || r.title || r.text?.slice(0, 48) || "Campus Opportunity",
      desc: cleanDesc || "Student opportunity on UgaByte",
      location: r.username ? `@${r.username}` : r.location || "Campus",
      time: formatRelativeTime(r.created_at),
      price: r.product_price || r.price_string || r.budget || "Open",
      discount: r.tag || r.category || "GIG",
      verified: true,
      image: r.image || undefined,
      appUrl: `${UGABYTE_WEB_APP_URL}opportunities`,
    };
  });

  const totalLiveCount = deals.length + products.length + events.length + gigs.length;

  return {
    deals,
    products,
    events,
    gigs,
    stats: {
      totalLiveCount,
      dealsCount: deals.length,
      productsCount: products.length,
      eventsCount: events.length,
      gigsCount: gigs.length,
      isConnected: true,
      lastSynced: "Live",
    },
  };
}

/**
 * Subscribes to real-time Postgres changes across the UgaByte Supabase database.
 */
export function subscribeToLiveAppFeed(onUpdate: (feed: LiveFeedPayload) => void): () => void {
  let active = true;

  const refresh = async () => {
    const data = await fetchLiveAppFeed();
    if (active) onUpdate(data);
  };

  refresh();

  const channel = supabase
    .channel("ugabyte-website-live-sync")
    .on("postgres_changes", { event: "*", schema: "public" }, () => {
      refresh();
    })
    .subscribe();

  const interval = setInterval(refresh, 30000);

  return () => {
    active = false;
    clearInterval(interval);
    supabase.removeChannel(channel);
  };
}
