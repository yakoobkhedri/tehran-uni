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
        yekanBakhThin: "YekanBakhFaNum-Thin",
        yekanBakhLight: "YekanBakhFaNum-Light",
        yekanBakhRegular: "YekanBakhFaNum-Regular",
        yekanBakhMedium: "YekanBakhFaNum-Medium",
        yekanBakhSemiBold: "YekanBakhFaNum-SemiBold",
        yekanBakhBold: "YekanBakhFaNum-Bold",
        yekanBakhExtraBold: "YekanBakhFaNum-ExtraBold",
        yekanBakhBlack: "YekanBakhFaNum-Black",
        yekanBakhExtraBlack: "YekanBakhFaNum-ExtraBlack",
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

