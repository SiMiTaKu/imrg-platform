import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    sveltekit(), imagetools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "$style/index.scss" as *;`
      }
    }
  }
})

