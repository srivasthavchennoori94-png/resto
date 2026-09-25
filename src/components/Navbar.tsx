"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MapPin, Clock, Calendar, Phone, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenReservation: () => void;
}

export function FursatLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Authentic Elephant Emblem */}
      <div className="relative w-9 h-11 sm:w-10 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/assets/logo-DB0x_8ZX.png"
          alt="Fursat elephant emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(223,201,159,0.35)]"
        />
      </div>

      {/* Authentic Brand Logotype Typography SVG */}
      <div className="flex flex-col">
        <img
          src="/assets/brand-name-DRZv4Ebi.svg"
          alt="Fursat Kitchen & Bar"
          className="h-8 sm:h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
        />
        <span className="font-sans text-[7.5px] sm:text-[8.5px] tracking-[0.35em] uppercase text-fursat-amber -mt-1 font-medium">
          Madhapur · Hyderabad
        </span>
      </div>
    </div>
  );
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu & Order", href: "#menu" },
    { name: "Live Offers", href: "#offers" },
    { name: "Banquet Hall", href: "#banquet" },
    { name: "Catering", href: "#catering" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2.5 sm:py-3 bg-fursat-black/92 backdrop-blur-md border-b border-fursat-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            : "py-4 sm:py-5 bg-gradient-to-b from-fursat-black/95 via-fursat-black/60 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Authentic Fursat Logo with Elephant Emblem */}
          <a
            href="#"
            data-cursor="ENTER"
            className="group flex items-center focus:outline-none"
            aria-label="Fursat Kitchen & Bar — home"
          >
            <FursatLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                data-cursor="EXPLORE"
                className="relative text-xs tracking-[0.16em] uppercase font-sans text-fursat-cream/80 hover:text-fursat-gold transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-fursat-amber to-fursat-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Contact & Booking CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919059670033"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-fursat-gold/30 text-fursat-cream hover:text-fursat-gold hover:border-fursat-gold transition-colors bg-fursat-charcoal/60"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-fursat-amber" />
            </a>

            <button
              onClick={onOpenReservation}
              data-cursor="BOOK"
              className="relative px-5 sm:px-6 py-2.5 rounded-full text-xs font-sans uppercase font-bold tracking-[0.18em] text-fursat-black bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light hover:shadow-[0_0_25px_rgba(196,122,58,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-fursat-gold/40 text-fursat-cream hover:text-fursat-gold hover:border-fursat-gold transition-colors bg-fursat-charcoal/60"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-fursat-gold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-fursat-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-28 xl:hidden transition-all duration-500 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-fursat-gold/20 pb-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-fursat-gold font-semibold">
              Explore Fursat
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-fursat-cream/60">
              Madhapur · Hyderabad
            </span>
          </div>

          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              style={{ transitionDelay: `${idx * 30}ms` }}
              className="text-left font-serif text-2xl sm:text-3xl text-fursat-cream hover:text-fursat-gold transition-colors duration-300 flex items-center justify-between group py-1"
            >
              <span>{link.name}</span>
              <span className="text-xs font-sans text-fursat-amber opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                View →
              </span>
            </button>
          ))}
        </div>

        <div className="border-t border-fursat-gold/20 pt-6 mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs text-fursat-cream/80">
            <MapPin className="w-4 h-4 text-fursat-amber flex-shrink-0" />
            <span>Capital Park, Ayyappa Society, VIP Hills, Madhapur</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-fursat-cream/80">
            <Clock className="w-4 h-4 text-fursat-amber flex-shrink-0" />
            <span>Open Daily: 12:00 PM – 11:30 PM</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-fursat-cream/80">
            <Phone className="w-4 h-4 text-fursat-amber flex-shrink-0" />
            <a href="tel:+919059670033" className="hover:text-fursat-gold">
              090596 70033
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href="https://wa.me/919059670033"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 rounded-full text-center text-xs font-sans uppercase font-bold tracking-[0.15em] text-fursat-cream border border-fursat-gold/40 hover:bg-fursat-gold/10 flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-fursat-amber" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="py-3 rounded-full text-center text-xs font-sans uppercase font-bold tracking-[0.15em] text-fursat-black bg-gradient-to-r from-fursat-amber to-fursat-gold shadow-[0_0_20px_rgba(196,122,58,0.5)] flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
