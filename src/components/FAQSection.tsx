import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { UGABYTE_HANDLE } from "../config/ugabyte";

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
      q: "How do I install the UgaByte App?",
      a: "Tap 'Install App' anywhere on this page for one-tap installation to your phone, or open ugabyte.vercel.app directly.",
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
    <section className="py-16 sm:py-24 scroll-mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
      <div className="text-center mb-10 sm:mb-12 space-y-2">
        <span className="text-[11px] font-bold text-[#cef11c] uppercase tracking-widest">
          FAQ
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
          Common Questions
        </h2>
      </div>

      <div className="border-y border-[#232936]/80 divide-y divide-[#232936]/80">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.q}>
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-4 sm:py-5 min-h-[52px] text-left flex items-center justify-between text-sm sm:text-base font-semibold text-[#FFFFFF] hover:text-[#cef11c] transition-colors focus:outline-none focus-visible:text-[#cef11c]"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#8E98A8] transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? "rotate-180 text-[#cef11c]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-5 text-xs sm:text-sm text-[#8E98A8] leading-relaxed pr-8">
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
