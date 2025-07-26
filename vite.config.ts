import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Set the correct base for GitHub Pages
export default defineConfig({
  base: '/MotivAItation-Website/',  // <-- this line fixes it!
  plugins: [react()],
})
