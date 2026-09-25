"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, Users, MessageSquare, PhoneCall, Check, X, ShieldCheck } from "lucide-react";

export default function EventsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [eventType, setEventType] = useState("Kitty Party");
  const [guestCount, setGuestCount] = useState("50 - 100 Guests");
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", date: "", notes: "" });

  const partyList = [
    "Kitty parties",
    "Birthdays",
    "Engagements",
    "Anniversaries",
    "Corporate evenings",
    "Baby showers",
    "Get-togethers",
  ];

  const handleSubmit = (channel: "whatsapp" | "email") => {
    if (!contactInfo.name || !contactInfo.phone) {
      alert("Please enter your name and contact phone number.");
      return;
    }

    const details = `*Banquet Hall Inquiry - Fursat Kitchen & Bar*\n\n*Name:* ${contactInfo.name}\n*Phone:* ${contactInfo.phone}\n*Event Type:* ${eventType}\n*Guest Count:* ${guestCount}\n*Preferred Date:* ${contactInfo.date || "Flexible"}\n*Special Requests:* ${contactInfo.notes || "None"}\n\n_Sent from Fursat web app_`;

    if (channel === "whatsapp") {
      window.open(`https://wa.me/919059670033?text=${encodeURIComponent(details)}`, "_blank");
    } else {
      window.location.href = `mailto:hello@fursatkitchenbar.in?subject=${encodeURIComponent(`Banquet Hall Inquiry - ${contactInfo.name}`)}&body=${encodeURIComponent(details.replace(/\*/g, ""))}`;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="banquet"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-fursat-black overflow-hidden px-4 sm:px-8 md:px-12 border-t border-fursat-gold/15"
    >
      {/* Background Radiance */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-fursat-amber/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-8 sm:w-12 h-[1px] bg-fursat-gold/60" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-gold font-semibold">
            06 — Private Events
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Banquet Hall Photo */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-fursat-gold/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
            <div
              className="w-full h-80 sm:h-[440px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: "url('/assets/long-communal-table-set-DGFc-J-3.jpeg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fursat-black/90 via-fursat-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-fursat-amber font-semibold block mb-1">
                  On-Site Banquet Hall
                </span>
                <p className="font-serif italic text-base text-fursat-cream/90">
                  Madhapur, Hyderabad
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-fursat-amber/20 border border-fursat-gold/40 text-xs font-mono text-fursat-gold font-bold">
                150+ Seated
              </span>
            </div>
          </div>

          {/* Right Column: Banquet Specifications & Parties */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-fursat-amber font-semibold mb-2">
                Private Events
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fursat-offwhite font-medium leading-tight mb-4">
                The banquet hall, for whatever you&apos;re celebrating
              </h2>

              <p className="font-sans text-xs sm:text-sm md:text-base text-fursat-cream/80 font-light leading-relaxed mb-6">
                A private hall with its own seating, sound, and a team that plans the spread around your event — from a kitty party or family function to a full corporate evening.
              </p>

              {/* Capacity Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-fursat-card/70 border border-fursat-gold/20">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-fursat-gold">
                    150+
                  </div>
                  <span className="text-[11px] font-sans text-fursat-cream/70 uppercase tracking-wider">
                    Seated Capacity
                  </span>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-fursat-amber">
                    200+
                  </div>
                  <span className="text-[11px] font-sans text-fursat-cream/70 uppercase tracking-wider">
                    Floating / Cocktail Style
                  </span>
                </div>
              </div>

              {/* Party Type Chips */}
              <div className="mb-8">
                <span className="text-[10px] font-sans uppercase tracking-widest text-fursat-gold/80 block mb-2.5 font-semibold">
                  Hosted End-to-End For:
                </span>
                <div className="flex flex-wrap gap-2">
                  {partyList.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-fursat-charcoal/80 border border-fursat-gold/20 text-xs font-sans text-fursat-cream/85"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  data-cursor="ENQUIRE"
                  className="px-7 py-3.5 rounded-full text-xs font-sans uppercase font-bold tracking-[0.2em] text-fursat-black bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light hover:shadow-[0_0_25px_rgba(196,122,58,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire About The Hall</span>
                </button>

                <a
                  href="https://wa.me/919059670033?text=Hi%20Fursat,%20I'd%20like%20to%20enquire%20about%20booking%20the%20Banquet%20Hall."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full text-xs font-sans uppercase font-medium tracking-[0.2em] text-fursat-cream border border-fursat-gold/40 hover:bg-fursat-gold/10 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-fursat-amber" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banquet Inquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fursat-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-xl rounded-3xl bg-fursat-charcoal border border-fursat-gold/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] p-6 sm:p-8 my-6">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-fursat-black/70 border border-fursat-gold/30 text-fursat-cream hover:text-fursat-gold"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-fursat-amber/20 border border-fursat-gold flex items-center justify-center text-fursat-gold mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-fursat-offwhite mb-2">
                  Banquet Enquiry Dispatched
                </h3>
                <p className="font-sans text-xs text-fursat-cream/80 max-w-md">
                  Our private events manager at Fursat Madhapur will connect with you right away to arrange dates and customized catering menus.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-fursat-amber font-semibold">
                    Direct Concierge
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-fursat-offwhite font-medium">
                    Enquire About Banquet Hall
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                      Event Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                    >
                      <option>Kitty Party</option>
                      <option>Birthday Celebration</option>
                      <option>Engagement Ceremony</option>
                      <option>Anniversary Celebration</option>
                      <option>Corporate Evening / Team Dinner</option>
                      <option>Baby Shower</option>
                      <option>Family Get-together</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                      Estimated Headcount
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                    >
                      <option>20 - 50 Guests</option>
                      <option>50 - 100 Guests</option>
                      <option>100 - 150 Guests (Seated)</option>
                      <option>150 - 200+ Guests (Floating)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={contactInfo.date}
                    onChange={(e) => setContactInfo({ ...contactInfo, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                    Special Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Seating preference, sound setup, dietary specifics..."
                    value={contactInfo.notes}
                    onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSubmit("whatsapp")}
                    className="py-3 rounded-full text-xs font-sans uppercase font-bold tracking-wider text-fursat-black bg-gradient-to-r from-fursat-amber to-fursat-gold hover:shadow-[0_0_20px_rgba(196,122,58,0.5)] transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSubmit("email")}
                    className="py-3 rounded-full text-xs font-sans uppercase font-medium tracking-wider text-fursat-cream border border-fursat-gold/40 hover:bg-fursat-gold/10 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Send Email</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
