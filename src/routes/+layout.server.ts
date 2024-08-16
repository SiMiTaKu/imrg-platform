import type { LayoutServerLoad } from "./$types"

/**
 * この設定でSSRを有効にしている。
 * SSRを有効にすると、ページ遷移時にサーバー側でページを生成するため、ページ遷移が遅くなる可能性がある。
 * この設定を行わないと+page.server.tsのload関数が呼ばれないため、サーバー側でのデータ取得ができない。
 * そのため、サーバー側でのデータ取得が必要な場合は、この設定を行う必要がある。
 * @see https://kit.svelte.jp/docs/page-options#ssr
 */
export const prerender = "auto"

export const load: LayoutServerLoad = () => {
  return undefined
}

/**
 * @see https://kit.svelte.jp/docs/adapter-static#:~:text=SvelteKit%20%E3%81%AE%20trailingSlash,%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82
 */
export const trailingSlash = "always"
