"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  Utensils,
  Sparkles,
  CheckCircle2,
  X,
  Phone,
  Mail,
  User,
  MessageSquare,
  Gift,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import confetti from "canvas-confetti";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "table" | "catering" | "banquet";
}

export default function ReservationModal({ isOpen, onClose, initialType = "table" }: ReservationModalProps) {
  const [bookingType, setBookingType] = useState<"table" | "catering" | "banquet">(initialType);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("13:00");
  const [guestCount, setGuestCount] = useState("4");
  const [occasion, setOccasion] = useState("Family lunch/dinner");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Dynamic offers calculation
  const [calculatedOffers, setCalculatedOffers] = useState<string[]>([]);

  useEffect(() => {
    const offers: string[] = [];
    const celebrationOccasions = [
      "Birthday",
      "Engagement",
      "Anniversary",
      "Kitty party",
      "Baby shower",
    ];

    if (celebrationOccasions.some((c) => occasion.toLowerCase().includes(c.toLowerCase()))) {
      offers.push("🎉 Celebration booking — mention it and we'll see about a complimentary dessert platter.");
    }

    const countNum = parseInt(guestCount, 10) || 0;
    if (countNum >= 8) {
      offers.push(`👥 Group of ${countNum} — ask our manager about a special group dining offer.`);
    }

    // Time discount slot check
    if (time) {
      const [hStr, mStr] = time.split(":");
      const mins = parseInt(hStr, 10) * 60 + parseInt(mStr || "0", 10);
      if (mins >= 12 * 60 && mins < 16 * 60) {
        offers.push(`⏰ Booking at ${formatTime(time)} — 10% off applies (afternoon discount).`);
      } else if (mins >= 16 * 60 && mins < 19 * 60) {
        offers.push(`⏰ Booking at ${formatTime(time)} — 20% off applies (evening lull discount).`);
      } else if (mins >= 19 * 60 && mins < 21 * 60 + 30) {
        offers.push(`⏰ Booking at ${formatTime(time)} — 5% off applies (dinner rush).`);
      } else if (mins >= 21 * 60 + 30 && mins < 23 * 60 + 30) {
        offers.push(`⏰ Booking at ${formatTime(time)} — 30% off applies (late hours discount).`);
      }
    }

    setCalculatedOffers(offers);
  }, [occasion, guestCount, time]);

  function formatTime(t: string) {
    if (!t) return "";
    const [hStr, mStr] = t.split(":");
    const h = parseInt(hStr, 10);
    const ampm = h >= 12 ? "pm" : "am";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${h12}:${mStr} ${ampm}`;
  }

  const formatBookingSummary = () => {
    const typeLabel =
      bookingType === "table"
        ? "Table Reservation"
        : bookingType === "catering"
        ? "Catering & Food Box Inquiry"
        : "Banquet Hall Event Booking";

    let text = `*New ${typeLabel} - Fursat Kitchen & Bar*\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Date:* ${date}\n`;
    text += `*Time:* ${formatTime(time) || time}\n`;
    text += `*Guests / Headcount:* ${guestCount}\n`;
    text += `*Occasion / Purpose:* ${occasion}\n`;
    if (message.trim()) {
      text += `*Special Requests / Notes:* ${message}\n`;
    }
    if (calculatedOffers.length > 0) {
      text += `\n*Applicable Offers:*\n` + calculatedOffers.map((o) => `• ${o}`).join("\n");
    }
    text += `\n\n_Sent via fursatkitchenbar.in_`;
    return text;
  };

  const handleSend = (channel: "whatsapp" | "email") => {
    if (!name.trim() || !phone.trim()) {
      setFormError("Please enter your name and phone number so we can confirm the booking.");
      return;
    }

    setFormError("");
    const summary = formatBookingSummary();

    if (channel === "whatsapp") {
      const url = `https://wa.me/919059670033?text=${encodeURIComponent(summary)}`;
      window.open(url, "_blank");
    } else {
      const subject = encodeURIComponent(
        `Booking Request from ${name} (${bookingType === "table" ? "Table" : bookingType === "banquet" ? "Banquet" : "Catering"})`
      );
      const body = encodeURIComponent(summary.replace(/\*/g, ""));
      window.location.href = `mailto:hello@fursatkitchenbar.in?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#C47A3A", "#B99A62", "#DFC99F"],
      });
    } catch {}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fursat-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-fursat-charcoal border border-fursat-gold/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)] p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-fursat-black/70 border border-fursat-gold/30 text-fursat-cream hover:text-fursat-gold transition-colors"
          aria-label="Close Booking"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-fursat-amber/20 border border-fursat-gold flex items-center justify-center text-fursat-gold mb-4 shadow-[0_0_30px_rgba(185,154,98,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-fursat-amber font-semibold mb-1">
              Booking Pre-filled & Dispatched
            </span>

            <h3 className="font-serif text-3xl text-fursat-offwhite font-medium mb-2">
              Thank You, {name || "Esteemed Guest"}!
            </h3>

            <p className="font-sans text-xs sm:text-sm text-fursat-cream/80 max-w-md mb-6 leading-relaxed">
              Your details have been routed directly to our team at <strong className="text-fursat-gold">090596 70033</strong>. We will confirm your table and any applicable house discounts momentarily.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full text-xs font-sans uppercase font-bold tracking-widest text-fursat-black bg-gradient-to-r from-fursat-amber to-fursat-gold"
            >
              Done / Return to Site
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-fursat-amber" />
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-fursat-amber font-semibold">
                  Reserve at Fursat
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-fursat-offwhite font-medium">
                Tell us what you need the table for
              </h3>
              <p className="font-sans text-xs text-fursat-cream/70 font-light mt-0.5">
                Fill this in and send it our way — we&apos;ll confirm the details personally over WhatsApp or email.
              </p>
            </div>

            {/* 3 Booking Type Switcher */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-fursat-black/60 border border-fursat-gold/20">
              <button
                type="button"
                onClick={() => setBookingType("table")}
                className={`py-2.5 px-2 rounded-xl text-xs font-sans uppercase font-bold tracking-wider transition-all text-center ${
                  bookingType === "table"
                    ? "bg-gradient-to-r from-fursat-amber to-fursat-gold text-fursat-black shadow-md"
                    : "text-fursat-cream/70 hover:text-fursat-cream"
                }`}
              >
                Table Booking
              </button>

              <button
                type="button"
                onClick={() => setBookingType("catering")}
                className={`py-2.5 px-2 rounded-xl text-xs font-sans uppercase font-bold tracking-wider transition-all text-center ${
                  bookingType === "catering"
                    ? "bg-gradient-to-r from-fursat-amber to-fursat-gold text-fursat-black shadow-md"
                    : "text-fursat-cream/70 hover:text-fursat-cream"
                }`}
              >
                Catering &amp; Box
              </button>

              <button
                type="button"
                onClick={() => setBookingType("banquet")}
                className={`py-2.5 px-2 rounded-xl text-xs font-sans uppercase font-bold tracking-wider transition-all text-center ${
                  bookingType === "banquet"
                    ? "bg-gradient-to-r from-fursat-amber to-fursat-gold text-fursat-black shadow-md"
                    : "text-fursat-cream/70 hover:text-fursat-cream"
                }`}
              >
                Banquet Hall
              </button>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                />
              </div>

              <div>
                <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                  Phone Number (+91) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                />
              </div>

              <div>
                <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                />
              </div>

              <div>
                <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                  Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                />
              </div>

              <div>
                <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                  {bookingType === "banquet" ? "Number of Guests (10 - 200+)" : "Number of Guests"}
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 6"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                />
              </div>

              <div>
                <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                  Booking is for
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold"
                >
                  <option value="Family lunch/dinner">Family lunch or dinner</option>
                  <option value="Team lunch">Team lunch</option>
                  <option value="Casual dine-in">Casual dine-in</option>
                  <option value="Birthday celebration">Birthday celebration</option>
                  <option value="Kitty party">Kitty party</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Corporate evening">Corporate evening</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                  Anything else we should know?
                </label>
                <textarea
                  rows={2}
                  placeholder="Seating preference, dietary needs, occasion details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                />
              </div>
            </div>

            {/* Dynamic Calculated Perks Panel */}
            {calculatedOffers.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-fursat-amber/15 border border-fursat-gold/30 space-y-1.5">
                {calculatedOffers.map((offer, idx) => (
                  <div key={idx} className="text-xs text-fursat-gold flex items-start gap-1.5 font-medium">
                    <span>{offer}</span>
                  </div>
                ))}
              </div>
            )}

            {formError && (
              <p className="text-xs text-rose-400 font-sans bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/40">
                {formError}
              </p>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() => handleSend("whatsapp")}
                className="py-3.5 rounded-full text-xs font-sans uppercase font-bold tracking-wider text-fursat-black bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light hover:shadow-[0_0_25px_rgba(196,122,58,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => handleSend("email")}
                className="py-3.5 rounded-full text-xs font-sans uppercase font-medium tracking-wider text-fursat-cream border border-fursat-gold/40 hover:bg-fursat-gold/10 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-fursat-amber" />
                <span>Send via Email</span>
              </button>
            </div>

            <p className="font-sans text-[10.5px] text-fursat-cream/50 text-center leading-relaxed">
              This opens WhatsApp or your email app with the details pre-filled — nothing is booked automatically until our team at <span className="text-fursat-gold">090596 70033</span> confirms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
