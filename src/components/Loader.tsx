"use client";

import React, { useEffect, useState } from "react";

export default function Loader({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFading(true);
            setTimeout(() => {
              onLoaded();
            }, 600);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-fursat-black flex flex-col items-center justify-center select-none transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Volumetric Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-fursat-amber/15 blur-[100px] pointer-events-none animate-pulse" />

      {/* Main Title */}
      <div className="relative flex flex-col items-center text-center mb-8">
        <span className="font-display font-bold text-4xl sm:text-6xl tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#E8DDC8] to-[#998154]">
          FURSAT
        </span>
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] uppercase text-fursat-amber mt-1">
          Kitchen & Bar · Hyderabad
        </span>
      </div>

      {/* Thin Gold Progress Bar */}
      <div className="w-48 sm:w-64 h-[1px] bg-fursat-card relative overflow-hidden rounded-full mb-4">
        <div
          className="h-full bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light transition-all duration-150"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Tagline */}
      <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-fursat-cream/60">
        Preparing your table... {Math.min(progress, 100)}%
      </span>
    </div>
  );
}
