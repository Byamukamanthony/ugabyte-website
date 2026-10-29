import React, { useEffect } from "react";
import { X, Shield, FileText, Cookie, RotateCcw } from "lucide-react";
import { UGABYTE_HANDLE } from "../config/ugabyte";

interface LegalModalProps {
  isOpen: boolean;
  activeTab: "privacy" | "terms" | "cookie" | "refund";
  onClose: () => void;
  onSelectTab: (tab: "privacy" | "terms" | "cookie" | "refund") => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onSelectTab,
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

  const tabs = [
    { id: "privacy" as const, label: "Privacy", icon: Shield },
    { id: "terms" as const, label: "Terms", icon: FileText },
    { id: "cookie" as const, label: "Cookies", icon: Cookie },
    { id: "refund" as const, label: "Refunds", icon: RotateCcw },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-lg w-full p-4 sm:p-6 relative shadow-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#232936]">
          <h3 id="legal-modal-title" className="text-sm sm:text-base font-bold text-[#FFFFFF]">
            UgaByte Inc. Policies
          </h3>
          <button
            onClick={onClose}
            className="text-[#8E98A8] hover:text-[#FFFFFF] p-1.5 rounded-lg focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Tab Selector (Touch-friendly on mobile) */}
        <div className="flex items-center gap-1.5 my-3 sm:my-4 p-1 rounded-xl bg-[#181C26] border border-[#232936] overflow-x-auto no-scrollbar">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onSelectTab(t.id)}
                className={`flex-1 min-h-[38px] py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all whitespace-nowrap active:scale-95 ${
                  active
                    ? "bg-[#12151C] text-[#FFFFFF] border border-[#232936] shadow-sm text-[#cef11c]"
                    : "text-[#8E98A8] hover:text-[#FFFFFF]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? "text-[#cef11c]" : ""}`} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="overflow-y-auto text-xs text-[#8E98A8] space-y-3 leading-relaxed pr-1 flex-1">
          {activeTab === "privacy" && (
            <>
              <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF]">Privacy</h4>
              <p>
                UgaByte stores only essential account and campus preferences. We never sell student data. Message <strong className="text-[#cef11c]">{UGABYTE_HANDLE}</strong> for data requests.
              </p>
            </>
          )}

          {activeTab === "terms" && (
            <>
              <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF]">Terms</h4>
              <p>
                Listings must represent genuine goods, food, or services near campus hubs. Meet at public university gates or halls.
              </p>
            </>
          )}

          {activeTab === "cookie" && (
            <>
              <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF]">Cookies</h4>
              <p>
                Local storage saves only your campus hub, saved items, and theme preference.
              </p>
            </>
          )}

          {activeTab === "refund" && (
            <>
              <h4 className="text-xs sm:text-sm font-bold text-[#FFFFFF]">Refunds</h4>
              <p>
                Inspect peer-to-peer items in person upon pickup before paying via cash or Mobile Money.
              </p>
            </>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-[#232936] flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 min-h-[44px] rounded-lg bg-[#cef11c] text-[#090A0E] text-xs font-bold active:scale-95 transition-all text-center"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
