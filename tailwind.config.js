/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce1: "bounce 1s infinite 0s",
        bounce2: "bounce 1s infinite 0.3s",
        bounce3: "bounce 1s infinite 0.6s",
      },
    },
  },
  plugins: [require("daisyui")],
};
