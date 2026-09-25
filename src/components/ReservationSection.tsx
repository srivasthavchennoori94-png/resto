"use client";

import React from "react";
import { Sparkles, Calendar, Phone, Clock, MapPin, MessageSquare } from "lucide-react";

interface ReservationSectionProps {
  onOpenReservation: () => void;
}

export default function ReservationSection({ onOpenReservation }: ReservationSectionProps) {
  return (
    <section
      id="book"
      className="relative w-full py-24 sm:py-32 md:py-44 bg-fursat-black overflow-hidden px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center border-t border-fursat-gold/15"
    >
      {/* Warm Volumetric Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[600px] bg-gradient-to-b from-fursat-amber/20 via-fursat-gold/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Atmospheric Interior Photography Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/main-dining-hall-D1OfpEb6.jpeg')",
          filter: "grayscale(1) brightness(0.3)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-fursat-charcoal/80 border border-fursat-gold/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(185,154,98,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-fursat-amber" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-gold font-semibold">
            Tell us what you need the table for
          </span>
        </div>

        {/* Large Dramatic Headline */}
        <h2 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-fursat-offwhite tracking-[0.04em] leading-[1.15] mb-6">
          Take your time. <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light">
            We&apos;ll keep the table ready.
          </span>
        </h2>

        {/* Supporting Narrative */}
        <p className="font-sans text-xs sm:text-base text-fursat-cream/80 max-w-2xl font-light mb-10 leading-relaxed">
          Fill this in and send it our way — we&apos;ll confirm the details personally over WhatsApp or email.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenReservation}
            data-cursor="BOOK"
            className="w-full sm:w-auto px-9 py-4 rounded-full text-xs font-sans uppercase font-bold tracking-[0.2em] text-fursat-black bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light hover:shadow-[0_0_35px_rgba(196,122,58,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Table / Event / Catering</span>
          </button>

          <a
            href="https://wa.me/919059670033"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WHATSAPP"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-sans uppercase font-medium tracking-[0.2em] text-fursat-cream border border-fursat-gold/40 hover:border-fursat-gold hover:bg-fursat-gold/10 hover:text-fursat-offwhite transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 text-fursat-amber" />
            <span>WhatsApp: 090596 70033</span>
          </a>
        </div>

        {/* Discreet Information */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-6 border-t border-fursat-gold/15 text-xs text-fursat-cream/60">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-fursat-amber" />
            <span>Open Daily: 12:00 PM – 11:30 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-fursat-amber" />
            <span>Capital Park, Madhapur, Hyderabad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
