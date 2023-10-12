/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'gray-200': '#F2F3F7',
        'gray-50': '#F5F7F9',
        'blue-btn': '#0070FF',
        'red-btn': '#F0143E',
        'prink-50': '#ECDDDD',
        'tree-50': '#87FF8C',
        'gree-10': '#D9D9D9',
        'blue-10': '#7648F8',
        'white-30': '#C3C3C3',
        'White-10': '#F3F3F3'
      },
      height: {
        'vh': '100vh'
      }
    },
  },
  plugins: [],
};

