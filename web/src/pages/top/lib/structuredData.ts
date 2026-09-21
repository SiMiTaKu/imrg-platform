import { m } from '$lib/paraglide/messages'
import { LINKS } from '@shared/config/links'
import { SERVICES } from '@widgets/top'
import { joinPhrases, joinPrices } from './phrase'

/**
 * トップページの構造化データ（schema.org）。
 *
 * @remarks
 * 検索結果に、団体の名前・連絡先・提供しているサービスを出すためのもの。
 * 大会の詳細ページ（SportsEvent）と役割が違うので、こちらは Organization と Service を並べる。
 * 名前や説明は表示中の言語で入れる。`@type` や `sameAs` などの構造は言語で変えない
 * @param baseUrl - サイトの URL（`https://imrg.work`）
 * @returns JSON-LD の中身
 */
export const buildTopJsonLd = (baseUrl: string): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsOrganization',
      '@id': `${baseUrl}/#organization`,
      name: m.top_introduction_title(),
      alternateName: "Men's Rhythmic Gymnastics Internationalization Project",
      url: `${baseUrl}/`,
      sport: "Men's Rhythmic Gymnastics",
      description: m.top_jsonld_organization_description(),
      foundingDate: '2022',
      sameAs: [LINKS.instagram, LINKS.youtube, LINKS.x, LINKS.tiktok],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: m.top_introduction_title(),
      inLanguage: ['ja', 'en', 'zh', 'ko', 'es', 'fr', 'ru', 'hi'],
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    // 頼めることを検索結果にも出す
    ...SERVICES.map((service) => ({
      '@type': 'Service',
      name: service.title(),
      // 画面ではまとまりごとに分けて出しているので、検索向けには文に戻す
      description: joinPhrases(service.body),
      url: `${baseUrl}${service.href}`,
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: 'JP',
      offers: {
        '@type': 'Offer',
        // いちばん安く頼める値段。曲編集は個人の1曲、指導はオンラインの添削から
        price: String(service.lowestPrice),
        priceCurrency: 'JPY',
        description: joinPrices(service.price),
      },
    })),
  ],
})
