"use client";

import React, { useState } from "react";
import { Sparkles, ArrowDown, Moon } from "lucide-react";

export default function SignatureTransition() {
  const [portalActive, setPortalActive] = useState(false);

  const handlePortalEnter = () => {
    setPortalActive(true);
    setTimeout(() => {
      const barSection = document.getElementById("bar");
      if (barSection) {
        barSection.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => setPortalActive(false), 800);
    }, 600);
  };

  return (
    <section className="relative w-full py-24 md:py-36 bg-gradient-to-b from-fursat-dark via-fursat-black to-fursat-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background Volumetric Pulse */}
      <div className="absolute inset-0 bg-radial-amber opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-fursat-amber font-semibold mb-3">
          The Portal
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fursat-offwhite font-light mb-6 leading-tight">
          As Daylight Fades, <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light">
            The Alchemy Awakens
          </span>
        </h2>

        {/* The Signature Dark Ceramic Plate / Circular Portal */}
        <div
          onClick={handlePortalEnter}
          data-cursor="ENTER BAR"
          className="group relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center cursor-pointer transition-all duration-700 my-8"
        >
          {/* Outer Pulsing Corona */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fursat-amber via-fursat-gold to-fursat-copper opacity-20 blur-2xl group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />

          {/* Golden Outer Rim */}
          <div className="absolute inset-2 rounded-full border border-fursat-gold/40 group-hover:border-fursat-gold transition-colors duration-500 shadow-[0_0_30px_rgba(185,154,98,0.3)]" />

          {/* Rotating Celestial Dashed Ring */}
          <div className="absolute inset-6 rounded-full border border-dashed border-fursat-gold/30 animate-[spin_40s_linear_infinite]" />

          {/* Deep Black Inner Portal Void */}
          <div
            className={`w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-[#0c0a09] via-fursat-black to-black flex flex-col items-center justify-center p-6 border border-fursat-gold/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.95)] transition-all duration-700 ${
              portalActive ? "scale-[3.5] opacity-0" : "group-hover:scale-105"
            }`}
          >
            <Moon className="w-8 h-8 text-fursat-gold mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-display text-sm sm:text-base font-bold tracking-[0.25em] text-fursat-cream uppercase text-center">
              Step Into
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-fursat-amber uppercase font-semibold mt-0.5">
              The Nightlife
            </span>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-fursat-cream/60 max-w-md font-light leading-relaxed">
          Transitioning from warm dining sanctuaries into the velvet shadows, glowing onyx, and handcrafted cocktails of After Dark.
        </p>
      </div>
    </section>
  );
}
