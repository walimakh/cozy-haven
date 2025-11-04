/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'warm-cream': '#F5F0E8',
        'soft-white': '#FFFFFF',
        'cream': '#F5F0E8', // Alias for warm-cream

        // Secondary Colors
        'soft-terracotta': '#D4A59A',
        'sage-green': '#A8B5A0',
        'terracotta': '#D4A59A', // Alias for soft-terracotta
        'sage': '#A8B5A0', // Alias for sage-green

        // Dark Colors
        'warm-charcoal': '#4A4543',
        'deep-brown': '#3D3935',
        'charcoal': '#4A4543', // Alias for warm-charcoal
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        // Typography Scale
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '300' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '400' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'tiny': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        // 8px Grid System
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '10': '40px',
        '15': '60px',
      },
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'input': '6px',
        'image': '8px',
      },
      boxShadow: {
        'card-hover': '0 4px 12px rgba(61, 57, 53, 0.08)',
        'elevated': '0 2px 8px rgba(61, 57, 53, 0.06)',
        'dropdown': '0 8px 24px rgba(61, 57, 53, 0.12)',
      },
      height: {
        'button-lg': '48px',
        'button-md': '40px',
        'button-sm': '32px',
      },
    },
  },
  plugins: [],
}
