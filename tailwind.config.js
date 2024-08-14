/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #e2e8f0, #f8fafc)', // Customize gradient colors
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out',
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
