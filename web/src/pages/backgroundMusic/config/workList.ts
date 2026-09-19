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
    customerName: { ja: '佐藤綾人', en: 'Ayato Sato', ko: '사토 아야토' },
    apparatus: 'rope',
    youtube: 'https://youtu.be/1qvuWxHhGx4',
  },
  {
    customerName: { ja: '佐藤颯人', en: 'Hayato Sato', ko: '사토 하야토' },
    apparatus: 'rope',
    youtube: 'https://youtu.be/DsyGNFsC-es',
  },
  {
    customerName: { ja: '佐藤颯人', en: 'Hayato Sato', ko: '사토 하야토' },
    apparatus: 'club',
    youtube: 'https://youtu.be/-AL2lHlpeIE',
  },
  {
    customerName: { ja: '佐藤嘉人', en: 'Yoshito Sato', ko: '사토 요시토' },
    apparatus: 'ring',
    youtube: 'https://youtu.be/VwWape5hiJ8',
  },
  {
    customerName: { ja: '佐藤嘉人', en: 'Yoshito Sato', ko: '사토 요시토' },
    apparatus: 'stick',
    youtube: 'https://youtu.be/-n3pavMG378',
  },
  {
    customerName: { ja: '満仲進哉', en: 'Shinya Manju', ko: '만주 신야' },
    apparatus: 'stick',
    youtube: 'https://youtu.be/GXRIiuiZkJc',
  },
  {
    customerName: { ja: '清水琢巳', en: 'Takumi Shimizu', ko: '시미즈 타쿠미' },
    apparatus: 'ring',
    youtube: 'https://youtu.be/X9_KpzsYl7k',
  },
  {
    customerName: { ja: '清水琢巳', en: 'Takumi Shimizu', ko: '시미즈 타쿠미' },
    apparatus: 'club',
    youtube: 'https://youtu.be/4r6JlP3m2Uc',
  },
  {
    customerName: { ja: '遠藤那央斗', en: 'Naoto Endo', ko: '엔도 나오토' },
    apparatus: 'ring',
    youtube: 'https://youtu.be/3uXmw1WxdEE',
  },
  {
    customerName: { ja: '田窪莉久', en: 'Riku Takubo', ko: '다쿠보 리쿠' },
    apparatus: 'rope',
    youtube: 'https://youtu.be/LdnPg1o5Xmo',
  },
]
