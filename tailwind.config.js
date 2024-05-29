/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/Banner.jpg')",
        "hero-pattern2": "url('/src/img/Call-to-action.jpg')",
        "about-hero": "url('/src/img/about-banner.jpg')",
        "about-hero2": "url('/src/img/talk-to-us.jpg')",
        "contact-hero": "url('/src/img/contact-Banner.jpg')",
      },
    },
  },
  plugins: [],
};
