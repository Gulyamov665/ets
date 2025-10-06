import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        container: {
            center: true,
            padding: '16px',
            screens: {
                xs: '480px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1220px',
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                brand: "#0a9642",
                orange: "#fe5716",
            },
            fontFamily: {
                sans: ['var(--font-sora)', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};