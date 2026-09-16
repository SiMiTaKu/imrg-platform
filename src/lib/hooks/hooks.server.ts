import type { Handle } from '@sveltejs/kit'

// 分解した引数は jsdoc が「input.event」形式の @param を求めるが、TSDoc はドット付きの名前を
// 受け付けず両立できない。プロパティの説明は input の説明に書き、ここだけ require-param を止める
// eslint-disable-next-line jsdoc/require-param
/**
 * サーバーのリクエストごとに、User-Agent からスマホかどうかを判定して event.locals.isMobile に入れる
 * @param input - SvelteKit から渡される引数（event: リクエストのイベント、resolve: ページを描画してレスポンスを返す関数）
 * @returns 描画したレスポンス
 */
export const handle: Handle = async ({ event, resolve }) => {
  event.locals.isMobile = isMobile(event.request.headers as Headers)
  return await resolve(event)
}

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
