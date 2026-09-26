import { describe, expect, it } from 'vitest'
import {
  GUIDE_CONTENT_JA,
  GUIDE_KEYS,
  guideBlockTexts,
  guideKeyToPath,
  guidePathToKey,
  guideUpKey,
  publishedGuideKeys,
} from '@entities/ruleGuide'
import type { GuidePage } from '@entities/ruleGuide'

/*
  解説の本文が、決めた書き方から外れていないかを機械で見る。
  約束（docs/rules-guide.md の3）と、読みやすさ（同6）を人の注意力に任せない
*/

/** 書いてあるページ */
const pages: GuidePage[] = Object.values(GUIDE_CONTENT_JA).filter(
  (page): page is GuidePage => page !== undefined,
)

/**
 * ページの中の文字を、見出しから表の中身まで全部集める
 * @param page - 解説のページ
 * @returns そのページが持っている文字
 */
const textsOf = (page: GuidePage): string[] => [
  page.title,
  page.lead,
  ...page.blocks.flatMap(guideBlockTexts),
]

/**
 * 文に割る。句点・感嘆符・疑問符で切る
 * @param text - 文字
 * @returns 文の並び。空の文は落とす
 */
const sentencesOf = (text: string): string[] =>
  text
    .split(/(?<=[。！？])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence !== '')

describe('解説の本文', () => {
  it('ページが1枚はある', () => {
    expect(pages.length).toBeGreaterThan(0)
  })

  /*
    委員会へ伝えた約束。協会と委員会の名前を出さず、公認・推奨をうたわない。
    「公式の規則集」は断り書きの中だけで使い、本文では使わない
  */
  it.each(pages.map((page) => [page.key, page] as const))(
    '%s … 出してはいけない言葉が入っていない',
    (_key, page) => {
      const forbidden = [
        '日本体操協会',
        '体操協会',
        '男子新体操委員会',
        '委員会',
        '公認',
        '推奨',
        '公式規則',
        '規則集より',
        'ルールブック',
      ]
      for (const text of textsOf(page)) {
        for (const word of forbidden) {
          expect(text, `「${word}」が入っている`).not.toContain(word)
        }
      }
    },
  )

  /*
    小学生でも読めるようにするための決まり。
    1文40字までにして、長い文は2文に割る
  */
  it.each(pages.map((page) => [page.key, page] as const))(
    '%s … 1文が40字を超えていない',
    (_key, page) => {
      for (const text of textsOf(page)) {
        for (const sentence of sentencesOf(text)) {
          expect(sentence.length, `長すぎる文: ${sentence}`).toBeLessThanOrEqual(40)
        }
      }
    },
  )

  /*
    ひらがなで書いたほうが読みやすい言葉。
    textlint は Markdown を見る道具なので、TypeScript の中の文はここで見る
  */
  it.each(pages.map((page) => [page.key, page] as const))(
    '%s … 難しい言い方をしていない',
    (_key, page) => {
      const openUp = [
        '且つ',
        '殆ど',
        '概ね',
        '尚',
        '但し',
        '故に',
        '勿論',
        '出来る',
        '事が',
        '物が',
      ]
      for (const text of textsOf(page)) {
        for (const word of openUp) {
          expect(text, `「${word}」はひらがなで書く`).not.toContain(word)
        }
      }
    },
  )

  it('断り書きを省いたページが無い', () => {
    for (const page of pages) {
      expect(page.disclaimer).toBe('individual-work')
    }
  })

  it('鍵と本文の鍵が食い違っていない', () => {
    for (const [key, page] of Object.entries(GUIDE_CONTENT_JA)) {
      expect(page?.key).toBe(key)
    }
  })

  it('最初の答え（lead）が空でない', () => {
    for (const page of pages) {
      expect(page.lead.length).toBeGreaterThan(0)
    }
  })
})

describe('鍵と URL', () => {
  it('鍵から作ったパスは、鍵に戻せる', () => {
    for (const key of GUIDE_KEYS) {
      expect(guidePathToKey(guideKeyToPath(key))).toBe(key)
    }
  })

  it('前後のスラッシュが付いていても鍵に戻せる', () => {
    expect(guidePathToKey('/group/formation/')).toBe('group.formation')
  })

  it('木に無いパスは鍵にならない', () => {
    expect(guidePathToKey('score/unknown')).toBeUndefined()
    expect(guidePathToKey('')).toBeUndefined()
  })
})

describe('上へ戻る先', () => {
  /*
    木には並べたが本文がまだ無いページがある。
    そこへリンクすると 404 になるので、書いてある先祖まで飛ばす
  */
  it('まだ書いていない親を飛ばす', () => {
    // group はまだ本文が無いので、group.formation の戻る先は undefined（＝解説の入口へ戻す）
    expect(GUIDE_CONTENT_JA['group']).toBeUndefined()
    expect(guideUpKey('group.formation')).toBeUndefined()
  })

  it('いちばん上の鍵には戻る先が無い', () => {
    expect(guideUpKey('score')).toBeUndefined()
  })

  it('戻る先は必ず本文のあるページになる', () => {
    for (const key of publishedGuideKeys()) {
      const up = guideUpKey(key)
      if (up !== undefined) expect(GUIDE_CONTENT_JA[up]).toBeDefined()
    }
  })
})
