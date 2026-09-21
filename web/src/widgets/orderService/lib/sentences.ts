/**
 * 文の終わりに使う記号。
 *
 * @remarks
 * 日本語の句点のほか、英語・ロシア語などのピリオド、ヒンディー語のダンダも見る
 */
const SENTENCE_END = /[。．.!?！？।]/

/**
 * 文章を、文ごとの意味のまとまりに分ける。
 *
 * @remarks
 * 日本語は単語の切れ目が無いため、長い文章はどこででも折り返してしまう。
 * 分けたまとまりを `display: inline-block` で並べると、文の途中では折り返さなくなる。
 * 文言そのものは変えないので、翻訳を直さずに読みやすさだけを直せる
 * @param text - 分ける文章
 * @returns 文ごとのまとまり。分けられないときは、元の文章1つだけ
 */
export const splitSentences = (text: string): readonly string[] => {
  const parts = text
    .split(new RegExp(`(?<=${SENTENCE_END.source})`, 'u'))
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
  return parts.length > 0 ? parts : [text]
}
