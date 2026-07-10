/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // Tambahkan baris ini
        vintage: ['"Chonburi"', "serif"],
      },
    },
  },
  plugins: [],
};
