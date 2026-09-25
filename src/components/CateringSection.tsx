"use client";

import React, { useState } from "react";
import { Sparkles, Box, Check, MessageSquare, Mail, UtensilsCrossed, Calendar } from "lucide-react";

export default function CateringSection() {
  const [cateringModalOpen, setCateringModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "Office & Employee Lunches",
    count: "25 Meals",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const cateringFeatures = [
    "Office & employee team lunches",
    "Individual hygienic food boxes",
    "Home functions & family gatherings",
    "Bulk live event catering",
    "Open to anyone — not just companies",
  ];

  const handleSend = (channel: "whatsapp" | "email") => {
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `*Catering & Food Box Quote Request - Fursat*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Requirement:* ${formData.type}\n*Estimated Meals/Pax:* ${formData.count}\n*Notes:* ${formData.notes || "None"}\n\n_Sent via fursatkitchenbar.in_`;

    if (channel === "whatsapp") {
      window.open(`https://wa.me/919059670033?text=${encodeURIComponent(message)}`, "_blank");
    } else {
      window.location.href = `mailto:hello@fursatkitchenbar.in?subject=${encodeURIComponent(`Catering Quote Request - ${formData.name}`)}&body=${encodeURIComponent(message.replace(/\*/g, ""))}`;
    }

    setSent(true);
    setTimeout(() => {
      setCateringModalOpen(false);
      setSent(false);
    }, 4000);
  };

  return (
    <section
      id="catering"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-fursat-dark overflow-hidden px-4 sm:px-8 md:px-12 border-t border-fursat-gold/15"
    >
      {/* Background Radiance */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-fursat-amber/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-8 sm:w-12 h-[1px] bg-fursat-gold/60" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-gold font-semibold">
            07 — Bulk & Delivery
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Catering Specifications */}
          <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-fursat-amber font-semibold mb-2">
                Catering &amp; Food Box
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fursat-offwhite font-medium leading-tight mb-4">
                Fursat, delivered to where you&apos;re gathering
              </h2>

              <p className="font-sans text-xs sm:text-sm md:text-base text-fursat-cream/80 font-light leading-relaxed mb-6">
                Open to offices and employees ordering team lunches, and to anyone else planning a home function, a personal event, or just a stack of food boxes for a group on the move. Order ahead and we&apos;ll size the menu to the headcount.
              </p>

              {/* Bullet points */}
              <ul className="space-y-2.5 mb-8">
                {cateringFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-fursat-cream/90 font-light">
                    <span className="w-5 h-5 rounded-full bg-fursat-amber/20 border border-fursat-amber/40 flex items-center justify-center text-fursat-gold text-xs flex-shrink-0 font-bold">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setCateringModalOpen(true)}
                  data-cursor="QUOTE"
                  className="px-7 py-3.5 rounded-full text-xs font-sans uppercase font-bold tracking-[0.2em] text-fursat-black bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light hover:shadow-[0_0_25px_rgba(196,122,58,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Box className="w-4 h-4" />
                  <span>Get A Catering Quote</span>
                </button>

                <a
                  href="https://wa.me/919059670033?text=Hi%20Fursat,%20I'd%20like%20to%20get%20a%20quote%20for%20office%20catering%20/%20food%20boxes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full text-xs font-sans uppercase font-medium tracking-[0.2em] text-fursat-cream border border-fursat-gold/40 hover:bg-fursat-gold/10 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-fursat-amber" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Lounge & Catering Photo */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-fursat-gold/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)] order-1 lg:order-2">
            <div
              className="w-full h-80 sm:h-[440px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: "url('/assets/lounge-seating-kitchen-bar-oaP_RKDc.jpeg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fursat-black/90 via-fursat-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-sans uppercase tracking-widest text-fursat-amber font-semibold block mb-1">
                Freshly Prepared Daily
              </span>
              <p className="font-serif italic text-base text-fursat-cream/90">
                Customized meal boxes & bulk spreads tailored to your budget and headcount.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Catering Quote Modal */}
      {cateringModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fursat-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-lg rounded-3xl bg-fursat-charcoal border border-fursat-gold/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] p-6 sm:p-8 my-6">
            <button
              onClick={() => setCateringModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-fursat-black/70 border border-fursat-gold/30 text-fursat-cream hover:text-fursat-gold"
            >
              ✕
            </button>

            {sent ? (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-fursat-amber/20 border border-fursat-gold flex items-center justify-center text-fursat-gold mb-3">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-fursat-offwhite mb-1">
                  Catering Request Sent
                </h3>
                <p className="font-sans text-xs text-fursat-cream/80 max-w-sm">
                  Our chef and catering coordinator will share the menu options and custom pricing for your headcount immediately.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-fursat-amber font-semibold">
                    Catering & Bulk Orders
                  </span>
                  <h3 className="font-serif text-2xl text-fursat-offwhite font-medium">
                    Request Catering Quote
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar / Infosys Team"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                      Phone Number (+91)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                        Service Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                      >
                        <option>Office Team Lunch</option>
                        <option>Individual Food Boxes</option>
                        <option>Home Function Catering</option>
                        <option>Bulk Event Catering</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                        Est. Headcount / Boxes
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 40 boxes"
                        value={formData.count}
                        onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                      Dietary Preferences / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Veg/Non-veg ratio, spice level, preferred delivery time..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSend("whatsapp")}
                    className="py-3 rounded-full text-xs font-sans uppercase font-bold tracking-wider text-fursat-black bg-gradient-to-r from-fursat-amber to-fursat-gold hover:shadow-[0_0_20px_rgba(196,122,58,0.5)] transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSend("email")}
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
