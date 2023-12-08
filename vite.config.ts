import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // server: {
  //   port: 9001
  // },
  // preview: {
  //   port: 9001
  // },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    react()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  },
  build: {
    // generate .vite/manifest.json in outDir
    // manifest: true,
    // rollupOptions: {
    //   // overwrite default .html entry
    //   input: 'src/main.tsx'
    // }
    // outDir: 'dist'
    // assetsDir: '',
    // sourcemap: false,
    // minify: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.json', '.jsx', '.cjs', '.ts', '.tsx']
  }
});
