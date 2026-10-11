import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Smartphone,
  MapPin,
  ShieldCheck,
  AtSign,
} from "lucide-react";
import { UGABYTE_APP_META, UGABYTE_HANDLE } from "../config/ugabyte";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Smartphone,
      q: "What is UgaByte?",
      a: "The all-in-one campus app for student deals, 0% fee marketplace trading, events, and gigs.",
    },
    {
      icon: MapPin,
      q: "Campuses?",
      a: "Makerere, MUBS Nakawa, and Kyambogo (UCU & MUST next).",
    },
    {
      icon: ShieldCheck,
      q: "APK Security?",
      a: `Signed ${UGABYTE_APP_META.version} (${UGABYTE_APP_META.fileSize}) with SHA-256 verification, plus instant Web App access.`,
    },
    {
      icon: AtSign,
      q: "Support?",
      a: `DM ${UGABYTE_HANDLE} on X, Instagram, TikTok, or Facebook.`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FAQ</span>
        </span>
      </div>

      <div className="space-y-2.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const Icon = faq.icon;
          return (
            <div
              key={faq.q}
              className="bg-[#12151C] border border-[#232936] rounded-xl overflow-hidden transition-colors hover:border-[#323B4E]"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-[#FFFFFF] focus:outline-none focus-visible:bg-[#181C26]"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#cef11c] shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8E98A8] transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? "rotate-180 text-[#cef11c]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs text-[#8E98A8] border-t border-[#232936]/60 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
