import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(30 30 30)",
        input: "rgb(30 30 30)",
        ring: "#2563eb",
        background: "#000000",
        foreground: "#fafafa",
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "rgb(23 23 23)",
          foreground: "#fafafa",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "#fafafa",
        },
        muted: {
          DEFAULT: "rgb(23 23 23)",
          foreground: "rgb(153 153 153)",
        },
        accent: {
          DEFAULT: "#f97316",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "rgb(10 10 10)",
          foreground: "#fafafa",
        },
        card: {
          DEFAULT: "rgb(10 10 10)",
          foreground: "#fafafa",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
