import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// checkJs で設定の型を効かせるため JSDoc の @type を使う。TSDoc には無いタグなのでこの行だけ止める
// eslint-disable-next-line tsdoc/syntax
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
      /**
       * プリレンダー中の HTTP エラーの扱い。/static の 404 だけ無視し、それ以外はビルドを失敗させる
       */
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
