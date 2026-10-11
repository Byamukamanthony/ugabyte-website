import React, { useEffect } from "react";
import { X, Shield, FileText, Cookie, RotateCcw } from "lucide-react";
import { UGABYTE_HANDLE } from "../config/ugabyte";

type LegalTab = "privacy" | "terms" | "cookie" | "refund";

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onSelectTab: (tab: LegalTab) => void;
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

  const tabs: { key: LegalTab; label: string; icon: React.ElementType }[] = [
    { key: "privacy", label: "Privacy", icon: Shield },
    { key: "terms", label: "Terms", icon: FileText },
    { key: "cookie", label: "Cookies", icon: Cookie },
    { key: "refund", label: "Refunds", icon: RotateCcw },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-lg w-full p-6 relative max-h-[85vh] flex flex-col shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#232936]">
          <h3
            id="legal-modal-title"
            className="font-serif text-lg font-bold text-[#FFFFFF]"
          >
            Legal &amp; Compliance
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-[#8E98A8] hover:text-[#FFFFFF] p-1 rounded-lg focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-1.5 p-1 bg-[#181C26] rounded-xl my-4 border border-[#232936]">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => onSelectTab(t.key)}
                className={`py-2 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap ${
                  active
                    ? "bg-[#12151C] text-[#FFFFFF] border border-[#232936]"
                    : "text-[#8E98A8] hover:text-[#FFFFFF]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? "text-[#cef11c]" : ""}`} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="overflow-y-auto text-xs text-[#8E98A8] space-y-3 leading-relaxed pr-1">
          {activeTab === "privacy" && (
            <>
              <h4 className="text-sm font-bold text-[#FFFFFF]">Privacy Policy</h4>
              <p>
                UgaByte collects only essential account and campus hub preferences to match students with verified local sellers and hostels.
              </p>
              <p>
                We never sell personal student data to third-party advertisers. For account removal requests, message our official team{" "}
                <strong className="text-[#cef11c]">{UGABYTE_HANDLE}</strong>.
              </p>
            </>
          )}

          {activeTab === "terms" && (
            <>
              <h4 className="text-sm font-bold text-[#FFFFFF]">Terms of Use</h4>
              <p>
                All listings on UgaByte must represent genuine goods, food, or hostel accommodations around verified university hubs.
              </p>
              <p>
                Peer-to-peer pickups should take place at designated public university halls or campus gates.
              </p>
            </>
          )}

          {activeTab === "cookie" && (
            <>
              <h4 className="text-sm font-bold text-[#FFFFFF]">Cookie Policy</h4>
              <p>
                UgaByte uses lightweight local storage strictly to remember your preferred campus hub, saved items, and Light/Dark theme setting.
              </p>
            </>
          )}

          {activeTab === "refund" && (
            <>
              <h4 className="text-sm font-bold text-[#FFFFFF]">
                Dispute &amp; Refund Policy
              </h4>
              <p>
                Student buyers are encouraged to inspect peer-to-peer items upon campus pickup before completing mobile money or cash payment.
              </p>
            </>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-[#232936] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-bold hover:brightness-105 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
