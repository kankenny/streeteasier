module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Merriweather', 'sans-serif'],
				serif: ['Zilla Slab'],
			},
			colors: {
				primary: '#574AE2',
				secondary: '#222A68',
				lightSecondary: '#AB81CD',
				darkSecondary: '#222A68',
				tertiary: '#E2ADF2',
			},
		},
	},
	plugins: [],
}
