import { describe, expect, it } from 'vitest'
import { buildSnippet, searchGuide, splitKeyword } from '@features/guideSearch/lib/searchGuide'
import type { GuideSearchDocument } from '@features/guideSearch/lib/searchGuide'

const docs: GuideSearchDocument[] = [
  {
    id: 'lesson:score.execution',
    kind: 'lesson',
    title: '実施（E）とは',
    text: '着地でしりもち、四つ這い、背中から落ちた場合は1回につき0.30点減点されます。',
    href: '/rules/score/execution/',
    chapter: 4,
  },
  {
    id: 'lesson:group.formation',
    kind: 'lesson',
    title: '隊形移動とは',
    text: '隊形移動とは、演技の途中で並び方を変えることです。隊形は5つ以上入れる決まりです。',
    href: '/rules/group/formation/',
    chapter: 5,
  },
  {
    id: 'word:formation_change',
    kind: 'word',
    title: '隊形移動',
    text: '演技の途中で並び方を変えること。',
    aliases: ['体型移動', 'たいけいいどう'],
    href: '/words/#formation_change',
  },
]

describe('言葉を分ける', () => {
  it('半角と全角の空白で区切る', () => {
    expect(splitKeyword(' 隊形　5つ  減点 ')).toEqual(['隊形', '5つ', '減点'])
  })
})

describe('検索', () => {
  it('空なら何も返さない', () => {
    expect(searchGuide(docs, '  ')).toEqual([])
  })

  it('本文に当たるものを見つける', () => {
    const results = searchGuide(docs, 'しりもち')
    expect(results.map((r) => r.document.id)).toEqual(['lesson:score.execution'])
  })

  it('見出しに当たるものを上に出す', () => {
    const results = searchGuide(docs, '隊形移動')
    expect(results[0].document.title).toBe('隊形移動')
    expect(results.map((r) => r.document.id)).toContain('lesson:group.formation')
  })

  it('誤記でも用語が引ける', () => {
    expect(searchGuide(docs, '体型移動').map((r) => r.document.id)).toEqual([
      'word:formation_change',
    ])
  })

  it('空白で区切ると、すべてを含むものだけに絞る', () => {
    expect(searchGuide(docs, '隊形 5つ').map((r) => r.document.id)).toEqual([
      'lesson:group.formation',
    ])
  })
})

describe('切れはし', () => {
  it('当たった言葉だけに印が付く', () => {
    const parts = buildSnippet('着地でしりもちをついた', ['しりもち'])
    expect(parts.filter((p) => p.hit).map((p) => p.text)).toEqual(['しりもち'])
    expect(parts.map((p) => p.text).join('')).toBe('着地でしりもちをついた')
  })

  it('長い本文は前後を省き、省いたところに「…」を付ける', () => {
    const text = `${'あ'.repeat(100)}しりもち${'い'.repeat(100)}`
    const joined = buildSnippet(text, ['しりもち'])
      .map((p) => p.text)
      .join('')
    expect(joined.startsWith('…')).toBe(true)
    expect(joined.endsWith('…')).toBe(true)
    expect(joined).toContain('しりもち')
  })
})
