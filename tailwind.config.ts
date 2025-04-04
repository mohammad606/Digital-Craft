import type { Config } from "tailwindcss";

export default {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#2C2C2A",
        gray: "#333331",
        textColor: "#FDF1E5",
        lightBlue:'#1E7EB0',
        darkBlue:'#1E7EB0',
        greenText:'#04A581'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;