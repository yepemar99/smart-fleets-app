/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Si usas pages/
    "./app/**/*.{js,ts,jsx,tsx}", // Si usas app/
    "./components/**/*.{js,ts,jsx,tsx}", // Componentes reutilizables
  ],
  darkMode: "class", // Importante para usar next-themes
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        // Aquí puedes extender tu paleta personalizada si usas OKLCH
        // por ahora puedes dejarlo limpio, ya que tus colores están en CSS
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [],
};
