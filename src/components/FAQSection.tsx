import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { UGABYTE_APP_META, UGABYTE_HANDLE } from "../config/ugabyte";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is UgaByte and who does it serve in Uganda?",
      a: "UgaByte is a digital platform built for university students, campus communities, and local businesses across Uganda. It connects users with verified student discounts, affordable campus food, a zero-fee peer marketplace, live university events, and paid gigs or internships.",
    },
    {
      q: "Which Ugandan universities and campus hubs are supported?",
      a: "UgaByte is active across Makerere University (Main Campus, Kikoni & Wandegeya), MUBS Nakawa, and Kyambogo University (Banda), with Uganda Christian University (UCU) and Mbarara University (MUST) rolling out next.",
    },
    {
      q: "Does UgaByte charge commission on student marketplace sales?",
      a: "No. Listing second-hand electronics, calculators, textbooks, or hostel items on the UgaByte Peer Marketplace costs UGX 0, and UgaByte takes 0% commission from student sellers.",
    },
    {
      q: "How can local restaurants, hostels, or merchants contribute offers?",
      a: "Campus-area restaurants, print shops, hostels, and employers can click 'Partner with UgaByte' in the Merchants section or publish offers directly inside the UgaByte Web App to reach nearby students.",
    },
    {
      q: "How do I access UgaByte—Web App or Android APK?",
      a: `You can launch the UgaByte Web App instantly in any mobile or desktop browser with zero installation, or download the verified Android package (${UGABYTE_APP_META.fileName}, ${UGABYTE_APP_META.version}, ${UGABYTE_APP_META.fileSize}, ${UGABYTE_APP_META.minSdk}) verified via SHA-256 checksum.`,
    },
    {
      q: "How do I contact the official UgaByte team?",
      a: `Reach out through our verified official social channels under ${UGABYTE_HANDLE} on X (Twitter), Instagram, TikTok, and Facebook.`,
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
          Frequently Asked Questions About UgaByte
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
