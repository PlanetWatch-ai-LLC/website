/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#03A9F4',
          dark: '#0292d1',
        },
        ink: '#1F2937',
        muted: '#6B7280',
        surface: '#F7F7F7',
        navy: '#0a1628',
        leaf: '#34C759',
        moss: '#8BC34A',
      },
    },
  },
  plugins: [],
};
