/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './stores/**/*.ts',
    './src/**/*.{ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)'
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.05', letterSpacing: '0' }],
        'heading-lg': ['2rem', { lineHeight: '1.15', letterSpacing: '0' }],
        'heading-md': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0' }],
        body: ['1rem', { lineHeight: '1.75', letterSpacing: '0' }],
        detail: ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }]
      },
      spacing: {
        layout: '1.5rem',
        'layout-lg': '2rem',
        sidebar: '21rem'
      }
    }
  },
  plugins: []
};
