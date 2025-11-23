export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Slate 900
        secondary: "#334155", // Slate 700
        accent: "#3B82F6", // Blue 500
        "accent-hover": "#2563EB", // Blue 600
        background: "#F8FAFC", // Slate 50
        surface: "#FFFFFF",
        main: "#1E293B", // Slate 800
        muted: "#64748B", // Slate 500
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};