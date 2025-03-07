module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'aqua-blue': '#0066cc', // Color personalizado
        'aqua-yellow': '#ffcc00', // Color personalizado
      },
      animation: {
        'float': 'float 3s infinite ease-in-out', // Animación de flotación
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
