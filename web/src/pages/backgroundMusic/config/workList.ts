import type { ApparatusSlug, TranslatedText } from '@shared/model'

/** 曲編集の実績1件 */
export type BackgroundMusicWork = {
  /** 依頼した選手の名前（英語は「名 姓」の順） */
  customerName: TranslatedText
  /** 曲を使った手具 */
  apparatus: ApparatusSlug
  /** 演技の動画（YouTube） */
  youtube: string
}

/** 曲編集の実績 */
export const WORK_LIST: readonly BackgroundMusicWork[] = [
  {
    customerName: { japanese: '佐藤綾人', english: 'Ayato Sato' },
    apparatus: 'rope',
    youtube: 'https://youtu.be/1qvuWxHhGx4',
  },
  {
    customerName: { japanese: '佐藤颯人', english: 'Hayato Sato' },
    apparatus: 'rope',
    youtube: 'https://youtu.be/DsyGNFsC-es',
  },
  {
    customerName: { japanese: '佐藤颯人', english: 'Hayato Sato' },
    apparatus: 'club',
    youtube: 'https://youtu.be/-AL2lHlpeIE',
  },
  {
    customerName: { japanese: '佐藤嘉人', english: 'Yoshito Sato' },
    apparatus: 'ring',
    youtube: 'https://youtu.be/VwWape5hiJ8',
  },
  {
    customerName: { japanese: '佐藤嘉人', english: 'Yoshito Sato' },
    apparatus: 'stick',
    youtube: 'https://youtu.be/-n3pavMG378',
  },
  {
    customerName: { japanese: '満仲進哉', english: 'Shinya Manju' },
    apparatus: 'stick',
    youtube: 'https://youtu.be/GXRIiuiZkJc',
  },
  {
    customerName: { japanese: '清水琢巳', english: 'Takumi Shimizu' },
    apparatus: 'ring',
    youtube: 'https://youtu.be/X9_KpzsYl7k',
  },
  {
    customerName: { japanese: '清水琢巳', english: 'Takumi Shimizu' },
    apparatus: 'club',
    youtube: 'https://youtu.be/4r6JlP3m2Uc',
  },
  {
    customerName: { japanese: '遠藤那央斗', english: 'Naoto Endo' },
    apparatus: 'ring',
    youtube: 'https://youtu.be/3uXmw1WxdEE',
  },
  {
    customerName: { japanese: '田窪莉久', english: 'Riku Takubo' },
    apparatus: 'rope',
    youtube: 'https://youtu.be/LdnPg1o5Xmo',
  },
]
