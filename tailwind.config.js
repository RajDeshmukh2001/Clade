/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sub_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // Navbar Shadow
        'navbar': '0px 4px 4px 0px #D9D9D91A',
        'responsive-navbar': '0px -4px 4px 3px #D9D9D91A',

        // Sidebar Shadow
        'sidebar': '0px 4px 4px 0px #00000040',
      },
    },
    screens: {
      // Mobile (max-width: 425px)
      'max': {'max': '425px'},

      // Tablet (min-width: 427px)
      'md': '427px',

      // Laptop/Desktop (min-width: 770px)
      'lg': '770px',
    }
  },
  plugins: [],
};
