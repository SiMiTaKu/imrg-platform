import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'

/**
 * 採点を終えたあとに進んでほしい先。
 *
 * @remarks
 * 文言は言語が決まってから取り出したいので、関数にして遅らせている。
 * `id` は並べ替えても変わらない目印で、一覧を描くときの key に使う
 */
export const JUDGE_NEXT_ACTIONS = [
  {
    id: 'rules',
    /**
     *
     */
    title: () => m.judge_next_rules_title(),
    /**
     *
     */
    body: () => m.judge_next_rules_body(),
    href: ROUTES.rules.index,
    /**
     *
     */
    action: () => m.judge_next_rules_action(),
  },
  {
    id: 'oshimitsu',
    /**
     *
     */
    title: () => m.judge_next_videos_title(),
    /**
     *
     */
    body: () => m.judge_next_videos_body(),
    href: ROUTES.oshimitsu.index,
    /**
     *
     */
    action: () => m.judge_next_videos_action(),
  },
  {
    id: 'calendar',
    /**
     *
     */
    title: () => m.judge_next_calendar_title(),
    /**
     *
     */
    body: () => m.judge_next_calendar_body(),
    href: ROUTES.calendar.index,
    /**
     *
     */
    action: () => m.judge_next_calendar_action(),
  },
] as const
