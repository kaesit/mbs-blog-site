/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'sans'ı varsayılan olarak Rajdhani yapıyoruz
        sans: ['Rajdhani', 'sans-serif'], 
        // Başlıklar için özel 'techno' fontu tanımlıyoruz
        techno: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}