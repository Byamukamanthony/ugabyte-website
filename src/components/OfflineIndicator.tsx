import React from "react";
import { useOnlineStatus } from "../hooks/usePWAInstall";

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      className="fixed bottom-16 sm:bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-[#12151C] border border-[#FFA800]/50 px-3.5 py-1.5 text-xs font-semibold text-[#FFFFFF] shadow-lg"
      role="status"
      aria-live="polite"
    >
      <span className="h-2 w-2 rounded-full bg-[#FFA800] animate-pulse" />
      <span>Offline Mode — Cached data active</span>
    </div>
  );
};
