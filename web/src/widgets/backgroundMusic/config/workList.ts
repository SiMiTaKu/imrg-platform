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
    customerName: {
      ja: '佐藤綾人',
      en: 'Ayato Sato',
      zh: '佐藤绫人',
      ko: '사토 아야토',
      ru: 'Сато Аято',
      hi: 'सातो अयातो',
    },
    apparatus: 'rope',
    youtube: 'https://youtu.be/1qvuWxHhGx4',
  },
  {
    customerName: {
      ja: '佐藤颯人',
      en: 'Hayato Sato',
      zh: '佐藤飒人',
      ko: '사토 하야토',
      ru: 'Сато Хаято',
      hi: 'सातो हायातो',
    },
    apparatus: 'rope',
    youtube: 'https://youtu.be/DsyGNFsC-es',
  },
  {
    customerName: {
      ja: '佐藤颯人',
      en: 'Hayato Sato',
      zh: '佐藤飒人',
      ko: '사토 하야토',
      ru: 'Сато Хаято',
      hi: 'सातो हायातो',
    },
    apparatus: 'club',
    youtube: 'https://youtu.be/-AL2lHlpeIE',
  },
  {
    customerName: {
      ja: '佐藤嘉人',
      en: 'Yoshito Sato',
      zh: '佐藤嘉人',
      ko: '사토 요시토',
      ru: 'Сато Ёсито',
      hi: 'सातो योशितो',
    },
    apparatus: 'ring',
    youtube: 'https://youtu.be/VwWape5hiJ8',
  },
  {
    customerName: {
      ja: '佐藤嘉人',
      en: 'Yoshito Sato',
      zh: '佐藤嘉人',
      ko: '사토 요시토',
      ru: 'Сато Ёсито',
      hi: 'सातो योशितो',
    },
    apparatus: 'stick',
    youtube: 'https://youtu.be/-n3pavMG378',
  },
  {
    customerName: {
      ja: '満仲進哉',
      en: 'Shinya Manju',
      zh: '满仲进哉',
      ko: '만주 신야',
      ru: 'Мандзю Синъя',
      hi: 'मंजू शिन्या',
    },
    apparatus: 'stick',
    youtube: 'https://youtu.be/GXRIiuiZkJc',
  },
  {
    customerName: {
      ja: '清水琢巳',
      en: 'Takumi Shimizu',
      zh: '清水琢巳',
      ko: '시미즈 타쿠미',
      ru: 'Симидзу Такуми',
      hi: 'शिमिज़ु ताकुमी',
    },
    apparatus: 'ring',
    youtube: 'https://youtu.be/X9_KpzsYl7k',
  },
  {
    customerName: {
      ja: '清水琢巳',
      en: 'Takumi Shimizu',
      zh: '清水琢巳',
      ko: '시미즈 타쿠미',
      ru: 'Симидзу Такуми',
      hi: 'शिमिज़ु ताकुमी',
    },
    apparatus: 'club',
    youtube: 'https://youtu.be/4r6JlP3m2Uc',
  },
  {
    customerName: {
      ja: '遠藤那央斗',
      en: 'Naoto Endo',
      zh: '远藤那央斗',
      ko: '엔도 나오토',
      ru: 'Эндо Наото',
      hi: 'एंदो नाओतो',
    },
    apparatus: 'ring',
    youtube: 'https://youtu.be/3uXmw1WxdEE',
  },
  {
    customerName: {
      ja: '田窪莉久',
      en: 'Riku Takubo',
      zh: '田洼莉久',
      ko: '다쿠보 리쿠',
      ru: 'Такубо Рику',
      hi: 'ताकुबो रिकु',
    },
    apparatus: 'rope',
    youtube: 'https://youtu.be/LdnPg1o5Xmo',
  },
]
