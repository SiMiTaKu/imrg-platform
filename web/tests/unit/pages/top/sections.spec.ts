import { describe, expect, it } from 'vitest'
import { CHARACTERS, findCharacter } from '@entities/character'
import { FEATURES, HIGHLIGHTS, SERVICES } from '@pages/top/config/sections'
import { buildTopJsonLd } from '@pages/top/lib/structuredData'

describe('トップページの構成', () => {
  describe('正常系', () => {
    it('できることを並べた場合、サイトの主なページが揃うこと', () => {
      // #region Given
      const expected = ['/calendar/', '/rules/', '/judge/', '/oshimitsu/']
      // #endregion

      // #region When
      const result = FEATURES.map((feature) => feature.href)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
      // #endregion
    })

    it('頼めることを並べた場合、料金が必ず書かれていること', () => {
      // #region Given
      // 依頼の入口で金額が分かることが、このセクションの目的
      // #endregion

      // #region When
      const prices = SERVICES.map((service) => service.price)
      // #endregion

      // #region Then
      expect(prices.every((price) => price.includes('円'))).toBe(true)
      // #endregion
    })

    it('見どころと依頼の担当を引いた場合、5人の誰かに当たること', () => {
      // #region Given
      const ids = CHARACTERS.map((character) => character.id)
      // #endregion

      // #region When
      const used = [...HIGHLIGHTS, ...SERVICES].map((item) => findCharacter(item.character).id)
      // #endregion

      // #region Then
      expect(used.every((id) => ids.includes(id))).toBe(true)
      // #endregion
    })
  })
})

describe('buildTopJsonLd', () => {
  describe('正常系', () => {
    it('構造化データを組み立てた場合、団体・サイト・依頼の3種類が並ぶこと', () => {
      // #region Given
      const baseUrl = 'https://imrg.work'
      // #endregion

      // #region When
      const graph = buildTopJsonLd(baseUrl)['@graph'] as { '@type': string }[]
      // #endregion

      // #region Then
      expect(graph.map((node) => node['@type'])).toEqual([
        'SportsOrganization',
        'WebSite',
        'Service',
        'Service',
      ])
      // #endregion
    })

    it('団体の情報を見た場合、対応する言語が8つ載ること', () => {
      // #region Given
      const baseUrl = 'https://imrg.work'
      // #endregion

      // #region When
      const graph = buildTopJsonLd(baseUrl)['@graph'] as Record<string, unknown>[]
      const website = graph.find((node) => node['@type'] === 'WebSite')
      // #endregion

      // #region Then
      expect(website?.inLanguage).toHaveLength(8)
      // #endregion
    })
  })
})
