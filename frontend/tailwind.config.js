/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			colors: {
				"primary": "#008036",
				"primary-light": "#4FB667",
				"primary-dark": "#004D05",
				"secondary": "#f5f2f0",
				"accent": "#80004A",
				"accent-light": "#B9457B",
				"accent-dark": "#49001E",
				"text": "#1f1f1f",
				"white": "#FFFFFF",
				"header": "#003b26"
			}
		}, 
	}, 
	plugins: [], 
}