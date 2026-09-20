import type { CalendarEvent } from '@entities/calendarEvent'

/**
 * 会場の地域（地方）。
 *
 * @remarks
 * 元データ（`~/imrg/calendar-data/`）は地域を持たないので、会場名の日本語表記に含まれる
 * 都道府県名から求める。どの都道府県にも当てはまらないもの（海外・オンライン・会場未定）は
 * `OVERSEAS` にまとめる。値は URL のクエリにも使う
 */
export const CalendarRegion = {
  /** 北海道・東北 */
  HOKKAIDO_TOHOKU: 'hokkaido-tohoku',
  /** 関東 */
  KANTO: 'kanto',
  /** 中部 */
  CHUBU: 'chubu',
  /** 近畿 */
  KINKI: 'kinki',
  /** 中国・四国 */
  CHUGOKU_SHIKOKU: 'chugoku-shikoku',
  /** 九州・沖縄 */
  KYUSHU_OKINAWA: 'kyushu-okinawa',
  /** 海外・その他（オンライン、会場未定を含む） */
  OVERSEAS: 'overseas',
} as const

/** 地域のどれか1つ */
export type CalendarRegionKey = (typeof CalendarRegion)[keyof typeof CalendarRegion]

/** 地域1つ分の設定 */
export interface CalendarRegionDefinition {
  /** 地域の key */
  readonly key: CalendarRegionKey
  /** 絞り込みボタンに出す名前 */
  readonly label: string
  /** この地域に含まれる都道府県名。会場名との突き合わせに使う */
  readonly prefectures: readonly string[]
}

/**
 * 地域の一覧。
 *
 * @remarks
 * 並びは絞り込みボタンの並び（北から南へ）。都道府県名は「県」「都」「府」「道」まで入れる。
 * 「京都府」と「東京都」のように、途中まで同じ名前どうしを取り違えないため
 */
export const CALENDAR_REGIONS: readonly CalendarRegionDefinition[] = [
  {
    key: CalendarRegion.HOKKAIDO_TOHOKU,
    label: '北海道・東北',
    prefectures: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
  },
  {
    key: CalendarRegion.KANTO,
    label: '関東',
    prefectures: ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
  },
  {
    key: CalendarRegion.CHUBU,
    label: '中部',
    prefectures: [
      '新潟県',
      '富山県',
      '石川県',
      '福井県',
      '山梨県',
      '長野県',
      '岐阜県',
      '静岡県',
      '愛知県',
    ],
  },
  {
    key: CalendarRegion.KINKI,
    label: '近畿',
    prefectures: ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
  },
  {
    key: CalendarRegion.CHUGOKU_SHIKOKU,
    label: '中国・四国',
    prefectures: [
      '鳥取県',
      '島根県',
      '岡山県',
      '広島県',
      '山口県',
      '徳島県',
      '香川県',
      '愛媛県',
      '高知県',
    ],
  },
  {
    key: CalendarRegion.KYUSHU_OKINAWA,
    label: '九州・沖縄',
    prefectures: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
  },
  {
    key: CalendarRegion.OVERSEAS,
    label: '海外・その他',
    prefectures: [],
  },
]

/**
 * イベントの会場がどの地域かを求める
 * @param event - イベント
 * @returns 会場名に含まれる都道府県名から決めた地域。見つからなければ「海外・その他」
 */
export const regionOfEvent = (event: CalendarEvent): CalendarRegionKey => {
  const venue = event.venue?.name.ja ?? ''
  if (venue === '') return CalendarRegion.OVERSEAS

  const found = CALENDAR_REGIONS.find((region) =>
    region.prefectures.some((prefecture) => venue.includes(prefecture)),
  )
  return found?.key ?? CalendarRegion.OVERSEAS
}

/**
 * 地域の表示名を返す
 * @param key - 地域の key
 * @returns 「関東」などの表示名。分からない key は「海外・その他」
 */
export const regionLabel = (key: CalendarRegionKey): string =>
  CALENDAR_REGIONS.find((region) => region.key === key)?.label ?? '海外・その他'
