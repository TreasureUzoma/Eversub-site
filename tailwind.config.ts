import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        rubik: "Rubik",
        grotesk: "Cabinet Grotesk"
      },
      backgroundColor: {
        myWhite: "#fbfbfb",
        myRed: "#fc4100",
        myBlack: "#332941",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myRed: "#fc4100",
        myBlack: "#332941",
      },
    },
  },
  plugins: [],
};
export default config;
