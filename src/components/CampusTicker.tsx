import React from "react";

export const CampusTicker: React.FC = () => {
  const spots = [
    { name: "Makerere Guild", dot: "bg-[#cef11c]" },
    { name: "Kikoni Eats", dot: "bg-[#cef11c]" },
    { name: "MUBS Arena", dot: "bg-[#FFA800]" },
    { name: "Mitchell Complex", dot: "bg-[#cef11c]" },
    { name: "Wandegeya Market Gate", dot: "bg-[#cef11c]" },
    { name: "Lumumba Innovation Hub", dot: "bg-[#FFA800]" },
    { name: "Kyambogo Tech Garage", dot: "bg-[#cef11c]" },
  ];

  return (
    <div className="w-full border-b border-[#232936] bg-[#121317] py-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="text-[10px] font-black uppercase tracking-widest text-[#8E98A8] px-4 md:px-6 whitespace-nowrap hidden md:block">
          Trusted Campus Spots:
        </div>
        <div className="overflow-hidden relative flex-1">
          <div className="animate-marquee flex items-center gap-3 whitespace-nowrap">
            {/* Duplicated list for seamless looping */}
            {[...spots, ...spots, ...spots].map((spot, idx) => (
              <span
                key={`${spot.name}-${idx}`}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151C] border border-[#232936] text-xs font-semibold text-[#FFFFFF]"
              >
                <span className={`w-2 h-2 rounded-full ${spot.dot}`} />
                <span>{spot.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
