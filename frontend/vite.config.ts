import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.BASE_PATH || '/';

// https://vite.dev/config/
export default defineConfig({

  base,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
