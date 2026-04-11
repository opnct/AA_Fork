/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        agency: {
          bg: '#0d0d0d',
          panel: '#141414',
          border: 'rgba(255,255,255,0.1)',
          text: '#f3f4f6',
          muted: '#9ca3af'
        }
      }
    },
  },
  plugins: [],
}
