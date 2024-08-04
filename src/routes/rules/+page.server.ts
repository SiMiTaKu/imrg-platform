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
    "ルールブックページ | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "男子新体操のルールブックページです。細かいルールについて調べることが可能です。わからないことやより深いルールを知りたい方はこのページを閲覧してください。"
  const path = PUBLIC_BASE_URL + "/rules/"

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
