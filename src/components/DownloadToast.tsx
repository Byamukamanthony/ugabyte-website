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
      className="fixed bottom-5 right-5 z-50 max-w-xs w-full bg-card border border-subtle rounded-2xl p-4 shadow-xl flex items-start gap-3"
      role="status"
      aria-live="polite"
    >
      <div className="w-8 h-8 rounded-lg btn-primary-lime flex items-center justify-center shrink-0 mt-0.5">
        <Download className="w-4 h-4 stroke-[2.25]" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-primary-ink">
            Downloading APK ({UGABYTE_APP_META.fileSize})
          </h4>
          <button
            onClick={onClose}
            className="text-secondary-ink hover:text-primary-ink p-0.5"
            aria-label="Dismiss alert"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => {
            onClose();
            onOpenGuide();
          }}
          className="mt-1.5 text-xs text-accent font-semibold hover:underline"
        >
          View Install Guide &rarr;
        </button>
      </div>
    </div>
  );
};
