"use client";

import React, { useState, useRef } from "react";
import { Sparkles, Sun, Moon, Flame } from "lucide-react";

export default function AtmosphereMood() {
  const [moodPreset, setMoodPreset] = useState<"dusk" | "midnight" | "candle">("midnight");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const floatingWords = [
    { text: "GOOD FOOD", depth: 40, color: "text-fursat-offwhite", pos: "top-12 left-8 md:top-20 md:left-24" },
    { text: "GOOD DRINKS", depth: -35, color: "text-fursat-gold-light", pos: "top-28 right-8 md:top-36 md:right-28" },
    { text: "GOOD COMPANY", depth: 60, color: "text-fursat-amber", pos: "bottom-32 left-10 md:bottom-36 md:left-32" },
    { text: "GOOD TIMES", depth: -50, color: "text-fursat-cream", pos: "bottom-14 right-10 md:bottom-16 md:right-36" },
  ];

  const moodStyles = {
    dusk: {
      bgGlow: "from-amber-600/20 via-orange-900/10 to-transparent",
      accent: "text-amber-300",
      label: "Golden Dusk Hour (7 PM)",
    },
    midnight: {
      bgGlow: "from-fursat-amber/25 via-fursat-copper/15 to-transparent",
      accent: "text-fursat-gold",
      label: "Midnight Amber Lounge (10 PM)",
    },
    candle: {
      bgGlow: "from-yellow-700/15 via-zinc-900/20 to-transparent",
      accent: "text-amber-200",
      label: "Intimate Candlelit Sanctuary",
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[650px] md:min-h-[750px] py-24 bg-fursat-black overflow-hidden flex flex-col justify-between items-center px-6 border-t border-fursat-gold/15 select-none"
    >
      {/* Dynamic Ambient Volumetric Gradient responding to mood & mouse */}
      <div
        className={`absolute inset-0 bg-radial-gradient ${moodStyles[moodPreset].bgGlow} transition-all duration-1000 pointer-events-none`}
        style={{
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
        }}
      />

      {/* Floating Sparkle Embers */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-fursat-amber/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-fursat-gold/15 blur-[140px]" />
      </div>

      {/* Header Info */}
      <div className="relative z-10 text-center max-w-xl mx-auto pt-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="w-8 h-[1px] bg-fursat-gold/60" />
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-fursat-gold font-semibold">
            07 — The Sensory Frequency
          </span>
          <span className="w-8 h-[1px] bg-fursat-gold/60" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-fursat-offwhite tracking-[0.1em] uppercase font-bold">
          The Fursat Mood
        </h2>
        <p className="font-sans text-xs sm:text-sm text-fursat-cream/70 font-light mt-2">
          Move your cursor across the room to shift perspective and light.
        </p>
      </div>

      {/* 3D Depth Floating Typography Field */}
      <div className="relative w-full max-w-5xl h-96 flex items-center justify-center my-6">
        {/* Center Orb */}
        <div
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-fursat-gold/30 bg-fursat-card/70 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(185,154,98,0.2)] transition-transform duration-300"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          }}
        >
          <Sparkles className="w-6 h-6 text-fursat-gold animate-spin" style={{ animationDuration: "20s" }} />
          <span className="font-serif italic text-lg sm:text-xl text-fursat-cream mt-2">
            Fursat
          </span>
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-fursat-amber">
            Hyderabad
          </span>
        </div>

        {/* Floating Depth Words */}
        {floatingWords.map((word, idx) => (
          <div
            key={idx}
            className={`absolute ${word.pos} transition-transform duration-200 ease-out pointer-events-none`}
            style={{
              transform: `translate(${mousePos.x * word.depth}px, ${mousePos.y * word.depth}px)`,
            }}
          >
            <span
              className={`font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] opacity-85 uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] ${word.color}`}
            >
              {word.text}
            </span>
          </div>
        ))}
      </div>

      {/* Mood Selector Bottom Controls */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 bg-fursat-card/80 border border-fursat-gold/30 backdrop-blur-md px-5 py-3 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-fursat-cream/60 mr-2">
          Lighting Aura:
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMoodPreset("dusk")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all flex items-center gap-1.5 ${
              moodPreset === "dusk"
                ? "bg-amber-600 text-fursat-black font-bold shadow-[0_0_15px_rgba(217,119,6,0.6)]"
                : "text-fursat-cream/70 hover:text-fursat-cream"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Dusk</span>
          </button>

          <button
            onClick={() => setMoodPreset("midnight")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all flex items-center gap-1.5 ${
              moodPreset === "midnight"
                ? "bg-fursat-amber text-fursat-black font-bold shadow-[0_0_15px_rgba(196,122,58,0.6)]"
                : "text-fursat-cream/70 hover:text-fursat-cream"
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Midnight</span>
          </button>

          <button
            onClick={() => setMoodPreset("candle")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all flex items-center gap-1.5 ${
              moodPreset === "candle"
                ? "bg-fursat-gold text-fursat-black font-bold shadow-[0_0_15px_rgba(185,154,98,0.6)]"
                : "text-fursat-cream/70 hover:text-fursat-cream"
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Candlelit</span>
          </button>
        </div>
      </div>
    </section>
  );
}
