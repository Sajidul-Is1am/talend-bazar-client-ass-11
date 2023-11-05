/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-font': ["font-family: 'DM Sans', sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
}

