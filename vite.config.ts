import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/EnglishB1_Diego/',  // Match the repository name exactly
  build: {
    outDir: 'dist'
  }
})