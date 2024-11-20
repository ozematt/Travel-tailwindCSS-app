/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open-Sans", "sans-serif"],
      },
      colors: {
        primary: "#181E4B",
        "section-title-color": "#14183E",
        "text-color": "#5E6282",
      },
    },
  },
  plugins: [],
};
