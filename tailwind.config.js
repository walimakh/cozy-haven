/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Mobile-First Breakpoints (default Tailwind, documented here for reference)
    screens: {
      'sm': '640px',   // Small tablets and large phones (landscape)
      'md': '768px',   // Tablets and small desktops (desktop breakpoint)
      'lg': '1024px',  // Desktops
      'xl': '1280px',  // Large desktops
      '2xl': '1536px', // Extra large screens
      // Mobile-first approach: base styles = mobile, use sm:/md: for larger screens
    },
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
        // Desktop Typography Scale
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '300' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '400' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'tiny': ['12px', { lineHeight: '1.4', fontWeight: '400' }],

        // Mobile Typography Scale (optimized for small screens)
        'h1-mobile': ['32px', { lineHeight: '1.2', fontWeight: '300' }],
        'h2-mobile': ['24px', { lineHeight: '1.3', fontWeight: '400' }],
        'h3-mobile': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-mobile': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-mobile': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'small-mobile': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // 8px Grid System
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '10': '40px',
        '15': '60px',

        // Mobile-specific spacing (base-16 for mobile side padding)
        'mobile-padding': '16px',  // Standard mobile side padding (px-4)
        'mobile-gap': '12px',      // Reduced gap for mobile grids
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

        // Mobile touch targets (Apple HIG: 44px, Material: 48px)
        'touch-min': '44px',       // Minimum touch target (Apple HIG)
        'touch-optimal': '48px',   // Optimal touch target (Material Design)
      },
      minHeight: {
        'touch': '44px',           // Minimum touch target height
        'touch-optimal': '48px',   // Optimal touch target height
      },
      minWidth: {
        'touch': '44px',           // Minimum touch target width
        'touch-optimal': '48px',   // Optimal touch target width
      },
    },
  },
  plugins: [],
}
