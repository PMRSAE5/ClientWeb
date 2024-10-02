/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        vsm: "364",
      },
      spacing: {
        160: "42rem", // Ajoute une classe 'mt-160' (640px)
      },
      margin: {
        76: "300px", // Classe utilitaire ml-72-custom (288px)
      },
    },
  },
  plugins: [],
};
