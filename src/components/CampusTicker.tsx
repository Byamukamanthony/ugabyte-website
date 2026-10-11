import React from "react";
import { MapPin } from "lucide-react";

export const CampusTicker: React.FC = () => {
  const spots = [
    { name: "Makerere", dot: "bg-[#cef11c]" },
    { name: "MUBS Nakawa", dot: "bg-[#FFA800]" },
    { name: "Kyambogo", dot: "bg-[#cef11c]" },
    { name: "Kikoni", dot: "bg-[#cef11c]" },
    { name: "Wandegeya", dot: "bg-[#FFA800]" },
    { name: "Mitchell", dot: "bg-[#cef11c]" },
    { name: "Lumumba", dot: "bg-[#cef11c]" },
  ];

  return (
    <div className="w-full border-b border-[#232936] bg-[#121317] py-2.5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center">
        <div
          className="px-4 md:px-6 hidden md:flex items-center text-[#cef11c]"
          title="Active Campus Hubs"
        >
          <MapPin className="w-4 h-4" />
        </div>
        <div className="overflow-hidden relative flex-1">
          <div className="animate-marquee flex items-center gap-2.5 whitespace-nowrap">
            {[...spots, ...spots, ...spots].map((spot, idx) => (
              <span
                key={`${spot.name}-${idx}`}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151C] border border-[#232936] text-xs font-semibold text-[#FFFFFF]"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${spot.dot}`} />
                <span>{spot.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
