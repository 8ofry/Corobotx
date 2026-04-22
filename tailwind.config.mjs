/** @type {import('tailwindcss').Config} */
const rgb = (token) => `rgb(var(${token}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background:                   rgb('--c-bg'),
        surface:                      rgb('--c-surface'),
        'surface-container-lowest':   rgb('--c-surface-lowest'),
        'surface-container-low':      rgb('--c-surface-low'),
        'surface-container':          rgb('--c-surface-container'),
        'surface-container-high':     rgb('--c-surface-high'),
        'surface-container-highest':  rgb('--c-surface-highest'),
        'surface-variant':            rgb('--c-surface-variant'),
        'surface-bright':             rgb('--c-surface-bright'),
        'on-surface':                 rgb('--c-on-surface'),
        'on-surface-variant':         rgb('--c-on-surface-variant'),
        'on-background':              rgb('--c-on-background'),
        outline:                      rgb('--c-outline'),
        'outline-variant':            rgb('--c-outline-variant'),

        primary:                      rgb('--c-primary'),
        'primary-fixed':              rgb('--c-primary'),
        'primary-fixed-dim':          rgb('--c-primary'),
        'primary-container':          rgb('--c-primary-container'),
        'primary-container-deep':     rgb('--c-primary-deep'),
        'on-primary':                 '#5e1700',
        'on-primary-container':       '#ffffff',

        secondary:                    rgb('--c-secondary'),
        'secondary-container':        rgb('--c-secondary-container'),
        'on-secondary':               '#003642',
        'on-secondary-container':     '#005669',

        tertiary:                     rgb('--c-primary'),
        'tertiary-container':         rgb('--c-tertiary-container'),
        'on-tertiary':                '#00315e',

        'chrome-bg':                  rgb('--c-chrome-bg'),
        'chrome-surface':             rgb('--c-chrome-surface'),
        'chrome-border':              rgb('--c-chrome-border'),

        brand: {
          orange:        rgb('--c-primary-container'),
          'orange-deep': rgb('--c-primary-deep'),
          cyan:          rgb('--c-secondary-container'),
        },
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        none:    '0px',
        sm:      '0.25rem',
        md:      '0.375rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        '2xl':   '1rem',
        chip:    '0.5rem',
        full:    '9999px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
        gutter: '20px',
        margin: '28px',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'label-caps': ['10px', { lineHeight: '1',   letterSpacing: '0.12em', fontWeight: '700' }],
        'mono-data':  ['12px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
        'body-sm':    ['13px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md':    ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg':    ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        h3:           ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        h2:           ['26px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        h1:           ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-xl':['44px', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '800' }],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-2': 'float 8s ease-in-out -1s infinite',
        'float-3': 'float 9s ease-in-out -2s infinite',
        'float-4': 'float 10s ease-in-out -3s infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-slower': 'spin 60s linear infinite',
        'spin-reverse': 'spin-rev 45s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-slow': 'bounce-slow 2.4s ease-in-out infinite',
        'drift-x': 'drift-x 16s ease-in-out infinite',
        'drift-y': 'drift-y 14s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-12px) rotate(3deg)' },
        },
        'spin-rev': {
          '0%':   { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%':       { transform: 'scale(1)',   opacity: '0.75' },
          '80%, 100%':{ transform: 'scale(2.4)', opacity: '0' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)',  opacity: '0.6' },
          '50%':      { transform: 'translateY(6px)', opacity: '1' },
        },
        'drift-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%':      { transform: 'translateX(40px)' },
        },
        'drift-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(30px)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
