// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { ViewValueLayout } from "@model/view-value-layout"
import type { PageServerLoad } from "./$types"
import { PUBLIC_BASE_URL } from "$env/static/public"

type OutputData = {
  isMobile: boolean;
  origin: string;
  layout: ViewValueLayout;
};

export const load: PageServerLoad<OutputData> = async ({ locals }) => {
  const title =
    "曲編集 | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "男子新体操の曲について知ることができるページです。曲を使って演技をする男子新体操は、音楽との相性が重要です。ルール変更により歌詞の有無が問われなくなったため、そのジャンルは多岐に渡るようになりました。"
  const path = PUBLIC_BASE_URL + "/background_music/"

  return {
    isMobile: locals.isMobile,
    origin: path,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: path,
      ogp: {
        title,
        description,
        url: path,
        type: "website",
      },
    },
  }
}
