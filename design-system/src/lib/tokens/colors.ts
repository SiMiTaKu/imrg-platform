/**
 * 印や線に使う色。
 *
 * @remarks
 * SCSS のトークン（`src/styles/colors.scss`）は文字・背景・枠線などの基本の色で、
 * こちらは「種類ごとに色を分ける」ときに使う色。JavaScript から値を渡す場面（インラインの style や
 * canvas の描画）で使うので TypeScript の定数にしている。
 * 使う側は、色の名前ではなく意味（大会の種類など）と結び付けて持つ
 */
export const AccentColor = {
  /** 青。`$sky-blue` の button と同じ値 */
  BLUE: '#1986ff',
  /** 紅 */
  RED: '#d33f3f',
  /** 緑 */
  GREEN: '#16a06b',
  /** 紫 */
  PURPLE: '#8a5cd6',
  /** 桃 */
  PINK: '#e0567f',
  /** 山吹 */
  AMBER: '#d98e04',
  /** 青緑 */
  TEAL: '#0e9aa7',
} as const

/** 印や線に使う色のどれか1つ */
export type AccentColor = (typeof AccentColor)[keyof typeof AccentColor]

/**
 * 画面のテーマの色。
 *
 * @remarks
 * 手具ごとに画面の色を変えるときに使う。SCSS の `$theme` と同じ値を持つので、
 * 片方を変えたらもう片方も合わせる
 */
export const ThemeColor = {
  /** 灰（手具を選ぶ前） */
  GRAY: '#707070',
  /** 青（スティック） */
  BLUE: '#0065a4',
  /** 赤（リング） */
  RED: '#d30000',
  /** 黄（ロープ） */
  YELLOW: '#ecc200',
  /** 緑（クラブ） */
  GREEN: '#219300',
} as const

/** 画面のテーマの色のどれか1つ */
export type ThemeColor = (typeof ThemeColor)[keyof typeof ThemeColor]
