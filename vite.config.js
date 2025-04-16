import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // pastikan root dari project
  build: {
    outDir: 'dist',
  },
});
