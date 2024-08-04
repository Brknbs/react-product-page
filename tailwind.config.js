/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: { default: "hsl(26, 100%, 55%)", pale: "hsl(25, 100%, 94%)" },
        gray: { default: "#999", light: "#eee" },
      },
    },
  },
  plugins: [],
};
