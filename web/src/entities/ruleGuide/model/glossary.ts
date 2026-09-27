import type { GuideKey } from './guideKey'

/**
 * 用語集の1語。
 *
 * @remarks
 * `aliases` には、よくある誤記や別の書き方を入れる。
 * 検索はここも見るので、「体型移動」と打った人にも「隊形移動」が出る
 */
export interface GlossaryTerm {
  /** 用語 */
  term: string
  /** 読み。漢字だけでは読めない語に付ける */
  reading?: string
  /** ひと言の説明 */
  summary: string
  /** よくある誤記・別の書き方・英語。検索に効かせる */
  aliases?: readonly string[]
  /** 詳しく書いてあるページ。無ければ用語集の説明だけ */
  to?: GuideKey
}

/** 用語のまとまり */
export interface GlossaryGroup {
  /** まとまりの名前 */
  name: string
  /** その中の語 */
  terms: readonly GlossaryTerm[]
}

/**
 * 語が検索の言葉に当てはまるか
 * @param term - 用語
 * @param keyword - 探す言葉。空白で区切ると、すべてを含むものだけに絞る
 * @returns 当てはまれば true
 */
export const matchesGlossaryTerm = (term: GlossaryTerm, keyword: string): boolean => {
  const words = keyword
    .trim()
    .split(/[\s　]+/)
    .filter((word) => word !== '')
  if (words.length === 0) return true

  const haystack = [term.term, term.reading ?? '', term.summary, ...(term.aliases ?? [])]
    .join(' ')
    .toLowerCase()
  return words.every((word) => haystack.includes(word.toLowerCase()))
}
