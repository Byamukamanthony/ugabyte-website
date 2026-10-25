import React, { useEffect } from "react";
import { Download, X } from "lucide-react";
import { UGABYTE_APP_META } from "../config/ugabyte";

interface DownloadToastProps {
  show: boolean;
  onClose: () => void;
  onOpenGuide: () => void;
}

export const DownloadToast: React.FC<DownloadToastProps> = ({
  show,
  onClose,
  onOpenGuide,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-5 sm:bottom-5 z-50 sm:max-w-xs bg-[#12151C] border border-[#cef11c]/40 rounded-2xl p-4 shadow-elegant flex items-start gap-3"
      role="status"
      aria-live="polite"
    >
      <div className="w-8 h-8 rounded-lg bg-[#cef11c] text-[#090A0E] flex items-center justify-center shrink-0 mt-0.5">
        <Download className="w-4 h-4 stroke-[2.25]" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-[#FFFFFF]">
            Opening APK ({UGABYTE_APP_META.version} · {UGABYTE_APP_META.fileSize})
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
        <p className="text-[11px] text-[#8E98A8] mt-0.5 font-mono truncate">
          {UGABYTE_APP_META.fileName}
        </p>

        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenGuide();
          }}
          className="mt-1.5 text-xs text-[#cef11c] font-semibold hover:underline"
        >
          View Install Guide &rarr;
        </button>
      </div>
    </div>
  );
};
