// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { ViewValueLayout } from "$model/view-value-layout"
import type { PageServerLoad } from "./$types"
import { Video } from "$views/page/oshimitsu/_lib"
import { ContentType, findApparatus } from "$views/page/oshimitsu/_models"
import { redirect } from "@sveltejs/kit"

type OutputData = {
  isMobile: boolean;
  layout: ViewValueLayout;
  criteria: Video.Criteria;
};

export const load: PageServerLoad<OutputData> = async ({ locals, url }) => {
  const redirectUrl = getRedirectUrl(getCriteria(url), url)

  if (redirectUrl) {
    redirect(302, redirectUrl)
  }

  const title =
    "推しミツ！あなたの推しを見つけよう〜 | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "あなたの推しを見つけるための「推しミツ」アプリのページです。男子新体操をもっとよく楽しむためにあなただけの推しを見つけよう！"

  return {
    isMobile: locals.isMobile,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: true,
      path: `/oshimitsu/search_result`,
      ogp: {
        title,
        description,
        type: "website",
      },
    },
    criteria: getCriteria(url),
  }
}

/**
 * リダイレクト先URL取得
 * @param criteria 検索条件
 * @param url URL
 * @return リダイレクト先のURL | undefined
 * @remarks
 * URLから取得した検索条件が以下の条件を満たす場合、リダイレクト先のurlを返します。
 * 1. 手具が1つのみ選択されている
 *   - /oshimitsu/content_type/individual/apparatus/${apparatus.slug} にリダイレクト
 */
const getRedirectUrl = (
  criteria: Video.Criteria,
  url: URL
): URL | undefined => {
  if (criteria.apparatuses.length === 1) {
    return new URL(
      `/oshimitsu/content_type/individual/apparatus/${criteria.apparatuses[0].slug}`,
      url.origin
    )
  }
  return undefined
}

/**
 * URLから検索条件を取得します。
 * @param url URL
 * @return 検索条件
 */
const getCriteria = (url: URL): Video.Criteria => {
  const queryParams = {
    contentTypeSlug: url.searchParams.get("ct"), // ct = content type
    apparatusSlugs: url.searchParams.get("app")?.split(","), // app = apparatus
  }

  if (
    queryParams.apparatusSlugs &&
    queryParams.apparatusSlugs.some((slug) => findApparatus(slug))
  ) {
    return {
      contentType: ContentType.INDIVIDUAL,
      apparatuses: queryParams.apparatusSlugs.flatMap(
        (slug) => findApparatus(slug) ?? []
      ),
      exceptVideos: [],
    }
  }

  return {
    contentType: ContentType.INDIVIDUAL,
    apparatuses: [],
    exceptVideos: [],
  }
}
