/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      orange: "#f7a724",
      red: "#f74d4e",
      blue: "#0437f2",
      white: "#ffffff",
      slate: "#cbd5e1",
      slate2: "#64748b",
      black: "#000000"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
