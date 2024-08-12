import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import path from 'path'

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools(),
  ],
  resolve: {
    alias: {
      '@model': path.resolve(__dirname, 'src/model'),
      '@images': path.resolve(__dirname, 'src/images'),
      '@lib': path.resolve(__dirname, 'src/lib'),
    }
  }
})

