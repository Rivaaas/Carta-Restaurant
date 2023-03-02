/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**","./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#424242",
        "secondary-bg": "#616161",
        "red-primary": "#f50057",
        "white-primary": "#fafafa"
      }
    },
  },
  plugins: [],
}
