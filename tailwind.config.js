/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-new-product': "url('/assets/home/mobile/image-header.jpg')",
        'mobile-zx7': "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        'mobile-yx1': "url('/assets/home/mobile/image-earphones-yx1.jpg')",
        'mobile-best-gear': "url('/assets/shared/mobile/image-best-gear.jpg')",
      }
    },
  },
  plugins: [],
}