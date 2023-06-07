/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
      }, 
    },
  },
  plugins: [],
}