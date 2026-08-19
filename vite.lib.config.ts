import { defineConfig, esmExternalRequirePlugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    esmExternalRequirePlugin({
      external: ['react', 'react-dom'],
    }),
  ],
  publicDir: false,
  build: {
    lib: {
      entry: 'src/library.ts',
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'styles',
    },

    outDir: 'dist',
    emptyOutDir: true,
  },
});
