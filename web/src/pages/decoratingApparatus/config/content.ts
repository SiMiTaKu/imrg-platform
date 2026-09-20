import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'
import type { ImageSourceMeta } from '@shared/ui'
import MainVisual1 from '../images/main-visual-1.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual2 from '../images/main-visual-2.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual3 from '../images/main-visual-3.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual4 from '../images/main-visual-4.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual5 from '../images/main-visual-5.jpg?w=1024;2048&format=webp&as=meta'

/** メインビジュアルの1枚（背景画像とキャッチコピー） */
type MainVisualSlide = {
  /** 背景画像 */
  image: ImageSourceMeta[]
  /** キャッチコピー。表示中の言語で取り出せるように、文言の関数のまま持つ */
  description: typeof m.decorating_apparatus_main_visual_description_1
}

/**
 * メインビジュアルで切り替えて見せる背景画像とキャッチコピー。
 *
 * @remarks
 * 画像の並び（1・3・5・2・4）は、移す前のページと同じ
 */
export const MAIN_VISUAL_SLIDES: readonly MainVisualSlide[] = [
  { image: MainVisual1, description: m.decorating_apparatus_main_visual_description_1 },
  { image: MainVisual3, description: m.decorating_apparatus_main_visual_description_2 },
  { image: MainVisual5, description: m.decorating_apparatus_main_visual_description_3 },
  { image: MainVisual2, description: m.decorating_apparatus_main_visual_description_4 },
  { image: MainVisual4, description: m.decorating_apparatus_main_visual_description_5 },
]

/** 「装飾の流れ」の呼びかけ（1要素を1行にする） */
export const FLOW_MESSAGE_LINES = [
  m.decorating_apparatus_message_line1,
  m.decorating_apparatus_message_line2,
] as const

/** 装飾の流れ（段階の名前と説明） */
export const FLOW_STEPS = [
  {
    title: m.decorating_apparatus_flow_inquiry_title,
    description: m.decorating_apparatus_flow_inquiry_description,
  },
  {
    title: m.decorating_apparatus_flow_meeting_title,
    description: m.decorating_apparatus_flow_meeting_description,
  },
  {
    title: m.decorating_apparatus_flow_design_title,
    description: m.decorating_apparatus_flow_design_description,
  },
  {
    title: m.decorating_apparatus_flow_decorating_title,
    description: m.decorating_apparatus_flow_decorating_description,
  },
  {
    title: m.decorating_apparatus_flow_delivery_title,
    description: m.decorating_apparatus_flow_delivery_description,
  },
] as const

/** 手具装飾の料金（作業1時間あたり、円） */
export const PRICE_PER_HOUR = 1500

/**
 * ページの上のほうに出す案内の文言。
 *
 * @remarks
 * デザイン案のため日本語で直書きしている。採用するときに messages へ移す
 */
export const HERO = {
  /** 見出しの上の小さなラベル */
  eyebrow: '手具装飾を承っています',
  /** 何を頼めるのかの説明 */
  summary:
    'スティック・クラブ・リング・ロープを、チームの色や演技のイメージに合わせて仕上げます。デザインが決まっていなくても、色の相談から一緒に考えます。手具の持ち込みにも対応します。',
  /** 頼めることの短い言い切り */
  points: ['デザインの相談から', '4種類の手具に対応', '持ち込みもできる'],
  /** 料金のラベル（金額の前に出す） */
  priceUnit: '作業1時間',
  /** ボタンの下に小さく出す補足 */
  note: 'Instagram のダイレクトメッセージがいちばん早く届きます。見積もりまでは無料です。',
} as const

/** 「手具装飾で頼めること」の見出しまわり */
export const POINTS_HEADING = {
  eyebrow: '頼めること',
  title: '手具装飾でできること',
  lead: '装飾にルールはありません。色を変えるだけの依頼から、丸ごと作り替える依頼まで受けています。',
} as const

/** 手具装飾で頼めること */
export const ORDER_POINTS = [
  {
    title: 'デザインから一緒に考える',
    body: 'チームの色、曲の雰囲気、大会の空気。言葉だけの相談からデザインを起こします。見本を見てもらってから装飾に入ります。',
  },
  {
    title: '4種類の手具に対応',
    body: 'スティック・クラブ・リング・ロープ。どの手具でも受け付けます。団体で色をそろえたい、といった依頼も相談してください。',
  },
  {
    title: '持ち込みの手具を装飾する',
    body: '使い慣れた手具をそのまま活かせます。手元の手具を送ってもらう形でも、直接渡してもらう形でも構いません。',
  },
  {
    title: '持ち心地まで相談する',
    body: 'テープの重ね方は、持ったときの太さや滑りに関わります。実際に使う人の感覚を聞きながら決めます。',
  },
] as const

/** 「過去の作品」の見出しまわり */
export const WORKS_HEADING = {
  eyebrow: '作例',
  lead: 'これまでに仕上げた手具です。写真を押すと、同じ手具の別の角度が見られます。',
} as const

/** 「料金」の見出しまわり */
export const PRICE_HEADING = {
  eyebrow: '料金',
  lead: 'デザインと装飾する範囲でかかる時間が変わります。まず相談してもらって、見積もりをお伝えしてから作業に入ります。',
} as const

/** 「装飾の流れ」の見出しまわり */
export const FLOW_HEADING = {
  eyebrow: '進め方',
  lead: '相談から納品まで5つの段階で進みます。デザインを見てから決めてもらって構いません。',
} as const

/** 「相談する」の見出しまわり */
export const CONTACT = {
  eyebrow: '相談する',
  lead: 'デザインが決まっていなくても、大会までの日程だけでも構いません。まずは声をかけてください。',
  /** ボタンの下に小さく出す補足 */
  note: '個人で運営しているため、返事に数日いただくことがあります。見積もりまでは無料です。',
} as const

/** もう一方の依頼（曲編集）への案内 */
export const CROSS_LINK = {
  label: '曲編集も承っています',
  href: ROUTES.backgroundMusic,
  body: '演技の構成に合わせて、好きな曲を1曲に組み上げます。1曲 5,000円〜。',
} as const
