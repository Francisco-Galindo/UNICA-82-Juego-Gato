/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     colors:{
    'blue' :{
      100: "#31C3BD",
      200: "#65E9E4",
    },
    'yellow' :{
      100: "#F2B137",
      200: "#FFC860"
    },
    'dark_blue' :{
      100: "#1A2A33",
      200: "#1F3641"
    },
    'gray' :{
      100: "#A8BFC9",
      200: "#DBE8ED"
    }
  },
    extend: {
      backgroundImage: {
        'icon-o-outline': 'url("./assets/images/icon-o-outline.svg")',
        'icon-o': 'url("./assets/images/icon-o.svg")',
        'icon-restart': 'url("./assets/images/icon-restart.svg")',
        'icon-x-outline': 'url("./assets/images/icon-x-outline.svg")',
        'icon-x': 'url("./assets/images/icon-x.svg")',
        'logo': 'url("./assets/images/logo.svg")',
      }
    },
  },
  plugins: [],
}

