import React from "react";
import { Search, ShoppingBag, Tag, Ticket, Users, ArrowRight } from "lucide-react";

interface ForStudentsProps {
  onSelectAction?: (action: string) => void;
}

export const ForStudents: React.FC<ForStudentsProps> = ({ onSelectAction }) => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      icon: Search,
      desc: "Unearth hidden hostel discounts, group transport passes, and cheap food joints near your hall.",
      cta: "REAL-TIME FEEDS",
      actionKey: "discover",
    },
    {
      num: "02",
      title: "Buy",
      icon: ShoppingBag,
      desc: "Acquire verified laptops, past-paper revisions, and room fans safely from graduating seniors.",
      cta: "PEER PROTECTION",
      actionKey: "buy",
    },
    {
      num: "03",
      title: "Sell",
      icon: Tag,
      desc: "Snap a 2-second photo of old textbooks or electronics. List instantly to 10,000+ campus peers.",
      cta: "ZERO COMMISSION",
      actionKey: "sell",
    },
    {
      num: "04",
      title: "Attend",
      icon: Ticket,
      desc: "RSVP to guild debates, freshers balls, code sprints, and cultural nights with one-tap QR entry.",
      cta: "DIGITAL PASSES",
      actionKey: "attend",
    },
    {
      num: "05",
      title: "Connect",
      icon: Users,
      desc: "Partner with classmates on startups, study groups, campus projects, and paid side-hustles.",
      cta: "CAMPUS NETWORK",
      actionKey: "connect",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#232936]" id="students">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[11px] font-black text-[#cef11c] uppercase tracking-wider">
          Built Around Student Life
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight">
          Your Entire Campus Playbook in Five Steps
        </h2>
        <p className="text-sm sm:text-base text-[#8E98A8] mt-2 leading-relaxed">
          Everything designed for immediate utility without friction.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="p-5 sm:p-6 rounded-xl bg-[#12151C] border border-[#232936] hover:border-[#cef11c]/50 flex flex-col justify-between transition-all group hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                <span className="text-2xl font-black text-[#323B4E] group-hover:text-[#cef11c] transition-colors tabular-nums">
                  {step.num}
                </span>
                <div className="w-9 h-9 rounded-lg bg-[#181C26] text-[#cef11c] flex items-center justify-center border border-[#232936]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#FFFFFF]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8E98A8] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <button
                onClick={() => onSelectAction && onSelectAction(step.actionKey)}
                className="text-[11px] font-black text-[#cef11c] mt-6 flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider text-left focus:outline-none"
              >
                <span>{step.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
