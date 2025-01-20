/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                 // HTML entry point
    "./src/**/*.{js,jsx}",          // Include all .js and .jsx files in the `src` folder and subfolders
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#FFFDF9",     
      },
    },
  }
};
