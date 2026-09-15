import type { ViewValueLayout } from "$model/view-value-layout"
import type { PageServerLoad } from "./$types"

type OutputData = {
  isMobile: boolean;
  layout: ViewValueLayout;
};

export const load: PageServerLoad<OutputData> = async ({ locals }) => {
  const title =
    "利用規約 | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "男子新体操国際化プロジェクトの利用規約です。本サイトと YouTube 連携ツールの利用条件を定めています。"

  return {
    isMobile: locals.isMobile,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: true,
      path: "/terms",
      ogp: {
        title,
        description,
        type: "website",
      },
    },
  }
}
