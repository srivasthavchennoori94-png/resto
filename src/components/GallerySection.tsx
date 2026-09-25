"use client";

import React, { useState } from "react";
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryImage {
  src: string;
  title: string;
  subtitle: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/assets/kitchen-bar-lounge-seating-DXKtkFu9.jpeg",
    title: "Lounge Seating by the Window",
    subtitle: "Warm sunlit afternoons and plush velvet armchairs for unhurried conversations.",
    category: "Lounge",
  },
  {
    src: "/assets/main-dining-hall-D1OfpEb6.jpeg",
    title: "Main Dining Hall",
    subtitle: "Architectural grandeur with custom brass fixtures and spacious family tables.",
    category: "Dining",
  },
  {
    src: "/assets/cafe-counter-dessert-display-ChDJtGS1.jpeg",
    title: "Cafe Counter & Dessert Display",
    subtitle: "Freshly roasted artisanal coffees, Kunafa cheesecakes, and house delicacies.",
    category: "Cafe & Bar",
  },
  {
    src: "/assets/dark-booth-seating-DVhnpRQ8.jpeg",
    title: "Dark Booth Seating",
    subtitle: "Cozy alcoves with ambient golden illumination designed for intimate date nights.",
    category: "Booths",
  },
  {
    src: "/assets/communal-seating-BBQ0H9sH.jpeg",
    title: "Communal Seating Area",
    subtitle: "Expansive layouts tailored for celebratory reunions and large friend circles.",
    category: "Social",
  },
  {
    src: "/assets/long-communal-table-set-DGFc-J-3.jpeg",
    title: "The Banquet Hall",
    subtitle: "On-site banquet hall hosting 150+ seated guests for kitty parties & galas.",
    category: "Banquet",
  },
  {
    src: "/assets/lounge-seating-kitchen-bar-oaP_RKDc.jpeg",
    title: "Orange Lounge Chairs & Bar",
    subtitle: "Vibrant mid-century seating paired with craft cocktails and evening energy.",
    category: "Bar & Lounge",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section
      id="gallery"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-fursat-black overflow-hidden px-4 sm:px-8 md:px-12 border-t border-fursat-gold/15"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-fursat-amber/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="w-8 sm:w-12 h-[1px] bg-fursat-gold/60" />
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-gold font-semibold">
                05 — A Feel for the Place
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-fursat-offwhite tracking-[0.06em] uppercase font-bold">
              Gallery
            </h2>
            <p className="font-sans text-xs sm:text-sm text-fursat-cream/70 mt-1 max-w-lg">
              A look inside Fursat Kitchen &amp; Bar, Madhapur, Hyderabad.
            </p>
          </div>

          <span className="text-xs font-sans uppercase tracking-widest text-fursat-amber">
            7 Real Spaces · Madhapur
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              data-cursor="EXPAND"
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-fursat-gold/20 hover:border-fursat-gold/60 transition-all duration-500 cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.8)] ${
                idx === 0 ? "sm:col-span-2 lg:col-span-2 sm:row-span-2 h-[340px] sm:h-[480px]" : "h-64 sm:h-72"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fursat-black/95 via-fursat-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag pill */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-fursat-black/70 backdrop-blur-md border border-fursat-gold/30 text-[9px] font-sans font-semibold tracking-wider text-fursat-gold uppercase">
                {img.category}
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <h3 className="font-serif text-lg sm:text-xl text-fursat-offwhite font-medium group-hover:text-fursat-gold transition-colors mb-1">
                  {img.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-fursat-cream/70 font-light line-clamp-2">
                  {img.subtitle}
                </p>
              </div>

              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-fursat-charcoal/80 border border-fursat-gold/40 flex items-center justify-center text-fursat-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fursat-black/95 backdrop-blur-2xl animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-3 rounded-full bg-fursat-charcoal border border-fursat-gold/40 text-fursat-cream hover:text-fursat-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-fursat-charcoal/80 border border-fursat-gold/40 text-fursat-cream hover:text-fursat-gold transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Lightbox Image */}
          <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden border border-fursat-gold/40 shadow-[0_25px_90px_rgba(0,0,0,0.95)] max-h-[70vh] flex items-center justify-center">
              <img
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="text-center mt-4 max-w-xl">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-fursat-amber font-semibold">
                {GALLERY_IMAGES[lightboxIndex].category} · {lightboxIndex + 1} of {GALLERY_IMAGES.length}
              </span>
              <h3 className="font-serif text-2xl text-fursat-offwhite font-medium mt-1">
                {GALLERY_IMAGES[lightboxIndex].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-fursat-cream/80 font-light mt-1">
                {GALLERY_IMAGES[lightboxIndex].subtitle}
              </p>
            </div>
          </div>

          {/* Next Image Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-fursat-charcoal/80 border border-fursat-gold/40 text-fursat-cream hover:text-fursat-gold transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
