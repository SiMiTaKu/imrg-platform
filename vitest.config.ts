import { mergeConfig, defineConfig } from 'vitest/config'
import path from 'path'
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
        environment: 'jsdom',
        setupFiles: [ './src/tests/setup.ts' ],
        include: [ './src/tests/**/*.spec.ts' ],
        alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }],
    },
    resolve: {
      alias: {
        '$model': path.resolve(__dirname, 'src/model'),
        '$images': path.resolve(__dirname, 'src/images'),
        '$lib': path.resolve(__dirname, 'src/lib'),
        '$views': path.resolve(__dirname, 'src/views'),
        '$amplify': path.resolve(__dirname, 'src/amplify'),
        '$shared': path.resolve(__dirname, 'src/amplify/shared'),
      },
    }
  })
)
