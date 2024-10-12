/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        youngserif:["Young Serif", "serif"],
        outfit: ["Outfit", "sans-serif"]
      },
      colors:{
        customWhite: "hsl(0, 0%, 100%)",
        customStone100:"hsl(30, 54%, 90%)",
        customStone150:"hsl(30, 18%, 87%)",
        customStone600:"hsl(30, 10%, 34%)",
        customStone900:"hsl(24, 5%, 18%)",
        customBrown800:"hsl(14, 45%, 36%)",
        customRose800:"hsl(332, 51%, 32%)",
        customRose50: "hsl(330, 100%, 98%)"
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'body': {
          margin: '0',
          padding: '0',
          'box-sizing': 'border-box',
        },
      });
    },
  ],
}

