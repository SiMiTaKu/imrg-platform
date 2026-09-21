/**
 * デザインシステムの公開エントリ。
 * 部品と、部品に付随する関数をここから公開する。
 */

/** サイトで使うボタン。href を渡すとリンク、渡さなければ押しボタンになる */
export { Button } from './Button'
export type { ButtonProps, ButtonSize, ButtonVariant, ButtonWidth } from './Button'
/** セクションの見出し（見出しと、その下の補助の文言） */
export { default as Heading } from './Heading/Heading.svelte'
/** モーダル（右上のばつで閉じる入れ物） */
export { Modal } from './Modal'
/** ページ送り */
export { default as Pagination } from './Pagination/Pagination.svelte'
export { ELLIPSIS, pageNumbers } from './Pagination/lib/pageNumbers'
/** 印や線に使う色 */
export { AccentColor, ThemeColor } from './tokens/colors'

// アイコン（oshiage のデザインシステムから持ってきたもの）
/** アイコンの一覧と、名前で選んで出す部品 */
export { default as IconsGallery } from './Icons/IconsGallery.svelte'
export { ICONS } from './Icons/config/icons'
export type { IconName } from './Icons/config/icons'
export type { IconColor, IconProps } from './Icons/model/props'
/** メニュー（三本線）のアイコン */
export { default as MenuIcon } from './Icons/components/MenuIcon.svelte'
/** 閉じる（×）のアイコン */
export { default as XIcon } from './Icons/components/XIcon.svelte'
/** 言語（地球）のアイコン */
export { default as GlobeIcon } from './Icons/components/GlobeIcon.svelte'
