import type { Handle } from '@sveltejs/kit/hooks'
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

  // SvelteKit 3 では event.request が読み取り専用になった。言語を外した URL への振り分けは
  // hooks.ts の reroute がやるので、ミドルウェアが作り直した request は使わない
  return paraglideMiddleware(event.request, ({ locale }) => {
    return resolve(event, {
      transformPageChunk({ html }) {
        return html.replace('%lang%', locale)
      },
    })
  })
}

/** サーバーのリクエストごとの処理（書き出しのときに動く） */
export const handle: Handle = localeHandle
