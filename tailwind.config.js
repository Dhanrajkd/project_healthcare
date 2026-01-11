/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        navcolor: "#000000",
        compname: "#5ac1bc",
        comppara: "#56598b",
        ourcolor: "#5e5e5e",
        ourpara: "#55aaff",
        footer_colour:"#f2f2f2"
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        moveslides: "moveslides 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        moveslides: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

    },
  },
  plugins: [],
}
