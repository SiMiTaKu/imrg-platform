import type { EventCategory } from './model'

/** 絞り込みボタンを並べる順 */
export const CATEGORY_ORDER: EventCategory[] = [
  'national',
  'regional',
  'prefectural',
  'performance',
  'workshop',
  'international',
]

/** 種類ごとの表示名と色。色はカレンダーの印と一覧の左の線に使う */
export const CATEGORY_LABELS: Record<EventCategory, { ja: string; en: string; color: string }> = {
  national: { ja: '全国大会', en: 'National', color: '#1986ff' },
  regional: { ja: '地区大会', en: 'Regional', color: '#16a06b' },
  prefectural: { ja: '都道府県大会', en: 'Prefectural', color: '#8a5cd6' },
  performance: { ja: '発表会・公演', en: 'Performances', color: '#e0567f' },
  workshop: { ja: '講習会・体験会', en: 'Workshops', color: '#d98e04' },
  international: { ja: '海外・国際', en: 'International', color: '#0e9aa7' },
}
