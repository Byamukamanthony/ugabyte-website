import React, { useEffect } from "react";
import { Check, ExternalLink, X } from "lucide-react";
import { UGABYTE_WEB_APP_URL } from "../config/ugabyte";

interface DownloadToastProps {
  show: boolean;
  mode?: "installed" | "launched";
  onClose: () => void;
}

export const DownloadToast: React.FC<DownloadToastProps> = ({
  show,
  mode = "installed",
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const isInstalledMode = mode === "installed";

  return (
    <div
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-5 sm:bottom-5 z-50 sm:max-w-xs bg-[#12151C] border border-[#cef11c]/40 rounded-2xl p-4 shadow-elegant flex items-start gap-3"
      role="status"
      aria-live="polite"
    >
      <div className="w-8 h-8 rounded-lg bg-[#cef11c] text-[#090A0E] flex items-center justify-center shrink-0 mt-0.5">
        <Check className="w-4 h-4 stroke-[2.5]" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-[#FFFFFF]">
            {isInstalledMode ? "UgaByte App Installed" : "Opening UgaByte App"}
          </h4>
          <button
            type="button"
            onClick={onClose}
            className="text-[#8E98A8] hover:text-[#FFFFFF] p-0.5"
            aria-label="Dismiss alert"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-[11px] text-[#8E98A8] mt-0.5 truncate">
          {isInstalledMode
            ? "Shortcut added · Opens ugabyte.vercel.app"
            : "Launching ugabyte.vercel.app"}
        </p>

        <a
          href={UGABYTE_WEB_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-1.5 inline-flex items-center gap-1 text-xs text-[#cef11c] font-semibold hover:underline"
        >
          <span>Open UgaByte App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
