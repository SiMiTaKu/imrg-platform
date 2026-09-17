/**
 * デザインシステムの公開エントリ。
 * 部品と、部品に付随する関数をここから公開する。
 */

export type { Size } from './types'

/** ボタン */
export { default as Button } from './Button/Button.svelte'
/** ボタンの見た目のリンク */
export { default as ButtonLink } from './ButtonLink/ButtonLink.svelte'
/** セクションの見出し（見出しと、その下の補助の文言） */
export { default as Heading } from './Heading/Heading.svelte'
/** ページ送り */
export { default as Pagination } from './Pagination/Pagination.svelte'
export { ELLIPSIS, pageNumbers } from './Pagination/lib/pageNumbers'
