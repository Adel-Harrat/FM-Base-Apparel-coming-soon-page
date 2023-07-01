/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "My-Desaturated-Red": "hsl(0, 36%, 70%)",
        "My-Soft-Red": "hsl(0, 93%, 68%)",
        "My-Dark-Grayish-red": "hsl(0, 6%, 24%)",
        "My-g-from": "hsl(0, 0%, 100%)",
        "My-g-to": "hsl(0, 100%, 98%)",

        // - Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
        // - Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)
      },
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
