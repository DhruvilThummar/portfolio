/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        accent: "var(--accent-color)",
        "accent-dark": "var(--accent-dark-color)",
        "accent-secondary": "var(--accent-secondary-color)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        logo: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};