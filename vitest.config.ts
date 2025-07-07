// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.tsx'],
    exclude: [
      'node_modules/**',      
      'dist/**',
      'tests/e2e/**',         
      'tests/**/*.spec.ts',  
    ],
  },
});
