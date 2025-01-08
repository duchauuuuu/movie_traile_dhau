/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",  // Bao gồm tất cả các file HTML và JSX trong thư mục src
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner' : 'url(./assets/doona.png)'
      }
    },
  },
  plugins: [],
}

