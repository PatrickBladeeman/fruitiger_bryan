import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: 'rgb(var(--color-sky) / <alpha-value>)',
        'aero-blue': 'rgb(var(--color-aero-blue) / <alpha-value>)',
        cyan: 'rgb(var(--color-cyan) / <alpha-value>)',
        'fresh-green': 'rgb(var(--color-fresh-green) / <alpha-value>)',
        'lime-fresh': 'rgb(var(--color-lime-fresh) / <alpha-value>)',
        'cloud-white': 'rgb(var(--color-cloud-white) / <alpha-value>)',
        'navy-deep': 'rgb(var(--color-navy-deep) / <alpha-value>)',
        'glass-border': 'rgb(var(--color-glass-border) / <alpha-value>)',
      },
      boxShadow: {
        raised: 'var(--shadow-raised)',
        'inner-highlight': 'inset 0 1px 0 var(--inner-highlight)',
        'hover-glow': '0 0 0 1px rgba(79, 168, 255, 0.5), 0 0 20px rgba(102, 214, 255, 0.35)',
      },
      backgroundImage: {
        'aero-sky': 'linear-gradient(165deg, rgb(var(--color-cloud-white)) 0%, rgb(var(--color-cyan) / 0.52) 40%, rgb(var(--color-sky) / 0.6) 100%)',
        'aero-panel': 'linear-gradient(180deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.45) 100%)',
        'gloss-surface': 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.76) 48%, rgba(62,141,255,0.16) 100%)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
