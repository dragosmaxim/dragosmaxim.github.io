import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export const githubPagesBase = process.env.VITE_BASE_PATH ?? '/portf/';

export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts'
  }
});
