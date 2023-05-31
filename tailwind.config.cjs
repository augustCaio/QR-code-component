/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'qr-gray': '#d5e1ef',
				'qr-white': '#ffffff',
				'qr-d-blue': '#29354b',
				'qr-l-gray': '#898e94',
			}
		},
	},
	plugins: [],
}
