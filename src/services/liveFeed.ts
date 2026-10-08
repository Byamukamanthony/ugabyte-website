import { BRAND_ASSETS, UGABYTE_WEB_APP_URL } from "../config/ugabyte";

export interface LiveAppListing {
  id: string;
  category: "food" | "electronics" | "hostels" | "events" | "gigs";
  title: string;
  desc: string;
  location: string;
  time: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  seller: string;
  verified: boolean;
  image: string;
  appUrl: string;
  stockLeft?: number;
}

export interface LiveAppStats {
  activeListings: number;
  hubsCount: number;
  sellerFee: string;
  lastSynced: string;
  isLiveConnected: boolean;
}

export interface LiveFeedPayload {
  listings: Record<"food" | "electronics" | "hostels", LiveAppListing>;
  marketItems: { title: string; price: string; tag: string }[];
  featuredEvent: { day: string; date: string; title: string; venue: string };
  featuredGigs: { role: string; title: string; pay: string }[];
  stats: LiveAppStats;
}

/**
 * Default verified campus feed (used when VITE_UGABYTE_LIVE_API_URL is not yet configured
 * or if the client is offline).
 */
export const VERIFIED_APP_FEED: LiveFeedPayload = {
  listings: {
    food: {
      id: "deal-rolex-combo",
      category: "food",
      title: "Triple-Deck Rolex + Spiced Chai",
      desc: "Fresh delivery at Hall Gate",
      location: "Wandegeya · Stall 4",
      time: "Live on App",
      price: "UGX 3,500",
      originalPrice: "UGX 5,500",
      discount: "36% OFF",
      seller: "Wandegeya Kitchen",
      verified: true,
      stockLeft: 14,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      appUrl: `${UGABYTE_WEB_APP_URL}?category=food`,
    },
    electronics: {
      id: "item-anker-q30",
      category: "electronics",
      title: "Anker Soundcore Q30 ANC",
      desc: "Boxed · 100% battery health",
      location: "Makerere · Mitchell Hall",
      time: "Live on App",
      price: "UGX 165K",
      originalPrice: "UGX 240K",
      discount: "31% OFF",
      seller: "CEDAT Student Seller",
      verified: true,
      stockLeft: 1,
      image: BRAND_ASSETS.headphonesProduct,
      appUrl: `${UGABYTE_WEB_APP_URL}?category=electronics`,
    },
    hostels: {
      id: "item-kikoni-single",
      category: "hostels",
      title: "Single Self-Contained Room",
      desc: "24/7 water · Solar backup · Wi-Fi",
      location: "Kikoni · Kagugube Rd",
      time: "Live on App",
      price: "UGX 550K/sem",
      originalPrice: "UGX 700K",
      discount: "VERIFIED",
      seller: "Campus Hostel Partner",
      verified: true,
      stockLeft: 2,
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80",
      appUrl: `${UGABYTE_WEB_APP_URL}?category=hostels`,
    },
  },
  marketItems: [
    { title: "Casio fx-991EX Calculator", price: "UGX 75,000", tag: "CEDAT" },
    { title: "Hostel Single Mattress (4x6)", price: "UGX 90,000", tag: "Kikoni" },
    { title: 'Dell 24" IPS Desk Monitor', price: "UGX 260,000", tag: "MUBS" },
  ],
  featuredEvent: {
    day: "FRI",
    date: "24",
    title: "Inter-University Tech Hackathon",
    venue: "Makerere Main Hall · Digital Pass",
  },
  featuredGigs: [
    {
      role: "Campus Lead",
      title: "FinTech Brand Ambassador",
      pay: "UGX 450K/mo",
    },
    {
      role: "Weekend Gig",
      title: "Event Photography & Reels",
      pay: "UGX 200K",
    },
  ],
  stats: {
    activeListings: 2840,
    hubsCount: 3,
    sellerFee: "UGX 0",
    lastSynced: "Just now",
    isLiveConnected: false,
  },
};

/**
 * Fetches live deals & listings directly from the UgaByte App API if configured
 * via VITE_UGABYTE_LIVE_API_URL (or /api/public/feed).
 */
export async function fetchLiveAppFeed(): Promise<LiveFeedPayload> {
  const apiUrl = import.meta.env.VITE_UGABYTE_LIVE_API_URL;
  if (!apiUrl) {
    return VERIFIED_APP_FEED;
  }

  try {
    const res = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(4500),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    return {
      listings: {
        food: { ...VERIFIED_APP_FEED.listings.food, ...(data.listings?.food || {}) },
        electronics: {
          ...VERIFIED_APP_FEED.listings.electronics,
          ...(data.listings?.electronics || {}),
        },
        hostels: {
          ...VERIFIED_APP_FEED.listings.hostels,
          ...(data.listings?.hostels || {}),
        },
      },
      marketItems: Array.isArray(data.marketItems)
        ? data.marketItems
        : VERIFIED_APP_FEED.marketItems,
      featuredEvent: data.featuredEvent || VERIFIED_APP_FEED.featuredEvent,
      featuredGigs: Array.isArray(data.featuredGigs)
        ? data.featuredGigs
        : VERIFIED_APP_FEED.featuredGigs,
      stats: {
        ...VERIFIED_APP_FEED.stats,
        ...(data.stats || {}),
        lastSynced: "Live",
        isLiveConnected: true,
      },
    };
  } catch {
    return VERIFIED_APP_FEED;
  }
}
