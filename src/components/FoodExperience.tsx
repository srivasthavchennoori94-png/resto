"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Utensils, Plus, Minus, Send, MessageSquare, Mail, ShoppingBag, CheckCircle, Clock } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "kitchen" | "cafe_bar";
  tag: string;
  desc?: string;
  spicy?: boolean;
  popular?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // From the Kitchen
  { id: "paya", name: "Mutton paya soup", category: "kitchen", tag: "Hyderabadi soups", desc: "Slow-simmered rich bone broth with aromatic spices & herbs", popular: true },
  { id: "marag", name: "Mutton marag", category: "kitchen", tag: "Hyderabadi soups", desc: "Traditional royal Hyderabadi spicy lamb broth with pistachios & cashews" },
  { id: "guntur-wings", name: "Guntur karam wings", category: "kitchen", tag: "Tandoori & Starters", desc: "Crispy wings tossed in authentic fiery Guntur red chilli masala", spicy: true, popular: true },
  { id: "coriander-chicken", name: "Coriander chicken", category: "kitchen", tag: "Tandoori & Starters", desc: "Succulent chicken morsels infused with fresh ground coriander pesto & lime" },
  { id: "chettinadu-chicken", name: "Chettinadu chicken", category: "kitchen", tag: "Curries", desc: "South Indian black pepper and roasted coconut braised chicken", spicy: true },
  { id: "telangana-curry", name: "Telangana chicken curry, homestyle", category: "kitchen", tag: "Curries", desc: "Rustic country-style chicken slow-cooked with curry leaves & dry chillies", popular: true },
  { id: "ragi-sangati", name: "Ragi sangati with natukodi pulusu", category: "kitchen", tag: "Regional Specialties", desc: "Traditional steamed ragi mudde with country chicken tangy spicy gravy", popular: true },
  { id: "ulavacharu-pulao", name: "Ulavacharu mutton pulao", category: "kitchen", tag: "Biryani & Pulao", desc: "Horsegram broth infused aromatic aged basmati cooked with tender mutton cuts", popular: true },
  { id: "fursat-pulao", name: "Fursat special chicken pulao", category: "kitchen", tag: "Biryani & Pulao", desc: "Signature house recipe with caramelized onions, whole spices & pan-seared chicken" },
  { id: "boneless-biryani", name: "Special boneless chicken biryani", category: "kitchen", tag: "Biryani & Pulao", desc: "Tender boneless chicken layered over saffron dum basmati with salan & raita", popular: true },
  { id: "kheema-biryani", name: "Mutton kheema kaju biryani", category: "kitchen", tag: "Biryani & Pulao", desc: "Rich minced mutton cooked with roasted cashews and royal fragrant rice" },
  { id: "veg-biryani", name: "Veg biryani", category: "kitchen", tag: "Biryani & Pulao", desc: "Fresh garden vegetables and paneer dum-cooked with long-grain rice" },
  { id: "tandoori-roti", name: "Plain tandoori roti", category: "kitchen", tag: "Breads", desc: "Freshly slapped whole-wheat bread baked in clay tandoor" },

  // Cafe, Bar & More
  { id: "kunafa-cheesecake", name: "Viral kunafa cheesecake", category: "cafe_bar", tag: "Desserts", desc: "Crispy golden kataifi nest layered with velvety baked cream cheesecake", popular: true },
  { id: "panna-cotta", name: "Panna cotta / mango tres leches", category: "cafe_bar", tag: "Desserts", desc: "Delicate vanilla bean panna cotta & mango sponge steeped in three milks" },
  { id: "pizzas", name: "Thin crust & puffy pizzas", category: "cafe_bar", tag: "Pizza", desc: "Artisanal stone-baked Neapolitan style pizzas with fresh mozzarella & gourmet toppings" },
  { id: "pastas", name: "Risotto and pasta mains", category: "cafe_bar", tag: "Pasta", desc: "Creamy arborio risotto & handmade pasta tossed in garlic herb butter or arrabbiata" },
  { id: "dimsums", name: "Dimsum & Asian mains", category: "cafe_bar", tag: "Asian", desc: "Steamed crystal dim sums, wok tossed noodles, and pan-Asian delicacies" },
  { id: "coffees", name: "Hot & cold coffees, frappes", category: "cafe_bar", tag: "Cafe", desc: "Specialty roasted espresso, single-origin pour-overs, cold brews & creamy frappes" },
  { id: "iced-teas", name: "Iced teas & milkshakes", category: "cafe_bar", tag: "Beverages", desc: "Handcrafted infused iced teas, artisanal shakes & thick smoothies" },
  { id: "healthy-bowls", name: "Healthy bowls & smoothie bowls", category: "cafe_bar", tag: "Bowls", desc: "Nutrient-packed superfood bowls, acai berry blends & toasted seed toppings" },
  { id: "full-bar", name: "Full bar — cocktails, beer, spirits", category: "cafe_bar", tag: "Bar", desc: "Artisan mixologist cocktails, single malts, draft beers & global reserve spirits", popular: true },
];

