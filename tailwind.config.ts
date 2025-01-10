import type { Config } from "tailwindcss";
const { nextui } = require ( "@nextui-org/react" ) ; 
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mjs}" ,
    "./node_modules/@nextui-org/table/dist/**/*.{js,ts,jsx,tsx,mjs}" ,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
