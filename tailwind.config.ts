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
        // Dracula Theme Colors
        'dracula-background': 'var(--dracula-background)',
        'dracula-current-line': 'var(--dracula-current-line)',
        'dracula-foreground': 'var(--dracula-foreground)',
        'dracula-comment': 'var(--dracula-comment)',
        'dracula-cyan': 'var(--dracula-cyan)',
        'dracula-green': 'var(--dracula-green)',
        'dracula-orange': 'var(--dracula-orange)',
        'dracula-pink': 'var(--dracula-pink)',
        'dracula-purple': 'var(--dracula-purple)',
        'dracula-red': 'var(--dracula-red)',
        'dracula-yellow': 'var(--dracula-yellow)',
        // Legacy mappings for easier transition
        'slate-200': 'var(--slate-200)',
        'slate-400': 'var(--slate-400)',
        'teal-300': 'var(--teal-300)',
        navy: 'var(--navy)',
        cyan: 'var(--cyan)',
        'light-navy': 'var(--light-navy)',
        'lightest-navy': 'var(--lightest-navy)',
        highlight: 'var(--highlight)',
        slate: 'var(--slate)',
        'light-slate': 'var(--light-slate)',
        'lightest-slate': 'var(--lightest-slate)',
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