// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00FF84",  // main accent
          greenDark: "#00E676", // hover/darker shade
        },
        neutral: {
          light: "#F9F9F9",
          DEFAULT: "#FFFFFF",
          dark: "#0A0A0A",
          card: "#1A1A1A",
          border: "#E6E6E6",
        },
        text: {
          primary: "#0A0A0A",  // light theme text
          secondary: "#333333",
          muted: "#555555",
          inverse: "#FFFFFF",  // dark theme text
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
