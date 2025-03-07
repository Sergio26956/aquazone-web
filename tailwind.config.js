module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'aqua-primary': '#0066CC',
        'aqua-secondary': '#FFD700',
        'aqua-dark': '#003366',
      },
      animation: {
        'wave': 'wave 12s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
