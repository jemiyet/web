/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/js/**/*.{js,ts,jsx,tsx}",
    "./resources/views/**/*.blade.php",
  ],
  theme: {
    extend: {
      colors: {
        twitter: {
          blue: '#1DA1F2',
          dark: '#15202B',
          darker: '#192734',
          light: '#657786',
          extra: '#AAB8C2',
          lightest: '#E1E8ED',
          faint: '#F7F9FA',
        }
      }
    },
  },
  plugins: [],
} 