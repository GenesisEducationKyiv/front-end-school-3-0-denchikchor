import { defineConfig } from 'vitest/config';       // для Vitest + Vite
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    visualizer({
      filename: './dist/stats.html',  
      open: true,                     
      gzipSize: true,                
      sourcemap: true,               
    }),
  ],
  build: {
    sourcemap: true,                 
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.tsx',
  },
  server: {
    port: 3000,
  },
});
