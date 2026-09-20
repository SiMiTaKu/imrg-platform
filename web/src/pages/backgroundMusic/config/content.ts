import { m } from '$lib/paraglide/messages'
import { ROUTES } from '@shared/routes'

/**
 * メインビジュアルで切り替えて見せるキャッチコピー。
 *
 * @remarks
 * 表示中の言語で取り出せるように、文言の関数のまま持つ
 */
export const MAIN_VISUAL_DESCRIPTIONS = [
  m.background_music_main_visual_description_1,
  m.background_music_main_visual_description_2,
  m.background_music_main_visual_description_3,
  m.background_music_main_visual_description_4,
  m.background_music_main_visual_description_5,
] as const

/** 「編曲の流れ」の呼びかけ（1要素を1行にする） */
export const FLOW_MESSAGE_LINES = [
  m.background_music_message_line1,
  m.background_music_message_line2,
] as const

/** 編曲の流れ（段階の名前と説明） */
export const FLOW_STEPS = [
  {
    title: m.background_music_flow_inquiry_title,
    description: m.background_music_flow_inquiry_description,
  },
  {
    title: m.background_music_flow_meeting_title,
    description: m.background_music_flow_meeting_description,
  },
  {
    title: m.background_music_flow_editing_title,
    description: m.background_music_flow_editing_description,
  },
  {
    title: m.background_music_flow_delivery_title,
    description: m.background_music_flow_delivery_description,
  },
] as const

/** 曲編集の料金（1曲あたり、円） */
export const PRICE_PER_MUSIC = 5000

/**
 * ページの上のほうに出す案内の文言。
 *
 * @remarks
 * デザイン案のため日本語で直書きしている。採用するときに messages へ移す
 */
export const HERO = {
  /** 見出しの上の小さなラベル */
  eyebrow: '曲編集を承っています',
  /** 何を頼めるのかの説明 */
  summary:
    '演技の構成に合わせて、好きな曲を1曲に組み上げます。原曲を指定してもらっても、「こんな雰囲気で」という相談からでも受け付けています。選手・指導者の方から直接お受けしています。',
  /** 頼めることの短い言い切り */
  points: ['演技時間に合わせる', '複数の曲をつなぐ', '出だしと終わりを整える'],
  /** 料金のラベル（金額の前に出す） */
  priceUnit: '1曲',
  /** ボタンの下に小さく出す補足 */
  note: 'Instagram のダイレクトメッセージがいちばん早く届きます。見積もりまでは無料です。',
} as const

/** 「曲編集で頼めること」の見出しまわり */
export const POINTS_HEADING = {
  eyebrow: '頼めること',
  title: '曲編集でできること',
  lead: '演技時間に収めるだけではありません。構成の相談から、あとからの手直しまで受けています。',
} as const

/** 曲編集で頼めること */
export const ORDER_POINTS = [
  {
    title: '演技時間に合わせて短くする',
    body: '規定の演技時間に収まるように、曲の構成ごと組み直します。ただ切るのではなく、聴いて不自然にならないつなぎ方にします。',
  },
  {
    title: '複数の曲をつなぐ',
    body: 'サビだけを集める、静かな場面と動きの速い場面で曲を変える。構成の展開に合わせて、複数の曲を1曲にまとめます。',
  },
  {
    title: '出だしと終わりを整える',
    body: '動き出す合図になる音、盛り上がりの位置、終わったあとの余韻。演技と噛み合うように音量や間を調整します。',
  },
  {
    title: 'あとからの手直し',
    body: '構成が変わったときの差し替えや、長さの微調整も相談できます。作り直しになるかどうかは、先にお伝えします。',
  },
] as const

/** 「過去の実績」の見出しまわり */
export const WORKS_HEADING = {
  eyebrow: '作例',
  lead: '実際の大会で使われた曲です。名前を押すと、その曲で演技した動画（YouTube）が開きます。',
} as const

/** 「料金」の見出しまわり */
export const PRICE_HEADING = {
  eyebrow: '料金',
  lead: '曲の長さと編集する内容で変わります。まず相談してもらって、見積もりをお伝えしてから作業に入ります。',
} as const

/** 「編曲の流れ」の見出しまわり */
export const FLOW_HEADING = {
  eyebrow: '進め方',
  lead: '相談から納品まで4つの段階で進みます。どの段階でも、途中で相談し直して構いません。',
} as const

/** 「相談する」の見出しまわり */
export const CONTACT = {
  eyebrow: '相談する',
  lead: '曲が決まっていなくても、大会までの日程だけでも構いません。まずは声をかけてください。',
  /** ボタンの下に小さく出す補足 */
  note: '個人で運営しているため、返事に数日いただくことがあります。見積もりまでは無料です。',
} as const

/** もう一方の依頼（手具装飾）への案内 */
export const CROSS_LINK = {
  label: '手具装飾も承っています',
  href: ROUTES.decoratingApparatus,
  body: 'スティック・クラブ・リング・ロープを、チームの色や演技のイメージに合わせて仕上げます。作業1時間 1,500円〜。',
} as const
