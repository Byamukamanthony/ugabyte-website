import React, { useEffect } from "react";
import { X, Smartphone, Download, ShieldCheck, CheckCircle2 } from "lucide-react";
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

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-guide-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8E98A8] hover:text-[#FFFFFF] p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-5 text-[#cef11c]">
          <Smartphone className="w-5 h-5" />
          <h3
            id="install-guide-title"
            className="text-lg font-bold text-[#FFFFFF]"
          >
            How to Install UgaByte APK
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#181C26] border border-[#232936]">
            <span className="w-6 h-6 rounded-full bg-[#cef11c] text-[#090A0E] flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-[#FFFFFF] block mb-0.5">Download the APK:</strong>
              Tap "Download APK" to save the official {UGABYTE_APP_META.fileSize} package to your phone's storage.
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#181C26] border border-[#232936]">
            <span className="w-6 h-6 rounded-full bg-[#cef11c] text-[#090A0E] flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-[#FFFFFF] block mb-0.5">Enable "Install Unknown Apps":</strong>
              If prompted by Chrome or your file manager, toggle "Allow from this source" in settings. UgaByte is verified safe and malware-free.
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#181C26] border border-[#232936]">
            <span className="w-6 h-6 rounded-full bg-[#cef11c] text-[#090A0E] flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-[#FFFFFF] block mb-0.5">Complete Installation:</strong>
              Open your phone notification shade or Downloads folder and tap <code className="text-[#cef11c] bg-[#090A0E] px-1.5 py-0.5 rounded font-mono">ugabyte-v1.2.0.apk</code>.
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#232936] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onDownloadApk();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download APK Now</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#181C26] border border-[#232936] text-[#e3e2e8] text-xs font-bold hover:bg-[#232936] transition-all"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
