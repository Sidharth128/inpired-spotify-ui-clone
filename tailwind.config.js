/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      margin: {
        '3px': '3px',
      },
      zIndex: {
        '100': '100',
      },
      colors: {
        spotify: {
          green: '#1DB954',
        'custom-gray': '#282828',
        'black':'#040404',        
      }, 
      },
      flex: {
        '20': '0 0 20%',
        '80': '0 0 80%',
        '30': '0 0 30%',
        '40': '0 0 40%',
        '60': '0 0 60%',
        '50': '0 0 50%',
      },
      borderColor: {
        'custom-gray': '#282828',
      },
      width: {
        '97': '97%',
      },
      maxWidth: {
        '300px' :'300px',
      },
      padding: {
        '100px': '100px',
      },

    },
  },
  plugins: [],
}

