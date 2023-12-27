export const HEADER_HEIGHT = 72;

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        header: `${HEADER_HEIGHT}px`,
        'screen-minus-header': `calc(100vh - ${HEADER_HEIGHT}px)`
      }
    },
    screens: {
      /*
        sync breakpoints with vuetify, details below:

        Extra small	xs	Small to large phone	< 600px
        Small	sm	Small to medium tablet	600px > < 960px
        Medium	md	Large tablet to laptop	960px > < 1280px
        Large	lg	Laptop to desktop	1280px > < 1920px
        Extra large	xl	1080p to 1440p desktop	1920px > < 2560px
        Extra extra large	xxl	4k and ultra-wide	> 2560px
      */
      xs: '600px',
      sm: '960px',
      md: '1280px',
      lg: '1920px',
      xl: '2560px',
      '2xl': '2560px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
