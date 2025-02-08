/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["EB Garamond", "serif"],
        display: ["Uncial Antiqua", "cursive"],
      },
      colors: {
        background: "#2c2a3a",
        text: "#d8c8b8",
        heading: "#b4a38f",
        subheading: "#a89984",
        border: "#8b6f47",
        highlight: "#a67c52",
        hoverHighlight: "#e0b77b",
        buttonBg: "#a67c52",
        buttonHover: "#e0b77b",
        blockquote: "#c5b199",
        strong: "#d8c8b8",
        unclickable: "#4f3411",

      },
      fontSize: {
        base: "14pt",
        sm: "9pt",
        lg: "16pt",
        xl: "32pt",
      },
      lineHeight: {
        relaxed: "1.8",
        tighter: "1.7",
      },
      boxShadow: {
        container: "0 0 15px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        custom: "10px",
      },
      container: {
        center: true, // Centraliza o container
        padding: "4em 20px 20px 20px", // Ajusta o padding
        maxWidth: "600px", // Largura máxima
        
    },
  },
  plugins: [require("@tailwindcss/typography")],
  }}
