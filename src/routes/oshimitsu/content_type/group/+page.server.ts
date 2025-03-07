// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { PageServerLoad } from "./$types"
import { ViewValueLayout } from "$model/view-value-layout"
import { ContentType } from "$views/page/oshimitsu/_models"
import { Video } from "$views/page/oshimitsu/_lib"

type OutputData = {
  isMobile: boolean;
  layout: ViewValueLayout;
  criteria: Video.Criteria;
};

export const load: PageServerLoad<OutputData> = async ({ locals }) => {
  const title = `推しミツ！（${ContentType.GROUP.label}） | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~`
  const description =
    "あなたの推しを見つけるための「推しミツ！」アプリのページです。男子新体操をもっとよく楽しむためにあなただけの推しを見つけよう！"

  return {
    isMobile: locals.isMobile,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: true,
      path: `/oshimitsu/content_type/${ContentType.GROUP.slug}`,
      ogp: {
        title,
        description,
        type: "website",
      },
    },
    criteria: {
      contentType: ContentType.GROUP,
      apparatuses: [],
      exceptVideos: [],
    },
  }
}
