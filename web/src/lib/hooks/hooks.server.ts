import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { paraglideMiddleware } from '$lib/paraglide/server'

/**
 * URL から表示する言語を決め、HTML の lang 属性に入れる
 * @param input - SvelteKit から渡される引数（event: リクエストのイベント、resolve: ページを描画してレスポンスを返す関数）
 * @returns 描画したレスポンス
 */
const localeHandle: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request
    return resolve(event, {
      transformPageChunk({ html }) {
        return html.replace('%lang%', locale)
      },
    })
  })

/**
 * User-Agent からスマホかどうかを判定して event.locals.isMobile に入れる
 * @param input - SvelteKit から渡される引数（event: リクエストのイベント、resolve: ページを描画してレスポンスを返す関数）
 * @returns 描画したレスポンス
 */
const deviceHandle: Handle = async ({ event, resolve }) => {
  event.locals.isMobile = isMobile(event.request.headers)
  return await resolve(event)
}

/** サーバーのリクエストごとの処理。言語 → 端末の順に行う */
export const handle: Handle = sequence(localeHandle, deviceHandle)

/**
 * リクエストヘッダーからスマホかどうかを判定する
 * @param headers - リクエストヘッダー
 * @returns iPhone / Android のスマホ、または src-ch-ua-mobile が "?1" なら true
 */
function isMobile(headers: Headers) {
  return (
    !!headers.get('user-agent')?.match(/iPhone|Android.+Mobile/) ||
    headers.get('src-ch-ua-mobile') == '?1'
  )
}
