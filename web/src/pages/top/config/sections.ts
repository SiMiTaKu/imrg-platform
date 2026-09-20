import { Character } from '@entities/character'
import { LINKS } from '@shared/config/links'
import { ROUTES } from '@shared/routes'

/**
 * 競技の見どころ。3つに絞る。
 *
 * @remarks
 * デザイン案のため文言は日本語で直書きしている。採用するときに messages へ移す
 */
export const HIGHLIGHTS = [
  {
    character: Character.SORA,
    title: 'タンブリング',
    summary: '床を蹴って宙を舞う',
    body: '助走から連続で宙返りを重ねる。5人が同時に跳ぶ姿は、男子新体操でいちばん目を引く場面。',
  },
  {
    character: Character.AYATO,
    title: '手具',
    summary: 'スティック・リング・ロープ・クラブ',
    body: '個人競技は4種類の手具を扱う。投げて、受けて、体の動きと一体にする。落とせば減点になる。',
  },
  {
    character: Character.KAZUTO,
    title: '団体',
    summary: '5人が2分半を揃える',
    body: '団体は5人が同じ動きを揃える。倒立や組、隊形の変化を音楽に合わせて作り上げる。',
  },
] as const

/** 頼めること。料金の入口を分かりやすくする */
export const SERVICES = [
  {
    character: Character.AYATO,
    title: '曲編集',
    price: '1曲 5,000円〜',
    body: '競技時間に合わせて曲を組み、構成に合う展開を作る。原曲の指定からでも、任せてもらっても。',
    href: ROUTES.backgroundMusic,
    action: '作例を見る',
  },
  {
    character: Character.YAWANA,
    title: '手具装飾',
    price: '作業1時間 1,500円〜',
    body: 'スティックやクラブを、チームの色や大会の雰囲気に合わせて仕上げる。持ち込みにも対応する。',
    href: ROUTES.decoratingApparatus,
    action: '作例を見る',
  },
] as const

/** サイトの中でできること */
export const FEATURES = [
  {
    title: '大会・イベントを探す',
    body: '全国の大会を年ごとに一覧で。日程・会場・配信の有無まで載せている。',
    href: ROUTES.calendar.index,
    badge: '312件',
  },
  {
    title: 'ルールを知る',
    body: '規則集を読みやすく並べ直した。採点の考え方から、手具ごとの決まりまで。',
    href: ROUTES.rules,
    badge: '全文',
  },
  {
    title: '審判を体験する',
    body: '実際の採点表と同じ形で点を付けてみる。見る目が変わる。',
    href: ROUTES.judge,
    badge: '体験',
  },
  {
    title: '推しミツ！',
    body: '演技の動画を選手・チーム・手具から探せる。推しの演技をまとめて見る。',
    href: ROUTES.oshimitsu.index,
    badge: '動画',
  },
] as const

/** 信頼の裏づけになる数字 */
export const NUMBERS = [
  { value: '312', unit: '件', label: '掲載した大会' },
  { value: '8', unit: '言語', label: '対応する言語' },
  { value: '2,568', unit: 'ページ', label: '公開しているページ' },
  { value: '2022', unit: '年〜', label: '活動を続けている' },
] as const

/** 連絡の取り方 */
export const CONTACTS = [
  { label: 'Instagram', description: '普段の発信。連絡もここが早い', href: LINKS.instagram },
  { label: 'YouTube', description: '演技動画と解説', href: LINKS.youtube },
  { label: 'X', description: '大会の速報', href: LINKS.x },
  { label: 'TikTok', description: '短い動画', href: LINKS.tiktok },
] as const
