import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'dark-blue': '#082642',
        'light-gray': '#FAFAFA',
        'green': '#309E3A',
        'gold-light': '#FFEED2',
        'gold-dark': '#CE9739',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(212.6deg, #FFEED2 25.89%, #CE9739 100.36%)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
