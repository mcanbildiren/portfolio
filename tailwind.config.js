/** @type {import('tailwindcss').Config} */
// Brutalist UI tokens. Theme-dependent colors resolve through CSS variables
// declared in src/index.css so `dark` mode flips paper <-> ink.
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--br-bg)',
        deep: 'var(--br-bg-deep)',
        surface: 'var(--br-surface)',
        fg: 'var(--br-fg)',
        line: 'var(--br-line)',
        soft: 'var(--br-line-soft)',
        muted: 'var(--br-muted)',
        inv: { DEFAULT: 'var(--br-inv-bg)', fg: 'var(--br-inv-fg)', line: 'var(--br-inv-line)', muted: 'var(--br-inv-muted)' },
        lime: '#D4F536',
        violet: '#6B46FF',
        danger: '#FF3B1F',
        ink: '#0A0A0A',
        paper: '#EEEDE8',
      },
      fontFamily: {
        display: ['Anton', '"Archivo Narrow"', '"Barlow Condensed"', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'Archivo', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        micro: ['10px', { lineHeight: '1.2', letterSpacing: '0.06em' }],
        label: ['11px', { lineHeight: '1.2', letterSpacing: '0.08em' }],
        label12: ['12px', { lineHeight: '1.2', letterSpacing: '0.08em' }],
        figure: ['44px', { lineHeight: '1' }],
      },
      borderRadius: { none: '0', DEFAULT: '0' },
      boxShadow: { none: 'none' },
    },
  },
  plugins: [],
}
