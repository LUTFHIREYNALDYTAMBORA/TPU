module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
