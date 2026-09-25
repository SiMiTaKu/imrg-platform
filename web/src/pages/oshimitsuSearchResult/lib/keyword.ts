import { isIndividualVideo, localizedName, type VideoResource } from '@entities/oshimitsuVideo'
import type { SiteLocale } from '@shared/lib/i18n'

/**
 * 動画に結び付く名前（選手・チーム）を集める
 * @param video - 動画
 * @param locale - 表示中の言語
 * @returns 表示中の言語の名前と、かなの名前
 *
 * @remarks
 * 個人は選手と所属チーム、団体はチームと出場選手を見る。
 * かなも入れるので、漢字を出せない言語で見ていても「あおもり」で当たる
 */
const namesOf = (video: VideoResource, locale: SiteLocale): string[] =>
  isIndividualVideo(video)
    ? [
        localizedName(video.player, locale),
        video.player.nameKana,
        ...video.player.belongedTeams.flatMap((team) => [
          localizedName(team, locale),
          team.nameKana,
        ]),
      ]
    : [
        localizedName(video.team, locale),
        video.team.nameKana,
        ...video.players.flatMap((player) => [localizedName(player, locale), player.nameKana]),
      ]

/**
 * 選手・チームの名前で動画をしぼる
 * @param videos - しぼる前の動画
 * @param keyword - 探す言葉。前後の空白は無視する
 * @param locale - 表示中の言語
 * @returns 名前にその言葉を含む動画だけ。言葉が空なら元の並びのまま返す
 */
export const filterByName = (
  videos: readonly VideoResource[],
  keyword: string,
  locale: SiteLocale,
): VideoResource[] => {
  const trimmed = keyword.trim().toLowerCase()
  if (trimmed === '') return [...videos]
  return videos.filter((video) =>
    namesOf(video, locale).some((name) => name.toLowerCase().includes(trimmed)),
  )
}
