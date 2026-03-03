import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/node': 'http://backend-node:3000',
      '/api/fastapi': 'http://backend-fastapi:3001',
      '/api/go': 'http://backend-go:3002',
      '/api/cs': 'http://backend-cs:3003',
      '/api/java': 'http://backend-java:3004',
    }
  }
})
