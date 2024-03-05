import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { compression } from 'vite-plugin-compression2';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
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
    react(),
    compression()
  ],
  server: {
    headers: {
      'accept-encoding': ['gzip', 'br', 'compress'],
      'content-encoding': 'gzip, br, compress'
    }
  },
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
