module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00c6ff', // cyan/teal
        secondary: '#0f2027', // deep blue
        accent: '#2c5364', // indigo/blue
        dark: '#181f2a',
        card: '#232b3a',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'Arial', 'sans-serif'],
      },
      gradientColorStops: {
        'pro-start': '#0f2027',
        'pro-mid': '#2c5364',
        'pro-end': '#00c6ff',
      },
    },
  },
  plugins: [],
}; 