module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  // darkMode: false, // or 'media' or 'class'
  important: false,
  theme: {
    extend: {
      colors: {
        firstColorGradientFromDark: '#ff8d73',
        secondColorGradientToLight: '#feb37b',
        textColorOrange: "#F9704E",
        textLightGray: '#606060',
        textDarkGray: '#454545',
        white: '#f7f6fb', //hz cto delat
        fullwhite: '#fff', //toje
        glass: 'rgba(255,255,255,0.1)',
        black: '#000',
        socialBarItemHover: '#FE9F76', //mnogo hz cto delat,
      },
      fontFamily: {
        'oxygen': ['Oxygen', 'sans-serif']
      },
      screens: {
        'min-phone': '320px',
        'max-phone': '550px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1850px'
      },
      backdropFilter: {
        'none': 'none'
      },  
      blur: {
        'glass': '20px'
      },
      gridTemplateColumns: {
        'search': 'auto 1fr auto',
        'icon': '1fr auto',
        'iconReverse': 'auto 2.75rem',
        'OrderLine': 'max-content max-content'
      },
      gridTemplateRows: {
        'OrderLine': 'auto auto'
      },
      boxShadow: {
        'defaultShadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
        'Footer': '0px -3px 10px rgb(0 0 0 / 5%);',
        'BannerCategory': '0 0 4px 0 rgb(0 0 0 / 15%);',
        'InnerCountryShadow': 'inset -4px -4px 4px rgba(217, 217, 217, 0.25), inset 4px 4px 4px rgba(182, 182, 182, 0.3);'
      },
      spacing: {
        '2px': '2px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
