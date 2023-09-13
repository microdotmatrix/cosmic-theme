import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import basicSsl from '@vitejs/plugin-basic-ssl';
import preact from '@preact/preset-vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend'),
    },
  },

  plugins: [shopify(), preact(), basicSsl()],
  build: {
    outDir: path.resolve(__dirname, 'assets'),
    assetsDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].min.js',
        chunkFileNames: '[name].min.js',
        assetFileNames: '[name].min[extname]',
      },
    },
  },
});
