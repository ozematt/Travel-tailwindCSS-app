/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open-Sans", "sans-serif"],
      },
      colors: {
        primary: "#181E4B",
        accent: "#DF6951",
        "section-title-color": "#14183E",
        "text-color": "#5E6282",
      },
      boxShadow: {
        customMorph:
          "12px 12px 12px rgba(0, 0, 0, 0.1), -10px -10px 10px white",
        customYellow:
          "10px 10px 10px rgba(241, 165, 1, 0.4), -10px -10px 10px white",

        customRed:
          "10px 10px 10px rgba(223, 105, 81, 0.4), -10px -10px 10px white",
      },
      backgroundImage: {
        "email-icon": "url('/src/assets/email_Icon.png')",
      },
    },
  },
  plugins: [],
};
