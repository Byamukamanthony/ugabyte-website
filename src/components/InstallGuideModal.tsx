import React, { useEffect } from "react";
import { X, Smartphone, Download } from "lucide-react";
import { UGABYTE_APP_META } from "../config/ugabyte";

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadApk: () => void;
}

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({
  isOpen,
  onClose,
  onDownloadApk,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps = [
    {
      num: "1",
      title: "Download APK",
      desc: `Save the ${UGABYTE_APP_META.fileSize} package to your Android device.`,
    },
    {
      num: "2",
      title: "Allow Installation",
      desc: "Toggle 'Allow from this source' if prompted by your browser.",
    },
    {
      num: "3",
      title: "Open UgaByte",
      desc: "Tap the downloaded file in your notifications to launch.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-guide-title"
    >
      <div
        className="bg-card border border-subtle rounded-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-secondary-ink hover:text-primary-ink p-1 rounded-lg focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center text-accent">
            <Smartphone className="w-4 h-4" />
          </div>
          <h3 id="install-guide-title" className="text-base font-bold text-primary-ink">
            Android Install Guide
          </h3>
        </div>

        <div className="space-y-2.5 text-sm">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-subtle"
            >
              <span className="w-6 h-6 rounded-full btn-primary-lime flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {s.num}
              </span>
              <div>
                <div className="font-bold text-primary-ink text-xs">{s.title}</div>
                <div className="text-xs text-secondary-ink mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-surface border border-subtle text-primary-ink text-xs font-semibold hover:bg-elevated transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onDownloadApk();
            }}
            className="px-5 py-2 rounded-lg btn-primary-lime text-xs font-bold flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </button>
        </div>
      </div>
    </div>
  );
};
