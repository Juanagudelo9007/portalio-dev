// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "./components/**/*.{astro,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
     
    },
  },
  plugins: [],
};
