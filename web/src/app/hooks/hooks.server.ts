import type { Handle } from '@sveltejs/kit'
import { paraglideMiddleware } from '$lib/paraglide/server'

/** 拡張子の付いたパス（ページではなくファイル） */
const FILE_PATH = /\.[a-z0-9]+$/i

/**
 * URL から表示する言語を決め、HTML の lang 属性に入れる
 * @param input - SvelteKit から渡される引数（event: リクエストのイベント、resolve: ページを描画してレスポンスを返す関数）
 * @returns 描画したレスポンス
 */
const localeHandle: Handle = ({ event, resolve }) => {
  // sitemap.xml などのファイルは言語で分けない。通すと末尾スラッシュ付きの URL へ転送され、
  // SvelteKit の転送と往復して開けなくなる
  if (FILE_PATH.test(event.url.pathname)) return resolve(event)

  return paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request
    return resolve(event, {
      transformPageChunk({ html }) {
        return html.replace('%lang%', locale)
      },
    })
  })
}

/** サーバーのリクエストごとの処理（書き出しのときに動く） */
export const handle: Handle = localeHandle
