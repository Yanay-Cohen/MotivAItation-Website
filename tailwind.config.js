/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media', // or 'class' if you want to toggle manually
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        background: '#242424',
        lightText: 'rgba(255, 255, 255, 0.87)',
        darkText: '#213547',
        link: '#646cff',
        linkHover: '#535bf2',
        buttonBg: '#1a1a1a',
        buttonHoverBorder: '#646cff',
        buttonLightBg: '#f9f9f9',
        linkLightHover: '#747bff',
      },
    },
  },
  plugins: [],
}
