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
