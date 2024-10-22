import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
 
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './vitest.setup.ts',
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
})