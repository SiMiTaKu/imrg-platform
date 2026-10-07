import { AccentColor } from '@imrg-platform/design-system'

/**
 * 章ごとの色。
 *
 * @remarks
 * 講座の章を色で見分けられるようにする。章カード・レッスンの帯・検索結果の印で同じ色を使う。
 * 色はデザインシステムの `AccentColor`（種類を見分けるための色）から選ぶ
 */
const CHAPTER_COLORS: readonly AccentColor[] = [
  AccentColor.BLUE,
  AccentColor.GREEN,
  AccentColor.AMBER,
  AccentColor.RED,
  AccentColor.PURPLE,
  AccentColor.TEAL,
  AccentColor.PINK,
]

/**
 * 章の色を返す
 * @param chapter - 何章か。1から数える
 * @returns 色。章が色の数より多ければ最初に戻る
 */
export const chapterColor = (chapter: number): AccentColor =>
  CHAPTER_COLORS[(Math.max(1, chapter) - 1) % CHAPTER_COLORS.length]
