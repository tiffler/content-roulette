import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages project path: tiffler.github.io/content-roulette/
export default defineConfig({
  base: '/content-roulette/',
  plugins: [react()],
})
