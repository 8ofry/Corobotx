import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Corobotx brand palette — deep navy + steel blue
        bg: "#031930",
        background: "#031930",
        surface: "#042544",
        "surface-2": "#07274F",
        "surface-3": "#0A3460",
        "surface-bright": "#327DA5",
        border: "#0E5384",
        outline: "#5D87A1",
        ink: "#031930",
        on: "#DCEBF5",
        "on-2": "#B4CFE0",
        muted: "#5D87A1",
        brand: {
          DEFAULT: "#327DA5",
          deep: "#0A3460",
          steel: "#0E5384",
          glow: "#5D87A1",
          ice: "#B4CFE0",
        },
        accent: "#327DA5", // legacy alias
        accent2: "#B4CFE0", // legacy alias
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        "drift-x": "drift-x 14s linear infinite",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        "drift-x": {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(10%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
