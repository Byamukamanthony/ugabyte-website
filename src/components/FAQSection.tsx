import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { UGABYTE_APP_META, UGABYTE_HANDLE } from "../config/ugabyte";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is UgaByte Inc.?",
      a: "UgaByte Inc. builds digital products and platforms that connect people with opportunities, services, deals, and commerce—empowering students and campus communities across Uganda.",
    },
    {
      q: "Which universities are supported?",
      a: "Active across Makerere University, MUBS Nakawa, and Kyambogo University, with UCU and MUST rolling out next.",
    },
    {
      q: "Is the Android APK safe to install?",
      a: `Yes. The official ${UGABYTE_APP_META.version} APK (${UGABYTE_APP_META.fileSize}) is signed and verified via SHA-256 checksum, or you can use the Web App instantly in any browser.`,
    },
    {
      q: "How do I reach the UgaByte Inc. team?",
      a: `Connect with us via ${UGABYTE_HANDLE} on X (Twitter), Instagram, TikTok, and Facebook.`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FAQ</span>
        </span>
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight text-balance">
          Quick Answers
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
