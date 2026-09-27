import type { GuideKey } from '../model'
import { publishedGuideKeys } from './loadGuide'

/**
 * 講座の中での、そのページの位置。
 *
 * @remarks
 * 解説は Udemy の講座のように、決まった順番で前から読めるようにしてある。
 * いちばん上の鍵が「章」、章の中のページが「レッスン」。
 * 章のいちばん上のページが、その章のレッスン1になる
 */
export interface GuideCoursePosition {
  /** 何章か。1から数える */
  chapter: number
  /** 章のいちばん上のページの鍵 */
  chapterKey: GuideKey
  /** 章の中で何番目のレッスンか。1から数える */
  lesson: number
  /** 章の中のレッスンの数 */
  lessonCount: number
  /** 前のレッスン。講座の最初なら `undefined` */
  prev?: GuideKey
  /** 次のレッスン。講座の最後なら `undefined` */
  next?: GuideKey
}

/**
 * 章のいちばん上の鍵を返す
 * @param key - 解説のページの鍵
 * @returns `score.difficulty` なら `score`
 */
export const guideChapterKeyOf = (key: GuideKey): GuideKey => key.split('.')[0] as GuideKey

/**
 * 本文のある章を、講座の順番で返す
 * @returns 章のいちばん上の鍵
 */
export const guideChapterKeys = (): GuideKey[] =>
  publishedGuideKeys().filter((key) => !key.includes('.'))

/**
 * その章のレッスンを、読む順番で返す
 * @param chapterKey - 章のいちばん上の鍵
 * @returns 章のページ（章のいちばん上を含む）
 */
export const guideLessonKeys = (chapterKey: GuideKey): GuideKey[] =>
  publishedGuideKeys().filter((key) => guideChapterKeyOf(key) === chapterKey)

/**
 * 講座の中での位置を返す。
 *
 * @remarks
 * 読む順番は鍵の木の並び（親が子より先）そのまま。
 * 本文の無いページは飛ばすので、書いた分だけで講座が組み上がる
 * @param key - 解説のページの鍵
 * @returns 位置。本文が無いページなら `undefined`
 */
export const guideCoursePosition = (key: GuideKey): GuideCoursePosition | undefined => {
  const order = publishedGuideKeys()
  const at = order.indexOf(key)
  if (at === -1) return undefined

  const chapterKey = guideChapterKeyOf(key)
  const lessons = guideLessonKeys(chapterKey)
  return {
    chapter: guideChapterKeys().indexOf(chapterKey) + 1,
    chapterKey,
    lesson: lessons.indexOf(key) + 1,
    lessonCount: lessons.length,
    prev: order[at - 1],
    next: order[at + 1],
  }
}

/**
 * その章の最後のレッスンか。理解度チェックを出す場所を決めるのに使う
 * @param position - 講座の中での位置
 * @returns 章の最後なら true
 */
export const isChapterEnd = (position: GuideCoursePosition): boolean =>
  position.lesson === position.lessonCount
