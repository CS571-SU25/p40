// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/p40/', // set the base path for the project
  build: {
    outDir: 'docs', // keep docs for GH-Pages
  },
});
