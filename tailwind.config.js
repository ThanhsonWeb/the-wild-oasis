/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					50: "#eef2ff",
					100: "#e0e7ff",
					200: "#c7d2fe",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					800: "#3730a3",
					900: "#312e81",
				},
				grey: {
					0: "#fff",
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
				},
			},
			borderRadius: {
				tiny: "3px",
				sm: "5px",
				md: "7px",
				lg: "9px",
			},
			boxShadow: {
				sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
				md: "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
				lg: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
			},
			backdropBlur: {
				md: "blur(4px)",
			},
			backgroundColor: {
				backdrop: "rgba(255, 255, 255, 0.1)",
			},
		},
	},
	plugins: [],
};
