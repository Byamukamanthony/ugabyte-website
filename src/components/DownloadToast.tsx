import React, { useEffect } from "react";
import { Download, CheckCircle2, X } from "lucide-react";
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
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-[#12151C] border border-[#cef11c]/60 rounded-2xl p-4 shadow-2xl shadow-black/80 flex items-start gap-3 transition-all animate-in fade-in slide-in-from-bottom-5"
      role="status"
      aria-live="polite"
    >
      <div className="w-9 h-9 rounded-full bg-[#cef11c] text-[#090A0E] flex items-center justify-center shrink-0 mt-0.5">
        <Download className="w-5 h-5 stroke-[2.5]" />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-[#FFFFFF]">
            Starting APK Download...
          </h4>
          <button
            onClick={onClose}
            className="text-[#8E98A8] hover:text-[#FFFFFF] p-0.5"
            aria-label="Dismiss alert"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-[#8E98A8] mt-1 leading-snug">
          Fetching <strong>ugabyte-{UGABYTE_APP_META.version}.apk</strong> ({UGABYTE_APP_META.fileSize}) from local African Edge CDN.
        </p>

        <div className="mt-2.5 flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenGuide();
            }}
            className="text-[11px] text-[#cef11c] font-black uppercase tracking-wider hover:underline"
          >
            View Install Guide →
          </button>
        </div>
      </div>
    </div>
  );
};
