
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure relative paths for Android WebView
  build: {
    outDir: 'dist',
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
  },
});
