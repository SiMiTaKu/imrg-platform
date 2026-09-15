import type { ViewValueLayout } from "$model/view-value-layout"
import type { PageServerLoad } from "./$types"

type OutputData = {
  isMobile: boolean;
  layout: ViewValueLayout;
};

export const load: PageServerLoad<OutputData> = async ({ locals }) => {
  const title =
    "プライバシーポリシー | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "男子新体操国際化プロジェクトのプライバシーポリシーです。本サイトと YouTube 連携ツールにおける情報の取り扱いを定めています。"

  return {
    isMobile: locals.isMobile,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: true,
      path: "/privacy",
      ogp: {
        title,
        description,
        type: "website",
      },
    },
  }
}
