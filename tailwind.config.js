/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Додайте шляхи до ваших файлів, де ви використовуєте класи Tailwind
    // Наприклад:
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}