module.exports = {

  //Con purge añadimos lo que son todos nuestros componentes
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //importamos algunos colores a usar en nuestro trabajo o proyecto
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      yellow:{
        light: '#8EA6B4'
      },

      white:{
        light: '#F6F6F6'
      },

      teal:{
        light: '#A3D2CA',
        darkest: '#506D84'
      },
    extend: {},
  },

  variants: {

    extend: {},
  },
  plugins: [],
}
  }
