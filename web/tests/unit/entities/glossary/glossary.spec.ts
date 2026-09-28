import { describe, expect, it } from 'vitest'
import {
  GLOSSARY_JA,
  glossaryGyouOf,
  groupGlossaryByGyou,
  matchesGlossaryTerm,
  toHiragana,
} from '@entities/glossary'
import type { GlossaryTerm } from '@entities/glossary'
import { GUIDE_KEYS } from '@entities/ruleGuide'

/** 用語集のすべての語 */
const terms: readonly GlossaryTerm[] = GLOSSARY_JA

/**
 * 語を名前で引く
 * @param name - 用語
 * @returns その語
 */
const termOf = (name: string): GlossaryTerm => {
  const found = terms.find((term) => term.term === name)
  if (found === undefined) throw new Error(`用語集に「${name}」が無い`)
  return found
}

describe('用語集のデータ', () => {
  /*
    slug は語ごとのページの URL になる（/words/<slug>/）。
    重なると2つの語が同じ URL を取り合うので、ここで落とす
  */
  it('URL の名前（slug）が重なっていない', () => {
    const slugs = terms.map((term) => term.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('URL の名前は英小文字のスネークケース', () => {
    for (const term of terms) {
      expect(term.slug, term.term).toMatch(/^[a-z][a-z0-9]*(_[a-z0-9]+)*$/)
    }
  })

  it('用語が重なっていない', () => {
    const names = terms.map((term) => term.term)
    expect(new Set(names).size).toBe(names.length)
  })

  /*
    用語集は entities どうしで型を読み合わないよう、解説の鍵を文字列で持っている。
    木に無い鍵を書いてもビルドは通ってしまうので、ここで確かめる
  */
  it('「詳しく見る」の行き先は、ルールの解説の木にある鍵', () => {
    for (const term of terms) {
      if (term.to !== undefined) expect(GUIDE_KEYS, `${term.term} → ${term.to}`).toContain(term.to)
    }
  })
})

describe('用語集の検索', () => {
  it('何も入れなければ、すべて当てはまる', () => {
    expect(terms.every((term) => matchesGlossaryTerm(term, ''))).toBe(true)
    expect(terms.every((term) => matchesGlossaryTerm(term, '   '))).toBe(true)
  })

  it('よくある誤記でも引ける', () => {
    expect(matchesGlossaryTerm(termOf('隊形移動'), '体型移動')).toBe(true)
  })

  it('読みで引ける', () => {
    expect(matchesGlossaryTerm(termOf('徒手'), 'としゅ')).toBe(true)
  })

  it('英語で引ける。大文字と小文字は区別しない', () => {
    expect(matchesGlossaryTerm(termOf('難度'), 'DIFFICULTY')).toBe(true)
  })

  it('空白で区切ると、すべてを含むものだけに絞る', () => {
    expect(matchesGlossaryTerm(termOf('隊形移動'), '隊形 5つ')).toBe(true)
    expect(matchesGlossaryTerm(termOf('隊形移動'), '隊形 手具')).toBe(false)
  })

  it('全角の空白でも区切れる', () => {
    expect(matchesGlossaryTerm(termOf('隊形移動'), '隊形　5つ')).toBe(true)
  })
})

describe('辞書の並び', () => {
  /* 読みで並べるので、読みが無い・ひらがなでない語があると並びが崩れる */
  it('すべての語に、ひらがなの読みが付いている', () => {
    for (const term of terms) {
      expect(term.reading, term.term).toMatch(/^[ぁ-ゖー・]+$/)
    }
  })

  it('カタカナはひらがなにそろえる', () => {
    expect(toHiragana('プロペラ回旋')).toBe('ぷろぺら回旋')
  })

  it('濁音・半濁音・小さい字も、もとの行に入る', () => {
    expect(glossaryGyouOf('じっし')).toBe('さ')
    expect(glossaryGyouOf('ぷろぺら')).toBe('は')
    expect(glossaryGyouOf('どうじわざ')).toBe('た')
    expect(glossaryGyouOf('Execution')).toBe('他')
  })

  it('行はあ行から順に並び、語の無い行は出さない', () => {
    const heads = groupGlossaryByGyou(terms).map((gyou) => gyou.head)
    const order = ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ', '他']
    expect(heads).toEqual(order.filter((head) => heads.includes(head)))
  })

  it('行の中は、読みのあいうえお順', () => {
    for (const gyou of groupGlossaryByGyou(terms)) {
      const readings = gyou.terms.map((term) => term.reading.replace(/・/g, ''))
      expect(readings).toEqual([...readings].sort((a, b) => a.localeCompare(b, 'ja')))
    }
  })

  it('並べ直しても、語は1つも減らない', () => {
    const count = groupGlossaryByGyou(terms).reduce((total, gyou) => total + gyou.terms.length, 0)
    expect(count).toBe(terms.length)
  })
})
