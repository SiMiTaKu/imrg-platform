import type { Snippet } from 'svelte'

/**
 * モーダルの大きさ。
 *
 * @remarks
 * `small` は文章や表を読ませるモーダル（800px）、
 * `large` は写真を大きく見せるモーダル（1100px）。
 * どちらも狭い画面では画面に収まるところまで縮むので、横にはみ出さない
 */
export type ModalSize = 'small' | 'large'

/** モーダルの引数 */
export interface ModalProps {
  /** 見出し。読み上げのときのモーダルの名前にもなる */
  title: string
  /**
   * 大きさ。
   *
   * @remarks
   * 置く中身によって決まるものなので、使う側が必ず決める
   */
  size: ModalSize
  /** 閉じたときに呼ぶ。ばつ・Esc・背景を押したときのどれでも呼ばれる */
  onclose: () => void
  /**
   * 閉じるボタン（右上のばつ）の読み上げ用の名前。
   *
   * @remarks
   * 絵だけのボタンには名前が要る。デザインシステムは言語を知らないので、
   * 使う側の言語で渡す。ふつうは「閉じる」でよい
   */
  closeLabel: string
  /** モーダルの中身 */
  children: Snippet
}
