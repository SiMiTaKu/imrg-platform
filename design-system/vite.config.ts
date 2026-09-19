import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { SCSS_OPTIONS } from './scss.config.js'

export default defineConfig({
  plugins: [svelte()],
  css: {
    preprocessorOptions: {
      scss: SCSS_OPTIONS,
    },
  },
})