export default function FoodExperience() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedTab, setSelectedTab] = useState<"all" | "kitchen" | "cafe_bar">("all");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [tableOrLoc, setTableOrLoc] = useState("");
  const [formError, setFormError] = useState("");
  const [orderSent, setOrderSent] = useState(false);

  // Active discount estimate
  const [activeDiscount, setActiveDiscount] = useState<{ pct: number; label: string } | null>(null);

  useEffect(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const mins = h * 60 + m;

    if (mins >= 12 * 60 && mins < 16 * 60) {
      setActiveDiscount({ pct: 10, label: "Afternoon" });
    } else if (mins >= 16 * 60 && mins < 19 * 60) {
      setActiveDiscount({ pct: 20, label: "Evening lull" });
    } else if (mins >= 19 * 60 && mins < 21 * 60 + 30) {
      setActiveDiscount({ pct: 5, label: "Dinner rush" });
    } else if (mins >= 21 * 60 + 30 && mins < 23 * 60 + 30) {
      setActiveDiscount({ pct: 30, label: "Late hours" });
    } else {
      setActiveDiscount(null);
    }
  }, []);

  const changeQty = (itemId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      const updated = { ...prev };
      if (next === 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = next;
      }
      return updated;
    });
  };

  const getOrderedItems = () => {
    return Object.entries(quantities)
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        return item ? { ...item, qty } : null;
      })
      .filter(Boolean) as (MenuItem & { qty: number })[];
  };

  const totalItemsCount = Object.values(quantities).reduce((a, b) => a + b, 0);

  const formatOrderText = () => {
    const items = getOrderedItems();
    let text = `*New Order - Fursat Kitchen & Bar*\n\n`;
    text += `*Customer:* ${customerName}\n`;
    text += `*Phone:* ${customerPhone}\n`;
    text += `*Table / Location:* ${tableOrLoc || "Dine-in / Direct"}\n\n`;
    text += `*Items Ordered:*\n`;
    items.forEach((item) => {
      text += `• ${item.qty} × ${item.name} (${item.tag})\n`;
    });
    if (activeDiscount) {
      text += `\n*Applicable Offer:* ${activeDiscount.pct}% OFF (${activeDiscount.label})`;
    }
    text += `\n\n_Sent via fursatkitchenbar.in web app_`;
    return text;
  };

  const handleSendWhatsApp = () => {
    const items = getOrderedItems();
    if (!items.length) {
      setFormError("Please add at least one dish using the + buttons above.");
      return;
    }
    if (!customerName.trim() || !customerPhone.trim()) {
      setFormError("Please enter your name and 10-digit phone number.");
      return;
    }

    setFormError("");
    const message = encodeURIComponent(formatOrderText());
    const whatsappUrl = `https://wa.me/919059670033?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 5000);
  };

  const handleSendEmail = () => {
    const items = getOrderedItems();
    if (!items.length) {
      setFormError("Please add at least one dish using the + buttons above.");
      return;
    }
    if (!customerName.trim() || !customerPhone.trim()) {
      setFormError("Please enter your name and 10-digit phone number.");
      return;
    }

    setFormError("");
    const subject = encodeURIComponent(`Food Order from ${customerName} (${tableOrLoc || "Fursat Dine-in"})`);
    const body = encodeURIComponent(formatOrderText().replace(/\*/g, ""));
    const mailtoUrl = `mailto:hello@fursatkitchenbar.in?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 5000);
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (selectedTab === "all") return true;
    return item.category === selectedTab;
  });

  return (
    <section
      id="menu"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-fursat-dark overflow-hidden px-4 sm:px-8 md:px-12 border-t border-fursat-gold/15"
    >
      {/* Background Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[350px] sm:h-[500px] bg-fursat-amber/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="w-8 sm:w-12 h-[1px] bg-fursat-gold/60" />
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-fursat-gold font-semibold">
                03 — On The Table
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-fursat-offwhite tracking-[0.06em] uppercase font-bold">
              Order from the Menu
            </h2>
            <p className="font-sans text-xs sm:text-sm text-fursat-cream/70 mt-1 max-w-xl">
              Add dishes below and send your order straight to the kitchen over WhatsApp or Email — no app, no account needed.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                selectedTab === "all"
                  ? "bg-fursat-gold text-fursat-black shadow-[0_0_15px_rgba(185,154,98,0.5)]"
                  : "bg-fursat-card border border-fursat-gold/20 text-fursat-cream/80 hover:text-fursat-gold"
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setSelectedTab("kitchen")}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                selectedTab === "kitchen"
                  ? "bg-fursat-gold text-fursat-black shadow-[0_0_15px_rgba(185,154,98,0.5)]"
                  : "bg-fursat-card border border-fursat-gold/20 text-fursat-cream/80 hover:text-fursat-gold"
              }`}
            >
              From the Kitchen
            </button>
            <button
              onClick={() => setSelectedTab("cafe_bar")}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                selectedTab === "cafe_bar"
                  ? "bg-fursat-gold text-fursat-black shadow-[0_0_15px_rgba(185,154,98,0.5)]"
                  : "bg-fursat-card border border-fursat-gold/20 text-fursat-cream/80 hover:text-fursat-gold"
              }`}
            >
              Cafe, Bar & Desserts
            </button>
          </div>
        </div>

        {/* 2-Column Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Menu Items List (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {filteredItems.map((item) => {
              const qty = quantities[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    qty > 0
                      ? "bg-fursat-card border-fursat-gold shadow-[0_0_20px_rgba(185,154,98,0.25)]"
                      : "bg-fursat-card/70 border-fursat-gold/15 hover:border-fursat-gold/40"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-sans uppercase tracking-wider px-2 py-0.5 rounded bg-fursat-charcoal text-fursat-amber border border-fursat-gold/20 font-medium">
                        {item.tag}
                      </span>
                      {item.popular && (
                        <span className="text-[9px] font-sans uppercase tracking-widest px-2 py-0.5 rounded bg-fursat-gold/20 text-fursat-gold font-bold">
                          Chef Pick
                        </span>
                      )}
                      {item.spicy && (
                        <span className="text-[9px] font-sans uppercase tracking-widest px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">
                          Spicy
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-base sm:text-lg text-fursat-offwhite font-medium truncate">
                      {item.name}
                    </h4>
                    {item.desc && (
                      <p className="font-sans text-[11px] sm:text-xs text-fursat-cream/65 leading-relaxed font-light mt-0.5 line-clamp-1 sm:line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Quantity Stepper Control */}
                  <div className="flex items-center gap-2 bg-fursat-charcoal/90 p-1.5 rounded-xl border border-fursat-gold/30 flex-shrink-0">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      disabled={qty === 0}
                      className="w-8 h-8 rounded-lg bg-fursat-card flex items-center justify-center text-fursat-cream hover:text-fursat-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-xs sm:text-sm font-bold text-fursat-gold w-6 text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="w-8 h-8 rounded-lg bg-gradient-to-r from-fursat-amber to-fursat-gold text-fursat-black flex items-center justify-center hover:scale-105 transition-transform"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Order Card / WhatsApp Dispatcher (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-fursat-card/90 border border-fursat-gold/35 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              <div className="flex items-center justify-between pb-4 border-b border-fursat-gold/20 mb-4">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-fursat-gold" />
                  <h3 className="font-serif text-2xl text-fursat-offwhite font-medium">
                    Your Kitchen Order
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-fursat-amber/20 text-fursat-gold text-xs font-mono font-bold">
                  {totalItemsCount} {totalItemsCount === 1 ? "dish" : "dishes"}
                </span>
              </div>

              {/* Items Summary Basket */}
              <div className="min-h-[100px] max-h-[220px] overflow-y-auto space-y-2 mb-4 pr-1">
                {totalItemsCount === 0 ? (
                  <p className="font-sans text-xs text-fursat-cream/50 italic py-6 text-center">
                    Nothing added yet — use the + buttons to add your favourite dishes.
                  </p>
                ) : (
                  getOrderedItems().map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-fursat-gold/10"
                    >
                      <span className="text-fursat-cream font-medium">
                        {item.qty} × {item.name}
                      </span>
                      <button
                        onClick={() => changeQty(item.id, -item.qty)}
                        className="text-[10px] text-fursat-amber hover:text-fursat-gold uppercase tracking-wider"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Live Offer Highlight */}
              {activeDiscount && totalItemsCount > 0 && (
                <div className="p-3 rounded-xl bg-fursat-amber/15 border border-fursat-gold/30 flex items-center gap-2 mb-4 text-xs text-fursat-gold">
                  <Sparkles className="w-4 h-4 flex-shrink-0 text-fursat-amber" />
                  <span>
                    <strong>{activeDiscount.pct}% OFF</strong> applies right now ({activeDiscount.label.toLowerCase()}) — final price confirmed by staff.
                  </span>
                </div>
              )}

              {/* Customer Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-fursat-charcoal border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
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
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-fursat-charcoal border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-sans uppercase tracking-wider text-fursat-gold block mb-1">
                    Table Number / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Table 4, or 'Takeaway / Food Box'"
                    value={tableOrLoc}
                    onChange={(e) => setTableOrLoc(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-fursat-charcoal border border-fursat-gold/30 text-fursat-cream text-xs focus:outline-none focus:border-fursat-gold placeholder:text-fursat-cream/30"
                  />
                </div>
              </div>

              {formError && (
                <p className="text-xs text-rose-400 font-sans mt-3 bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/40">
                  {formError}
                </p>
              )}

              {orderSent && (
                <p className="text-xs text-emerald-400 font-sans mt-3 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>Order initiated! Our staff will confirm your items immediately.</span>
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 mt-5">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 rounded-full text-xs font-sans uppercase font-bold tracking-[0.18em] text-fursat-black bg-gradient-to-r from-fursat-amber via-fursat-gold to-fursat-gold-light hover:shadow-[0_0_25px_rgba(196,122,58,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <button
                  onClick={handleSendEmail}
                  className="w-full py-3 rounded-full text-xs font-sans uppercase font-medium tracking-[0.18em] text-fursat-cream border border-fursat-gold/40 hover:bg-fursat-gold/10 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-fursat-amber" />
                  <span>Send Order via Email</span>
                </button>
              </div>

              <p className="font-sans text-[10.5px] text-fursat-cream/50 mt-4 text-center leading-relaxed">
                This sends your selection directly to the kitchen team at <span className="text-fursat-gold">+91 90596 70033</span>. Prices and applicable discounts will be confirmed immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
