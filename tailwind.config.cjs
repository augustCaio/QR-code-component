/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'qr-white': 'hsl(0, 0%, 100%)',
				'qr-l-gray': 'hsl(212, 45%, 89%)',
				'qr-g-blue': 'hsl(220, 15%, 55%)',
				'qr-d-blue': 'hsl(218, 44%, 22%)',
			},
			fontFamily: {
				'outfit': ['Outfit', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
