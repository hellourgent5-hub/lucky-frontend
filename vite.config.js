import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Dev server port
    proxy: {
      // Forward API requests to your Render backend
      '/api': {
        target: 'https://lucky-backend-rlr0.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    'process.env': {}, // Fixes issues with some packages that reference process.env
  },
});
