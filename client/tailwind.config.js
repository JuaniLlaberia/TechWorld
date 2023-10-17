/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#0a0a0a',
        'dark-2': '#1F1F1F',
        'light-1': 'rgba(245, 245, 245, 1)',
        'light-2': 'rgb(215, 215, 215, .8)',
        'light-3': '#8d8d8d',
        'dark-1-border': '#333333',
        'dark-shadow': '#5f5c5c38',
        'secondary-1': '#936cf5',
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
    'secondary-1',
  ],
};
