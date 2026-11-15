import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Ruta base necesaria para GitHub Pages:
  // https://pipolio1.github.io/Exp2_S4_Felipe_Gennari_Frontend_2/
  base: '/Exp2_S4_Felipe_Gennari_Frontend_2/',
  plugins: [react()],
})
