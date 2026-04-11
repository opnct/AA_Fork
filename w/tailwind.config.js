/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#3FA9F5',
        }
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}