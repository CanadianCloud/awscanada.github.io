import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/', // For custom domain (awsusergroups.com)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    allowedHosts: ['terminal.local'],
    port: 5173,
    open: false,
  },
  preview: {
    port: 4173,
    open: true, // Auto-open browser on preview
  },
})
