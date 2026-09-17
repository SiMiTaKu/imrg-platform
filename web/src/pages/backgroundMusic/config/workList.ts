import { m } from '$lib/paraglide/messages'

/** 手具の種類 */
export type Apparatus = 'stick' | 'ring' | 'rope' | 'club'

/** 曲編集の実績1件 */
export type BackgroundMusicWork = {
  /** 依頼した選手の名前（日本語） */
  customerName: string
  /** 依頼した選手の名前（英語。「名 姓」の順） */
  customerNameEnglish: string
  /** 曲を使った手具 */
  apparatus: Apparatus
  /** 演技の動画（YouTube） */
  youtube: string
}

/** 手具の表示名（言語ごと） */
export const APPARATUS_LABELS: Record<Apparatus, typeof m.background_music_apparatus_stick> = {
  stick: m.background_music_apparatus_stick,
  ring: m.background_music_apparatus_ring,
  rope: m.background_music_apparatus_rope,
  club: m.background_music_apparatus_club,
}

/** 曲編集の実績 */
export const WORK_LIST: readonly BackgroundMusicWork[] = [
  {
    customerName: '佐藤綾人',
    customerNameEnglish: 'Ayato Sato',
    apparatus: 'rope',
    youtube: 'https://youtu.be/1qvuWxHhGx4',
  },
  {
    customerName: '佐藤颯人',
    customerNameEnglish: 'Hayato Sato',
    apparatus: 'rope',
    youtube: 'https://youtu.be/DsyGNFsC-es',
  },
  {
    customerName: '佐藤颯人',
    customerNameEnglish: 'Hayato Sato',
    apparatus: 'club',
    youtube: 'https://youtu.be/-AL2lHlpeIE',
  },
  {
    customerName: '佐藤嘉人',
    customerNameEnglish: 'Yoshito Sato',
    apparatus: 'ring',
    youtube: 'https://youtu.be/VwWape5hiJ8',
  },
  {
    customerName: '佐藤嘉人',
    customerNameEnglish: 'Yoshito Sato',
    apparatus: 'stick',
    youtube: 'https://youtu.be/-n3pavMG378',
  },
  {
    customerName: '満仲進哉',
    customerNameEnglish: 'Shinya Manju',
    apparatus: 'stick',
    youtube: 'https://youtu.be/GXRIiuiZkJc',
  },
  {
    customerName: '清水琢巳',
    customerNameEnglish: 'Takumi Shimizu',
    apparatus: 'ring',
    youtube: 'https://youtu.be/X9_KpzsYl7k',
  },
  {
    customerName: '清水琢巳',
    customerNameEnglish: 'Takumi Shimizu',
    apparatus: 'club',
    youtube: 'https://youtu.be/4r6JlP3m2Uc',
  },
  {
    customerName: '遠藤那央斗',
    customerNameEnglish: 'Naoto Endo',
    apparatus: 'ring',
    youtube: 'https://youtu.be/3uXmw1WxdEE',
  },
  {
    customerName: '田窪莉久',
    customerNameEnglish: 'Riku Takubo',
    apparatus: 'rope',
    youtube: 'https://youtu.be/LdnPg1o5Xmo',
  },
]
