module.exports = {
  content: [
    // Struktur dir mana saja yang akan discan mengandung class utility Tailwind
    // Array 'content' juga untuk memberi tahu file mana saja yang akan diminify menggunakan purge built-in Tailwind
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{html,js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        // Extend dari color palette yang disediakan built-in dari Tailwind
        // Selengkapnya: https://tailwindcss.com/docs/customizing-colors#adding-additional-colors
        red: {
          50: '#FDF7F7',
          100: '#F9E4E4',
          200: '#F4CACA',
          300: '#EEAFAF',
          400: '#E42313',
          500: '#C40D0E',
          600: '#A40917',
        },
      },
    },
  },
};
