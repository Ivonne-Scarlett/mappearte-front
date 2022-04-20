module.exports = {  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      backgroundImage: {
<<<<<<< HEAD
        "test": "url('https://manomaticestudio.com/wp-content/uploads/2020/11/principal_codac.jpg')",
        'loginBlur': "url('/img/login-blur.jpg')",
        'loginFondo': "url('/img/login-fondo.jpg')",
=======
        "home-hero": "url('https://manomaticestudio.com/wp-content/uploads/2020/11/principal_codac.jpg')"
>>>>>>> develop
      }, 
      fontFamily: {
        'Mali': ['Mali', 'cursive'],
        'Mochiy': ['Mochiy Pop One', 'sans-serif'],
      },    
      colors: {
        'backgroundP': '#04032E',
        'blueP': '#043BFF',
        'aquaP': '#00FFFF',
        'pinkP': '#E217F3',
        'orangeP': '#F39B17',
        'greenP': '#D4D809',  
        'neonP': '#ccff00'
      },
      borderColor: {
        'bbackground': '#04032E',
        'bblue:': '#043BFF',
        'baqua': '#00FFFF',
        'bpink': '#E217F3',
        'borange': '#F39B17',
        'bgreen': '#D4D809',
        'bneon': '#ccff00'
      },
    },
  },
  variants:{
    extend: {
      backgroundColor: ['checked']
    },
  },
  plugins: [],
  variants: {
    borderColor: ['responsive', 'hover', 'focus'],
  },
}
