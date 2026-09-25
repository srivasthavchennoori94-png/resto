"use client";

import React from "react";
import { MapPin, Navigation, Clock, Phone, ExternalLink, Compass, MessageSquare, Mail } from "lucide-react";

export default function LocationExperience() {
  const googleMapsUrl = "https://maps.app.goo.gl/1EFLCxT8NSQFCaEVA";

  const landmarks = [
    { label: "Ayyappa Society Main Road", time: "1 min away" },
    { label: "Durgam Cheruvu Cable Bridge", time: "4 mins away" },
    { label: "Inorbit Mall Madhapur", time: "5 mins away" },
    { label: "Hitec City Cyber Towers", time: "7 mins away" },
  ];

  return (
    <section
      id="location"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-fursat-dark overflow-hidden px-4 sm:px-8 md:px-12 border-t border-fursat-gold/15"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-fursat-amber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="w-8 sm:w-12 h-[1px] bg-fursat-gold/60" />
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-gold font-semibold">
                08 — Destination & Arrival
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-fursat-offwhite tracking-[0.06em] uppercase font-bold">
              Find Your Fursat
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-fursat-cream/70 max-w-md font-light leading-relaxed">
            Situated in Silicon Valley, VIP Hills, Capital Park Road, Ayyappa Society, Madhapur, Hyderabad.
          </p>
        </div>

        {/* 2-Column Dark Map + Address Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* Left Column: Stylized Dark Vector Interactive Map Frame */}
          <div className="lg:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-fursat-card border border-fursat-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] h-[360px] sm:h-[440px] flex items-center justify-center p-4 sm:p-6">
            {/* Dark Minimalist SVG Map Grid */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern id="mapGridLoc" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B99A62" strokeWidth="0.5" strokeOpacity="0.2" />
                </pattern>
                <linearGradient id="routeGradientLoc" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C47A3A" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#DFC99F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#B99A62" stopOpacity="1" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="#0D0D0C" />
              <rect width="100%" height="100%" fill="url(#mapGridLoc)" />

              {/* Arterial roads of Madhapur */}
              <path d="M -20 180 Q 150 220 300 240 T 650 160" fill="none" stroke="#252320" strokeWidth="8" />
              <path d="M 100 450 Q 240 300 350 250 T 600 50" fill="none" stroke="#252320" strokeWidth="10" />
              <path d="M 200 20 Q 320 180 350 250 T 500 450" fill="none" stroke="#252320" strokeWidth="6" />

              {/* Glowing Golden Route to Fursat at Capital Park */}
              <path
                d="M 60 380 C 180 340, 240 290, 350 250"
                fill="none"
                stroke="url(#routeGradientLoc)"
                strokeWidth="4"
                strokeDasharray="6 4"
                className="animate-pulse"
              />
            </svg>

            {/* Glowing 3D Destination Marker Pin */}
            <div className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
              <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-fursat-amber/20 animate-ping" />
              <div className="absolute w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-fursat-gold/30 blur-md animate-pulse" />

              {/* Marker Badge */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN MAP"
                className="relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-fursat-amber to-fursat-gold text-fursat-black font-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(196,122,58,0.9)] flex items-center gap-1.5 border border-fursat-cream hover:scale-105 transition-transform"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>FURSAT · Madhapur</span>
              </a>

              <span className="mt-2 text-[9px] font-mono text-fursat-gold-light bg-fursat-black/90 px-2 py-0.5 rounded border border-fursat-gold/30">
                VIP Hills · Silicon Valley
              </span>
            </div>

            {/* Bottom Floating Map Controls */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-auto">
              <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-fursat-cream/70 bg-fursat-black/85 px-3 py-1 rounded-full border border-fursat-gold/20">
                Capital Park · VIP Hills
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="MAP"
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-sans uppercase font-bold tracking-wider text-fursat-black bg-gradient-to-r from-fursat-amber to-fursat-gold hover:shadow-[0_0_15px_rgba(196,122,58,0.6)] transition-all flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Venue Coordinates & Details */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-fursat-card/80 border border-fursat-gold/20">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-fursat-amber font-semibold block mb-2">
                Venue Location
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-fursat-offwhite font-medium mb-2">
                Fursat Kitchen & Bar
              </h3>
              <p className="font-sans text-xs sm:text-sm text-fursat-cream/80 font-light leading-relaxed mb-6">
                Capital Pk Road, Ayyappa Society, <br />
                VIP Hills, Silicon Valley, Madhapur, <br />
                Hyderabad, Telangana — 500081, India
              </p>

              <div className="space-y-3 pt-4 border-t border-fursat-gold/15">
                <div className="flex items-center gap-3 text-xs text-fursat-cream/85">
                  <Clock className="w-4 h-4 text-fursat-gold flex-shrink-0" />
                  <span>Open Daily, 12:00 pm – 11:30 pm</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-fursat-cream/85">
                  <Phone className="w-4 h-4 text-fursat-gold flex-shrink-0" />
                  <a href="tel:+919059670033" className="hover:text-fursat-gold font-medium">
                    090596 70033
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-fursat-cream/85">
                  <Mail className="w-4 h-4 text-fursat-gold flex-shrink-0" />
                  <a href="mailto:hello@fursatkitchenbar.in" className="hover:text-fursat-gold">
                    hello@fursatkitchenbar.in
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="ROUTE"
                  className="py-3 rounded-full text-xs font-sans uppercase font-bold tracking-[0.15em] text-fursat-black bg-gradient-to-r from-fursat-amber to-fursat-gold hover:shadow-[0_0_20px_rgba(196,122,58,0.5)] transition-all flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </a>

                <a
                  href="https://wa.me/919059670033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-full text-xs font-sans uppercase font-medium tracking-[0.15em] text-fursat-cream border border-fursat-gold/40 hover:bg-fursat-gold/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-fursat-amber" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Proximity Grid */}
            <div className="p-4 sm:p-5 rounded-2xl bg-fursat-card/40 border border-fursat-gold/10">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-fursat-gold/70 block mb-3 font-semibold">
                Proximity Landmarks
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {landmarks.map((lm, idx) => (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-fursat-charcoal/60 border border-fursat-gold/10">
                    <span className="text-[10px] sm:text-[11px] font-sans text-fursat-cream font-medium block">
                      {lm.label}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-fursat-amber font-mono">
                      {lm.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
