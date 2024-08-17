/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
				center: true,
				padding: "1.5rem",
			},
			colors: {
				primary: '#00D991',
				dark: "#171923",
				light: "#fff",
				body: "#1D1E28"
			},
    },
  },
  plugins: [],
};
