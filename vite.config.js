import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves at the domain root ('/'); GitHub Pages serves under the
// project subfolder ('/content-roulette/'). Vercel sets VERCEL=1 during its
// builds, so we pick the right base per host.
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/content-roulette/',
  plugins: [react()],
})
