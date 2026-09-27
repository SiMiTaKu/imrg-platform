/**
 * 用語集の1語。
 *
 * @remarks
 * 用語集はルールの解説とは別のもの。ルールの外の言葉（練習、大会、道具）も入れる。
 * だから `entities/ruleGuide` の外に置き、URL も `/words/` にしてある
 *
 * @remarks
 * `aliases` には、よくある誤記や別の書き方を入れる。
 * 検索はここも見るので、「体型移動」と打った人にも「隊形移動」が出る
 */
export interface GlossaryTerm {
  /**
   * URL に使う名前。英語のスネークケース（`formation_change`）。
   *
   * @remarks
   * 語ごとのページ（`/words/<slug>/`）を作るときの URL になる。
   * **一度決めたら変えない。** いまは一覧の中の位置（`/words/#<slug>`）を指すのに使う
   */
  slug: string
  /** 用語 */
  term: string
  /** 読み。漢字だけでは読めない語に付ける */
  reading?: string
  /** ひと言の説明 */
  summary: string
  /** よくある誤記・別の書き方・英語。検索に効かせる */
  aliases?: readonly string[]
  /**
   * 詳しく書いてあるルールの解説の鍵（`score.difficulty` の形）。無ければ用語集の説明だけ。
   *
   * @remarks
   * entities どうしで型を読み合わないよう、文字列で持つ。
   * 解説の木にある鍵かどうかは、テスト（`tests/unit/entities/glossary/`）で確かめる
   */
  to?: string
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
