/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / 1)",
        secondary: "rgb(var(--color-secondary) / 1)",
        tertiary: "rgb(var(--color-tertiary) / 1)",
      },
    },
  },
  plugins: [],
};
