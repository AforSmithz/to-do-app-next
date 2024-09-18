import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "to-do-title": "#292524",
        "to-do-black": "#44403C",
        "to-do-blue": "#075985",
        "to-do-red": "#BE123C ",
        "to-do-white": "#F0F9FF",
        "to-do-error": "#E11D48",
        "button-red": "#9F1239",
      },
    },
  },
  plugins: [],
};
export default config;
