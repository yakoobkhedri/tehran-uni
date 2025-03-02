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
        yekanBakhRegular: "yekanBakh-Regular",
        yekanBakhMedium: "yekanBakh-Medium",
        yekanBakhSemiBold: "yekanBakh-SemiBold",
        yekanBakhBold: "yekanBakh-Bold",
        yekanBakhExtraBold: "yekanBakh-ExtraBold",
        yekanBakhBlack: "yekanBakh-Black",
        MontserratRegular: "Montserrat-Regular",
        MontserratBold: "Montserrat-Bold",
      },
      padding:{
        'custom':'calc((100% - 1392px) / 2)'
       },
      maxWidth:{
        'content':'1392px',
      },
    }
},
}

