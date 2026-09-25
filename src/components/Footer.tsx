"use client";

import React, { useState } from "react";
import { Instagram, Facebook, ArrowUp, Send, Check, MapPin, Phone, ExternalLink, Mail, MessageSquare } from "lucide-react";
import { FursatLogo } from "./Navbar";

interface FooterProps {
  onOpenReservation: () => void;
}

export default function Footer({ onOpenReservation }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const googleMapsUrl = "https://maps.app.goo.gl/1EFLCxT8NSQFCaEVA";

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Menu & Order", href: "#menu" },
    { label: "Live Offers", href: "#offers" },
    { label: "Banquet Hall", href: "#banquet" },
    { label: "Catering", href: "#catering" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <footer id="contact" className="relative w-full bg-fursat-black text-fursat-cream pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-8 md:px-12 border-t border-fursat-gold/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[700px] h-[250px] bg-fursat-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top Tier: Brand, Contact Info, and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-fursat-gold/15">
          {/* Brand Column with Authentic Logo and Wordmark */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <FursatLogo className="mb-4" />
              <p className="font-sans text-xs text-fursat-cream/70 max-w-sm font-light leading-relaxed mb-6 mt-3">
                Multicuisine kitchen, full bar, and a banquet hall on-site — open daily in Madhapur, Hyderabad.
              </p>
            </div>

            <div className="text-xs text-fursat-cream/80 space-y-2 pt-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-fursat-amber flex-shrink-0 mt-0.5" />
                <span>
                  Capital Pk Road, Ayyappa Society, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-fursat-amber flex-shrink-0" />
                <a href="tel:+919059670033" className="text-fursat-gold hover:underline">
                  090596 70033
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-fursat-amber flex-shrink-0" />
                <a
                  href="https://wa.me/919059670033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fursat-cream hover:text-fursat-gold transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-fursat-amber flex-shrink-0" />
                <a href="mailto:hello@fursatkitchenbar.in" className="hover:text-fursat-gold">
                  hello@fursatkitchenbar.in
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-fursat-gold font-semibold mb-4 sm:mb-6">
              Navigation
            </span>
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-sans uppercase tracking-[0.15em] text-fursat-cream/70 hover:text-fursat-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onOpenReservation}
                className="text-left text-xs font-sans uppercase tracking-[0.15em] text-fursat-amber font-semibold hover:text-fursat-gold transition-colors"
              >
                Reserve Table
              </button>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans uppercase tracking-[0.15em] text-fursat-gold flex items-center gap-1 hover:underline pt-1"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Opening Hours & VIP Gazette */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-fursat-gold font-semibold mb-2">
              Hours &amp; Updates
            </span>
            <div className="p-3.5 rounded-2xl bg-fursat-card/70 border border-fursat-gold/20 mb-4">
              <span className="text-[11px] font-sans text-fursat-gold font-semibold block mb-0.5">
                Daily Service Timings
              </span>
              <span className="text-xs text-fursat-cream/90 font-medium block">
                Open Daily: 12:00 PM – 11:30 PM
              </span>
              <span className="text-[10px] text-fursat-cream/60 mt-1 block">
                Lunch, Evening Lull, Dinner Rush &amp; Late Hours
              </span>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                required
                placeholder="Enter email for seasonal offers"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-fursat-card border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30 pr-12"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-gradient-to-r from-fursat-amber to-fursat-gold text-fursat-black flex items-center justify-center hover:scale-105 transition-transform"
              >
                {newsletterSubscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
            {newsletterSubscribed && (
              <span className="text-[10px] font-sans text-fursat-gold-light mt-2 block animate-fade-in">
                Thank you for subscribing to Fursat updates.
              </span>
            )}
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fursat-cream/50">
          <span className="font-sans text-[11px] tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Fursat Kitchen &amp; Bar · Madhapur, Hyderabad. All rights reserved.
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919059670033"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-fursat-gold/20 hover:border-fursat-gold hover:text-fursat-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-fursat-gold/20 hover:border-fursat-gold hover:text-fursat-gold transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
