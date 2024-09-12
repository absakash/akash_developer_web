/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ]
}


// theme: {
//   extend: {
//     animation: {
//       bubble1: 'float 6s ease-in-out infinite',
//       bubble2: 'float 8s ease-in-out infinite',
//       bubble3: 'float 10s ease-in-out infinite',
//     },
//     keyframes: {
//       float: {
//         '0%': { transform: 'translateY(0)' },
//         '50%': { transform: 'translateY(-100px)' },
//         '100%': { transform: 'translateY(0)' },
//       },
//     },
//   },
// },