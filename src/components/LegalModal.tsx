import React, { useState, useEffect } from "react";
import { X, Shield, FileText, Cookie, RotateCcw } from "lucide-react";
import { UGABYTE_CONTACT_EMAIL } from "../config/ugabyte";

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

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#232936] shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#cef11c]" />
            <h3 id="legal-modal-title" className="text-base sm:text-lg font-bold text-[#FFFFFF]">
              UgaByte Policies &amp; Legal Notices
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8E98A8] hover:text-[#FFFFFF] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex items-center gap-1 p-2 bg-[#181C26] border-b border-[#232936] overflow-x-auto shrink-0 text-xs font-bold">
          <button
            onClick={() => onSelectTab("privacy")}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === "privacy"
                ? "bg-[#cef11c] text-[#090A0E]"
                : "text-[#8E98A8] hover:text-[#FFFFFF]"
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onSelectTab("terms")}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === "terms"
                ? "bg-[#cef11c] text-[#090A0E]"
                : "text-[#8E98A8] hover:text-[#FFFFFF]"
            }`}
          >
            Terms &amp; Conditions
          </button>
          <button
            onClick={() => onSelectTab("cookie")}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === "cookie"
                ? "bg-[#cef11c] text-[#090A0E]"
                : "text-[#8E98A8] hover:text-[#FFFFFF]"
            }`}
          >
            Cookie Policy
          </button>
          <button
            onClick={() => onSelectTab("refund")}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === "refund"
                ? "bg-[#cef11c] text-[#090A0E]"
                : "text-[#8E98A8] hover:text-[#FFFFFF]"
            }`}
          >
            Refund Policy
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#8E98A8] leading-relaxed">
          {activeTab === "privacy" && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-[#FFFFFF]">Privacy Policy</h4>
              <p>
                Last updated: October 2026. UgaByte Technologies ("UgaByte", "we", "us") values student and user privacy across our digital applications and website.
              </p>
              <h5 className="font-bold text-[#FFFFFF] text-xs uppercase tracking-wider pt-2">
                1. Information We Collect
              </h5>
              <p>
                We only collect information necessary to enable university-specific marketplace discovery and account verification. This may include your phone number (for SMS/WhatsApp OTP), preferred campus, and student listings you choose to publish.
              </p>
              <h5 className="font-bold text-[#FFFFFF] text-xs uppercase tracking-wider pt-2">
                2. Low-Data &amp; Zero Tracking Philosophy
              </h5>
              <p>
                We do not sell student contact lists, install intrusive third-party behavioral trackers, or monitor non-UgaByte browsing activity. Data is cached locally on your device to minimize mobile data expenditure.
              </p>
              <h5 className="font-bold text-[#FFFFFF] text-xs uppercase tracking-wider pt-2">
                3. Contact for Inquiries
              </h5>
              <p>
                For data access or account removal requests, contact{" "}
                <a href={`mailto:${UGABYTE_CONTACT_EMAIL}`} className="text-[#cef11c] underline">
                  {UGABYTE_CONTACT_EMAIL}
                </a>.
              </p>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-[#FFFFFF]">Terms &amp; Conditions</h4>
              <p>Last updated: October 2026. By accessing UgaByte, you agree to these terms.</p>
              <h5 className="font-bold text-[#FFFFFF] text-xs uppercase tracking-wider pt-2">
                1. Peer-to-Peer Trading Conduct
              </h5>
              <p>
                UgaByte acts as a discovery layer connecting campus students and merchants. Students must accurately represent items listed (condition, pricing, functionality). Stolen goods, prohibited substances, or fraudulent offers are strictly banned.
              </p>
              <h5 className="font-bold text-[#FFFFFF] text-xs uppercase tracking-wider pt-2">
                2. Safe Exchange Guidelines
              </h5>
              <p>
                All physical exchanges of peer goods must occur in designated public campus zones (e.g., University main gates, hostel security desks, or student centers).
              </p>
              <h5 className="font-bold text-[#FFFFFF] text-xs uppercase tracking-wider pt-2">
                3. Account Integrity
              </h5>
              <p>
                Accounts violating community standards face immediate blacklisting across the platform registry.
              </p>
            </div>
          )}

          {activeTab === "cookie" && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-[#FFFFFF]">Cookie &amp; Local Storage Policy</h4>
              <p>Last updated: October 2026.</p>
              <p>
                UgaByte uses essential first-party cookies and local storage (<code className="text-[#cef11c]">localStorage</code>) strictly to remember your preferred campus hub, theme preferences, and authentication session tokens.
              </p>
              <p>
                We do not use advertising network tracking cookies or cross-site profiling scripts.
              </p>
            </div>
          )}

          {activeTab === "refund" && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-[#FFFFFF]">Refund &amp; Transaction Policy</h4>
              <p>Last updated: October 2026.</p>
              <p>
                UgaByte peer marketplace listings are handled directly between student buyers and sellers. Students are strongly advised to inspect electronics, appliances, and textbooks in person before handing over cash or mobile money.
              </p>
              <p>
                For sponsored merchant flash drops or ticket passes processed through official UgaByte partnerships, refunds are governed by the specific partner organizer's verified campus policy.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#232936] bg-[#090A0E] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
