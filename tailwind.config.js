module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Specify your content files
  theme: {
    extend: {
      screens: {
        // Add custom breakpoints here
        'xs': '360px', // Example of an extra small breakpoint
         
      },
    },
  },
  plugins: [],
};
