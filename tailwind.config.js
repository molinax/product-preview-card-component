/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      "montserrat": ["'Montserrat'", "sans-serif"],
      "fraunces": ["'Fraunces'", "serif"],
    },
    extend: {
      colors: {
        "dark-cyan": "var(--dark-cyan)",
        "cream": "var(--cream)",
        "very-dark-blue": "var(--very-dark-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "white": "var(--white)",
      },
    },
  },
  plugins: [],
}

