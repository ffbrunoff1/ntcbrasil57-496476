/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#54A9E1',
          dark: '#3a8bc7',
        },
        secondary: '#0A2540',
        light: '#F8F9FA',
        text: {
          primary: '#212529',
          secondary: '#495057',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(84, 169, 225, 0.1), 0 4px 6px -2px rgba(84, 169, 225, 0.05)',
        'card-hover':
          '0 20px 25px -5px rgba(84, 169, 225, 0.15), 0 10px 10px -5px rgba(84, 169, 225, 0.1)',
      },
    },
  },
  plugins: [],
};
