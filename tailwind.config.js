/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens :{
      's500' : '500px',
      'sm' : '640px',
      's700' : '700px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
    extend: {},
  },
  plugins: [],
}
