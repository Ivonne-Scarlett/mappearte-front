module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "test": "url('https://manomaticestudio.com/wp-content/uploads/2020/11/principal_codac.jpg')"
      },
      colors: {
        "backgroundP": "#04032E",
        "blueP": "#043BFF",
        "aquaP": "#00FFFF",
        "pinkP": "#E217F3",
        "orangeP": "#F39B17",
        "greenP": "#D4D809",      
      },
    },
  },
  plugins: [],
}
