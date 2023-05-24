/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'Proxima': ['Proxima', 'sans-serif'],
      'Proximabold': ['Proximabold', 'sans-serif'],
    }
  },
  },
  plugins: [],
}