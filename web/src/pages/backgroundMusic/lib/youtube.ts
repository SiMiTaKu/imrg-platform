/**
 * YouTube の URL から動画の ID を取り出す
 * @param url - 動画の URL（`https://youtu.be/xxxx` か `https://www.youtube.com/watch?v=xxxx`）
 * @returns 動画の ID。取り出せなければ空文字
 */
export const youtubeVideoId = (url: string): string => {
  const shortForm = /youtu\.be\/([\w-]{6,})/.exec(url)
  if (shortForm) return shortForm[1]

  const longForm = /[?&]v=([\w-]{6,})/.exec(url)
  if (longForm) return longForm[1]

  const embedForm = /youtube\.com\/embed\/([\w-]{6,})/.exec(url)
  return embedForm ? embedForm[1] : ''
}

/**
 * 動画の表紙の画像
 * @param videoId - 動画の ID
 * @returns 画像の URL
 */
export const youtubeThumbnail = (videoId: string): string =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

/**
 * 埋め込みの URL
 * @param videoId - 動画の ID
 * @param muted - 音を消して始めるか。画面に入って勝手に始めるときは、消さないと再生できない
 * @returns 埋め込みの URL
 */
export const youtubeEmbedUrl = (videoId: string, muted: boolean): string => {
  const parameters = new URLSearchParams({
    autoplay: '1',
    mute: muted ? '1' : '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
  })
  return `https://www.youtube-nocookie.com/embed/${videoId}?${parameters.toString()}`
}
