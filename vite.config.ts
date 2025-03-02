import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'), // Matches tsconfig paths
    },
  },
  build: {
    outDir: './dist',
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {}
  },
  server: {
    port: 3000, // Default dev server port
    open: true, // Automatically opens browser on start
    strictPort: true, // Ensures no fallback to another port
    hmr: {
      overlay: true, // Enables hot module replacement
    }
  },
  esbuild: {
    jsx: 'automatic', // Ensures JSX works correctly with React 18
  }
})
