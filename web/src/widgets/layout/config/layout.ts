import { PUBLIC_BASE_URL } from '$env/static/public'

/** メニュー1項目あたりの高さ（px） */
export const MENU_ITEM_HEIGHT = 44

/** メニューの上下の余白の合計（px） */
export const MENU_VERTICAL_SPACE = 20

/** ページの先頭へ戻るボタンを出す、スクロール量（px） */
export const SHOW_SCROLL_TO_TOP_AFTER = 500

/** SNS のカード画像（1200×630）。絶対 URL でないと表示されない */
export const OGP_IMAGE = `${PUBLIC_BASE_URL}/images/ogp.png`
