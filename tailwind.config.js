const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "Kanit", ...defaultTheme.fontFamily.sans],
      serif: ["IBM Plex Serif", "Sarabun", ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
  daisyui: {
    themes: ["autumn"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
