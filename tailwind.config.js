module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#EB464E',
        customYellow: '#FFC10C',
      },
      screens: {
        lg: '1024px', 
      },
    },
  },
  plugins: [
    
  ],
};



