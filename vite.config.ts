/**
 * Configuration for the Vite build and dev system
 */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

// Define a few high level directory variables to be used in this config file
const [src] = ['src'].map(dir => path.resolve(__dirname, dir));

export default defineConfig({
  plugins: [react()],
  // Open up our browser on development start
  server: {
    open: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  // Set up some importing aliases to keep thing cleaner
  resolve: {
    alias: {
      '@': src,
      assets: path.resolve(__dirname, `${src}/assets`),
      pages: path.resolve(__dirname, `${src}/pages`),
      components: path.resolve(__dirname, `${src}/components`),
      componentLibrary: path.resolve(__dirname, `${src}/componentLibrary`),
      styles: path.resolve(__dirname, `${src}/styles`),
      routes: path.resolve(__dirname, `${src}/routes`),
      mocks: path.resolve(__dirname, `${src}/mocks`),
      types: path.resolve(__dirname, `${src}/types`),
    },
  },

});
