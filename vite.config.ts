import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export default defineConfig({
  plugins: [react(), TanStackRouterVite(
    {
      routesDirectory:'./src/app/routes',
    }
  )],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});