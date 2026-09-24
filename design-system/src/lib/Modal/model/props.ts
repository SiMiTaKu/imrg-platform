import type { Snippet } from 'svelte'

/** 読み上げ用の名前。画面には出さない */
export interface ModalLabels {
  /** 閉じるボタン（右上のばつ） */
  close: string
}

/**
 * 見出しの見せ方。
 *
 * @remarks
 * `plain` は文字だけ、`tinted` は色の帯。
 * どのモーダルにも見出しは必ず出す。写真そのものが中身のときも、
 * 「作品 1」のように何を見ているかが分かる言葉を付ける
 */
export type ModalTitleVariant = 'plain' | 'tinted'

/** 見出しの見せ方によらず、どのモーダルでも渡すもの */
interface CommonProps {
  /** 見出し。読み上げのときのモーダルの名前にもなる */
  title: string
  /**
   * 中身の幅（px）。
   *
   * @remarks
   * 狭い画面では画面に収まるところまで縮むので、横にはみ出さない。
   * 置く中身によって決まるものなので、使う側が必ず決める
   */
  width: number
  /** 閉じたときに呼ぶ。ばつ・Esc・背景を押したときのどれでも呼ばれる */
  onclose: () => void
  /** 読み上げ用の名前。アイコンだけのボタンにも名前が要るため、使う側の言語で渡す */
  labels: ModalLabels
  /** モーダルの中身 */
  children: Snippet
}

/** 見出しを文字のまま出すときの引数 */
interface PlainTitleProps extends CommonProps {
  /** 見出しの見せ方 */
  titleVariant: 'plain'
  titleBackground?: never
}

/** 見出しを色の帯にして出すときの引数 */
interface TintedTitleProps extends CommonProps {
  /** 見出しの見せ方 */
  titleVariant: 'tinted'
  /** 帯の地の色 */
  titleBackground: string
}

/**
 * モーダルの引数。
 *
 * @remarks
 * `titleVariant` に `tinted` を渡したときだけ `titleBackground` を渡す。
 * 色の無い帯や、色だけ渡して帯にならない書き方は型で弾く
 */
export type ModalProps = PlainTitleProps | TintedTitleProps
