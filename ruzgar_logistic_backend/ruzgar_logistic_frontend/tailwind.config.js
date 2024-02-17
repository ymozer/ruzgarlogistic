/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/**.{html,js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/android-chrome-192x192.png",
        'truck-obj': "url('/public/truck_obj.png')",
        'truck-bg': "url('/public/truck_objbg.png')",
      },
      backgroundPosition: {
        'sr1': '15vw -15vw',
        'sr2': '25vw -7vw',
        'sr3': '-20vw 0vw',
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [],
}

