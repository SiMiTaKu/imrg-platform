import { AccentColor } from '@imrg-platform/design-system'
import { m } from '$lib/paraglide/messages'

/**
 * イベントの種類。
 *
 * @remarks
 * 並びは絞り込みボタンの並び。`label` は表示中の言語の表記を返す関数なので、
 * サーバーからブラウザーへ渡すデータには入れられない。渡すときは `slug` だけにする
 */
export const EventCategory = {
  /** 全国大会 */
  NATIONAL: { slug: 'national', label: m.calendar_category_national, color: AccentColor.BLUE },
  /** 地区・ブロック大会 */
  REGIONAL: { slug: 'regional', label: m.calendar_category_regional, color: AccentColor.GREEN },
  /** 都道府県大会・新人戦 */
  PREFECTURAL: {
    slug: 'prefectural',
    label: m.calendar_category_prefectural,
    color: AccentColor.PURPLE,
  },
  /** 発表会・演技会・公演 */
  PERFORMANCE: {
    slug: 'performance',
    label: m.calendar_category_performance,
    color: AccentColor.PINK,
  },
  /** 講習会・体験会・合宿 */
  WORKSHOP: { slug: 'workshop', label: m.calendar_category_workshop, color: AccentColor.AMBER },
  /** 海外・国際的な催し */
  INTERNATIONAL: {
    slug: 'international',
    label: m.calendar_category_international,
    color: AccentColor.TEAL,
  },
} as const

/** 種類を絞り込みボタンの並び順に並べたもの */
export const EVENT_CATEGORIES = Object.values(EventCategory)
