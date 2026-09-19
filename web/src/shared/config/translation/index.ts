import { TOP_TRANSLATED_PATHS } from './top'
import { CALENDAR_TRANSLATED_PATHS } from './calendar'
import { OSHIMITSU_TRANSLATED_PATHS } from './oshimitsu'
import { RULES_TRANSLATED_PATHS } from './rules'
import { JUDGE_TRANSLATED_PATHS } from './judge'
import { BACKGROUND_MUSIC_TRANSLATED_PATHS } from './backgroundMusic'
import { DECORATING_APPARATUS_TRANSLATED_PATHS } from './decoratingApparatus'
import { PRIVACY_TRANSLATED_PATHS } from './privacy'
import { TERMS_TRANSLATED_PATHS } from './terms'

/**
 * 英語に訳し終えたページのパス。
 *
 * @remarks
 * ページごとのファイルに分けているのは、ページの作業を並行して進めても
 * 同じ行を取り合わないようにするため。訳し終えたページは、そのページのファイルに足す。
 */
export const TRANSLATED_PATHS: readonly string[] = [
  ...TOP_TRANSLATED_PATHS,
  ...CALENDAR_TRANSLATED_PATHS,
  ...OSHIMITSU_TRANSLATED_PATHS,
  ...RULES_TRANSLATED_PATHS,
  ...JUDGE_TRANSLATED_PATHS,
  ...BACKGROUND_MUSIC_TRANSLATED_PATHS,
  ...DECORATING_APPARATUS_TRANSLATED_PATHS,
  ...PRIVACY_TRANSLATED_PATHS,
  ...TERMS_TRANSLATED_PATHS,
]
