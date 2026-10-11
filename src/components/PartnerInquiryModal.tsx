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
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-md w-full p-6 relative shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8E98A8] hover:text-[#FFFFFF] p-1 rounded-lg focus:outline-none"
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
                className="font-serif text-lg font-bold text-[#FFFFFF]"
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
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8E98A8] mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+256 7XX XXX XXX"
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2.5 text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#8E98A8] mb-1">
                    Campus Hub
                  </label>
                  <select
                    value={hub}
                    onChange={(e) => setHub(e.target.value)}
                    className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-2.5 py-2.5 text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                  >
                    <option value="Makerere University">Makerere</option>
                    <option value="MUBS Nakawa">MUBS Nakawa</option>
                    <option value="Kyambogo University">Kyambogo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8E98A8] mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-2.5 py-2.5 text-xs text-[#FFFFFF] focus:outline-none focus:border-[#cef11c]"
                  >
                    <option value="Food & Snacks">Food &amp; Snacks</option>
                    <option value="Electronics & Tech">Electronics</option>
                    <option value="Hostels">Hostels</option>
                    <option value="Services">Services</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 hover:brightness-105"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Seller Application</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#cef11c]/15 text-[#cef11c] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-lg font-bold text-[#FFFFFF]">
              Application Received
            </h3>

            <p className="text-xs text-[#8E98A8] leading-relaxed max-w-xs mx-auto">
              Thank you, <strong className="text-[#FFFFFF]">{businessName}</strong>. Our <strong className="text-[#cef11c]">{hub}</strong> team will review your store and reach out to {phone}.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-bold"
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
