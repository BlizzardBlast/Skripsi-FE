import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteCompression from 'vite-plugin-compression';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    react(),
    chunkSplitPlugin(),
    viteCompression({ algorithm: 'brotliCompress' })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    reporters: ['html'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      enabled: true
    }
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    // rollupOptions: {
    //   // overwrite default .html entry
    //   input: 'src/main.tsx'
    // }
    outDir: 'dist',
    // assetsDir: '',
    sourcemap: true,
    minify: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.json', '.jsx', '.cjs', '.ts', '.tsx']
  }
});
