import React, { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { UGABYTE_CONTACT_EMAIL, UGABYTE_PHONE } from "../config/ugabyte";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is UgaByte?",
      a: "UgaByte is a campus-focused digital platform built for university students and the businesses around them. It brings together campus deals, peer marketplace trading, event discovery, student gigs, and local business offers into one unified application.",
    },
    {
      q: "Who is UgaByte for?",
      a: "UgaByte is built for undergraduate and postgraduate university students, student entrepreneurs, campus creators, and local businesses operating in and around Ugandan university campuses.",
    },
    {
      q: "Can I use UgaByte without downloading the app?",
      a: "Yes. You can access the official UgaByte Web App directly in any browser on your phone, tablet, or laptop. It works as a lightweight Progressive Web App (PWA) with zero mandatory install.",
    },
    {
      q: "Where can I download the Android app?",
      a: "You can download the official Android APK directly from this website. The APK weighs approximately 13.8MB, runs on Android 8.0 and above, and is hosted on our secure local CDN.",
    },
    {
      q: "Is UgaByte free?",
      a: "Yes. Creating an account, browsing campus deals, listing items in the peer marketplace, and accessing campus event passes is completely free for students. We charge zero percent listing fees on personal student trades.",
    },
    {
      q: "What can I do on UgaByte?",
      a: "On UgaByte, you can discover flash food and service drops, buy and sell textbooks, electronics, and hostel items, discover and RSVP to campus events, find student freelance gigs, and connect with trusted peers.",
    },
    {
      q: "Can I sell products as a student?",
      a: "Absolutely. Student-to-student commerce is one of UgaByte's core pillars. You can list your unused electronics, textbooks, room appliances, or student services in seconds.",
    },
    {
      q: "Can businesses and campus stalls promote themselves?",
      a: "Yes! Campus-area food stalls, bookstores, tech repair shops, and commercial service providers can partner with UgaByte to publish verified campus drops and connect directly with student customers.",
    },
    {
      q: "How do I contact UgaByte?",
      a: `You can reach our team via email at ${UGABYTE_CONTACT_EMAIL} or message our campus team directly on WhatsApp / Phone at ${UGABYTE_PHONE}.`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          Common Questions
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
          Everything You Need to Know
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.q}
              className="bg-[#12151C] border border-[#232936] rounded-xl overflow-hidden transition-colors hover:border-[#323B4E]"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#FFFFFF] focus:outline-none focus-visible:bg-[#181C26]"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8E98A8] transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? "rotate-180 text-[#cef11c]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#8E98A8] border-t border-[#232936]/60 pt-3 leading-relaxed">
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
