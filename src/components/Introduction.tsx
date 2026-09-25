"use client";

import React from "react";
import { Sparkles, Users, Box, PartyPopper, CalendarCheck } from "lucide-react";

export default function Introduction() {
  const facts = [
    {
      mark: "I",
      icon: Users,
      title: "Every kind of booking",
      desc: "Team lunches, family tables, walk-ins, kitty parties — one enquiry gets it sorted.",
    },
    {
      mark: "II",
      icon: Box,
      title: "Catering & food box",
      desc: "For your office, a home function, or just yourself — order ahead, open to anyone.",
    },
    {
      mark: "III",
      icon: PartyPopper,
      title: "A banquet hall on-site",
      desc: "Birthdays, engagements, kitty parties, corporate evenings — hosted end to end.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-fursat-dark overflow-hidden px-4 sm:px-8 md:px-12 border-t border-fursat-gold/10"
    >
      {/* Ambient Backdrop Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fursat-amber/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fursat-gold/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Subtle Section Label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-8 sm:w-12 h-[1px] bg-fursat-gold/60" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-gold font-semibold">
            01 — The Fursat Experience
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fursat-cream font-light leading-[1.18] max-w-5xl">
            Kitchen table energy, <br className="hidden sm:inline" />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-fursat-amber via-fursat-gold-light to-fursat-gold">
              bar shelf confidence.
            </span>
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Photography from Fursat Madhapur */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group border border-fursat-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div
                className="w-full h-80 sm:h-96 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/assets/cafe-counter-dessert-display-ChDJtGS1.jpeg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fursat-black/90 via-fursat-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-fursat-amber font-semibold block mb-1">
                  Inside Fursat Madhapur
                </span>
                <p className="font-serif italic text-sm text-fursat-cream/90">
                  Cafe counter, dessert display, and all-day dining comfort in Silicon Valley, Madhapur.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose & Core 3 Facts */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <p className="font-sans text-base sm:text-lg text-fursat-cream/85 font-light leading-relaxed">
              Fursat is a multicuisine kitchen and bar in Madhapur — an all-day menu, a full drinks list, and a room that works for a quick lunch or a long celebration.
            </p>

            {/* 3 Core Facts Cards */}
            <div className="space-y-4">
              {facts.map((fact, idx) => {
                const IconComponent = fact.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-fursat-card/70 border border-fursat-gold/15 hover:border-fursat-gold/50 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-fursat-amber/15 border border-fursat-amber/30 flex items-center justify-center text-fursat-gold font-serif font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                      {fact.mark}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-fursat-offwhite font-medium mb-1 group-hover:text-fursat-gold transition-colors">
                        {fact.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-fursat-cream/70 leading-relaxed font-light">
                        {fact.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
