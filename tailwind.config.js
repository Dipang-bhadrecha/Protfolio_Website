// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: "rgb(15 23 42 / <alpha-value>)",
        foreground: "rgb(148 163 184 / <alpha-value>)",
        border: "rgb(51 65 85 / <alpha-value>)",
        muted: "rgb(30 41 59 / <alpha-value>)",
        'muted-foreground': "rgb(100 116 139 / <alpha-value>)",
        primary: "rgb(94 234 212 / <alpha-value>)",
        'primary-foreground': "rgb(19 78 74 / <alpha-value>)",
      },
      boxShadow: {
        'highlight': 'inset 0 1px 0 0 rgba(148,163,184,0.1)',
      },
      dropShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}