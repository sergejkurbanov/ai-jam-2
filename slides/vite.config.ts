import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // relative paths: works on GitHub Pages (/ai-jam-2/), on any other host, or opened from a folder
  base: './',
  plugins: [react()],
  // docs live one level up (../docs/*.md) so GitHub and the site share one source
  server: { fs: { allow: ['..'] } },
})
