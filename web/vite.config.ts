import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { SCSS_OPTIONS } from '@imrg-platform/design-system/scss.config'

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools(),
    // 多言語化（TODO 3-4）。日本語は今の URL のまま、英語は /en/ 以下に書き出す
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      emitTsDeclarations: true,
      strategy: ['url', 'baseLocale'],
      // サイトの trailingSlash: 'always' に合わせる
      trailingSlash: 'always',
    }),
  ],
  css: {
    preprocessorOptions: {
      // トークン（色・余白など）はデザインシステムのものを全コンポーネントで読み込む
      scss: SCSS_OPTIONS,
    },
  },
})
