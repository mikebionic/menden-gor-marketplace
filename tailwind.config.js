module.exports = {
	content: ['./src/**/*.{ts,tsx}', './public/index.html'],
	darkMode: 'class',
	important: false,
	theme: {
		extend: {
			colors: {
				firstColorGradientFromDark: '#2871cc',
				secondColorGradientToLight: '#2871cc',
				textColorOrange: '#2871cc',
				thirdColor: '#43d4ca',
				textLightGray: '#606060',
				textDarkGray: '#454545',
				white: '#f7f6fb',
				fullwhite: '#fff',
				glass: 'rgba(255,255,255,0.1)',
				black: '#000',
				darkFirstColor: '#6366f1',
				darkButtonColor: '#c03f7f',
				darkComponentColor: '#1e293b',
				darkBgColor: '#0f172a',
				darkTextWhiteColor: '#e1e8f0',
				darkText: '#94a3b8',
			},
			fontFamily: {
				oxygen: ['Oxygen', 'sans-serif'],
			},
			screens: {
				'min-phone': '320px',
				'max-phone': '550px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1850px',
			},
			backdropFilter: {
				none: 'none',
			},
			blur: {
				glass: '20px',
			},
			gridTemplateColumns: {
				search: 'auto 1fr auto',
				icon: '1fr auto',
				iconReverse: 'auto 2.75rem',
				OrderLine: 'max-content max-content',
			},
			gridTemplateRows: {
				OrderLine: 'auto auto',
			},
			boxShadow: {
				defaultShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
				Footer: '0px -3px 10px rgb(0 0 0 / 5%);',
				BannerCategory: '0 0 4px 0 rgb(0 0 0 / 15%);',
				InnerCountryShadow:
					'inset -4px -4px 4px rgba(217, 217, 217, 0.25), inset 4px 4px 4px rgba(182, 182, 182, 0.3);',
			},
			spacing: {
				'2px': '2px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
	],
}
