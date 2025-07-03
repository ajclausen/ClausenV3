import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-200': 'var(--slate-200)',
        'slate-400': 'var(--slate-400)',
        'teal-300': 'var(--teal-300)',
        navy: 'var(--navy)',
        cyan: 'var(--cyan)',
        'light-navy': 'var(--light-navy)',
        'lightest-navy': 'var(--lightest-navy)',
        highlight: 'var(--highlight)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};

export default config; 