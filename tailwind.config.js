/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/Banner.jpg')",
        "hero-pattern2": "url('/src/img/Call-to-action.jpg')",
      },
    },
  },
  plugins: [],
};
