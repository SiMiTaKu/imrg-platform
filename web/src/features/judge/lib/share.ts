/** Xの投稿画面の URL。text と url を付けて開く */
const X_INTENT_URL = 'https://twitter.com/intent/tweet'

/**
 * 採点の結果をXで共有するためのリンクを作る
 * @param text - 投稿に入れる文（得点と手具の名前が入った文）
 * @param url - 投稿に添えるページの URL
 * @returns Xの投稿画面へのリンク
 *
 * @remarks
 * `twitter.com/intent/tweet` は X に転送されるので、このままで動く
 */
export const buildShareUrl = (text: string, url: string): string =>
  `${X_INTENT_URL}?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
