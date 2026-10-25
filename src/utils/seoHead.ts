import { HOMEPAGE_SEO } from "../data/seoPages";

export interface SeoHeadOptions {
  title: string;
  description: string;
  canonicalUrl: string;
  robots?: string;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonicalLink(href: string) {
  if (typeof document === "undefined") return;
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Keeps document title, canonical URL, Open Graph, Twitter Card, and robots meta
 * synchronized during client-side SPA navigation.
 */
export function updateDocumentSeo({
  title,
  description,
  canonicalUrl,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
}: SeoHeadOptions) {
  if (typeof document === "undefined") return;

  document.title = title;
  setCanonicalLink(canonicalUrl);
  setMetaTag("name", "description", description);
  setMetaTag("name", "robots", robots);

  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", canonicalUrl);
  setMetaTag("property", "og:image", HOMEPAGE_SEO.ogImage);

  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  setMetaTag("name", "twitter:image", HOMEPAGE_SEO.ogImage);
}
