import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Custom domain (www.vaikunthan.com) => base is '/'.
// Two pages: "/" (portfolio) and "/card" (digital business card).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        card: resolve(__dirname, 'card/index.html'),
      },
    },
  },
})
