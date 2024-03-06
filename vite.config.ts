import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from 'tailwindcss';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  // preview: {
  //   port: 9000
  // },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    react(),
    ViteImageOptimizer(),
    viteCompression({ algorithm: 'brotliCompress' })
  ],
  // server: {
  //   headers: {
  //     'accept-encoding': ['gzip', 'br', 'compress'],
  //     'content-encoding': 'gzip, br, compress'
  //   },
  //   port: 9000
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
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
