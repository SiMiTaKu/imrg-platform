import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'
import { defineConfig } from 'vitest/config'
import { SCSS_OPTIONS } from './scss.config.js'

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  css: {
    preprocessorOptions: {
      scss: SCSS_OPTIONS,
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.spec.ts'],
    setupFiles: ['tests/setup.ts'],
  },
})
