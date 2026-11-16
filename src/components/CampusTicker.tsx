import React from "react";

export const CampusTicker: React.FC = () => {
  const spots = [
    "Makerere",
    "MUBS Nakawa",
    "Kyambogo",
    "Kikoni",
    "Wandegeya",
    "Mitchell",
    "Lumumba",
  ];

  return (
    <div className="w-full border-b border-[#232936]/80 bg-[#121317] py-3 overflow-hidden select-none relative">
      {/* Edge gradient masks */}
      <div className="ticker-mask-left absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#121317] to-transparent z-10 pointer-events-none" />
      <div className="ticker-mask-right absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#121317] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center">
        <div className="overflow-hidden relative flex-1">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
            {[...spots, ...spots, ...spots].map((spot, idx) => (
              <div
                key={`${spot}-${idx}`}
                className="inline-flex items-center gap-6 sm:gap-8 text-xs font-medium tracking-wide text-[#8E98A8]"
              >
                <span className="text-[#e3e2e8]">{spot}</span>
                <span aria-hidden="true" className="text-[#8E98A8]/40">
                  ·
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
