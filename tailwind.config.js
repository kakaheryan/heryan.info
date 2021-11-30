const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  mode: 'jit',
  purge: [],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
        fontSize: {
       'xs': '.75rem',
       'sm': '.8rem',
       'tiny': '.825rem',
        'base': '.95rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
      },

    extend: {
      fontFamily: {
        primary: ['Fira'],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
        },
        dark: '#1e272e',
      },

    },

  },

  variants: {
    extend: {
        // ...
       fontSmoothing: ['hover', 'focus'],
      }
    },
  plugins: [ require('@tailwindcss/typography')],
};