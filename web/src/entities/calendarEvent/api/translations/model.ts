/**
 * 大会の訳（言語ごと）。
 *
 * @remarks
 * 大会のデータ（`api/events.ts`）は生成物で日本語と英語しか持たないので、
 * ほかの言語の訳はここに別で持つ。キーは大会の ID
 */
export interface EventTranslation {
  /** 大会名 */
  title?: string
  /** 会場 */
  venue?: string
  /** 補足 */
  note?: string
}

/** 大会の ID から訳を引く表 */
export type EventTranslations = Readonly<Record<string, EventTranslation>>
