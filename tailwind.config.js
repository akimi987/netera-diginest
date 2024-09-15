/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
        primary: '#8B0000', // Rouge foncé ciré
        secondary: '#0D0D0D', // Noir ciré
    },
  },
  plugins: [],
}
}



