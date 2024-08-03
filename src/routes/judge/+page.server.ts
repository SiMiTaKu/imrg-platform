// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { ViewValueLayout } from "@model/view-value-layout"
import type { PageServerLoad } from "./$types"

type OutputData = {
  isMobile: boolean;
  origin: string;
  layout: ViewValueLayout;
};

export const load: PageServerLoad<OutputData> = async ({ url, locals }) => {
  const title =
    "採点アプリ（実施） | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "男子新体操の演技を簡単に採点できるアプリページです。初心者の方でも直感的に演技を採点し審判の体験が行えます。新体操のルールは細かく不明確な点も多いため初心者には難しいですが、このアプリであれば誰でも簡単に正しく演技を評価することができます。"

  return {
    isMobile: locals.isMobile,
    origin: url.origin,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: url.href,
      ogp: {
        title,
        description,
        url: url.href,
        type: "website",
      },
    },
  }
}
