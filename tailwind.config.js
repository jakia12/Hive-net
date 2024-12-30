/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        max: "1600px", // Add custom breakpoint for screens larger than 1800px
      },
    },
  },
  plugins: [],
};
