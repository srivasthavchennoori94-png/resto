"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveOfferStrip from "@/components/LiveOfferStrip";
import Introduction from "@/components/Introduction";
import RestaurantReveal from "@/components/RestaurantReveal";
import FoodExperience from "@/components/FoodExperience";
import SignatureTransition from "@/components/SignatureTransition";
import BarExperience from "@/components/BarExperience";
import EventsSection from "@/components/EventsSection";
import CateringSection from "@/components/CateringSection";
import MomentsSection from "@/components/MomentsSection";
import GallerySection from "@/components/GallerySection";
import AtmosphereMood from "@/components/AtmosphereMood";
import LocationExperience from "@/components/LocationExperience";
import ReservationSection from "@/components/ReservationSection";
import ReservationModal from "@/components/ReservationModal";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Initialize Lenis smooth scroll on mount if available
  useEffect(() => {
    let lenisInstance: any = null;
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        });

        const raf = (time: number) => {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch {
        // Fallback to native smooth scroll
      }
    };

    initLenis();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Cinematic Intro Loader */}
      {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Main App Layout */}
      <main className="relative bg-fursat-black text-fursat-offwhite min-h-screen overflow-x-hidden selection:bg-fursat-amber/40 selection:text-fursat-cream">
        {/* Floating Glassmorphic Navigation with Official Emblem */}
        <Navbar onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 01 — HERO */}
        <Hero onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 02 — LIVE DISCOUNT STRIP & RATINGS PROOF */}
        <LiveOfferStrip />

        {/* 03 — INTRODUCTION & 3 PILLARS */}
        <Introduction />

        {/* 04 — RESTAURANT REVEAL */}
        <RestaurantReveal />

        {/* 05 — THE KITCHEN MENU & DIRECT WHATSAPP/EMAIL BASKET */}
        <FoodExperience />

        {/* 06 — SIGNATURE PORTAL TRANSITION */}
        <SignatureTransition />

        {/* 07 — AFTER DARK / THE BAR */}
        <BarExperience />

        {/* 08 — BANQUET HALL ON-SITE */}
        <EventsSection />

        {/* 09 — CATERING & FOOD BOX SERVICE */}
        <CateringSection />

        {/* 10 — MOMENTS AT FURSAT */}
        <MomentsSection />

        {/* 11 — AUTHENTIC MADHAPUR GALLERY */}
        <GallerySection />

        {/* 12 — ATMOSPHERE MOOD */}
        <AtmosphereMood />

        {/* 13 — LOCATION & DIRECTIONS */}
        <LocationExperience />

        {/* 14 — RESERVATION CALL TO ACTION */}
        <ReservationSection onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 15 — FOOTER */}
        <Footer onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 3-in-1 Interactive Reservation Modal Wizard */}
        <ReservationModal
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      </main>
    </>
  );
}
