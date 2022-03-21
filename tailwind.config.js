module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  // darkMode: false, // or 'media' or 'class'
  important: false,
  theme: {
    extend: {
      colors: {
        firstColorGradientFromDark: '#ff8d73',
        secondColorGradientToLight: '#feb37b',
        white: '#f7f6fb', //hz cto delat
        fullwhite: '#fff', //toje
        glass: 'rgba(255,255,255,0.1)',
        black: '#000',
        socialBarItemHover: '#FE9F76', //mnogo hz cto delat,
        textColorOrange: "#F9704E",
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
        'about': '30rem auto',
        'search': 'auto 1fr auto',
        'firstRowNavbar': '15rem 50rem 8rem 8rem',
        'icon': '1fr auto',
        'navIcons': '42px 50px 50px 42px 50px auto ',
        'ResGroup': '1fr 1fr 1fr',
        'Divider': 'max-content 1fr',
        'Banner': '30% 70%',
        'iconReverse': 'auto 2.75rem',
        'VGrid': 'auto 1fr',
        'OrderLine': 'max-content max-content'
      },
      gridTemplateRows: {
        'SocialBar': '35px 35px 35px 35px',
        'Card': 'max-content 30px auto auto auto',
        'Divider': '2rem',
        'Product': 'auto max-content max-content max-content max-content 1fr',
        'Avatar': '1fr max-content max-content auto',
        'Profile': '1fr max-content max-content max-content max-content max-content',
        'OrderLine': 'auto auto'
      },
      boxShadow: {
        loginShadow: '0px 15px 50px 1px rgba(0, 0, 0, 0.25)',
        cardShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'ResGroupShadow': '3px 3px 10px rgba(0, 0, 0, 0.07);',
        'Footer': '0px -3px 10px rgb(0 0 0 / 5%);',
        'BannerCategory': '0 0 4px 0 rgb(0 0 0 / 15%);',
        'category': '1px 1px 10px rgba(0, 0, 0, 0.25);',
        'InnerCountryShadow': 'inset -4px -4px 4px rgba(217, 217, 217, 0.25), inset 4px 4px 4px rgba(182, 182, 182, 0.3);'
      },
      spacing: {
        '2px': '2px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
