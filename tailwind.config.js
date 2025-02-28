/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#069CDF',
        'secondary':'#004D8B',
        'black':'#404040'
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        paydaRegular: "payda-Regular",
        paydaMedium: "payda-Medium",
        paydaSemiBold: "payda-SemiBold",
        paydaBold: "payda-Bold",
        paydaExtraBold: "payda-ExtraBold",
        paydaBlack: "payda-Black",
        MontserratRegular: "Montserrat-Regular",
        MontserratBold: "Montserrat-Bold",
        faNumRegular: "fanumber-Regular",
        faNumBold: "fanumber-Bold",
      },
      maxWidth:{
        'content':'1392px',
      },
    }
},
}

