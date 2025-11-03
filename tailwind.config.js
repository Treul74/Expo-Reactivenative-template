/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // App color palette - matches colors.ts
        primary: '#FF385C',
        secondary: '#00A699',
        background: '#FAF9F6',
        card: '#FFFFFF',
        text: '#222222',
        subtitle: '#6A6A6A',
        muted: '#717171',
        border: '#DDDDDD',
      },
    },
  },
  plugins: [],
}

