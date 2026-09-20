import { Character } from '@entities/character'
import { ROUTES } from '@shared/routes'

/**
 * 指導の受け方。オンラインと会場へ出向く場合で、できることが変わる。
 *
 * @remarks
 * デザイン案のため日本語で直書きしている。採用するときに messages へ移す
 */
export const COACHING_WAYS = [
  {
    key: 'online',
    label: 'オンライン',
    summary: '動画を送ってもらう／画面ごしに話す',
    character: Character.OSAMU,
    points: [
      '演技の動画を見て、直すところを伝える',
      '個人の演技構成を作る',
      '構成の相談に乗る（手具の使い方、音との合わせ方）',
    ],
    note: '団体の演技を一から作るのは、実際に動きを見ないと難しいため会場へ出向く形だけで受けています。',
  },
  {
    key: 'offline',
    label: '会場へ出向く',
    summary: '練習場に行って、直接みる',
    character: Character.SORA,
    points: [
      '団体の演技を一から作る',
      '個人の演技を作る・直す',
      '基本の動き、タンブリング、手具の扱いをみる',
    ],
    note: '交通費と宿泊費は別に実費でお願いしています。',
  },
] as const

/** 料金の目安 */
export const PRICES = [
  {
    way: 'オンライン',
    items: [
      {
        name: '演技構成の添削（個人）',
        price: '2,000円〜',
        note: '動画を見て、直すところを伝える',
      },
      {
        name: '演技構成の添削（団体）',
        price: '4,000円〜',
        note: '人数分の動きを見るので個人より高い',
      },
      { name: '演技構成の作成（個人）', price: '10,000円〜', note: '1演技を一から組み立てる' },
      { name: '演技構成の作成（団体）', price: '—', note: '会場へ出向く形でのみ受けています' },
    ],
  },
  {
    way: '会場へ出向く',
    items: [
      { name: '指導', price: '1日 10,000円〜', note: '半日や時間単位も相談できます' },
      { name: '交通費', price: '実費', note: '切符・航空券は事前に手配をお願いしています' },
      { name: '宿泊費', price: '実費', note: '部屋の予約も事前にお願いしています' },
    ],
  },
] as const

/** 過去に作った演技・みてきたチーム */
export const RESULTS = [
  { year: '2016', name: '青森山田高校 団体', detail: '構成のおよそ半分' },
  { year: '2019', name: '青森大学 1部', detail: '' },
  { year: '2020', name: '青森山田高校 団体', detail: '' },
  { year: '2021', name: '青森大学 1部', detail: '' },
  { year: '2021', name: '青森山田高校 団体', detail: '' },
  { year: '2021', name: '清水 琢巳（個人）', detail: '4種目すべての構成' },
  { year: '2024', name: '青森山田高校 団体', detail: '' },
  { year: '2025', name: '神埼ジュニア 団体', detail: '' },
  { year: '2026', name: '華舞翔 団体', detail: '' },
] as const

/** 年ではくくれない実績 */
export const CONTINUOUS_RESULTS = [
  '華舞翔新体操倶楽部 発表会（第13回〜第22回）の OB・OG 演技',
  'そのほか、個人の選手を数名',
] as const

/** 依頼の流れ */
export const FLOW = [
  {
    title: '相談する',
    description: 'いつ・どこで・何人を・どこまで、を教えてください。DM で受け付けています。',
  },
  {
    title: '決める',
    description: '受け方（オンラインか会場か）と料金、日程を決めます。見積もりまで無料です。',
  },
  {
    title: 'みる・作る',
    description: '動画を見て直しを伝える、または会場で直接みます。構成は作りながら相談します。',
  },
  {
    title: '渡す',
    description: '構成は動画と書き起こしで渡します。あとからの手直しも相談できます。',
  },
] as const

/** ページの上のほうに出す案内 */
export const HERO = {
  eyebrow: '指導を承っています',
  summary:
    '演技の構成を作る、いまの演技を直す、基本からみる。オンラインでも、会場へ出向く形でも受けています。全日本や全国大会で使われた構成を作ってきました。',
  points: ['団体の演技を作る', '個人の構成を作る', '動画を見て直す'],
  priceUnit: '目安',
  priceAmount: 'オンライン 2,000円〜／出向く場合 1日 10,000円〜',
} as const

/** ほかの依頼ページへの案内 */
export const OTHER_SERVICES = [
  { title: '曲編集', body: '演技に合わせて曲を組み上げます。', href: ROUTES.backgroundMusic },
  { title: '手具装飾', body: '手具をチームの色に仕上げます。', href: ROUTES.decoratingApparatus },
] as const
