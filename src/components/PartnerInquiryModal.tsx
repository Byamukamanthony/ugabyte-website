import React, { useState, useEffect } from "react";
import { X, Handshake, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { UGABYTE_PHONE, UGABYTE_PHONE_CLEAN } from "../config/ugabyte";

interface PartnerInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [hub, setHub] = useState("Makerere University (Main/Kikoni)");
  const [category, setCategory] = useState("Food & Snacks");
  const [details, setDetails] = useState("");
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
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !phone) return;
    setSubmitted(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello UgaByte Partnerships! My business is ${businessName} (${category}) at ${hub}. My contact is ${phone}. I would like to partner with UgaByte.`
    );
    window.open(`https://wa.me/${UGABYTE_PHONE_CLEAN}?text=${message}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
    >
      <div
        className="bg-[#12151C] border border-[#232936] rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8E98A8] hover:text-[#FFFFFF] p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2 mb-2 text-[#cef11c]">
              <Handshake className="w-5 h-5" />
              <h3
                id="partner-modal-title"
                className="text-lg font-bold text-[#FFFFFF]"
              >
                Campus Partner Inquiry
              </h3>
            </div>
            <p className="text-xs text-[#8E98A8] mb-5 leading-relaxed">
              Connect directly with our campus operations team to launch your student discounts, product listings, or campus drops.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-[11px] font-black text-[#8E98A8] uppercase tracking-wider mb-1">
                  Business / Hustle Name *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Kikoni Quick Bites / Derrick Repairs"
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#FFFFFF] placeholder-[#8E98A8]/60 focus:border-[#cef11c] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-[#8E98A8] uppercase tracking-wider mb-1">
                  Your WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="070... or +256 7..."
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#FFFFFF] placeholder-[#8E98A8]/60 focus:border-[#cef11c] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black text-[#8E98A8] uppercase tracking-wider mb-1">
                    Primary Campus Hub
                  </label>
                  <select
                    value={hub}
                    onChange={(e) => setHub(e.target.value)}
                    className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-2.5 py-2 text-xs text-[#FFFFFF] focus:border-[#cef11c] focus:outline-none transition-colors"
                  >
                    <option value="Makerere University (Main/Kikoni)">Makerere (Main/Kikoni)</option>
                    <option value="MUBS Nakawa">MUBS Nakawa</option>
                    <option value="Kyambogo University">Kyambogo University</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#8E98A8] uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-2.5 py-2 text-xs text-[#FFFFFF] focus:border-[#cef11c] focus:outline-none transition-colors"
                  >
                    <option value="Food & Snacks">Food &amp; Snacks</option>
                    <option value="Electronics & Tech">Electronics &amp; Tech</option>
                    <option value="Hostel & Accommodation">Hostel / Sublets</option>
                    <option value="Apparel & Thrift">Apparel &amp; Thrift</option>
                    <option value="Student Printing & Stationery">Printing / Stationery</option>
                    <option value="Other Campus Services">Other Campus Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black text-[#8E98A8] uppercase tracking-wider mb-1">
                  What would you like to offer students? (Optional)
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. 15% discount on food orders, or free delivery in Lumumba Hall..."
                  className="w-full bg-[#181C26] border border-[#232936] rounded-xl px-3.5 py-2 text-xs text-[#FFFFFF] placeholder-[#8E98A8]/60 focus:border-[#cef11c] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#cef11c] text-[#090A0E] text-xs font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Submit Partnership Inquiry</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#cef11c]/20 text-[#cef11c] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#FFFFFF]">
              Mwebale Nnyo! Inquiry Received
            </h3>

            <p className="text-xs sm:text-sm text-[#8E98A8] leading-relaxed max-w-sm mx-auto">
              Thank you for reaching out, <strong className="text-[#FFFFFF]">{businessName}</strong>. Our campus field lead for <strong className="text-[#cef11c]">{hub}</strong> will review your details and reach out on WhatsApp ({phone}) within 2 hours.
            </p>

            <div className="pt-3 space-y-2">
              <button
                onClick={handleOpenWhatsAppDirect}
                className="w-full py-3 rounded-full bg-[#25D366] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Chat on WhatsApp Directly</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full bg-[#181C26] text-[#8E98A8] hover:text-[#FFFFFF] text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
