import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'

/** トップに並べる、ほかのページへのリンク */
export interface TopLink {
  /** リンク先（言語の接頭辞なし） */
  href: string
  /**
   * 表示する文言。表示中の言語で返す
   * @returns 文言
   */
  label: () => string
}

/**
 * トップに並べるリンク。
 *
 * @remarks
 * 文言はメニュー（`layout_nav_*`）と同じだが、ページごとに文言を分けるため top の文言を使う
 */
export const TOP_LINKS: readonly TopLink[] = [
  { href: ROUTES.calendar.index, label: m.top_links_calendar },
  { href: ROUTES.decoratingApparatus, label: m.top_links_decorating_apparatus },
  { href: ROUTES.backgroundMusic, label: m.top_links_background_music },
  { href: ROUTES.judge, label: m.top_links_judge },
  { href: ROUTES.rules, label: m.top_links_rules },
  { href: ROUTES.oshimitsu.index, label: m.top_links_oshimitsu },
]
