import type { ApparatusSlug } from '@shared/model'
import type { JudgeThemeColor as JUDGE_THEME_COLOR } from '../config/themeColor'

/** 画面のテーマの色のどれか1つ */
export type JudgeThemeColorKey = (typeof JUDGE_THEME_COLOR)[keyof typeof JUDGE_THEME_COLOR]

/**
 * 採点する手具1つ分の定義
 */
export type JudgeApparatus = {
  /** 手具のコード（選択肢の value） */
  code: number
  /** どの手具か */
  slug: ApparatusSlug
  /** 手具の名前（表示中の言語） */
  name: () => string
  /** 手具のイメージカラー */
  imageColor: Exclude<JudgeThemeColorKey, typeof JUDGE_THEME_COLOR.GRAY>
  /** 2つで1組の手具（リング・クラブ）なら true */
  isDouble: boolean
}
