/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#584A37',
          dark: '#030204',
          light: '#AC8F5C',
        },
        secondary: '#584A37',
        background: '#AC8F5C',
        gray: {
          DEFAULT: '#70665E',
          dark: '#7B725F',
        },
        bone: '#F9F6F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}