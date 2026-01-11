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
        primary: {
          50: "#e6f0ff",
          100: "#b3d4ff",
          200: "#80b8ff",
          300: "#4d9cff",
          400: "#1a80ff",
          500: "#0066ff", // Main bright blue
          600: "#0052cc",
          700: "#003d99",
          800: "#002966",
          900: "#001433",
        },
        car: {
          white: "#FFFFFF",
          black: "#1a1a1a",
          blue: "#0066ff",
          red: "#cc0000",
          grey: "#6b7280",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
