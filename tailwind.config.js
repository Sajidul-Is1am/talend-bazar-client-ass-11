/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-font': ["'DM Sans', sans-serif"],
        'playfair':["'Playfair Display', serif"]

      },
    },
  },
  plugins: [require("daisyui")],
}

