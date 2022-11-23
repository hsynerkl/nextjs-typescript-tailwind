/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        "primary-white": "#fff",
        "secondary-white-color": "#FFFCF2",
        "primary-color": "#214042",
        "secondary-color": "#42446C",
        "pale-primary-color": "#6a6c77",
        "pale-secondary-color": "#678FA7",
        "bg-purple-primary": "#42446C",
        "bg-purple-secondary": "#41446f",
        "color-pink": "#c874a2",
        "color-yellow": "#FFF4BC",
        "border-color": "#6A6C77",
        "bg-orange": "#F7993B",
        "bg-cyan": "#c5e7da;",
        "login-primary": "#525252",
        "ignored-primary": "#A1A1A1",
        "purple-primary": "#7F265B",
      },
      backgroundImage: {
        "hero-sectionone": "url('/images/hero1.webp')",
        "hero-sectiontwo": "url('/images/s4bg.webp')",
        banner: "url('/images/banner.webp')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
