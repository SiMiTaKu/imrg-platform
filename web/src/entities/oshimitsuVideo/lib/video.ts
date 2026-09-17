import type { SiteLocale } from '@shared/lib/i18n'
import { Apparatus, ContentType } from '../config/category'
import type {
  Apparatus as ApparatusType,
  ContentType as ContentTypeType,
  IndividualVideoResource,
  PlayerResource,
  TeamResource,
  VideoResource,
} from '../model/video'

/**
 * slug から動画の種類を探す
 * @param slug - 種類の slug（`individual` / `group`）
 * @returns 見つかった種類。無ければ undefined
 */
export const findContentType = (slug: string): ContentTypeType | undefined =>
  Object.values(ContentType).find((contentType) => contentType.slug === slug)

/**
 * slug から手具を探す
 * @param slug - 手具の slug（`stick` / `ring` / `rope` / `club`）
 * @returns 見つかった手具。無ければ undefined
 */
export const findApparatus = (slug: string): ApparatusType | undefined =>
  Object.values(Apparatus).find((apparatus) => apparatus.slug === slug)

/**
 * 動画が個人の動画かを判別する
 * @param video - 判別する動画
 * @returns 種類が個人なら true
 */
export const isIndividualVideo = (video: VideoResource): video is IndividualVideoResource =>
  video.contentType.slug === ContentType.INDIVIDUAL.slug

/**
 * 選手・チームの名前を、表示する言語で返す
 * @param resource - 選手かチーム
 * @param locale - 表示する言語
 * @returns 日本語なら `name`、英語なら `nameEn`
 */
export const localizedName = (
  resource: PlayerResource | TeamResource,
  locale: SiteLocale,
): string => (locale === 'en' ? resource.nameEn : resource.name)

/**
 * 撮影日を「年」だけの表記にする
 * @param filmedAt - 撮影日
 * @param locale - 表示する言語
 * @returns 日本語なら「2024年」、英語なら「2024」
 *
 * @remarks
 * 撮影日は日本時間の日付で持っているので、日本時間で年を取る（ビルドする環境の時刻帯に左右されないように）
 */
export const formatFilmedYear = (filmedAt: Date, locale: SiteLocale): string =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(filmedAt)
