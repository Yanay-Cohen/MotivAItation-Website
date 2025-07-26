import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MotivAItation-Website/', // ✅ Critical: tells Vite the site is in a subfolder
  plugins: [react()],
})
