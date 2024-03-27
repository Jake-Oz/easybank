import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Primary
      primary: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
      },

      // Neutral
      neutral: {
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    extend: {
      backgroundImage: {
        "bg-intro-desktop": "url('/bg-intro-desktop.svg')",
        "bg-intro-mobile": "url('/bg-intro-mobile.svg')",
      },
      backgroundPosition: {
        topRight: "top -190px right -240px",
        top: "top -50px right 0px",
      },
    },
  },
  plugins: [],
};
export default config;
