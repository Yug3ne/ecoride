/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        "inter": ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-extra-bold": ["Inter-ExtraBold", "sans-serif"],
        "inter-extra-light": ["Inter-ExtraLight", "sans-serif"],
        "inter-light": ["Inter-Light", "sans-serif"],
        "inter-medium": ["Inter-Medium", "sans-serif"],
        "inter-semi-bold": ["Inter-SemiBold", "sans-serif"],
      },
      colors:{
        primary: "#01754C",
        secondary: "#E1D203",
        tertiary: "#1479C9",
        dark: "#1A1A1A",
        success: "#16A34A",
        text: "#111827",
        subtle: "#6B7280",
        accent: "#F97316",
        light: "#F9FAFB",
      }
    },
  },
  plugins: [],
}