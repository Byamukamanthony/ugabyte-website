import React, { useState, useEffect } from "react";
import { X, Store, CheckCircle2, Send } from "lucide-react";

interface PartnerInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [hub, setHub] = useState("Makerere University");
  const [category, setCategory] = useState("Food & Snacks");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4"
      onClick={onClose}
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
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8E98A8] hover:text-[#FFFFFF] p-1.5 rounded-lg focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#cef11c]/15 border border-[#cef11c]/30 flex items-center justify-center text-[#cef11c]">
                <Store className="w-4 h-4" />
              </div>
              <h3
                id="partner-modal-title"
                className="text-base sm:text-lg font-bold text-[#FFFFFF]"
              >
                Become a Campus Seller
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#8E98A8] mb-1">
                  Business / Store Name *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Kikoni Grill Hub"
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8E98A8] mb-1">
                  Contact Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +256 700 000000"
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8E98A8] mb-1">
                  Primary Campus Hub
                </label>
                <select
                  value={hub}
                  onChange={(e) => setHub(e.target.value)}
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                >
                  <option value="Makerere University">Makerere University (Main &amp; Kikoni)</option>
                  <option value="MUBS Nakawa">MUBS Nakawa</option>
                  <option value="Kyambogo University">Kyambogo University</option>
                  <option value="Other Hub">Other Kampala Campus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8E98A8] mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                >
                  <option value="Food & Snacks">Food, Snacks &amp; Drinks</option>
                  <option value="Hostel & Accommodation">Hostels &amp; Rentals</option>
                  <option value="Tech & Electronics">Electronics &amp; Gadgets</option>
                  <option value="Printing & Stationery">Printing &amp; Academic</option>
                  <option value="Fashion & Thrift">Fashion &amp; Campus Thrift</option>
                  <option value="Services">Services &amp; Repairs</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 min-h-[46px] rounded-xl bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Submit Partner Request</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#cef11c]/20 border border-[#cef11c] text-[#cef11c] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#FFFFFF]">Request Received!</h3>
            <p className="text-xs text-[#8E98A8] max-w-xs mx-auto">
              The UgaByte merchant onboarding team will connect with <strong className="text-[#FFFFFF]">{phone}</strong> via WhatsApp within 24 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 min-h-[44px] rounded-full bg-[#181C26] border border-[#232936] text-xs font-bold text-[#FFFFFF] hover:border-[#cef11c]/40 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
