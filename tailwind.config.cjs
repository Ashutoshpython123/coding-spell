module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif'],
        Rajdhani: ["Rajdhani_light" ]
      },
      colors : {
        green : {
          DEFAULT : '#71B214'
        },
        gray : {
          600 : '#606060'
        },
        bhagawa : {
          DEFAULT : '#ff9900'
        },
        header_bg : {
          DEFAULT : '#6350BB'
        },
        textc : {
          DEFAULT : "#7bf5fb"
        },
        bluec :{
          DEFAULT : "#343FA1"
        }
      },
      spacing : {
        13 : '3.25rem',
      },
      rotate: {
        '20': '20deg',
      },
      zIndex: {
        '100': '100',
      },
      boxShadow : {
        primary : '0px 9.9px 21.6px rgba(136, 202, 41, 0.41)'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '20px',
      },
      minHeight: {
        '1/2': '30%',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(10px)'
          },
          '50%': {
            transform: 'translateZ(0px)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      }

    },
  },
  plugins: [],
}
