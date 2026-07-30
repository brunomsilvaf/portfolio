import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Served under https://brunomsilvaf.github.io/portfolio/ on GitHub Pages
  base: '/portfolio/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    watch: {
      // Some tools write atomic *.~tmp files (e.g. in src/assets); ignore them so
      // the native file watcher doesn't crash with EBUSY on Windows.
      ignored: ['**/node_modules/**', '**/.git/**', '**/build/**', '**/*.~tmp']
    }
  },
  build: {
    // Keep the output folder as `build` so the gh-pages deploy script works as-is
    outDir: 'build',
    rollupOptions: {
      output: {
        // Split large vendor libraries into separate chunks for better caching.
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }
          // The PDF generator is loaded on demand (CV download); let Rollup keep
          // it and its dependencies in separate async chunks.
          if (id.includes('@react-pdf') || id.includes('yoga')) {
            return undefined;
          }
          if (id.includes('@mui') || id.includes('@emotion')) {
            return 'mui-vendor';
          }
          if (id.includes('react')) {
            return 'react-vendor';
          }
          return undefined;
        }
      }
    }
  }
});
