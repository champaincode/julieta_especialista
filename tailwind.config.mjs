/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-mint': '#B2D8D1',
        'card-indie': '#B2D8D1',
        'brand-mint-light': '#C8E6E0',
        'mint': '#B2D8D1',
        'pastel-green': '#B2D8D1',
        'pastel-purple': '#B88AF2',
        'pastel-purple-light': '#590202ff',
        'pastel-yellow': '#F3F58A',
        'bg-light': '#F6F7F9',
        'text-dark': '#151515',
        'bg-dark': '#0E0F12',
        'gold': '#D4AF37',
        'gold-light': '#E9D18B',
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
