/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['Fira Code', 'monospace'],
                'sans': ['Inter', 'sans-serif'],
            },
            colors: {
                'cyber': {
                    'dark': '#0a0e17',
                    'darker': '#060810',
                    'card': '#111827',
                    'border': '#1e293b',
                    'cyan': '#00f5ff',
                    'green': '#00ff88',
                    'purple': '#a855f7',
                    'pink': '#f472b6',
                }
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'bounce': 'bounce 1s infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
                },
            }
        }
    },
    plugins: [],
}
