/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#002B5B",
          secondary: "#FFF8F5",
          success: "#e2fcf2",
          accent: "#F0FBFF",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      textColor: {
        primary: "#002B5B",
      },
      backgroundColor: {
        primary: "#002B5B",
      },
    },
  },
  plugins: [require("daisyui")],
};
