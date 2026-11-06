/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0b12",
          800: "#11131c",
          700: "#1a1d29",
        },
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "spin-slow": "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [],
};
