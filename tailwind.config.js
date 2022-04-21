module.exports = {  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      backgroundImage: {
        "home-hero": "url('https://manomaticestudio.com/wp-content/uploads/2020/11/principal_codac.jpg')",
        "artist":"url('https://media.istockphoto.com/photos/holographic-iridescent-background-unicorn-colorful-rainbow-foil-picture-id1302561463?b=1&k=20&m=1302561463&s=170667a&w=0&h=eJuXSxGSikh7IB7GalNDItwKlYGmV37daFono6QiK6c=')",
        "artistRegister": "url('/img/registro-fondo.jpg')"
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
