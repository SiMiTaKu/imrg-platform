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

/**
 * ボタンの幅。`full` は横いっぱい、`auto` は文字に合わせた幅、数値は px の最大幅。
 *
 * @remarks
 * 数値は「最大幅」として扱う。狭い画面では画面に収まるところまで縮むので、横にはみ出さない。
 * 端末で出し分けたいときは、使う側で `width={isMobile ? 'full' : 'auto'}` のように渡す。
 * デザインシステムの部品は端末を知らない（`.github/instructions/frontend-foundation.instructions.md`）
 */
export type ButtonWidth = number | 'full' | 'auto'

/** リンクでも押しボタンでも同じ、見た目に関わる引数 */
interface AppearanceProps {
  /** 見た目。省くと塗り（fill） */
  variant?: ButtonVariant
  /** 大きさ。省くと medium */
  size?: ButtonSize
  /**
   * 幅。`full` は横いっぱい、`auto` は文字に合わせた幅、数値は px の最大幅。
   *
   * @remarks
   * 置く場所によって決まるものなので、使う側が必ず決める。
   * 端末で変えたいときは `isMobile ? 'full' : 'auto'` のように渡す
   */
  width: ButtonWidth
  /**
   * 読み上げ用の名前。省くと中身の文言がそのまま名前になる。
   *
   * @remarks
   * 同じ文言のボタンが1つの画面に並ぶとき（章ごとの「すべて開く」など）に、
   * どれのことか分かる名前を使う側の言語で渡す
   */
  label?: string
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
 * リンクの `target`、押しボタンの `onclick`、どちらでも使う `width` は省略できない
 */
export type ButtonProps = LinkProps | ActionProps
