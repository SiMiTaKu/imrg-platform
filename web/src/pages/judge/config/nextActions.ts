import { ROUTES } from '@shared/routes'

/**
 * 採点を終えたあとに進んでほしい先。
 *
 * @remarks
 * デザイン案のため文言は日本語で直書きしている。採用するときに messages へ移す
 */
export const JUDGE_NEXT_ACTIONS = [
  {
    title: 'ルールを読む',
    body: '減点の決まりは規則集に書いてある。自分が引いた点と見くらべると、意味が分かってくる。',
    href: ROUTES.rules,
    action: '規則集を開く',
  },
  {
    title: '演技の動画を見る',
    body: '同じ目で本物の演技を見てみる。選手・チーム・手具から探せる。',
    href: ROUTES.oshimitsu.index,
    action: '推しミツ！へ',
  },
  {
    title: '会場で見る',
    body: '次の大会を探す。日程・会場・配信の有無まで載せている。',
    href: ROUTES.calendar.index,
    action: '大会を探す',
  },
] as const
