import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

/** 使用している SCSS モジュール */
const SCSS_USES = [ '"$style/index.scss" as *', '"sass:map"', '"sass:math"' ]

export default defineConfig({
  plugins: [
    sveltekit(), imagetools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: SCSS_USES.map((use) => `@use ${use};`).join("\n"),
      }
    }
  }
})

