/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'PT_Sans':["PT Sans", 'sans-serif'],
      'Merriweather':['Merriweather', 'serif'],
    }
  },
  plugins: [require("daisyui")],
}

