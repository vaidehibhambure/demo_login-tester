import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  // Base URL for production, "/" in development
  base: '/',

  // Development server configuration
  server: {
    port: 5510, // Default port for development server
    open: true, // Open the browser on server start
    hmr: {
      overlay: true, // Show full screen overlay for HMR errors
    },
  },

  // Build output directory and minification configuration
  build: {
    outDir: 'build', // Output directory for production build
    assetsDir: 'assets', // Directory for static assets relative to outDir
    minify: 'esbuild', // Minify using ESBuild
    sourcemap: true, // Generate source maps
    brotliSize: true, // Generate Brotli-compressed assets
    chunkSizeWarningLimit: 1500, // Warn if individual chunk size exceeds limit (in KB)
  } as any,

  // Plugins configuration
  plugins: [
    react(), // React plugin for Vite
    svgrPlugin(), // SVGR plugin for Vite (to handle SVG files as React components)
    viteCompression(), // Compression plugin for Vite
    visualizer({
      emitFile: true,
      filename: 'stats.html', // Corrected to only specify the filename
      open: true, // Open the visualizer report in default browser
    }),
  ],

  // Optimize dependencies configuration
  optimizeDeps: {
    include: [], // Explicitly include dependencies
    exclude: ['eslint'], // Exclude ESLint during production builds
  },

  // Resolve configuration (e.g., aliases)
  resolve: {
    alias: {
      '@': '/src', // Example alias for src directory
    },
  },

  // CSS configuration
  css: {
    modules: false, // Enable CSS modules
    postcss: {}, // PostCSS options
  },
});
