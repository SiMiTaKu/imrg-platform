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
  /**
   * 読み。ひらがなで書く。
   *
   * @remarks
   * 用語集はこの読みのあいうえお順に並べ、「あ行」「か行」に分ける。だから全部の語に付ける
   */
  reading: string
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

  const haystack = [term.term, term.reading, term.summary, ...(term.aliases ?? [])]
    .join(' ')
    .toLowerCase()
  return words.every((word) => haystack.includes(word.toLowerCase()))
}

/** 五十音の行。用語集の見出しと索引に使う */
export interface GlossaryGyou {
  /** 行の頭の文字（「あ」「か」…）。索引に出す。英数字などは「他」 */
  head: string
  /** その行の語。読みのあいうえお順 */
  terms: GlossaryTerm[]
}

/** 行と、その行に入るひらがな（濁音・半濁音・小書きを含む） */
const GYOU: readonly (readonly [string, string])[] = [
  ['あ', 'ぁあぃいぅうゔぇえぉお'],
  ['か', 'かがきぎくぐけげこご'],
  ['さ', 'さざしじすずせぜそぞ'],
  ['た', 'ただちぢっつづてでとど'],
  ['な', 'なにぬねの'],
  ['は', 'はばぱひびぴふぶぷへべぺほぼぽ'],
  ['ま', 'まみむめも'],
  ['や', 'ゃやゅゆょよ'],
  ['ら', 'らりるれろ'],
  ['わ', 'ゎわゐゑをん'],
]

/** 五十音の行の頭の文字。索引に並べる順 */
export const GLOSSARY_GYOU_HEADS: readonly string[] = GYOU.map(([head]) => head)

/** 五十音に入らない語（英数字など）の行 */
export const GLOSSARY_OTHER_HEAD = '他'

/**
 * カタカナをひらがなにする。並べる順を読みの書き方に左右されないようにする
 * @param text - 読み
 * @returns ひらがなにしたもの
 */
export const toHiragana = (text: string): string =>
  text.replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60))

/**
 * 読みの頭の文字から、五十音の行を決める
 * @param reading - 読み
 * @returns 行の頭の文字。五十音に入らなければ「他」
 */
export const glossaryGyouOf = (reading: string): string => {
  const first = toHiragana(reading.trim()).charAt(0)
  return GYOU.find(([, chars]) => chars.includes(first))?.[0] ?? GLOSSARY_OTHER_HEAD
}

/**
 * 並べるための読み。ひらがなにそろえ、「・」や空白は外す
 * @param term - 語
 * @returns 並べるときに比べる文字
 */
const sortKey = (term: GlossaryTerm): string => toHiragana(term.reading).replace(/[・\s]/g, '')

/**
 * 語を読みのあいうえお順に並べ、五十音の行ごとに分ける。
 *
 * @remarks
 * 辞書のように引けるようにするため。語の無い行は返さない
 * @param terms - 語
 * @returns 行ごとの語。あ行から順に、五十音に入らない語は最後
 */
export const groupGlossaryByGyou = (terms: readonly GlossaryTerm[]): GlossaryGyou[] => {
  const sorted = [...terms].sort((a, b) => sortKey(a).localeCompare(sortKey(b), 'ja'))
  return [...GLOSSARY_GYOU_HEADS, GLOSSARY_OTHER_HEAD]
    .map((head) => ({
      head,
      terms: sorted.filter((term) => glossaryGyouOf(term.reading) === head),
    }))
    .filter((gyou) => gyou.terms.length > 0)
}
