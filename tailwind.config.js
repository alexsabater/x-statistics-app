/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'animation': {
        'text':'text 10s linear infinite',
      },
      'keyframes': {
          'text': {
              '0%, 100%': {
                'background-size':'180% 180%',
                'background-position': 'left center'
              },
              '50%': {
                'background-size':'180% 180%',
                'background-position': 'right center'
              },
          },
      },
    },
  },
  plugins: [],
}
