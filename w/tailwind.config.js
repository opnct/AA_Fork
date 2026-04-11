/** @type {import("tailwindcss").Config} /
export default {
content: [
"./index.html",
"./src/**/.{js,ts,jsx,tsx}",
],
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
uber: {
black: '#000000',
white: '#FFFFFF',
blue: '#276EF1',
}
},
boxShadow: {
'uber': '0 4px 14px 0 rgba(0, 0, 0, 0.39)',
}
},
},
plugins: [],
}
