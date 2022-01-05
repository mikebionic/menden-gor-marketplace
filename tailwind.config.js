// const { maxWidth } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: false,
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
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
    colors: {
      transparent: 'transparent',
      firstColor: '#10087cc6',
      firstColorLight: '#afa5d9',
      white: '#f7f6fb',
      scrollColor: '#9b95b6',
      buttonColor: '#214ed8',
      hoverButton: '#2b63eb',
      glass: 'rgba(255,255,255,0.1)',
      blueGlass: 'rgba(56,120,215,0.5)',
      tableGlass: 'rgba(243,244,246,0.3)',
      sidebarHover: '#0000000f',
      black: '#000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      },
      green: {
        50: '#ecfcf4',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#61d399',
        500: '#55b981',
        600: '#439769',
        700: '#347857',
        800: '#285f46',
        900: '#204e3b'
      },
      red: {
        50: '#fef1f2',
        100: '#fae2e2',
        200: '#f6c9ca',
        300: '#f1a5a5',
        400: '#ed7071',
        500: '#ea4344',
        600: '#dc2626',
        700: '#b91e1c',
        800: '#991b1b',
        900: '#7f1d1d'
      },
      blue: {
        50: '#eef6ff',
        100: '#dbe9fe',
        200: '#bedbfe',
        300: '#92c5fd',
        400: '#5fa5f9',
        500: '#3b81f6',
        600: '#2463eb',
        700: '#1c4ed8',
        800: '#1d40af',
        900: '#1f398a'
      },
      yellow: {
        50: '#fefbeb',
        100: '#fef2c7',
        200: '#fde68a',
        300: '#fbd34c',
        400: '#fbbe24',
        500: '#f59e0b',
        600: '#d97707',
        700: '#b4530a',
        800: '#92400d',
        900: '783510',
      },
      indigo: {
        50: '#eef2ff',
        100: '#dfe7ff',
        200: '#c7d2fd',
        300: '#a5b4fb',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f45e4',
        700: '#4337c9',
        800: '#3730a3',
        900: '#302e81'
      },
      purple: {
        50: '#f5f3ff',
        100: '#ece9fe',
        200: '#ddd6fe',
        300: '#c3b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d27d9',
        800: '#5b21b6',
        900: '#4c1d95'
      },
      pink: {
        50: '#fdf1f8',
        100: '#fbe7f2',
        200: '#fbcfe8',
        300: '#f8a8d4',
        400: '#f471b5',
        500: '#ec4899',
        600: '#da2877',
        700: '#bd195d',
        800: '#9d174d',
        900: '#831743'
      }
    },
    scale: {
      'sidebarScale': '1.02'
    },
    backdropFilter: {
      'none': 'none'
    },
    boxShadow: {
      loginShadow: '0px 15px 50px 1px rgba(0, 0, 0, 0.25)',
      cardShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
   
    minHeight: {
      '[220px]': '220px',
      'screen': '100vh',
      'sidebar': '95vh'
    },
    blur: {
      'glass': '20px'
    },
    zIndex: {
      '100': '100',
      '1': '1'
    },
    extend: {
      gridTemplateColumns: {
        'sidebar': '10px auto',
        'sidebarSticky': '2vw auto',
        'about': '30rem auto',
      },
      height: {
        sidebar: '95%',
      },
      padding: {
        'carousel': '0 0 56.23% 0'
      },
      maxWidth: {
        '95': '95%'
      },
      minWidth: {
        '[200px]': '200px',
        'screen': '100vw',
        '60': '60px'
      },
      borderRadius: {
        'semifull': '50%'
      },
    },
  },
  variants: {
    accessibility: ['responsive', 'focus-within', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    animation: ['responsive'],
    appearance: ['responsive'],
    backdropBlur: ['responsive'],
    backdropBrightness: ['responsive'],
    backdropContrast: ['responsive'],
    backdropFilter: ['responsive'],
    backdropGrayscale: ['responsive'],
    backdropHueRotate: ['responsive'],
    backdropInvert: ['responsive'],
    backdropOpacity: ['responsive'],
    backdropSaturate: ['responsive'],
    backdropSepia: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundBlendMode: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'checked'],
    backgroundImage: ['responsive'],
    backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    backgroundOrigin: ['responsive'],
    blur: ['responsive'],
    borderCollapse: ['responsive', 'active'],
    borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'checked'],
    borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    borderRadius: ['responsive', 'active'],
    borderStyle: ['responsive', 'active', 'hover', 'active'],
    borderWidth: ['responsive', 'active', 'hover'],
    boxDecorationBreak: ['responsive'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    boxSizing: ['responsive'],
    brightness: ['responsive'],
    clear: ['responsive'],
    container: ['responsive'],
    contrast: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive', 'dark'],
    divideOpacity: ['responsive', 'dark'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    dropShadow: ['responsive'],
    fill: ['responsive'],
    filter: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontWeight: ['responsive'],
    gap: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    grayscale: ['responsive'],
    gridAutoColumns: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridAutoRows: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridColumnStart: ['responsive'],
    gridRow: ['responsive'],
    gridRowEnd: ['responsive'],
    gridRowStart: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
    height: ['responsive'],
    hueRotate: ['responsive'],
    inset: ['responsive'],
    invert: ['responsive'],
    isolation: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'first'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    mixBlendMode: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus-within', 'focus', 'active'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive', 'first', 'last'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'dark', 'focus'],
    placeholderOpacity: ['responsive', 'dark', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive', 'active'],
    resize: ['responsive'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
    ringWidth: ['responsive', 'focus-within', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    saturate: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    sepia: ['responsive'],
    skew: ['responsive', 'hover', 'focus'],
    space: ['responsive', 'hover', 'focus'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOverflow: ['responsive'],
    textTransform: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    transitionDelay: ['responsive'],
    transitionDuration: ['responsive'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    translate: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'focus-within', 'focus']
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
