import { m } from '$lib/paraglide/messages'
import { LINKS } from '@shared/config/links'
import { ROUTES } from '@shared/routes'

/** 画面の下に貼り付ける、いちばん押してほしいものの案内 */
export interface StickyCta {
  /** ボタンの文言。表示するときの言語で返す */
  label: () => string
  /** 押したときの飛び先 */
  href: string
  /** 別の窓で開くか（外のサイトへ行くとき） */
  external?: boolean
}

/**
 * ページごとの案内。
 *
 * @remarks
 * ページによって、次にしてほしいことが違う。トップなら大会を探してほしいし、
 * 依頼のページなら相談してほしい。ここに無いページには何も出さない
 * （規約や規則集など、先を急がせる場所ではないページ）
 */
const CTA_BY_PATH: Readonly<Record<string, StickyCta>> = {
  [ROUTES.top]: {
    label: m.layout_sticky_cta_find_events,
    href: ROUTES.calendar.index,
  },
  [ROUTES.backgroundMusic]: {
    label: m.order_contact_dm,
    href: LINKS.instagram,
    external: true,
  },
  [ROUTES.decoratingApparatus]: {
    label: m.order_contact_dm,
    href: LINKS.instagram,
    external: true,
  },
  [ROUTES.coaching]: {
    label: m.order_contact_dm,
    href: LINKS.instagram,
    external: true,
  },
  [ROUTES.oshimitsu.index]: {
    label: m.layout_sticky_cta_find_videos,
    href: ROUTES.oshimitsu.searchResult,
  },
}

/**
 * いま見ているページに出す案内を返す
 * @param pathname - 言語の接頭辞を外したあとのページの道（末尾スラッシュ付き）
 * @returns 出す案内。出さないページなら undefined
 */
export const findStickyCta = (pathname: string): StickyCta | undefined => CTA_BY_PATH[pathname]
