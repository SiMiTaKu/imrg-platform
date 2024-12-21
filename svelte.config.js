import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true,
    }),
    files: { hooks: { server: 'src/lib/hooks/hooks.server' } },
    alias: {
      $model: './src/model',
      $images: './src/images',
      $lib: './src/lib',
      $views: './src/views',
      $style: './src/style',
    }
  },
}

export default config
