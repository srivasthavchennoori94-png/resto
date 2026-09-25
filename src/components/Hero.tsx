"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ChevronDown, Sparkles, Compass, Calendar, MapPin, Utensils, GlassWater } from "lucide-react";

import Hero3DCanvas from "./Hero3DCanvas";

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const scrollToExplore = () => {
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBanquet = () => {
    const el = document.getElementById("banquet");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center bg-fursat-black overflow-hidden pt-24 sm:pt-28 pb-8 px-4 sm:px-8 select-none">
      {/* Background Volumetric Glow & Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] md:w-[900px] h-[350px] sm:h-[500px] bg-gradient-to-b from-fursat-amber/15 via-fursat-gold/8 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-fursat-copper/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Atmospheric Authentic Interior Photography Backdrop */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none bg-cover bg-center mix-blend-screen"
        style={{
          backgroundImage: "url('/assets/kitchen-bar-lounge-seating-DXKtkFu9.jpeg')",
          filter: "brightness(0.4) contrast(1.15)",
        }}
      />

      {/* 3D Interactive Three.js Scene */}
      <Hero3DCanvas />

      {/* Top Eyebrow Bar */}
      <div className="relative z-10 flex items-center gap-2 sm:gap-3 pt-2 sm:pt-4 animate-fade-in opacity-90">
        <span className="w-5 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-fursat-gold/60" />
        <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.35em] text-fursat-gold-light/90 font-medium flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-fursat-amber" />
          <span>Fursat Kitchen & Bar · Madhapur, Hyderabad</span>
        </p>
        <span className="w-5 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-fursat-gold/60" />
      </div>

      {/* Center Typography & Headline Experience */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto py-6 sm:py-8 px-2">
        {/* Subtle pill */}
        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-fursat-charcoal/80 border border-fursat-gold/25 backdrop-blur-md mb-3 sm:mb-5 shadow-[0_0_20px_rgba(185,154,98,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-fursat-amber" />
          <span className="font-serif italic text-xs sm:text-sm tracking-wide text-fursat-cream">
            “Multicuisine Kitchen, Full Bar & Banquet Hall”
          </span>
        </div>

        {/* Master Brand Heading */}
        <h1 className="font-serif font-light text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.04em] text-fursat-offwhite drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] select-none leading-none">
          Take your <br />
          <em className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-fursat-amber via-fursat-gold-light to-fursat-gold">
            fursat.
          </em>
        </h1>

        {/* Authentic Lede Copy */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-fursat-cream/80 max-w-2xl mx-auto mt-4 sm:mt-6 font-light leading-relaxed tracking-wide px-2 sm:px-4">
          Multicuisine plates, a full bar, and a banquet hall on-site — built for team lunches, family tables, kitty parties, and everything in between.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4">
          <button
            onClick={onOpenReservation}
            data-cursor="BOOK"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-xs uppercase font-bold tracking-[0.2em] sm:tracking-[0.22em] text-fursat-black bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light hover:shadow-[0_0_35px_rgba(196,122,58,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve A Table</span>
          </button>

          <button
            onClick={scrollToBanquet}
            data-cursor="BANQUET"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-xs uppercase font-medium tracking-[0.2em] sm:tracking-[0.22em] text-fursat-cream border border-fursat-gold/40 hover:border-fursat-gold hover:bg-fursat-gold/10 hover:text-fursat-offwhite transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Sparkles className="w-4 h-4 text-fursat-amber" />
            <span>Plan An Event</span>
          </button>

          <a
            href="#menu"
            data-cursor="MENU"
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full font-sans text-xs uppercase font-medium tracking-[0.2em] text-fursat-amber border border-fursat-amber/40 hover:border-fursat-gold hover:bg-fursat-amber/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            <span>Order Menu</span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center pb-1 cursor-pointer group" onClick={scrollToExplore}>
        <span className="font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-cream/60 group-hover:text-fursat-gold transition-colors duration-300">
          Scroll To Enter
        </span>
        <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-fursat-amber mt-1 animate-bounce group-hover:text-fursat-gold transition-colors" />
      </div>
    </section>
  );
}
