import { describe, expect, it } from 'vitest'
import {
  GUIDE_QUIZ_JA,
  guideChapterKeys,
  guideCoursePosition,
  guideLessonKeys,
  isChapterEnd,
  publishedGuideKeys,
} from '@entities/ruleGuide'
import type { GuideKey, GuideQuizQuestion } from '@entities/ruleGuide'

/*
  解説は Udemy の講座のように、章とレッスンの順番を決めて前から読めるようにしてある。
  並びが崩れていないか、理解度チェックの問題が壊れていないかを見る
*/

describe('講座の並び', () => {
  it('第1章は「男子新体操とは」、第2章は「基本技術」', () => {
    expect(guideChapterKeys().slice(0, 2)).toEqual(['basics', 'techniques'])
  })

  it('章のいちばん上のページが、その章のレッスン1になる', () => {
    for (const chapter of guideChapterKeys()) {
      expect(guideCoursePosition(chapter)?.lesson).toBe(1)
    }
  })

  it('前後のリンクをたどると、すべてのページを1回ずつ通る', () => {
    const keys = publishedGuideKeys()
    const visited: GuideKey[] = []
    let current: GuideKey | undefined = keys[0]
    while (current !== undefined) {
      visited.push(current)
      current = guideCoursePosition(current)?.next
    }
    expect(visited).toEqual(keys)
  })

  it('前に戻るリンクは、次へ進むリンクの逆になっている', () => {
    for (const key of publishedGuideKeys()) {
      const next = guideCoursePosition(key)?.next
      if (next !== undefined) expect(guideCoursePosition(next)?.prev).toBe(key)
    }
  })

  it('章の最後のレッスンは、その章に1つだけある', () => {
    for (const chapter of guideChapterKeys()) {
      const ends = guideLessonKeys(chapter).filter((key) => {
        const position = guideCoursePosition(key)
        return position !== undefined && isChapterEnd(position)
      })
      expect(ends).toHaveLength(1)
    }
  })
})

describe('理解度チェック', () => {
  const entries = Object.entries(GUIDE_QUIZ_JA) as [GuideKey, readonly GuideQuizQuestion[]][]
  const questions = entries.flatMap(([, list]) => list)

  it('本文のある章には、すべて理解度チェックがある', () => {
    for (const chapter of guideChapterKeys()) {
      expect(GUIDE_QUIZ_JA[chapter]?.length ?? 0, chapter).toBeGreaterThan(0)
    }
  })

  it('問題は、本文のある章にだけ付いている', () => {
    for (const [chapter] of entries) expect(guideChapterKeys()).toContain(chapter)
  })

  it('正解の番号が、選択肢の範囲に入っている', () => {
    for (const question of questions) {
      expect(question.answer, question.question).toBeGreaterThanOrEqual(0)
      expect(question.answer, question.question).toBeLessThan(question.choices.length)
    }
  })

  it('選択肢は2つ以上あり、同じものが重なっていない', () => {
    for (const question of questions) {
      expect(question.choices.length).toBeGreaterThanOrEqual(2)
      expect(new Set(question.choices).size, question.question).toBe(question.choices.length)
    }
  })

  /* 解説で「このページで確かめる」と送る先。書いていないページだと404になる */
  it('確かめに戻る先は、本文のあるページ', () => {
    for (const question of questions) expect(publishedGuideKeys()).toContain(question.from)
  })

  /* 本文と同じく、約束した言葉の決まりを守る */
  it('出してはいけない言葉が入っていない', () => {
    const forbidden = [
      '日本体操協会',
      '体操協会',
      '男子新体操委員会',
      '委員会',
      '公認',
      '推奨',
      'ルールブック',
    ]
    for (const question of questions) {
      const text = [question.question, ...question.choices, question.explanation].join(' ')
      for (const word of forbidden) expect(text, `「${word}」`).not.toContain(word)
    }
  })
})
