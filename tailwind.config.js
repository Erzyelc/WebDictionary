/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackProject: "#006EFF",
        purpleProject: "#8B5CF6",
        redProject: "#FF4242",
        back1: "#050505",
        back: "#1F1F1F",
        back3: "#2E2E2E",
        back4: "#3B3B3B",
        gray1: "#828282",
        gray2: "#E9E9E9",
        gray3: "#757575",
        secondary: "#006EFF",
        accent: "#f4f4f4",
        search: "#a445ed",
      },
    },
  },
  plugins: [],
};
