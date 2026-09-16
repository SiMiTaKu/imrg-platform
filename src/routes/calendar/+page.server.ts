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
    '大会・イベントカレンダー | 男子新体操国際化プロジェクト ~日本の文化を世界のスポーツへ~'
  const description =
    '男子新体操の大会・発表会・講習会の日程をまとめたカレンダーです。全国大会から地区大会、大学や高校の演技発表会、体験会まで、日本語と英語で探せます。'

  return {
    isMobile: locals.isMobile,
    layout: {
      title,
      description,
      noindex: false,
      nofollow: false,
      canonical: true,
      path: '/calendar',
      ogp: {
        title,
        description,
        type: 'website',
      },
    },
  }
}
