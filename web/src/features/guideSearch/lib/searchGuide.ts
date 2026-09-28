/**
 * 検索の対象1件。レッスンと用語の両方を同じ形で扱う
 */
export interface GuideSearchDocument {
  /** 重ならない目印 */
  id: string
  /** 種類。結果に「レッスン」「用語」の印を付ける */
  kind: 'lesson' | 'word'
  /** 見出し */
  title: string
  /** 見出しの横に小さく出す補足（「第4章」「たいけいいどう」など） */
  subtitle?: string
  /** 本文。ここから前後の文を切り出して見せる */
  text: string
  /** 見出しには出さないが、検索では当てたい言葉（誤記・英語・読み） */
  aliases?: readonly string[]
  /** 行き先 */
  href: string
  /** 章の番号。色分けに使う。用語には無い */
  chapter?: number
}

/** 結果に見せる本文の切れはし。当たった言葉だけ強調する */
export interface GuideSnippetPart {
  /** 文字 */
  text: string
  /** 探した言葉に当たった部分か */
  hit: boolean
}

/** 検索の結果1件 */
export interface GuideSearchResult {
  /** 当たった対象 */
  document: GuideSearchDocument
  /** 並べる順番の点数。大きいほど上 */
  score: number
  /** 本文の切れはし */
  snippet: GuideSnippetPart[]
}

/** 切れはしの、当たった言葉の前に残す文字数 */
const BEFORE = 24
/** 切れはしの、当たった言葉の後ろに残す文字数 */
const AFTER = 56

/**
 * 探す言葉を語に分ける。全角の空白でも区切る
 * @param keyword - 入力された言葉
 * @returns 語の並び。空白だけなら空
 */
export const splitKeyword = (keyword: string): string[] =>
  keyword
    .trim()
    .split(/[\s　]+/)
    .filter((word) => word !== '')

/**
 * 本文から、当たった言葉のまわりを切り出す
 * @param text - 本文
 * @param words - 探す語（小文字にしたもの）
 * @returns 切れはし。どの語も本文に無ければ、本文の頭を返す
 */
export const buildSnippet = (text: string, words: readonly string[]): GuideSnippetPart[] => {
  const lower = text.toLowerCase()
  const first = words
    .map((word) => lower.indexOf(word))
    .filter((at) => at !== -1)
    .sort((a, b) => a - b)[0]

  const start = first === undefined ? 0 : Math.max(0, first - BEFORE)
  const end = Math.min(text.length, (first ?? 0) + AFTER)
  const window = text.slice(start, end)
  const windowLower = window.toLowerCase()

  // 窓の中で、語に当たる位置に印を付ける
  const marks = new Array<boolean>(window.length).fill(false)
  for (const word of words) {
    let at = windowLower.indexOf(word)
    while (at !== -1 && word !== '') {
      for (let i = at; i < at + word.length; i++) marks[i] = true
      at = windowLower.indexOf(word, at + word.length)
    }
  }

  const parts: GuideSnippetPart[] = []
  for (let i = 0; i < window.length; i++) {
    const last = parts[parts.length - 1]
    if (last !== undefined && last.hit === marks[i]) last.text += window[i]
    else parts.push({ text: window[i], hit: marks[i] })
  }
  if (start > 0) parts.unshift({ text: '…', hit: false })
  if (end < text.length) parts.push({ text: '…', hit: false })
  return parts
}

/**
 * レッスンと用語をまとめて検索する。
 *
 * @remarks
 * 空白で区切った語を**すべて含む**ものだけを返す。
 * 見出しに当たるものを上に、本文だけに当たるものを下に並べる。
 * 同じ点数なら、レッスンを用語より先に、元の並び（講座の順番）のまま出す
 * @param documents - 検索の対象
 * @param keyword - 入力された言葉
 * @returns 結果。言葉が空なら空
 */
export const searchGuide = (
  documents: readonly GuideSearchDocument[],
  keyword: string,
): GuideSearchResult[] => {
  const words = splitKeyword(keyword).map((word) => word.toLowerCase())
  if (words.length === 0) return []

  return documents
    .map((document, order) => {
      const title = document.title.toLowerCase()
      const aliases = (document.aliases ?? []).join(' ').toLowerCase()
      const text = document.text.toLowerCase()
      const haystack = `${title} ${aliases} ${text}`
      if (!words.every((word) => haystack.includes(word))) return undefined

      const score =
        words.reduce(
          (total, word) =>
            total +
            (title === word ? 100 : 0) +
            (title.includes(word) ? 30 : 0) +
            (aliases.includes(word) ? 20 : 0) +
            (text.includes(word) ? 5 : 0),
          0,
        ) + (document.kind === 'lesson' ? 1 : 0)
      return { document, score, order, snippet: buildSnippet(document.text, words) }
    })
    .filter((result) => result !== undefined)
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .map(({ document, score, snippet }) => ({ document, score, snippet }))
}
