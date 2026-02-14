
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure relative paths for Android WebView
  build: {
    outDir: 'dist',
    minify: 'esbuild', // Use esbuild (default) to fix missing terser dependency
    chunkSizeWarningLimit: 1000,
  },
});
