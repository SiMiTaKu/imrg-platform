import { describe, expect, it } from 'vitest'
import type { LocalizedRuleBook } from '@entities/rule'
import {
  DEFAULT_OPEN,
  articleKey,
  chapterKey,
  chapterMatchesKeyword,
  createInitialOpenState,
  createOpenStateForKeyword,
  isOpenAt,
  sectionKey,
  withAllOpen,
  withChapterOpen,
} from '@pages/rules/lib/openState'

/** 試しに使う規則集。章 2 つ・節 2 つ・条 3 つの小さな形 */
const RULE_BOOK: LocalizedRuleBook = {
  title: '試しの規則集',
  chapter: [
    {
      title: '競技規則',
      article: [
        {
          title: '演技の時間',
          section: [
            { title: '時間の計り方', content: '合図から始める', block: [], image: [] },
            {
              title: '超過の減点',
              content: '',
              image: [],
              block: [
                { title: '2秒まで', element: '0.05 の減点', image: [] },
                { title: '2秒を超える', element: '0.10 の減点', image: [] },
              ],
            },
          ],
        },
        {
          title: '用器具',
          section: [{ title: 'スティックの長さ', content: '45cm 以上', block: [], image: [] }],
        },
      ],
    },
    {
      title: '審判規程',
      article: [
        {
          title: '審判員の構成',
          section: [{ title: '人数', content: '実施は 4 名', block: [], image: [] }],
        },
      ],
    },
  ],
}

