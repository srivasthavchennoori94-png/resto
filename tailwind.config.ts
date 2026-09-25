import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fursat: {
          black: "#090909",
          charcoal: "#151515",
          dark: "#0c0c0c",
          surface: "#181716",
          elevated: "#211f1d",
          amber: "#C47A3A",
          gold: "#B99A62",
          "gold-light": "#DFC99F",
          "gold-dim": "rgba(185, 154, 98, 0.2)",
          cream: "#E8DDC8",
          offwhite: "#F5F3EE",
          copper: "#A55D35",
          bronze: "#7C532B",
          glow: "rgba(196, 122, 58, 0.35)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cinzel)", "var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "radial-amber": "radial-gradient(circle at center, rgba(196, 122, 58, 0.15) 0%, rgba(9, 9, 9, 0) 70%)",
        "radial-gold": "radial-gradient(circle at center, rgba(185, 154, 98, 0.2) 0%, rgba(9, 9, 9, 0) 75%)",
        "noise-pattern": "url('/noise.png')",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
