module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['DM Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: 'var(--primary)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