describe('openState', () => {
  // #region 初めの開き方
  describe('正常系: createInitialOpenState', () => {
    it('開いた直後の場合、どの章も閉じていること', () => {
      // #region Given
      const openState = createInitialOpenState()
      // #endregion

      // #region When
      const first = isOpenAt(openState, chapterKey(0), DEFAULT_OPEN.chapter)
      const second = isOpenAt(openState, chapterKey(1), DEFAULT_OPEN.chapter)
      // #endregion

      // #region Then
      expect(first).toBe(false)
      expect(second).toBe(false)
      // #endregion
    })

    it('章だけを開いた場合、節も条も閉じたままであること', () => {
      // #region Given
      const openState = createInitialOpenState()
      // #endregion

      // #region When
      const articleOpen = isOpenAt(openState, articleKey(0, 0), DEFAULT_OPEN.article)
      const sectionOpen = isOpenAt(openState, sectionKey(0, 0, 0), DEFAULT_OPEN.section)
      // #endregion

      // #region Then
      // 章を開いた時点では節の見出しだけが並ぶ
      expect(articleOpen).toBe(false)
      // 節を開いても条は閉じたまま。縦を短く保ち、条の見出しから選べるようにする
      expect(sectionOpen).toBe(false)
      // #endregion
    })
  })
  // #endregion

  // #region まとめて開け閉め
  describe('正常系: withChapterOpen', () => {
    it('章をすべて開いた場合、その章の節と条がすべて開くこと', () => {
      // #region Given
      const openState = createInitialOpenState()
      // #endregion

      // #region When
      const opened = withChapterOpen(openState, RULE_BOOK.chapter[0], 0, true)
      // #endregion

      // #region Then
      expect(isOpenAt(opened, chapterKey(0), DEFAULT_OPEN.chapter)).toBe(true)
      expect(isOpenAt(opened, articleKey(0, 0), DEFAULT_OPEN.article)).toBe(true)
      expect(isOpenAt(opened, articleKey(0, 1), DEFAULT_OPEN.article)).toBe(true)
      expect(isOpenAt(opened, sectionKey(0, 0, 1), DEFAULT_OPEN.section)).toBe(true)
      // #endregion
    })

    it('章をすべて閉じた場合、その章の節と条がすべて閉じ、ほかの章はそのままであること', () => {
      // #region Given
      const opened = withAllOpen(RULE_BOOK, true)
      // #endregion

      // #region When
      const closed = withChapterOpen(opened, RULE_BOOK.chapter[0], 0, false)
      // #endregion

      // #region Then
      expect(isOpenAt(closed, chapterKey(0), DEFAULT_OPEN.chapter)).toBe(false)
      expect(isOpenAt(closed, articleKey(0, 0), DEFAULT_OPEN.article)).toBe(false)
      expect(isOpenAt(closed, sectionKey(0, 0, 0), DEFAULT_OPEN.section)).toBe(false)
      // 別の章は開いたまま
      expect(isOpenAt(closed, chapterKey(1), DEFAULT_OPEN.chapter)).toBe(true)
      // #endregion
    })
  })

  describe('正常系: withAllOpen', () => {
    it.each<[string, boolean]>([
      ['すべて開くを押した場合、章・節・条のすべてが開くこと', true],
      ['すべて閉じるを押した場合、章・節・条のすべてが閉じること', false],
    ])('%s', (_, open) => {
      // #region Given
      // 開き方は it.each の表で渡す
      // #endregion

      // #region When
      const openState = withAllOpen(RULE_BOOK, open)
      // #endregion

      // #region Then
      expect(isOpenAt(openState, chapterKey(0), DEFAULT_OPEN.chapter)).toBe(open)
      expect(isOpenAt(openState, chapterKey(1), DEFAULT_OPEN.chapter)).toBe(open)
      expect(isOpenAt(openState, articleKey(1, 0), DEFAULT_OPEN.article)).toBe(open)
      expect(isOpenAt(openState, sectionKey(0, 0, 1), DEFAULT_OPEN.section)).toBe(open)
      // #endregion
    })
  })
  // #endregion

  // #region 言葉で探す
  describe('正常系: createOpenStateForKeyword', () => {
    it('条の本文に当てはまった場合、その条が章と節ごと開いて出ること', () => {
      // #region Given
      const keyword = '0.05'
      // #endregion

      // #region When
      const openState = createOpenStateForKeyword(RULE_BOOK, keyword)
      // #endregion

      // #region Then
      expect(isOpenAt(openState, chapterKey(0), DEFAULT_OPEN.chapter)).toBe(true)
      expect(isOpenAt(openState, articleKey(0, 0), DEFAULT_OPEN.article)).toBe(true)
      expect(isOpenAt(openState, sectionKey(0, 0, 1), DEFAULT_OPEN.section)).toBe(true)
      // #endregion
    })

    it('当てはまらなかった節の場合、閉じたままであること', () => {
      // #region Given
      const keyword = '0.05'
      // #endregion

      // #region When
      const openState = createOpenStateForKeyword(RULE_BOOK, keyword)
      // #endregion

      // #region Then
      expect(isOpenAt(openState, articleKey(0, 1), DEFAULT_OPEN.article)).toBe(false)
      expect(isOpenAt(openState, chapterKey(1), DEFAULT_OPEN.chapter)).toBe(false)
      // #endregion
    })

    it('節の見出しだけに当てはまった場合、その節が開いて条の見出しが並ぶこと', () => {
      // #region Given
      const keyword = '用器具'
      // #endregion

      // #region When
      const openState = createOpenStateForKeyword(RULE_BOOK, keyword)
      // #endregion

      // #region Then
      expect(isOpenAt(openState, chapterKey(0), DEFAULT_OPEN.chapter)).toBe(true)
      expect(isOpenAt(openState, articleKey(0, 1), DEFAULT_OPEN.article)).toBe(true)
      // 当てはまったのは節の見出しだけなので、中の条は閉じたまま見出しが並ぶ
      expect(isOpenAt(openState, sectionKey(0, 1, 0), DEFAULT_OPEN.section)).toBe(false)
      // #endregion
    })

    it('条の中身に当てはまった場合、その条だけが開いて本文まで読めること', () => {
      // #region Given
      const keyword = 'スティック'
      // #endregion

      // #region When
      const openState = createOpenStateForKeyword(RULE_BOOK, keyword)
      // #endregion

      // #region Then
      // 当てはまった条は開いたまま出す
      expect(isOpenAt(openState, sectionKey(0, 1, 0), DEFAULT_OPEN.section)).toBe(true)
      // 当てはまらなかった条は閉じたまま
      expect(isOpenAt(openState, sectionKey(0, 0, 0), DEFAULT_OPEN.section)).toBe(false)
      // #endregion
    })

    it('大文字と小文字が違う場合でも、当てはまった場所が開くこと', () => {
      // #region Given
      const keyword = '45CM'
      // #endregion

      // #region When
      const openState = createOpenStateForKeyword(RULE_BOOK, keyword)
      // #endregion

      // #region Then
      expect(isOpenAt(openState, sectionKey(0, 1, 0), DEFAULT_OPEN.section)).toBe(true)
      // #endregion
    })

    it('言葉を消した場合、初めの開き方（第1章だけ開く）に戻ること', () => {
      // #region Given
      const keyword = '   '
      // #endregion

      // #region When
      const openState = createOpenStateForKeyword(RULE_BOOK, keyword)
      // #endregion

      // #region Then
      expect(openState).toEqual(createInitialOpenState())
      // #endregion
    })
  })

  describe('正常系: chapterMatchesKeyword', () => {
    it.each<[string, string, boolean]>([
      ['章の見出しに当てはまる場合、その章が出ること', '競技規則', true],
      ['条の本文に当てはまる場合、その章が出ること', '実施は 4 名', true],
      ['どこにも当てはまらない場合、その章が出ないこと', 'リボン', false],
      ['言葉が空の場合、すべての章が出ること', '', true],
    ])('%s', (_, keyword, expected) => {
      // #region Given
      const chapter = keyword === '実施は 4 名' ? RULE_BOOK.chapter[1] : RULE_BOOK.chapter[0]
      // #endregion

      // #region When
      const result = chapterMatchesKeyword(chapter, keyword)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
  // #endregion

  // #region 開閉を見分ける名前
  describe('正常系: 開閉を見分ける名前', () => {
    it('章・節・条の名前の場合、どれも重ならないこと', () => {
      // #region Given
      const keys = [chapterKey(0), articleKey(0, 0), sectionKey(0, 0, 0), sectionKey(0, 0, 1)]
      // #endregion

      // #region When
      const unique = new Set(keys)
      // #endregion

      // #region Then
      expect(unique.size).toBe(keys.length)
      // #endregion
    })
  })
  // #endregion
})
