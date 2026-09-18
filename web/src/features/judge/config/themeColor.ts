/**
 * 画面のテーマの色。
 *
 * @remarks
 * 手具ごとに決まり、手具を選ぶ前は `GRAY`。値は CSS のクラス名にも使う。
 * 実際の色はデザインシステム（SCSS の `$theme` と TypeScript の `ThemeColor`）が持つ
 */
export const JudgeThemeColor = {
  /** 手具を選ぶ前 */
  GRAY: 'gray',
  /** スティック */
  BLUE: 'blue',
  /** リング */
  RED: 'red',
  /** ロープ */
  YELLOW: 'yellow',
  /** クラブ */
  GREEN: 'green',
} as const
