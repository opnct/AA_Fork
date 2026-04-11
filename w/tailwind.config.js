/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Enforcing Monospace for the Notepad / Editor design
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Fira Code"', 'monospace'],
      },
      colors: {
        editor: {
          bg: '#1e1e1e',          // Main Background
          panel: '#252526',       // Side/Top Panel
          border: '#333333',      // Subtle Borders
          keyword: '#569cd6',     // Keyword Blue
          variable: '#9cdcfe',    // Variable Light Blue
          selection: '#264f78',   // Selection Blue
          text: '#d4d4d4'         // Default Text Gray
        }
      },
      boxShadow: {
        // Flat UI usually doesn't use heavy shadows, but soft is kept for subtle elevation
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}