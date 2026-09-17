import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'

/** メニューのリンク */
export interface NavigationLink {
  /** リンク先（言語の接頭辞なし） */
  href: string
  /**
   * 表示する文言。表示中の言語で返す
   * @returns 文言
   */
  label: () => string
}

/** メニューに並べるページ */
export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: ROUTES.top, label: m.layout_nav_top },
  { href: ROUTES.calendar.index, label: m.layout_nav_calendar },
  { href: ROUTES.decoratingApparatus, label: m.layout_nav_decorating_apparatus },
  { href: ROUTES.backgroundMusic, label: m.layout_nav_background_music },
  { href: ROUTES.judge, label: m.layout_nav_judge },
  { href: ROUTES.rules, label: m.layout_nav_rules },
  { href: ROUTES.oshimitsu.index, label: m.layout_nav_oshimitsu },
]
