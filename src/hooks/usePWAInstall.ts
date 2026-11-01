import { useEffect, useState, useCallback } from "react";
import { UGABYTE_WEB_APP_URL } from "../config/ugabyte";

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export type AutomatedInstallOutcome =
  | "installed"
  | "chrome_intent"
  | "launched"
  | "dismissed";

declare global {
  interface Window {
    __ugabyteDeferredPrompt?: BeforeInstallPromptEvent | null;
  }
  interface Navigator {
    getInstalledRelatedApps?: () => Promise<Array<{ platform: string; url?: string; id?: string }>>;
  }
}

function triggerLinkNavigation(href: string, openInNewTab: boolean) {
  if (typeof document === "undefined") return;
  const link = document.createElement("a");
  link.href = href;
  if (openInNewTab) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function buildAndroidChromeIntentUrl(targetUrl: string): string {
  try {
    const parsed = new URL(targetUrl);
    const hostAndPath = `${parsed.host}${parsed.pathname}${parsed.search}${parsed.hash}`;
    const scheme = parsed.protocol.replace(":", "") || "https";
    const encodedFallback = encodeURIComponent(targetUrl);
    return `intent://${hostAndPath}#Intent;scheme=${scheme};package=com.android.chrome;S.browser_fallback_url=${encodedFallback};end`;
  } catch {
    return targetUrl;
  }
}

function waitForInstallPromptBriefly(timeoutMs = 900): Promise<BeforeInstallPromptEvent | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.__ugabyteDeferredPrompt) {
    return Promise.resolve(window.__ugabyteDeferredPrompt);
  }
  // Only wait briefly if in a top-level Chromium browsing context where beforeinstallprompt can fire
  const isTopLevel = (() => {
    try {
      return window.self === window.top;
    } catch {
      return false;
    }
  })();

  if (!isTopLevel || !("BeforeInstallPromptEvent" in window)) {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    let settled = false;
    const onPrompt = (e: Event) => {
      if (settled) return;
      settled = true;
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      window.__ugabyteDeferredPrompt = promptEvent;
      window.removeEventListener("beforeinstallprompt", onPrompt);
      clearTimeout(timer);
      resolve(promptEvent);
    };

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      window.removeEventListener("beforeinstallprompt", onPrompt);
      resolve(window.__ugabyteDeferredPrompt || null);
    }, timeoutMs);

    window.addEventListener("beforeinstallprompt", onPrompt);
  });
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(() =>
      typeof window !== "undefined" && window.__ugabyteDeferredPrompt
        ? window.__ugabyteDeferredPrompt
        : null
    );
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const isStandalone =
      params.get("pwa") === "1" ||
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: fullscreen)").matches ||
      window.matchMedia("(display-mode: minimal-ui)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone ===
        true;

    setIsInstalled(isStandalone);

    // Ensure any installed shortcut launch opens https://ugabyte.vercel.app/ directly
    if (isStandalone) {
      window.location.replace(UGABYTE_WEB_APP_URL);
      return;
    }

    // Detect if WebAPK / PWA shortcut is already installed in Chromium
    if (typeof navigator.getInstalledRelatedApps === "function") {
      navigator
        .getInstalledRelatedApps()
        .then((apps) => {
          if (Array.isArray(apps) && apps.length > 0) {
            setIsInstalled(true);
          }
        })
        .catch(() => {});
    }

    if (window.__ugabyteDeferredPrompt) {
      setDeferredPrompt(window.__ugabyteDeferredPrompt);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      window.__ugabyteDeferredPrompt = promptEvent;
      setDeferredPrompt(promptEvent);
    };

    const handleAppInstalled = () => {
      window.__ugabyteDeferredPrompt = null;
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const triggerAutomatedInstall = useCallback(async (): Promise<AutomatedInstallOutcome> => {
    if (typeof window === "undefined") return "dismissed";

    // 1. If already installed, launch https://ugabyte.vercel.app/ immediately
    if (isInstalled) {
      triggerLinkNavigation(UGABYTE_WEB_APP_URL, true);
      return "launched";
    }

    // 2. Native Google Chrome / Chromium one-tap shortcut install prompt
    const activePrompt =
      deferredPrompt ||
      window.__ugabyteDeferredPrompt ||
      (await waitForInstallPromptBriefly(900));

    if (activePrompt) {
      try {
        await activePrompt.prompt();
        const { outcome } = await activePrompt.userChoice;
        window.__ugabyteDeferredPrompt = null;
        setDeferredPrompt(null);
        if (outcome === "accepted") {
          setIsInstalled(true);
          return "installed";
        }
        return "dismissed";
      } catch {
        window.__ugabyteDeferredPrompt = null;
        setDeferredPrompt(null);
      }
    }

    // 3. Automated Android Chrome handoff when inside an Android in-app WebView or non-Chrome browser
    const isTopLevel = (() => {
      try {
        return window.self === window.top;
      } catch {
        return false;
      }
    })();
    const isAndroid = /android/i.test(window.navigator.userAgent);

    if (isTopLevel && isAndroid) {
      const intentUrl = buildAndroidChromeIntentUrl(UGABYTE_WEB_APP_URL);
      triggerLinkNavigation(intentUrl, false);
      return "chrome_intent";
    }

    // 4. Direct launch for embedded previews, iOS, or browsers where native prompt is unavailable
    triggerLinkNavigation(UGABYTE_WEB_APP_URL, true);
    return "launched";
  }, [deferredPrompt, isInstalled]);

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    triggerAutomatedInstall,
  };
}

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
