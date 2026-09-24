import type { Snippet } from 'svelte'

/**
 * ボタンの見た目。色の名前で呼ぶ。
 *
 * @remarks
 * `fill` `outline` のような役割の名前にすると、色が増えたときに
 * 「どちらの色の塗りなのか」が名前から分からなくなる。
 * 色の名前にしておけば、黄の白抜きが要るときも `yellow-outline` と足せる。
 *
 * `yellow` は黄の 300 の地に黒の文字にする。黄はもともと明るく、白い文字だと読めないため
 * （`design-system/src/styles/colors.scss` の「色の決まり」4）。
 *
 * `theme-*` は手具のイメージカラー（`$theme`）の塗り。
 * 採点の画面のように、選んだ手具に合わせて色が変わるところで使う。
 * `theme-yellow` も同じ理由で文字は黒にする
 */
export type ButtonVariant =
  | 'sky-blue'
  | 'sky-blue-outline'
  | 'yellow'
  | 'theme-gray'
  | 'theme-blue'
  | 'theme-red'
  | 'theme-yellow'
  | 'theme-green'

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
  /**
   * 見た目。
   *
   * @remarks
   * 置く場所によって決まるものなので、使う側が必ず決める
   */
  variant: ButtonVariant
  /**
   * 大きさ。
   *
   * @remarks
   * 置く場所によって決まるものなので、使う側が必ず決める
   */
  size: ButtonSize
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
  ariaLabel?: string
  /** ボタンに出す中身 */
  children: Snippet
}

/** リンクとして使うときの引数 */
interface LinkProps extends AppearanceProps {
  /** 飛び先 */
  href: string
  /** 開き方。`_blank` なら新しいタブで開き、`noopener noreferrer` を付ける */
  target: '_blank' | '_self'
  /**
   * リンクでは使わない。
   *
   * @remarks
   * 書かないと `href` と一緒に `onclick` を渡す書き方が型で通ってしまう。
   * また Button 側で1つの `$props()` から href・target・onclick をまとめて取り出せなくなる
   */
  onclick?: never
}

/** 押しボタンとして使うときの引数 */
interface ActionProps extends AppearanceProps {
  /** 押しボタンでは使わない。理由は {@link LinkProps.onclick} と同じ */
  href?: never
  /** 押しボタンでは使わない。理由は {@link LinkProps.onclick} と同じ */
  target?: never
  /** 押したときの処理 */
  onclick: (event: MouseEvent) => void
}

/**
 * ボタンの引数。
 *
 * @remarks
 * `href` を渡すとリンク、渡さなければ押しボタンになる。
 * リンクの `target`、押しボタンの `onclick`、どちらでも使う `size`・`width` は省略できない
 */
export type ButtonProps = LinkProps | ActionProps
