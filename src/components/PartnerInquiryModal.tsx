import React, { useState, useEffect } from "react";
import {
  X,
  Store,
  CheckCircle2,
  Send,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import {
  UGABYTE_WEB_APP_URL,
  UGABYTE_SOCIALS,
  UGABYTE_HANDLE,
} from "../config/ugabyte";
import { supabase } from "../services/liveFeed";

interface PartnerInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function sanitizeInput(val: string, maxLen = 100): string {
  return val
    .replace(/[\u0000-\u001F\u007F<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

function isValidPhone(raw: string): boolean {
  const compact = raw.replace(/[\s\-()]/g, "");
  // Supports Ugandan (+2567..., 07..., 03..., 02...) and standard E.164 numbers
  return /^(\+?256|0)[237]\d{8}$/.test(compact) || /^\+?[1-9]\d{8,14}$/.test(compact);
}

export const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [hub, setHub] = useState("Makerere University");
  const [category, setCategory] = useState("Food & Snacks");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [savedToCloud, setSavedToCloud] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

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

  const cleanName = sanitizeInput(businessName, 80);
  const cleanPhone = sanitizeInput(phone, 24);
  const partnerSummary = `UgaByte Merchant Partner Request — Business: ${cleanName} | Category: ${category} | Hub: ${hub} | WhatsApp: ${cleanPhone}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (cleanName.length < 2) {
      setErrorMsg("Please enter a valid business or store name (at least 2 characters).");
      return;
    }

    if (!isValidPhone(cleanPhone)) {
      setErrorMsg("Please enter a valid Ugandan or international WhatsApp number (e.g. +256 700 000000 or 0770 000000).");
      return;
    }

    setSubmitting(true);
    let recorded = false;

    try {
      const { error } = await supabase.from("partner_inquiries").insert([
        {
          business_name: cleanName,
          phone: cleanPhone,
          campus_hub: hub,
          category,
          source: "ugabyte-website",
        },
      ]);
      if (!error) {
        recorded = true;
      }
    } catch {
      recorded = false;
    }

    setSavedToCloud(recorded);
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleCopyBrief = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(partnerSummary);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMsg(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-md w-full p-4 sm:p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-[#8E98A8] hover:text-[#FFFFFF] p-1.5 rounded-lg focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#cef11c]/15 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c]">
                <Store className="w-4 h-4" />
              </div>
              <h3
                id="partner-modal-title"
                className="text-base sm:text-lg font-bold text-[#FFFFFF]"
              >
                Partner with UgaByte
              </h3>
            </div>
            <p className="text-xs text-[#8E98A8] mb-4 leading-relaxed">
              Share your store details below to prepare your campus merchant listing or publish directly in the UgaByte Web App.
            </p>

            {errorMsg && (
              <div
                role="alert"
                className="mb-3.5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start gap-2"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              <div>
                <label
                  htmlFor="partner-business-name"
                  className="block text-xs font-semibold text-[#8E98A8] mb-1"
                >
                  Business / Store Name *
                </label>
                <input
                  id="partner-business-name"
                  type="text"
                  required
                  maxLength={80}
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Kikoni Grill Hub"
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                />
              </div>

              <div>
                <label
                  htmlFor="partner-phone"
                  className="block text-xs font-semibold text-[#8E98A8] mb-1"
                >
                  Contact Number (WhatsApp) *
                </label>
                <input
                  id="partner-phone"
                  type="tel"
                  required
                  maxLength={24}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +256 770 000000"
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                />
              </div>

              <div>
                <label
                  htmlFor="partner-hub"
                  className="block text-xs font-semibold text-[#8E98A8] mb-1"
                >
                  Primary Campus Hub
                </label>
                <select
                  id="partner-hub"
                  value={hub}
                  onChange={(e) => setHub(e.target.value)}
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                >
                  <option value="Makerere University">Makerere University (Main &amp; Kikoni)</option>
                  <option value="MUBS Nakawa">MUBS Nakawa</option>
                  <option value="Kyambogo University">Kyambogo University</option>
                  <option value="UCU Mukono">Uganda Christian University (UCU)</option>
                  <option value="MUST Mbarara">Mbarara University (MUST)</option>
                  <option value="Other Uganda Campus">Other Uganda Campus</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="partner-category"
                  className="block text-xs font-semibold text-[#8E98A8] mb-1"
                >
                  Category
                </label>
                <select
                  id="partner-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                >
                  <option value="Food & Snacks">Food, Snacks &amp; Drinks</option>
                  <option value="Hostel & Accommodation">Hostels &amp; Rentals</option>
                  <option value="Tech & Electronics">Electronics &amp; Gadgets</option>
                  <option value="Printing & Stationery">Printing &amp; Academic</option>
                  <option value="Fashion & Thrift">Fashion &amp; Campus Thrift</option>
                  <option value="Internships & Gigs">Student Internships &amp; Gigs</option>
                  <option value="Services">Services &amp; Repairs</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 min-h-[46px] rounded-xl bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md disabled:opacity-60"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>{submitting ? "Preparing..." : "Continue Merchant Setup"}</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-3 space-y-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#cef11c]/20 border border-[#cef11c] text-[#cef11c] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#FFFFFF]">
                {savedToCloud ? "Merchant Request Logged!" : "Merchant Details Ready!"}
              </h3>
              <p className="text-xs text-[#8E98A8] leading-relaxed">
                You can publish deals or items immediately inside the UgaByte Web App, or send your store summary directly to <strong className="text-[#FFFFFF]">{UGABYTE_HANDLE}</strong> for verified partner badge support.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#181C26] border border-[#232936] text-[11px] text-[#e3e2e8] font-mono break-words">
              {partnerSummary}
            </div>

            <div className="space-y-2.5">
              <a
                href={UGABYTE_WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 min-h-[44px] rounded-xl bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 transition-all"
              >
                <span>Post Listing Now in Web App</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="py-2.5 px-3 min-h-[42px] rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-xs font-bold text-[#FFFFFF] flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copiedBrief ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#cef11c]" />
                      <span className="text-[#cef11c]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#cef11c]" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>

                <a
                  href={UGABYTE_SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 min-h-[42px] rounded-xl bg-[#181C26] border border-[#232936] hover:border-[#cef11c]/50 text-xs font-bold text-[#FFFFFF] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>DM {UGABYTE_HANDLE}</span>
                  <ExternalLink className="w-3 h-3 text-[#cef11c]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
