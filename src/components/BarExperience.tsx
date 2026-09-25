"use client";

import React, { useState } from "react";
import { Sparkles, Wine, GlassWater, Flame, Compass, CheckCircle2 } from "lucide-react";

interface Cocktail {
  id: string;
  name: string;
  tagline: string;
  spirit: string;
  flavorProfile: string;
  glassware: string;
  iceType: string;
  garnish: string;
  ingredients: string[];
  image: string;
}

export default function BarExperience() {
  const cocktails: Cocktail[] = [
    {
      id: "cocktail-01",
      name: "Nizami Smoked Old Fashioned",
      tagline: "Oak-Aged & Smoked with Applewood",
      spirit: "Deccan Reserve Single Malt",
      flavorProfile: "Rich Oak, Charred Orange, Raw Jaggery",
      glassware: "Hand-Cut Heavy Crystal Rocks",
      iceType: "Hand-Carved Clear Ice Sphere",
      garnish: "Flamed Citrus Peel & Saffron Thread",
      ingredients: [
        "60ml Single Malt Whiskey",
        "10ml Jaggery Reduction",
        "3 Dashes Saffron & Cardamom Bitters",
        "Charred Applewood Smoke Cloaking",
      ],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "cocktail-02",
      name: "Deccan Saffron Gin Sour",
      tagline: "Botanical Silk with Kashmiri Mongra",
      spirit: "Himalayan Juniper & Botanical Gin",
      flavorProfile: "Crisp Floral, Saffron Velour, Citrus Tang",
      glassware: "Vintage Nick & Nora Coupe",
      iceType: "Served Up (Chilled & Strained)",
      garnish: "24K Edible Gold Leaf & Dried Rosebud",
      ingredients: [
        "50ml Artisanal Gin",
        "20ml Saffron Cordial",
        "25ml Fresh Lemon Juice",
        "Aquafaba Silk Foam Emulsion",
      ],
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "cocktail-03",
      name: "Hyderabad Charcoal Sazerac",
      tagline: "Velvet Shadows & Decadent Spice",
      spirit: "Rye Whiskey & Absinthe Wash",
      flavorProfile: "Aniseed, Dark Spice, Mineral Smoothness",
      glassware: "Smoked Crystal Tumbler",
      iceType: "Single Large Clear Column Block",
      garnish: "Charred Star Anise & Lemon Oil",
      ingredients: [
        "55ml Straight Rye Whiskey",
        "5ml Activated Carbon Syrup",
        "Peychaud & Angostura Bitters",
        "Herbal Absinthe Atomizer Mist",
      ],
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "cocktail-04",
      name: "Fursat Golden Hour Spritz",
      tagline: "Effervescent Sunset & Passionfruit",
      spirit: "Italian Aperitivo & Sparkling Prosecco",
      flavorProfile: "Bittersweet, Sun-Ripened Fruit, Herbaceous",
      glassware: "Oversized Balloon Stemware",
      iceType: "Cracked Crystal Cubes",
      garnish: "Torched Rosemary Sprig & Blood Orange",
      ingredients: [
        "45ml Aperitivo Blend",
        "30ml Telangana Passionfruit Nectar",
        "60ml Sparkling Brut Wine",
        "Soda Splash & Rosemary Essence",
      ],
      image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [activeCocktail, setActiveCocktail] = useState<Cocktail>(cocktails[0]);

  return (
    <section
      id="bar"
      className="relative w-full py-28 md:py-40 bg-fursat-black overflow-hidden px-6 md:px-12 border-t border-fursat-gold/15"
    >
      {/* Nightlife Amber & Violet/Neon Ambience */}
      <div className="absolute top-1/4 right-0 w-[650px] h-[650px] bg-gradient-to-l from-fursat-amber/15 via-fursat-copper/10 to-transparent rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-fursat-bronze/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-12 h-[1px] bg-fursat-gold/60" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-fursat-amber font-semibold">
                04 — Mixology & Nightlife
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-fursat-offwhite tracking-[0.1em] uppercase font-bold">
              After Dark
            </h2>
            <p className="font-serif italic text-lg sm:text-2xl text-fursat-gold mt-2">
              “The Bar at Fursat: Liquid Alchemy & Twilight Rhythm.”
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm text-fursat-cream/70 max-w-md font-light leading-relaxed">
            Where Hyderabad&apos;s mixology masters combine small-batch botanicals, crystal ice carving, and aromatic smoke infusions.
          </p>
        </div>

        {/* Two Column Interactive Bar Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Cocktail Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-fursat-gold/70 font-semibold mb-2">
              Signature Cocktails
            </p>

            {cocktails.map((c) => {
              const isSelected = activeCocktail.id === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setActiveCocktail(c)}
                  data-cursor="SIP"
                  className={`p-5 rounded-2xl border transition-all duration-400 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? "bg-gradient-to-r from-fursat-charcoal to-fursat-card border-fursat-gold shadow-[0_10px_30px_rgba(196,122,58,0.25)] translate-x-2"
                      : "bg-fursat-card/40 border-fursat-gold/15 hover:border-fursat-gold/50 hover:bg-fursat-card"
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-fursat-amber font-semibold block mb-1">
                      {c.spirit}
                    </span>
                    <h3
                      className={`font-serif text-xl transition-colors ${
                        isSelected ? "text-fursat-gold-light font-medium" : "text-fursat-offwhite group-hover:text-fursat-gold"
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p className="font-sans text-xs text-fursat-cream/60 font-light mt-0.5">
                      {c.tagline}
                    </p>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                      isSelected
                        ? "border-fursat-gold bg-fursat-gold text-fursat-black"
                        : "border-fursat-gold/30 text-fursat-gold/50 group-hover:border-fursat-gold group-hover:text-fursat-gold"
                    }`}
                  >
                    <GlassWater className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Hero Cocktail Showcase with Glass Details */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-fursat-card border border-fursat-gold/30 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Image Frame */}
              <div className="relative w-full md:w-1/2 h-72 sm:h-96 rounded-2xl overflow-hidden border border-fursat-gold/20 flex-shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 transform hover:scale-105"
                  style={{ backgroundImage: `url('${activeCocktail.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fursat-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-fursat-black/80 backdrop-blur-md border border-fursat-gold/30 text-[10px] font-sans font-semibold tracking-widest text-fursat-amber uppercase">
                  Crafted by Fursat
                </div>
              </div>

              {/* Recipe & Tasting Notes Card */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-fursat-gold" />
                    <span className="text-xs font-sans uppercase tracking-[0.25em] text-fursat-gold font-semibold">
                      Tasting Profile
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-fursat-offwhite font-medium mb-1">
                    {activeCocktail.name}
                  </h3>
                  <p className="font-sans text-xs text-fursat-amber mb-6 font-medium tracking-wide">
                    {activeCocktail.flavorProfile}
                  </p>

                  <div className="space-y-4 border-t border-fursat-gold/20 pt-4">
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-fursat-gold font-semibold block mb-1">
                        Ingredients & Elixirs
                      </span>
                      <ul className="space-y-1">
                        {activeCocktail.ingredients.map((ing, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-fursat-cream/85 font-light">
                            <span className="w-1 h-1 rounded-full bg-fursat-amber" />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-fursat-gold/10">
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-fursat-gold font-semibold block">
                          Glassware
                        </span>
                        <span className="text-xs text-fursat-cream/80 font-light">
                          {activeCocktail.glassware}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-fursat-gold font-semibold block">
                          Ice Program
                        </span>
                        <span className="text-xs text-fursat-cream/80 font-light">
                          {activeCocktail.iceType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-fursat-gold/20 flex items-center justify-between">
                  <span className="text-xs text-fursat-cream/60 font-serif italic">
                    Garnish: {activeCocktail.garnish}
                  </span>
                  <a
                    href="#reservation"
                    className="px-4 py-2 rounded-full text-[11px] font-sans uppercase font-bold tracking-widest text-fursat-black bg-gradient-to-r from-fursat-amber to-fursat-gold hover:shadow-[0_0_15px_rgba(196,122,58,0.4)] transition-all"
                  >
                    Order At Bar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
