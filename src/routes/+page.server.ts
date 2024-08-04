import type { ViewValueLayout } from "@model/view-value-layout"
import type { PageServerLoad } from "./$types"
import { PUBLIC_BASE_URL } from "$env/static/public"

type OutputData = {
  isMobile: boolean;
  origin: string;
  layout: ViewValueLayout;
};

export const load: PageServerLoad<OutputData> = async ({ locals }) => {
  const title = "男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "男子新体操国際化プロジェクトのトップページです。男子新体操は日本発祥のスポーツで70年以上の歴史があるスポーツです。ただ日本で進化し続けてきたため海外での競技者が少なくオリンピックスポーツになっていない現状です。この魅力ある日本の文化スポーツを世界のスポーツ（オリンピックスポーツ）にするために活動しております。"
  const path = PUBLIC_BASE_URL + "/"

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
