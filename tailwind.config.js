/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mistake': '#EF4444',
        'highlight': '#10B981',
        'insight': '#3B82F6',
        'question': '#F59E0B',
        'macro': '#8B5CF6',
      }
    },
  },
  plugins: [],
}
