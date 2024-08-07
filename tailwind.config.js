/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #e2e8f0, #f8fafc)', // Customize gradient colors
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-gradient': {
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            backgroundImage: 'linear-gradient(to right, #e2e8f0, #f8fafc)', // Customize gradient colors
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
