import React from "react";
import { Download, KeyRound, MapPin, Sparkles } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Download APK",
      desc: "Grab the lightweight, optimized APK directly from our CDN or access the PWA via browser.",
      meta: "Android 8.0+ · 13.8MB",
      icon: Download,
    },
    {
      num: "02",
      title: "Quick Sign Up",
      desc: "Verify via WhatsApp OTP or your student webmail. No endless verification forms.",
      meta: "Instant SMS / OTP Auth",
      icon: KeyRound,
    },
    {
      num: "03",
      title: "Select Campus",
      desc: "Pick your university (Makerere, MUBS, Kyambogo) and primary hostel zone for localized feeds.",
      meta: "Custom localized feed",
      icon: MapPin,
    },
    {
      num: "04",
      title: "Unlock Drops",
      desc: "Claim live flash coupons, trade goods safely at main gates, and RSVP to campus events.",
      meta: "Live updates every hour",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="how-it-works">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          Zero Friction
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
          From Download to First Drop in 60 Seconds
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="relative flex flex-col justify-between p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/40 transition-colors"
            >
              <div>
                <div className="text-3xl font-black text-[#cef11c] mb-3 tabular-nums">
                  {step.num}
                </div>
                <div className="w-8 h-8 rounded bg-[#181C26] text-[#cef11c] flex items-center justify-center border border-[#232936] mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#FFFFFF] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8E98A8] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#232936] text-[11px] text-[#8E98A8] font-medium">
                {step.meta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
