import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { UGABYTE_APP_META, UGABYTE_HANDLE } from "../config/ugabyte";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is UgaByte?",
      a: "Uganda's student platform for campus deals, affordable food, zero-fee trading, events, and gigs.",
    },
    {
      q: "Which universities are supported?",
      a: "Makerere, MUBS Nakawa, and Kyambogo are live, with UCU and MUST rolling out next.",
    },
    {
      q: "Are there marketplace fees?",
      a: "No. Personal student listings cost UGX 0 with 0% commission.",
    },
    {
      q: "How do merchants post offers?",
      a: "Click 'Partner with UgaByte' above or publish directly inside the Web App.",
    },
    {
      q: "Web App or Android APK?",
      a: `Open the Web App in any browser or install ${UGABYTE_APP_META.fileName} (${UGABYTE_APP_META.version}, ${UGABYTE_APP_META.fileSize}, ${UGABYTE_APP_META.minSdk}).`,
    },
    {
      q: "How do I contact UgaByte?",
      a: `Message ${UGABYTE_HANDLE} on X, Instagram, TikTok, or Facebook.`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-20 scroll-mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FAQ</span>
        </span>
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight text-balance">
          Common Questions
        </h2>
      </div>

      <div className="space-y-2.5 sm:space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.q}
              className="bg-[#12151C] border border-[#232936] rounded-xl overflow-hidden transition-colors hover:border-[#323B4E]"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 min-h-[52px] text-left flex items-center justify-between text-xs sm:text-base font-bold text-[#FFFFFF] focus:outline-none focus-visible:bg-[#181C26] active:bg-[#181C26]"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#8E98A8] transition-transform duration-200 shrink-0 ml-3 sm:ml-4 ${
                    isOpen ? "rotate-180 text-[#cef11c]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#8E98A8] border-t border-[#232936]/60 pt-3 leading-relaxed">
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
