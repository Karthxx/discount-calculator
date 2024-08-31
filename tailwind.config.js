/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgc: "#0A0A0A",
        bgd: "#313131",
      },
    },
  },
  plugins: [],
};
