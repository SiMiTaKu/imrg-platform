// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { ViewValueLayout } from "@model/view-value-layout"
import type { PageServerLoad } from "./$types"
import { pageData } from "../view/atomic/device-store/store"
import { get } from "svelte/store"

type OutputData = {
  isMobile: boolean;
  origin: string;
  layout: ViewValueLayout;
};

export const load: PageServerLoad<OutputData> = async ({ url }) => {
  const title = "男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~"
  const description =
    "男子新体操国際化プロジェクトのトップページです。男子新体操は日本発祥のスポーツで70年以上の歴史があるスポーツです。ただ日本で進化し続けてきたため海外での競技者が少なくオリンピックスポーツになっていない現状です。この魅力ある日本の文化スポーツを世界のスポーツ（オリンピックスポーツ）にするために活動しております。"

  return {
    isMobile: get(pageData).isMobile,
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
