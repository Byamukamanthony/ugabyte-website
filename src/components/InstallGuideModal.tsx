import React, { useEffect } from "react";
import { X, Smartphone, Download } from "lucide-react";
import { UGABYTE_APK_URL, UGABYTE_APP_META } from "../config/ugabyte";

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadApk: (e?: React.MouseEvent) => void;
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
      title: `Download ${UGABYTE_APP_META.fileName}`,
      desc: `Tap Download APK to open the official link and save ${UGABYTE_APP_META.fileName} (${UGABYTE_APP_META.fileSize}, ${UGABYTE_APP_META.version}).`,
    },
    {
      num: "2",
      title: "Allow Installation",
      desc: "Toggle 'Allow from this source' if prompted by your Android browser.",
    },
    {
      num: "3",
      title: "Launch UgaByte App",
      desc: `Open ${UGABYTE_APP_META.fileName} in your downloads to install (${UGABYTE_APP_META.minSdk}).`,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-guide-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-md w-full p-4 sm:p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8E98A8] hover:text-[#FFFFFF] p-1.5 rounded-lg focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#cef11c]/15 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c]">
            <Smartphone className="w-4 h-4" />
          </div>
          <h3 id="install-guide-title" className="text-base font-bold text-[#FFFFFF]">
            Android Install Guide
          </h3>
        </div>

        <div className="space-y-2.5 text-sm">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#181C26] border border-[#232936]"
            >
              <span className="w-6 h-6 rounded-full bg-[#cef11c] text-[#090A0E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {s.num}
              </span>
              <div>
                <div className="font-bold text-[#FFFFFF] text-xs">{s.title}</div>
                <div className="text-xs text-[#8E98A8] mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-[#232936] flex flex-col-reverse xs:flex-row items-stretch xs:items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="w-full xs:w-auto px-4 py-2.5 min-h-[44px] rounded-lg bg-[#181C26] border border-[#232936] text-[#FFFFFF] text-xs font-semibold hover:bg-[#232936] transition-colors"
          >
            Close
          </button>
          <a
            href={UGABYTE_APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              onDownloadApk(e);
              onClose();
            }}
            className="w-full xs:w-auto px-5 py-2.5 min-h-[44px] rounded-lg bg-[#cef11c] text-[#090A0E] text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Download APK ({UGABYTE_APP_META.fileSize})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
