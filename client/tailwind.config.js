/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-1': '#121212',
        'dark-2': '#1F1F1F',
        'light-1': 'rgba(245, 245, 245, 1)',
        'light-2': 'rgb(215, 215, 215, .8)',
        'light-3': 'rgba(209, 209, 209, 0.521)',
        'dark-1-border': '#4040404b',
        'dark-shadow': 'rgba(55, 55, 55, .2)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  safelist: [
    'dark-1',
    'dark-2',
    'light-1',
    'light-2',
    'light-3',
    'dark-1-border',
  ],
};
