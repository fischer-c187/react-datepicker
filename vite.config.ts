import { defineConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';
import { extname, relative, resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'v8',
      exclude: [
        ...configDefaults.exclude,
        'src/*',
        'lib/main.ts',
        'lib/vite-env.d.ts',
        'lib/interfaces/*',
      ],
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', { ignore: '**/*.test.{ts,tsx}' })
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
