import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (mustafacanbildiren.com) serves from root, so base = '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
