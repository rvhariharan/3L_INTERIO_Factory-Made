/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                primary: '#0a0a0a',
                secondary: '#fbbf24',
                accent: '#d97706',
                'gray-light': '#f8fafc',
                'dark-surface': '#171717',
            }
        },
    },
    plugins: [],
}
