import type { Snippet } from 'svelte'

/**
 * ボタンの見た目。
 *
 * @remarks
 * `yellow` は黄の 300 の地に黒の文字にする。黄はもともと明るく、白い文字だと読めないため
 * （`design-system/src/styles/colors.scss` の「色の決まり」4）
 */
export type ButtonVariant = 'fill' | 'outline' | 'yellow'

/** ボタンの大きさ。`medium` は最小の高さ 48px・文字 16px、`large` は 56px・18px */
export type ButtonSize = 'medium' | 'large'

/** リンクでも押しボタンでも同じ、見た目に関わる引数 */
interface AppearanceProps {
  /** 見た目。省くと塗り（fill） */
  variant?: ButtonVariant
  /** 大きさ。省くと medium */
  size?: ButtonSize
  /** 横いっぱいに広げるか。省くと PC では文字に合わせた幅になる（スマホは指定に関わらず横いっぱい） */
  block?: boolean
  /** ボタンに出す中身 */
  children: Snippet
}

/** リンクとして使うときの引数 */
interface LinkProps extends AppearanceProps {
  /** 飛び先 */
  href: string
  /** 開き方。`_blank` なら新しいタブで開き、`noopener noreferrer` を付ける */
  target: '_blank' | '_self'
  onclick?: never
}

/** 押しボタンとして使うときの引数 */
interface ActionProps extends AppearanceProps {
  href?: never
  target?: never
  /** 押したときの処理 */
  onclick: (event: MouseEvent) => void
}

/**
 * ボタンの引数。
 *
 * @remarks
 * `href` を渡すとリンク、渡さなければ押しボタンになる。
 * リンクの `target` と押しボタンの `onclick` は動作に欠かせないので省略できない
 */
export type ButtonProps = LinkProps | ActionProps
