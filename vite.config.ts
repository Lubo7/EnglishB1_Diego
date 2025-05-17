import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/EnglishB1_Diego/', 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});