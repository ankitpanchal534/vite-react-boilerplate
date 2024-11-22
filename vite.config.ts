import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import path from 'path';
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: './src/app/routes',
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  build: {
    target: 'esnext', // Modern JavaScript features
    minify: 'terser', // Minify with terser
    cssCodeSplit: true, // Split CSS files
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'), // Ensure correct path alias
    },
  },
});
