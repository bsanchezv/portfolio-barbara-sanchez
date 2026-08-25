/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0d0d10',
          light: '#16161a',
          card: '#1a1a1f',
        },
        accent: {
          magenta: '#D45D9E',
          pastel: '#E6A2C7',
          lavender: '#B27FB3',
          salmon: '#F4A28C',
          powerbi: '#F2C811',
          qlik: '#009845',
          academiab: '#2EB82A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-magenta': '0 0 40px -10px rgba(212, 93, 158, 0.4)',
        'glow-lavender': '0 0 40px -10px rgba(178, 127, 179, 0.4)',
        'glow-salmon': '0 0 40px -10px rgba(244, 162, 140, 0.4)',
        'glow-powerbi': '0 0 40px -10px rgba(242, 200, 17, 0.3)',
        'glow-qlik': '0 0 40px -10px rgba(0, 152, 69, 0.3)',
      },
    },
  },
  plugins: [],
};
