import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      // index.html にすると、書き出したトップページが入れ物ページで上書きされる
      fallback: '404.html',
      precompress: false,
      strict: true,
    }),
    prerender: {
      handleHttpError: ({ path, message }) => {
        if (path === '/static') {
          // Ignore 404 errors for /static path
          return
        }
        throw new Error(message)
      },
    },
    files: { hooks: { server: 'src/lib/hooks/hooks.server' } },
    alias: {
      $model: './src/model',
      $images: './src/images',
      $lib: './src/lib',
      $views: './src/views',
      $style: './src/style',
    },
  },
}

export default config
