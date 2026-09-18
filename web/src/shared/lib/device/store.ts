import { browser } from '$app/environment'
import { readable } from 'svelte/store'
import { isMobileUserAgent } from './userAgent'

/** 表示している端末 */
type PageData = {
  /** スマホなら true */
  isMobile: boolean
}

/**
 * 表示している端末がスマホかを返す。
 *
 * @remarks
 * 書き出した HTML はスマホ用で作るので、サーバー側（書き出しのとき）はスマホ扱いにする
 * @returns スマホなら true
 */
const detectIsMobile = (): boolean => (browser ? isMobileUserAgent(navigator.userAgent) : true)

/**
 * 表示している端末がスマホかどうかを持つストア。
 *
 * @remarks
 * 画面の幅ではなく User-Agent で決める。値はページを開いたときに1回だけ決まり、
 * 読み込みの途中で変わらないので、ページを移っても見た目がガタつかない
 */
export const pageData = readable<PageData>({ isMobile: detectIsMobile() })
