// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { ViewValueLayout } from '$model/view-value-layout'
import type { PageServerLoad } from './$types'

type OutputData = {
  isMobile: boolean
  layout: ViewValueLayout
}

export const load: PageServerLoad<OutputData> = async ({ locals }) => {
  const title =
    '推しミツ！あなたの推しを見つけよう〜 | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~'
  const description =
    'あなたの推しを見つけるための「推しミツ」アプリのページです。男子新体操をもっとよく楽しむためにあなただけの推しを見つけよう！'

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
        type: 'website',
      },
    },
  }
}
