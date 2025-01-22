import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '481px',
        md: '769px',
        lg: '1025px',
        xl: '1440px'
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        
      },
    },
  },
 
  plugins: [
    daisyui,
  ],
};

export default config;
