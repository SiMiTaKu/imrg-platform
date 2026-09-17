import { m } from '$lib/paraglide/messages'
import InstagramIcon from '../images/instagram-icon.png?w=256;512&format=webp&as=meta'
import TiktokIcon from '../images/tiktok-icon.png?w=256;512&format=webp&as=meta'
import XIcon from '../images/x-icon.png?w=256;512&format=webp&as=meta'
import YoutubeIcon from '../images/youtube-icon.png?w=256;512&format=webp&as=meta'
import type { SrcMeta } from '@shared/ui'

/** 幅と高さ（px） */
interface Size {
  /** 幅 */
  width: number
  /** 高さ */
  height: number
}

/** SNS へのリンク */
export interface SnsLink {
  /** 表示名 */
  name: string
  /** リンク先 */
  href: string
  /** アイコン画像 */
  srcMeta: SrcMeta[]
  /**
   * アイコンの代替テキスト。表示中の言語で返す
   * @returns 代替テキスト
   */
  alt: () => string
  /** 置き場所と端末ごとのアイコンの大きさ */
  size: {
    /** ヘッダー */
    header: { pc: Size; sp: Size }
    /** フッター */
    footer: { pc: Size; sp: Size }
  }
}

/** ヘッダーとフッターに並べる SNS */
export const SNS_LINKS: readonly SnsLink[] = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCK-OUvWo6IQz2W6Z-fH27BQ?sub_confirmation=1',
    srcMeta: YoutubeIcon,
    alt: m.layout_youtube_icon_alt,
    size: {
      header: { pc: { width: 41, height: 29 }, sp: { width: 34, height: 24 } },
      footer: { pc: { width: 80, height: 56 }, sp: { width: 42, height: 30 } },
    },
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/takumi.rg/',
    srcMeta: InstagramIcon,
    alt: m.layout_instagram_icon_alt,
    size: {
      header: { pc: { width: 34, height: 34 }, sp: { width: 28, height: 28 } },
      footer: { pc: { width: 68, height: 68 }, sp: { width: 36, height: 36 } },
    },
  },
  {
    name: 'X(Twitter)',
    href: 'https://twitter.com/TakumiShimizu43',
    srcMeta: XIcon,
    alt: m.layout_x_icon_alt,
    size: {
      header: { pc: { width: 28, height: 28 }, sp: { width: 23, height: 23 } },
      footer: { pc: { width: 55, height: 55 }, sp: { width: 30, height: 30 } },
    },
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@takumishimizu43?lang=ja-JP',
    srcMeta: TiktokIcon,
    alt: m.layout_tiktok_icon_alt,
    size: {
      header: { pc: { width: 30, height: 35 }, sp: { width: 26, height: 29 } },
      footer: { pc: { width: 68, height: 68 }, sp: { width: 36, height: 36 } },
    },
  },
]
