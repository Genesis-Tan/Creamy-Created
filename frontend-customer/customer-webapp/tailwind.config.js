module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../frontend-customer/customer-webapp/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ccbeige: '#FFFDD0',
        ccpink: 'FFB6C1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
