// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Add this line:
const ghPagesPath = '/MotivAItation-Website/'

export default defineConfig({
  base: ghPagesPath, // IMPORTANT for correct routing
  plugins: [react()],
})
