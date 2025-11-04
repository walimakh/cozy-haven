import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  // Repository name: cozy-haven
  base: process.env.NODE_ENV === 'production' ? '/cozy-haven/' : '/',
  build: {
    outDir: 'dist',
    // Generate sourcemaps for debugging
    sourcemap: true,
  },
})
