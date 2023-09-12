import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  base: 'https://muhammadrivan3.github.io/', // Sesuaikan dengan URL repository GitHub Pages Anda
  build: {
    outDir: 'dist', // Direktori output untuk build produksi
  },
})
