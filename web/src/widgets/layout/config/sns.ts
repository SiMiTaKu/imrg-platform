import { m } from '$lib/paraglide/messages'
import InstagramIcon from '../images/instagram-icon.png?w=256;512&format=webp&as=meta'
import TiktokIcon from '../images/tiktok-icon.png?w=256;512&format=webp&as=meta'
import XIcon from '../images/x-icon.png?w=256;512&format=webp&as=meta'
import YoutubeIcon from '../images/youtube-icon.png?w=256;512&format=webp&as=meta'
import type { ImageSourceMeta } from '@shared/ui'

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
  imageSourceMeta: ImageSourceMeta[]
  /**
   * アイコンの代替テキスト。表示中の言語で返す
   * @returns 代替テキスト
   */
  alt: () => string
  /** 置き場所と端末ごとのアイコンの大きさ */
  size: {
    /** ヘッダー */
    header: { desktop: Size; mobile: Size }
    /** フッター */
    footer: { desktop: Size; mobile: Size }
  }
}

/** ヘッダーとフッターに並べる SNS */
export const SNS_LINKS: readonly SnsLink[] = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCK-OUvWo6IQz2W6Z-fH27BQ?sub_confirmation=1',
    imageSourceMeta: YoutubeIcon,
    alt: m.layout_youtube_icon_alt,
    size: {
      header: { desktop: { width: 41, height: 29 }, mobile: { width: 34, height: 24 } },
      footer: { desktop: { width: 80, height: 56 }, mobile: { width: 42, height: 30 } },
    },
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/takumi.rg/',
    imageSourceMeta: InstagramIcon,
    alt: m.layout_instagram_icon_alt,
    size: {
      header: { desktop: { width: 34, height: 34 }, mobile: { width: 28, height: 28 } },
      footer: { desktop: { width: 68, height: 68 }, mobile: { width: 36, height: 36 } },
    },
  },
  {
    name: 'X(Twitter)',
    href: 'https://twitter.com/TakumiShimizu43',
    imageSourceMeta: XIcon,
    alt: m.layout_x_icon_alt,
    size: {
      header: { desktop: { width: 28, height: 28 }, mobile: { width: 23, height: 23 } },
      footer: { desktop: { width: 55, height: 55 }, mobile: { width: 30, height: 30 } },
    },
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@takumishimizu43?lang=ja-JP',
    imageSourceMeta: TiktokIcon,
    alt: m.layout_tiktok_icon_alt,
    size: {
      header: { desktop: { width: 30, height: 35 }, mobile: { width: 26, height: 29 } },
      footer: { desktop: { width: 68, height: 68 }, mobile: { width: 36, height: 36 } },
    },
  },
]
