export interface SharePayload {
  title: string;
  text: string;
  url: string;
}

/**
 * Shares UgaByte pages or live listings using the native mobile Web Share sheet
 * (WhatsApp, Telegram, X, SMS) with a clean clipboard fallback on desktop browsers.
 * Never uses window.alert or window.open.
 */
export async function shareUgaByteContent(
  payload: SharePayload
): Promise<"shared" | "copied" | "cancelled"> {
  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({
        title: payload.title,
        text: payload.text,
        url: payload.url,
      });
      return "shared";
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        return "cancelled";
      }
      // Fall through to clipboard fallback if Web Share fails
    }
  }

  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(`${payload.text} — ${payload.url}`);
      return "copied";
    } catch {
      // Ignore clipboard permission failure
    }
  }

  return "cancelled";
}
