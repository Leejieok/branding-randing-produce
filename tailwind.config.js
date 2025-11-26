export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1755e7ff", // Slate 900
        secondary: "#88baffff", // Slate 700
        tertiary: "#3bf679ff", // Blue 500
        accent: "#3B82F6", // Blue 500
        "accent-hover": "#2563EB", // Blue 600
        background: "#201937", // Slate 50
        surface: "#FFFFFF",
        main: "#1E293B", // Slate 800
        muted: "#64748B", // Slate 500
      },
      fontFamily: {
        sans: ['"NationalPension"', "sans-serif"],
        paperozi: ['"Paperozi"', "sans-serif"],
      },
    },
  },
  plugins: [],
};