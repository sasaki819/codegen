import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/employees': 'http://localhost:3012',
      '/departments': 'http://localhost:3012',
      '/products': 'http://localhost:3012',
      '/product-categories': 'http://localhost:3012'
    }
  }
})
