import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // relative paths: the build works on any URL, e.g. https://<user>.github.io/<repo>/
  base: './',
  plugins: [react(), tailwindcss()],
})
