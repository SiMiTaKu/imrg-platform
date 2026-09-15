import type { EventCategory } from "./model"

/** 絞り込みボタンを並べる順 */
export const CATEGORY_ORDER: EventCategory[] = [
  "national",
  "regional",
  "prefectural",
  "performance",
  "workshop",
  "international",
]

/** 種類ごとの表示名 */
export const CATEGORY_LABELS: Record<EventCategory, { ja: string; en: string }> = {
  national: { ja: "全国大会", en: "National" },
  regional: { ja: "地区大会", en: "Regional" },
  prefectural: { ja: "都道府県大会", en: "Prefectural" },
  performance: { ja: "発表会・公演", en: "Performances" },
  workshop: { ja: "講習会・体験会", en: "Workshops" },
  international: { ja: "海外・国際", en: "International" },
}
