import React, { useState, useEffect } from "react";
import { UgaByteLogo } from "./UgaByteLogo";
import {
  Bell,
  Search,
  LayoutGrid,
  Laptop,
  Shirt,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

export type VideoSceneId = "calendar" | "market" | "hustle";

interface UgaBytePhoneVideoProps {
  scene: VideoSceneId;
  autoCycle?: boolean;
  onSceneChange?: (scene: VideoSceneId) => void;
  onActionClick?: () => void;
  showControls?: boolean;
  className?: string;
}

const SCENES: VideoSceneId[] = ["calendar", "market", "hustle"];

export const UgaBytePhoneVideo: React.FC<UgaBytePhoneVideoProps> = ({
  scene,
  autoCycle = false,
  onSceneChange,
  onActionClick,
  showControls = false,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [selectedDay, setSelectedDay] = useState(25);
  const [calendarView, setCalendarView] = useState<"week" | "month">("week");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "tech" | "fashion">("all");

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= 9) {
          if (autoCycle && onSceneChange) {
            const idx = SCENES.indexOf(scene);
            onSceneChange(SCENES[(idx + 1) % SCENES.length]);
          }
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, autoCycle, scene, onSceneChange]);

  useEffect(() => {
    setElapsed(0);
  }, [scene]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none flex items-center justify-center p-4 ${className}`}
      style={{
        background:
          "radial-gradient(circle at 78% 18%, #e4dfd5 0%, #b8b1a4 38%, #524e46 72%, #191816 100%)",
      }}
    >
      {/* Subtle Studio Rim Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, rgba(9,10,14,0.28) 55%, rgba(9,10,14,0.78) 100%)",
        }}
      />

      {/* 3D Rotating Titanium Smartphone Hardware Frame */}
      <div
        className={`relative h-[86%] max-h-[410px] w-auto aspect-[9/18] rounded-[2.4rem] p-[6px] transition-transform duration-700 ${
          isPlaying ? "animate-phone-orbit" : "animate-phone-orbit-paused"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #52565e 0%, #1d1f24 35%, #0c0d10 70%, #3a3d45 100%)",
          boxShadow:
            "-20px 28px 52px rgba(0, 0, 0, 0.75), inset 0 1px 2px rgba(255,255,255,0.35), 0 0 1px 1px rgba(0,0,0,0.9)",
        }}
      >
        {/* Metallic Right Side Rail & Buttons */}
        <div
          className="absolute -right-[3px] top-20 w-[3px] h-10 rounded-r-sm"
          style={{
            background: "linear-gradient(180deg, #686c75, #23262d, #50545c)",
          }}
        />
        <div
          className="absolute -right-[3px] top-36 w-[3px] h-14 rounded-r-sm"
          style={{
            background: "linear-gradient(180deg, #686c75, #23262d, #50545c)",
          }}
        />

        {/* Inner OLED Screen */}
        <div
          className="phone-oled-screen relative w-full h-full rounded-[2.1rem] overflow-hidden flex flex-col justify-between p-3.5 sm:p-4"
          style={{
            backgroundColor: "#08090C",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* Specular Glass Glare Reflection */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(125deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 38%, transparent 50%)",
            }}
          />

          {/* Top App Header Bar */}
          <div className="relative z-10 flex items-center justify-between pt-0.5 pb-1.5">
            <div className="flex items-center gap-1.5">
              <UgaByteLogo showWordmark={false} className="h-4" />
              <span className="phone-oled-white font-extrabold text-xs tracking-tight">
                UgaByte
              </span>
            </div>
            <Bell className="w-3.5 h-3.5 phone-oled-lime" />
          </div>

          {/* ==============================================================
              VIDEO 1: CAMPUS BOARD CALENDAR & PROMOTING A PARTY OR EVENT
             ============================================================== */}
          {scene === "calendar" && (
            <div className="relative z-10 flex-1 flex flex-col justify-between py-1 space-y-2">
              <div className="space-y-2">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.15em] phone-oled-lime">
                    CAMPUS BOARD CALENDAR
                  </div>
                  <div className="text-xs sm:text-sm font-black phone-oled-white tracking-tight mt-0.5">
                    WEEK OF SEPTEMBER 22 - 28
                  </div>
                </div>

                {/* Week / Month Toggle Row */}
                <div className="flex items-center gap-1.5">
                  <div
                    className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[8px] font-bold phone-oled-white"
                    style={{
                      backgroundColor: "#12151C",
                      border: "1px solid #232936",
                    }}
                  >
                    <ChevronLeft className="w-2.5 h-2.5 phone-oled-muted" />
                    <span>WK 4</span>
                    <ChevronRight className="w-2.5 h-2.5 phone-oled-muted" />
                  </div>

                  <div
                    className="flex items-center rounded-md p-0.5 text-[8px] font-black"
                    style={{
                      backgroundColor: "#12151C",
                      border: "1px solid #232936",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setCalendarView("week")}
                      className="px-2 py-0.5 rounded"
                      style={
                        calendarView === "week"
                          ? { backgroundColor: "#cef11c", color: "#090A0E" }
                          : { color: "#8E98A8" }
                      }
                    >
                      WEEK
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalendarView("month")}
                      className="px-2 py-0.5 rounded"
                      style={
                        calendarView === "month"
                          ? { backgroundColor: "#cef11c", color: "#090A0E" }
                          : { color: "#8E98A8" }
                      }
                    >
                      MONTH
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="pt-1">
                  <div className="grid grid-cols-7 text-center text-[7px] font-bold phone-oled-muted mb-1.5">
                    <span>MO</span>
                    <span>TU</span>
                    <span>WE</span>
                    <span>TH</span>
                    <span>FR</span>
                    <span>SA</span>
                    <span>SU</span>
                  </div>
                  <div className="grid grid-cols-7 text-center items-center text-[10px] font-bold phone-oled-muted">
                    {[22, 23, 24, 25, 26, 27, 28].map((day) => {
                      const active = selectedDay === day;
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setSelectedDay(day)}
                          className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center transition-all ${
                            active ? "font-black" : "phone-oled-muted hover:text-white"
                          }`}
                          style={
                            active
                              ? {
                                  backgroundColor: "#cef11c",
                                  color: "#090A0E",
                                  boxShadow: "0 0 14px rgba(206, 241, 28, 0.55)",
                                }
                              : undefined
                          }
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Promote Card */}
              <div
                className="rounded-xl p-3 space-y-2"
                style={{
                  backgroundColor: "#11141B",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-[11px] font-black phone-oled-white leading-tight uppercase">
                  PROMOTING A PARTY OR EVENT?
                </div>
                <p className="text-[8px] leading-relaxed phone-oled-muted">
                  Get maximum ticket sales by advertising on the Prime Campus Student Network. Approved under 10 minutes.
                </p>
                <button
                  type="button"
                  onClick={onActionClick}
                  className="w-full py-1.5 rounded-lg text-[8px] font-black uppercase tracking-wider flex items-center justify-center gap-1 hover:brightness-105 transition-all"
                  style={{ backgroundColor: "#cef11c", color: "#090A0E" }}
                >
                  <Megaphone className="w-2.5 h-2.5" />
                  <span>ADVERTISE YOUR EVENT</span>
                </button>
              </div>
            </div>
          )}

          {/* ==============================================================
              VIDEO 2: GOT STUFF TO SELL? & BROWSE CATEGORIES
             ============================================================== */}
          {scene === "market" && (
            <div className="relative z-10 flex-1 flex flex-col justify-between py-1 space-y-2">
              {/* Search Bar */}
              <div
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[9px] phone-oled-muted"
                style={{
                  backgroundColor: "#12151C",
                  border: "1px solid #232936",
                }}
              >
                <Search className="w-3 h-3 phone-oled-muted" />
                <span>Find anything on campus...</span>
              </div>

              {/* Got Stuff to Sell Banner */}
              <div
                className="rounded-xl p-3.5 space-y-2.5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(35, 44, 14, 0.9) 0%, rgba(16, 20, 12, 0.95) 100%)",
                  border: "1px solid rgba(206, 241, 28, 0.25)",
                }}
              >
                <div className="text-sm sm:text-base font-black phone-oled-white leading-none uppercase tracking-tight">
                  GOT STUFF
                  <br />
                  TO SELL?
                </div>
                <button
                  type="button"
                  onClick={onActionClick}
                  className="inline-flex px-3 py-1.5 rounded-md text-[8px] font-black uppercase tracking-wider hover:brightness-105 transition-all"
                  style={{ backgroundColor: "#cef11c", color: "#090A0E" }}
                >
                  SELL YOUR ITEM
                </button>
              </div>

              {/* Browse Categories */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold phone-oled-white">
                    Browse Categories
                  </span>
                  <span className="text-[8px] font-black uppercase phone-oled-lime">
                    SEE ALL
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("all")}
                    className="py-2 px-1.5 rounded-lg flex items-center justify-center gap-1 text-[9px] font-bold phone-oled-white"
                    style={
                      selectedCategory === "all"
                        ? {
                            backgroundColor: "rgba(206, 241, 28, 0.14)",
                            border: "1px solid rgba(206, 241, 28, 0.55)",
                          }
                        : {
                            backgroundColor: "#12151C",
                            border: "1px solid #232936",
                          }
                    }
                  >
                    <LayoutGrid className="w-2.5 h-2.5 phone-oled-lime" />
                    <span>All</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("tech")}
                    className="py-2 px-1.5 rounded-lg flex items-center justify-center gap-1 text-[9px] font-bold phone-oled-white"
                    style={
                      selectedCategory === "tech"
                        ? {
                            backgroundColor: "rgba(206, 241, 28, 0.14)",
                            border: "1px solid rgba(206, 241, 28, 0.55)",
                          }
                        : {
                            backgroundColor: "#12151C",
                            border: "1px solid #232936",
                          }
                    }
                  >
                    <Laptop className="w-2.5 h-2.5 phone-oled-muted" />
                    <span>Tech</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("fashion")}
                    className="py-2 px-1.5 rounded-lg flex items-center justify-center gap-1 text-[9px] font-bold phone-oled-white"
                    style={
                      selectedCategory === "fashion"
                        ? {
                            backgroundColor: "rgba(206, 241, 28, 0.14)",
                            border: "1px solid rgba(206, 241, 28, 0.55)",
                          }
                        : {
                            backgroundColor: "#12151C",
                            border: "1px solid #232936",
                          }
                    }
                  >
                    <Shirt className="w-2.5 h-2.5 phone-oled-muted" />
                    <span>Fashion</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==============================================================
              VIDEO 3: TODAY'S ELECTRIC HUSTLE & LIVE CALENDAR SYNC
             ============================================================== */}
          {scene === "hustle" && (
            <div className="relative z-10 flex-1 flex flex-col justify-between py-1 space-y-2">
              <div className="space-y-1.5 pt-0.5">
                <div className="text-xl sm:text-2xl font-black leading-[0.95] tracking-tight uppercase">
                  <span className="block phone-oled-white">TODAY&apos;S</span>
                  <span className="block phone-oled-lime italic">ELECTRIC</span>
                  <span
                    className="block italic"
                    style={{
                      WebkitTextStroke: "1.1px #cef11c",
                      color: "transparent",
                    }}
                  >
                    HUSTLE
                  </span>
                </div>

                <div
                  className="w-8 h-1 rounded-full"
                  style={{ backgroundColor: "#cef11c" }}
                />

                <p className="text-[9px] phone-oled-muted leading-snug max-w-[160px]">
                  Curated daily drops for the campus elite.
                </p>
              </div>

              {/* Bottom Live Calendar Sync Card */}
              <div
                className="rounded-xl p-3 space-y-2"
                style={{
                  backgroundColor: "#11141B",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center justify-between text-[7px] font-bold tracking-wider uppercase">
                  <span className="flex items-center gap-1 phone-oled-lime">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#cef11c" }}
                    />
                    LIVE CALENDAR SYNC
                  </span>
                  <span className="phone-oled-muted">FRI 25 SEP</span>
                </div>

                <div className="text-[11px] font-black italic phone-oled-white tracking-wide">
                  SEPTEMBER 2026
                </div>

                <div className="grid grid-cols-7 text-center text-[7px] font-bold phone-oled-muted">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>

                <div className="grid grid-cols-7 text-center items-center text-[9px] font-bold phone-oled-muted">
                  {[21, 22, 23, 24, 25, 26, 27].map((day) => {
                    const active = day === 25;
                    return (
                      <span
                        key={day}
                        className={`w-5 h-5 mx-auto rounded flex items-center justify-center ${
                          active ? "font-black" : ""
                        }`}
                        style={
                          active
                            ? { backgroundColor: "#cef11c", color: "#090A0E" }
                            : undefined
                        }
                      >
                        {day}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Optional Video Player Bar */}
      {showControls && (
        <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center gap-1.5 text-[#cef11c] hover:opacity-80 focus:outline-none"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>00:0{elapsed} / 00:09</span>
          </button>
          <span className="text-[10px] uppercase tracking-wider text-white/80 font-sans font-bold">
            3D App Reel
          </span>
        </div>
      )}
    </div>
  );
};
