import { LINKS } from '@shared/config/links'
import { SERVICES } from '../config/sections'

/** 依頼ごとの、いちばん安く頼める値段（円） */
const LOWEST_PRICES: Record<string, string> = {
  曲編集: '5000',
  '指導・演技構成': '2000',
  手具装飾: '1500',
}

/**
 * トップページの構造化データ（schema.org）。
 *
 * @remarks
 * 検索結果に、団体の名前・連絡先・提供しているサービスを出すためのもの。
 * 大会の詳細ページ（SportsEvent）と役割が違うので、こちらは Organization と Service を並べる
 * @param baseUrl - サイトの URL（`https://imrg.work`）
 * @returns JSON-LD の中身
 */
export const buildTopJsonLd = (baseUrl: string): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsOrganization',
      '@id': `${baseUrl}/#organization`,
      name: '男子新体操国際化プロジェクト',
      alternateName: "Men's Rhythmic Gymnastics Internationalization Project",
      url: `${baseUrl}/`,
      sport: "Men's Rhythmic Gymnastics",
      description:
        '男子新体操の大会情報、規則集の解説、演技の動画、曲編集や手具装飾の依頼をまとめたサイト。日本で生まれたこの競技を世界へ広げる活動として運営している。',
      foundingDate: '2022',
      sameAs: [LINKS.instagram, LINKS.youtube, LINKS.x, LINKS.tiktok],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: '男子新体操国際化プロジェクト',
      inLanguage: ['ja', 'en', 'zh', 'ko', 'es', 'fr', 'ru', 'hi'],
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    // 頼めることを検索結果にも出す
    ...SERVICES.map((service) => ({
      '@type': 'Service',
      name: service.title,
      description: service.body,
      url: `${baseUrl}${service.href}`,
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: 'JP',
      offers: {
        '@type': 'Offer',
        // いちばん安く頼める値段。曲編集は個人の1曲、指導はオンラインの添削から
        price: LOWEST_PRICES[service.title] ?? '0',
        priceCurrency: 'JPY',
        description: service.price,
      },
    })),
  ],
})
