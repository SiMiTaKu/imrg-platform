import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// checkJs で設定の型を効かせるため JSDoc の @type を使う。TSDoc には無いタグなのでこの行だけ止める
// eslint-disable-next-line tsdoc/syntax
/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig} */
const config = {
  preprocess: vitePreprocess(),
}

export default config
