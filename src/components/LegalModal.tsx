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
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-card border border-subtle rounded-2xl max-w-lg w-full p-6 relative max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-subtle">
          <h3 id="legal-modal-title" className="text-base font-bold text-primary-ink">
            Legal &amp; Compliance
          </h3>
          <button
            onClick={onClose}
            className="text-secondary-ink hover:text-primary-ink p-1 rounded-lg focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-1.5 p-1 bg-surface rounded-xl my-4 border border-subtle">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => onSelectTab(t.key)}
                className={`py-2 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap ${
                  active
                    ? "bg-card text-primary-ink border border-subtle"
                    : "text-secondary-ink hover:text-primary-ink"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? "text-accent" : ""}`} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="overflow-y-auto text-xs text-secondary-ink space-y-3 leading-relaxed pr-1">
          {activeTab === "privacy" && (
            <>
              <h4 className="text-sm font-bold text-primary-ink">Privacy Policy</h4>
              <p>
                UgaByte collects only essential account and campus hub preferences to match students with verified local sellers and hostels.
              </p>
              <p>
                We never sell personal student data to third-party advertisers. For account removal requests, message our official team <strong className="text-accent">{UGABYTE_HANDLE}</strong>.
              </p>
            </>
          )}

          {activeTab === "terms" && (
            <>
              <h4 className="text-sm font-bold text-primary-ink">Terms of Use</h4>
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
              <h4 className="text-sm font-bold text-primary-ink">Cookie Policy</h4>
              <p>
                UgaByte uses lightweight local storage strictly to remember your preferred campus hub, saved items, and Light/Dark theme setting.
              </p>
            </>
          )}

          {activeTab === "refund" && (
            <>
              <h4 className="text-sm font-bold text-primary-ink">Dispute &amp; Refund Policy</h4>
              <p>
                Student buyers are encouraged to inspect peer-to-peer items upon campus pickup before completing mobile money or cash payment.
              </p>
            </>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-subtle flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg btn-primary-lime text-xs font-bold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
