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
        gold: {
          DEFAULT: "#c9b18c",
          50: "#faf7f2",
          100: "#f5ede0",
          200: "#eadbc2",
          300: "#dec6a1",
          400: "#c9b18c",
          500: "#c8a96b",
          600: "#b39152",
          700: "#8e723e",
          800: "#6e5732",
          900: "#4d3c23",
        },
        navy: {
          DEFAULT: "#0f172a",
          800: "#1e293b",
          900: "#0f172a",
          950: "#090d16",
        },
        luxury: {
          dark: "#121212",
          black: "#0a0a0a",
          charcoal: "#1e1e1e",
          cream: "#fbf9f5",
          sand: "#f5ede0",
          taupe: "#776454",
          brown: "#30221d",
        }
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
