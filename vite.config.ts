import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // обробка JSX у .jsx файлах
  },
  build: {
    outDir: 'dist',
  },
});
