/**
 * 画面のテーマの色。手具ごとに決まり、未選択のときは `gray`
 */
export type JudgeThemeColor = 'gray' | 'blue' | 'red' | 'yellow' | 'green'

/**
 * 採点する手具1つ分の定義
 */
export type JudgeApparatus = {
  /** 手具のコード（選択肢の value） */
  code: number
  /** 手具の名前（表示中の言語） */
  name: () => string
  /** 手具のイメージカラー */
  imageColor: Exclude<JudgeThemeColor, 'gray'>
  /** 2つで1組の手具（リング・クラブ）なら true */
  isDouble: boolean
}
