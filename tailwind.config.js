module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundP': '#04032E',
        'blueP:': '#043BFF',
        'aquaP': '#00FFFF',
        'pinkP': '#E217F3',
        'orangeP': '#F39B17',
        'greenP': '#D4D809',  
      },
      fontFamily: {        
        Bubblegum: ['Bubblegum Sans', 'cursive'],
        Gabriela: ['Gabriela', 'serif'],
        Megrim: ['Megrim', 'cursive'],
       },
    },
  },
  plugins: [],
}
